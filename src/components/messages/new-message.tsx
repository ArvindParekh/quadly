"use client";
import { ImagePlus, Paperclip, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { getWsClient } from "@/lib/wsClient";
import { EmojiPicker } from "../emoji-picker";

export default function NewMessage({
   userId,
   chatId,
   receiverId,
   onSendMessage,
}: {
   userId: string;
   chatId: string;
   receiverId: string;
   onSendMessage: (content: string) => void; // Simplified callback
}) {
   const [message, setMessage] = useState("");
   const [socket, setSocket] = useState<WebSocket | null>(null);

   useEffect(() => {
      const socket = getWsClient();
      setSocket(socket);
   }, []);

   const handleSendMessage = (userId: string) => {
      if (!message.trim()) return;

      const messageContent = message;

      console.log("Sending message: ", {
         type: "message",
         content: messageContent,
         senderId: userId,
         receiverId: receiverId,
         chatId: chatId,
      });

      try {
         socket?.send(
            JSON.stringify({
               type: "message",
               content: messageContent,
               senderId: userId,
               receiverId: receiverId,
               chatId: chatId,
            })
         );

         // Immediately show the message optimistically
         onSendMessage(messageContent);
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

   const onEmojiSelect = (emoji: string) => {
      setMessage(message + emoji);
   };

   return (
      <div className='p-4 flex gap-2 items-end flex-shrink-0'>
         <Button
            variant='ghost'
            size='icon'
            className='h-8 w-8 rounded-full flex-shrink-0 hover:bg-pink-500/10 hover:text-pink-500'
         >
            <Paperclip className='h-4 w-4' />
            <span className='sr-only'>Attach file</span>
         </Button>
         <Button
            variant='ghost'
            size='icon'
            className='h-8 w-8 rounded-full flex-shrink-0 hover:bg-pink-500/10 hover:text-pink-500'
         >
            <ImagePlus className='h-4 w-4' />
            <span className='sr-only'>Add image</span>
         </Button>
         <EmojiPicker onEmojiSelect={onEmojiSelect} />
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
      </div>
   );
}
