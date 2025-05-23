import { WebSocket, WebSocketServer } from "ws";
import express from "express";
//  store online users in memory
import { Redis } from "ioredis";

const app = express();
const server = app.listen(8000);

const wss = new WebSocketServer({ server });

// Create a Redis client connected to localhost:6380
const redisClient = new Redis({
   host: "localhost",
   port: 6380,
   // If you need authentication, add:
   // password: 'your-password',
});

// Handle Redis connection events
redisClient.on("connect", () => {
   console.log("Connected to Redis server at localhost:6380");
});

redisClient.on("error", (err) => {
   console.error("Redis connection error:", err);
});

// Store online users with their connection
const onlineUsers = new Map<string, WebSocket>();
// Track connections to users
const connectionToUser = new Map<WebSocket, string>();

wss.on("connection", async (ws: WebSocket, req: Request) => {
   console.log("Client connected");

   ws.on("message", (message: string) => {
      try {
         const data = JSON.parse(message.toString());
         console.log("Received message:", data.type);

         switch (data.type) {
            case "login":
               handleLogin(data.userId, ws);
               break;
            case "message":
               handleMessage(data);
               break;
         }
      } catch (error) {
         console.error("Error parsing message:", error);
      }
   });

   ws.on("close", async () => {
      // Clean up user connection
      const userId = connectionToUser.get(ws);
      if (userId) {
         onlineUsers.delete(userId);
         connectionToUser.delete(ws);

         try {
            // Set user offline in Redis
            await redisClient.del(`user:${userId}:online`);
            console.log(`User ${userId} logged out`);
         } catch (err) {
            console.error(`Error removing Redis key for user ${userId}:`, err);
         }
      }
   });

   ws.send("Welcome to the server");
});

const handleLogin = async (userId: string, ws: WebSocket) => {
   // Skip if userId is undefined or null
   if (!userId) {
      console.log("Login attempt with invalid user ID, ignoring");
      return;
   }

   console.log(`Processing login for user ${userId}`);

   // If this connection is already logged in as this user, skip
   if (connectionToUser.get(ws) === userId) {
      console.log(`User ${userId} already logged in on this connection`);
      return;
   }

   // If this connection was logged in as another user, clean up
   const oldUserId = connectionToUser.get(ws);
   if (oldUserId) {
      onlineUsers.delete(oldUserId);
      console.log(`User ${oldUserId} connection replaced by ${userId}`);
   }

   // Set the new connection
   onlineUsers.set(userId, ws);
   connectionToUser.set(ws, userId);

   // Update Redis (don't disconnect on error)
   redisClient
      .set(`user:${userId}:online`, "1", "EX", 60 * 60 * 24)
      .catch((err) => {
         console.error(`Redis error for user ${userId}:`, err);
      });

   console.log(`User ${userId} logged in`);
};

const handleMessage = async (data: any) => {
   console.log(`User ${data.sender} sent message: ${data.message} to ${data.receiver}`);
   const isOnline = await redisClient.get(`user:${data.receiver}:online`);
   if (isOnline) {
      console.log("User is online");
      const receiver = onlineUsers.get(data.receiver);
      if (receiver) {
         receiver.send(JSON.stringify(data));
      }
   }
   else {
    //TODO: store in db and send to user when they are online
   }
};

// Handle application shutdown
process.on("SIGINT", () => {
   console.log("Shutting down server...");
   redisClient.quit().then(() => {
      console.log("Redis connection closed");
      process.exit(0);
   });
});

console.log("WebSocket server is running on port 8000");
