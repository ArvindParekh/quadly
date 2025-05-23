import { WebSocket, WebSocketServer } from "ws";
import express from "express";
import jwt from "jsonwebtoken";
//  store online users in memory
import { Redis } from "ioredis";

const app = express();
const server = app.listen(8000);

const wss = new WebSocketServer({ server });

const redisClient = new Redis(process.env.REDIS_URL!);

const onlineUsers = new Map<string, WebSocket>();

wss.on("connection", async (ws: WebSocket, req: Request) => {
   const url = new URL(req.url);
   const token = url.searchParams.get("token");

   if (!token) {
      ws.close();
      return;
   } else {
      let payload;
      try {
         payload = jwt.verify(token, process.env.JWT_SECRET!);
      } catch (error) {
         ws.close();
         return;
      }
      const userId = payload.userId;
      if (!userId) {
         ws.close();
         return;
      }
      redisClient.set(userId, ws.readyState);
      onlineUsers.set(userId, ws);
      console.log("User logged in:", userId);
   }

   console.log("Client connected");
   await redisClient.connect();

   ws.on("message", (message: string) => {
      const data = JSON.parse(message);
      console.log("Received message:", data);

      if (data.type === "login") {
         ws.userId = data.userId;
         redisClient.set(data.userId, ws.readyState);
         onlineUsers.set(data.userId, ws);
         console.log("User logged in:", userId);
      }
   });

   ws.on("close", async () => {
      const userId = ws.userId;
      await redisClient.del(data.userId);
      onlineUsers.delete(data.userId);
      console.log("User logged out:", data.userId);
      await redisClient.disconnect();
   });

   ws.send("Welcome to the server");
});

console.log("Server is running on port 8000");
