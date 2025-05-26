"use client";
import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { getWsClient } from "@/lib/wsClient";

export default function NewMessage({
   userId,
   chatId,
   receiverId,
}: {
   userId: string;
   chatId: string;
   receiverId: string;
}) {
   const [message, setMessage] = useState("");
   const [socket, setSocket] = useState<WebSocket | null>(null);

   useEffect(() => {
      const socket = getWsClient();
      setSocket(socket);
   }, []);

   const handleSendMessage = (userId: string) => {
      if (!message.trim()) return;

      console.log("Sending message: ", {
         type: "message",
         content: message,
         senderId: userId,
         receiverId: receiverId,
         chatId: chatId,
      });

      try {
         socket?.send(
            JSON.stringify({
               type: "message",
               content: message,
               senderId: userId,
               receiverId: receiverId,
               chatId: chatId,
            })
         );
         setMessage("");
      } catch (error) {
         console.error("Error sending message: ", error);
      }
   };

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
         e.preventDefault(); 
         handleSendMessage(userId);
      }
   };

   return (
      <div className='flex-grow relative'>
         <Input
            placeholder='Type a message...'
            className='pr-10 border-pink-500/20 focus-visible:ring-pink-500'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
         />
         <Button
            size='icon'
            className='absolute right-1 top-1 h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90'
            onClick={() => handleSendMessage(userId as string)}
         >
            <Send className='h-3 w-3' />
            <span className='sr-only'>Send</span>
         </Button>
      </div>
   );
}
