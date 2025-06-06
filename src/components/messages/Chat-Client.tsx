"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EmojiPicker } from "@/components/emoji-picker"
import { ImagePlus, Paperclip, Send, Sparkles } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { Chat, Prisma } from "@/generated/prisma";
import ChatArea from "./chat-area";
import ConversationList from "./conversation-list";



export default function ChatClient({userId} : {userId: string}) {
  // const [socket, setSocket] = useState<WebSocket | null>(null);
  // const { data: session } = useSession();
  

  // useEffect(() => {
  //   const socket = new WebSocket(`${process.env.NEXT_PUBLIC_WS_URL}`);

  //   socket.onopen = () => {
  //     console.log("Connected to server");
  //     setSocket(socket);
  //     socket.send(JSON.stringify({
  //       type: "login",
  //       userId: userId,
  //     }))
  //   }

  //   return () => {
  //     if (socket) {
  //       socket.close();
  //     }
  //   }
    
  // }, []);

  return (
    // <div className="min-h-screen bg-background">

    //   <main className="container py-6 mx-auto">
    //     <div className="flex items-center justify-between mb-6">
    //       <h1 className="text-3xl font-bold tracking-tight">Messages 💬</h1>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 h-[calc(100vh-12rem)]">
    //       {/* Conversations List */}
    //       {/* <Card className="border-pink-500/20 overflow-hidden h-full">
    //         <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10 p-4">
    //           <div className="flex items-center justify-between">
    //             <CardTitle className="text-lg">Conversations</CardTitle>
    //             <Button
    //               size="sm"
    //               variant="ghost"
    //               className="h-8 w-8 p-0 rounded-full hover:bg-pink-500/10 hover:text-pink-500"
    //             >
    //               <Sparkles className="h-4 w-4" />
    //               <span className="sr-only">New Message</span>
    //             </Button>
    //           </div>
    //         </CardHeader>
    //         <CardContent className="p-0">
    //           <Tabs defaultValue="all" className="w-full">
    //             <TabsList className="grid w-full grid-cols-3 rounded-none bg-transparent border-b border-pink-500/10">
    //               <TabsTrigger
    //                 value="all"
    //                 className="rounded-none data-[state=active]:bg-transparent data-[state=active]:text-pink-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-pink-500"
    //               >
    //                 All
    //               </TabsTrigger>
    //               <TabsTrigger
    //                 value="unread"
    //                 className="rounded-none data-[state=active]:bg-transparent data-[state=active]:text-pink-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-pink-500"
    //               >
    //                 Unread
    //               </TabsTrigger>
    //               <TabsTrigger
    //                 value="archived"
    //                 className="rounded-none data-[state=active]:bg-transparent data-[state=active]:text-pink-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-pink-500"
    //               >
    //                 Archived
    //               </TabsTrigger>
    //             </TabsList>
    //             <TabsContent value="all" className="m-0">
    //               <ScrollArea className="h-[calc(100vh-16rem)]">
    //                 <ConversationList chats={chats} />
    //               </ScrollArea>
    //             </TabsContent>
    //             <TabsContent value="unread" className="m-0">
    //               <ScrollArea className="h-[calc(100vh-16rem)]">
    //                 <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
    //                   <p>No unread messages</p>
    //                 </div>
    //               </ScrollArea>
    //             </TabsContent>
    //             <TabsContent value="archived" className="m-0">
    //               <ScrollArea className="h-[calc(100vh-16rem)]">
    //                 <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
    //                   <p>No archived messages</p>
    //                 </div>
    //               </ScrollArea>
    //             </TabsContent>
    //           </Tabs>
    //         </CardContent>
    //       </Card> */}
    //       <ConversationList chats={chats} />

    //       {/* Chat Area - empty state */}
    //       <ChatArea messages={[]} />
    //     </div>
    //   </main>
    // </div>
    <ChatArea messages={[]} />
  )
}



