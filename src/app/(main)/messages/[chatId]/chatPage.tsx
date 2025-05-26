"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ChatArea from "@/components/messages/chat-area";
import { Prisma } from "@/generated/prisma";
import { getWsClient } from "@/lib/wsClient";

export default function ChatPageClient({ 
  messages, 
  userId, 
  receiverId, 
  chatId,
  currentUser // Add current user data
}: {
  messages: Prisma.MessageGetPayload<{
    include: {
      sender: true,
    }
  }>[], 
  userId: string, 
  receiverId: string, 
  chatId: string,
  currentUser?: { id: string, name: string, email: string } // Add user data
}) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const { data: session, status } = useSession();
  const [chatMessages, setChatMessages] = useState<Prisma.MessageGetPayload<{}>[]>(messages);
  const router = useRouter();

  if (status === "unauthenticated"){
    router.push("/");
  }

  useEffect(() => {
    const socket = getWsClient();

    socket.onopen = () => {
      console.log("Connected to server");
      setSocket(socket);

      socket.send(JSON.stringify({
        type: "login",
        userId: userId,
      }));
    }

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "message" && data.payload.chatId === chatId){
        // Update the optimistic message with real data from server
        setChatMessages((prev) => {
          // Check if this message already exists (optimistic update)
          const existingIndex = prev.findIndex(msg => 
            msg.content === data.payload.content && 
            msg.senderId === data.payload.senderId &&
            msg.id.startsWith('temp-')
          );
          
          if (existingIndex !== -1) {
            // Replace optimistic message with real one
            const updatedMessages = [...prev];
            updatedMessages[existingIndex] = data.payload;
            return updatedMessages;
          } else {
            // New message from other user
            return [...prev, data.payload];
          }
        });
      }
    }

    return () => {
      if (socket) {
        socket.close();
      }
    }
  }, [chatId, userId]);

  // Optimistic message handler
  const handleOptimisticMessage = (content: string) => {
    const optimisticMessage: Prisma.MessageGetPayload<{
    }> = {
      id: `temp-${Date.now()}`,
      content: content,
      senderId: userId,
      chatId: chatId,
      createdAt: new Date(),
    };

    setChatMessages(prev => [...prev, optimisticMessage]);
  };

  if (status === "loading"){
    return <div>Loading...</div>;
  }

  return (
    <ChatArea 
      messages={chatMessages} 
      userId={userId} 
      receiverId={receiverId} 
      chatId={chatId}
      onSendMessage={handleOptimisticMessage}
    />
  );
}