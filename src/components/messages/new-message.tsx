"use client";

import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

export default function NewMessage({userId}: {userId: string}) {
    const [message, setMessage] = useState("");

    const handleSendMessage = (userId: string) => {
        console.log(message);
    }
    

    return (
        <div className="flex-grow relative">
          <Input
            placeholder="Type a message..."
            className="pr-10 border-pink-500/20 focus-visible:ring-pink-500"
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
          />
          <Button
            size="icon"
            className="absolute right-1 top-1 h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90"
            onClick={()=> handleSendMessage(userId as string)}
          >
            <Send className="h-3 w-3" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
    )
}