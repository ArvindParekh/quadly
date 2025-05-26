"use client";

import { Prisma } from "@/generated/prisma";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { sessionType } from "@/types/session";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getUser } from "@/lib/data/user";
import { useEffect, useState } from "react";
import { getWsClient } from "@/lib/wsClient";


export default function ConversationList({ chats, userId }: { chats: Prisma.ChatGetPayload<{
    include: {
        user1: true,
        user2: true,
        messages: true,
    }
}>[], userId: string }) {

    const [conversations, setConversations] = useState<{
        id: string;
        name: string;
        avatar: string | null;
        lastMessage: string;
        time: string;
        unread: boolean;
    }[]>(chats.map((chat) => ({
      id: chat.id,
      name: userId === chat.user1.id ? chat.user2.name : chat.user1.name,
      avatar: userId === chat.user1.id ? chat.user2.profilePicture : chat.user1.profilePicture,
      lastMessage: chat.messages[0]?.content,
      time: chat.messages[0]?.createdAt?.toLocaleString(),
      unread: chat.messages.length > 1,
  })));

  useEffect(()=> {
    const socket = getWsClient();
    socket.onopen = () => {
      console.log("Connected to server");
      // setSocket(socket);
      socket.send(JSON.stringify({
        type: "login",
        userId: userId,
      }))
    }

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data as string);

      if (data.type === "message") {
        const newMessage = data.payload;
        const conversation = conversations.find(conversation => conversation.id === newMessage.chatId);
        if (conversation) {
          setConversations(prev => prev.map(c => c.id === conversation.id ? {...c, unread: true} : c));
        }
      }
    }

    return () => {
      if (socket) {
        socket.close();
      }
    }
  }, [])


    // const conversations = chats.map((chat) => ({
    //     id: chat.id,
    //     name: userId === chat.user1.id ? chat.user2.name : chat.user1.name,
    //     avatar: userId === chat.user1.id ? chat.user2.profilePicture : chat.user1.profilePicture,
    //     lastMessage: chat.messages[0]?.content,
    //     time: chat.messages[0]?.createdAt?.toLocaleString(),
    //     unread: chat.messages.length > 1,
    // }));
    // const conversations = [
    //   {
    //      id: "1",
    //     name: "Taylor Kim",
    //     avatar: "/placeholder.svg?height=40&width=40&text=TK",
    //     lastMessage: "Coffee tomorrow at 3pm sounds great!",
    //     time: "2m ago",
    //     unread: true,
    //   },
    //   {
    //     id: "2",
    //     name: "Jordan Smith",
    //     avatar: "/placeholder.svg?height=40&width=40&text=JS",
    //     lastMessage: "I've been reading that book too! Let's discuss it sometime.",
    //     time: "1h ago",
    //     unread: false,
    //   },
    //   {
    //     id: "3",
    //     name: "Casey Wong",
    //     avatar: "/placeholder.svg?height=40&width=40&text=CW",
    //     lastMessage: "Thanks for the distributed systems notes!",
    //     time: "3h ago",
    //     unread: false,
    //   },
    //   {
    //     id: "4",
    //     name: "Alex Johnson",
    //     avatar: "/placeholder.svg?height=40&width=40&text=AJ",
    //     lastMessage: "Are you going to the CS meetup next week?",
    //     time: "Yesterday",
    //     unread: false,
    //   },
    //   {
    //     id: "5",
    //     name: "Morgan Lee",
    //     avatar: "/placeholder.svg?height=40&width=40&text=ML",
    //     lastMessage: "I found some interesting papers on cognitive biases.",
    //     time: "2d ago",
    //     unread: false,
    //   },
    // ]
  
    return (
      <div>
        {conversations.map((conversation, index) => (
          <Link href={`/messages/${conversation.id}`} key={conversation.id}>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-pink-500/5 cursor-pointer ${
                conversation.id === "1" ? "bg-pink-500/10" : ""
              }`}
            >
              <div className="relative">
                <Avatar className="h-10 w-10 border border-pink-500/20">
                  <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                  <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-400 text-black">
                    {conversation.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {conversation.unread && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-pink-500 border-2 border-background"></span>
                )}
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-center">
                  <p className={`font-medium truncate ${conversation.unread ? "text-foreground" : ""}`}>
                    {conversation.name}
                  </p>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{conversation.time}</span>
                </div>
                <p
                  className={`text-xs truncate ${
                    conversation.unread ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                >
                  {conversation.lastMessage}
                </p>
              </div>
            </div>
            {index < conversations.length - 1 && <Separator className="bg-pink-500/5" />}
          </Link>
        ))}
      </div>
    )
  }