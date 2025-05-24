"use client";

import ChatPageClient from "./chatPage";
import { useParams } from "next/navigation";
import { getMessages } from "@/actions/messages";
import { useEffect } from "react";
import { useState } from "react";
import { Message, Prisma } from "@/generated/prisma";

export default function ChatPage() {
  const params = useParams();
  const chatId = params.chatId as string;
  const [messages, setMessages] = useState<Prisma.MessageGetPayload<{
    include: {
      sender: true,
    }
  }>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = await getMessages(chatId);
      setMessages(messages);
      setLoading(false);
    }

    fetchMessages();
  }, [chatId]);

  return <ChatPageClient messages={messages} loading={loading} />
}