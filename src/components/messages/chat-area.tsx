"use client";
import { Message, Prisma } from "@/generated/prisma";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { ImagePlus, Paperclip, Send } from "lucide-react";
import { Input } from "../ui/input";
import { EmojiPicker } from "../emoji-picker";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "../ui/avatar";
import { CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import ChatMessages from "./chat-message";
import NewMessage from "./new-message";
import { useEffect, useState } from "react";
import { getWsClient } from "@/lib/wsClient";
import { useParams, usePathname } from "next/navigation";

export default function ChatArea({
   messages,
   userId,
   receiverId,
   onSendMessage,
   chatId,
}: {
   messages: Prisma.MessageGetPayload<{}>[];
   userId: string;
   receiverId: string;
   onSendMessage: (content: string) => void; // Changed to just pass content
   chatId: string;
}) {
   const [socket, setSocket] = useState<WebSocket | null>(null);
   const url = usePathname();
   console.log(url);

   if (url === "/messages") {
      return (
         <Card className='border-pink-500/20 overflow-hidden h-full flex flex-col'>
            <CardContent className='flex items-center justify-center h-full'>
               <div className='text-center'>
                  <h3 className='text-xl font-medium mb-2'>
                     Select a Conversation
                  </h3>
                  <p className='text-muted-foreground mb-4'>
                     Choose a conversation from the list to start chatting
                  </p>
               </div>
            </CardContent>
         </Card>
      );
   }

   return (
      <Card className='border-pink-500/20 overflow-hidden h-full flex flex-col'>
         <CardHeader className='bg-gradient-to-r from-blue-500/10 to-pink-500/10 p-4 flex-shrink-0'>
            <div className='flex items-center gap-3'>
               <Avatar className='h-10 w-10 border border-pink-500/20'>
                  <AvatarImage
                     src='/placeholder.svg?height=40&width=40&text=TK'
                     alt='Taylor Kim'
                  />
                  <AvatarFallback className='bg-gradient-to-br from-pink-500 to-yellow-400 text-black'>
                     TK
                  </AvatarFallback>
               </Avatar>
               <div>
                  <CardTitle className='text-lg'>Taylor Kim</CardTitle>
                  <p className='text-xs text-muted-foreground'>
                     Computer Science • Online
                  </p>
               </div>
            </div>
         </CardHeader>

         <CardContent className='p-0 flex flex-col flex-1 min-h-0'>
            <ScrollArea className='flex-1 p-4'>
               {messages.length > 0 ? (
                  <ChatMessages messages={messages} sender={userId} />
               ) : (
                  <div className='flex items-center justify-center h-full'>
                     <p className='text-muted-foreground'>No messages yet</p>
                  </div>
               )}
            </ScrollArea>

            <Separator className='bg-pink-500/10' />

            {/* <div className='p-4 flex gap-2 items-end flex-shrink-0'>
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
               <EmojiPicker />
               <NewMessage
                  chatId={messages[0].chatId}
                  userId={userId}
                  receiverId={receiverId}
                  onSendMessage={onSendMessage}
               />
            </div> */}
            <NewMessage
               chatId={chatId}
               userId={userId}
               receiverId={receiverId}
               onSendMessage={onSendMessage}
            />
         </CardContent>
      </Card>
   );
}
