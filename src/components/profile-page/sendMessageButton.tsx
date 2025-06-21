"use client"

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { getOrCreateChat } from "@/actions/chat";

export default function SendMessageButton({ thisUserId, userId }: { thisUserId: string, userId: string }) {

    const router = useRouter();

    const handleSendMessage = async () => {
        const chat = await getOrCreateChat(thisUserId, userId);
        router.push(`/messages/${chat.id}`);
      }

    return (
        <Button variant="outline" onClick={handleSendMessage} className="border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message
                </Button>
    )
}