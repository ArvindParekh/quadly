"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImagePlus, Paperclip, Send, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { EmojiPicker } from "@/components/emoji-picker";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function MessagePage() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string>("");
  const { data: session, status } = useSession();
  const { userId } = useParams();
  const router = useRouter();

  if (status === "unauthenticated"){
    router.push("/");
  }

  useEffect(() => {
    const socket = new WebSocket(`${process.env.NEXT_PUBLIC_WS_URL}`);
    socket.onopen = () => {
      console.log("Connected to server");
      setSocket(socket);
    }

    return () => {
      if (socket) {
        socket.close();
      }
    }
  }, []);

  const handleSendMessage = (userId: string) => {
    if (socket) {
      socket.send(JSON.stringify({
        type: "message",
        message: message,
        // @ts-ignore
        sender: session?.user?.id,
        receiver: userId,
        timestamp: Date.now(),
      }));
      setMessage("");
      console.log("Sent message:", message);
    }
  }

    if (status === "loading"){
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">

    <main className="container py-6 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Messages 💬</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 h-[calc(100vh-12rem)]">
        {/* Conversations List */}
        <Card className="border-pink-500/20 overflow-hidden h-full">
          <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10 p-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Conversations</CardTitle>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 rounded-full hover:bg-pink-500/10 hover:text-pink-500"
              >
                <Sparkles className="h-4 w-4" />
                <span className="sr-only">New Message</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-none bg-transparent border-b border-pink-500/10">
                <TabsTrigger
                  value="all"
                  className="rounded-none data-[state=active]:bg-transparent data-[state=active]:text-pink-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-pink-500"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="unread"
                  className="rounded-none data-[state=active]:bg-transparent data-[state=active]:text-pink-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-pink-500"
                >
                  Unread
                </TabsTrigger>
                <TabsTrigger
                  value="archived"
                  className="rounded-none data-[state=active]:bg-transparent data-[state=active]:text-pink-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-pink-500"
                >
                  Archived
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="m-0">
                <ScrollArea className="h-[calc(100vh-16rem)]">
                  <ConversationList />
                </ScrollArea>
              </TabsContent>
              <TabsContent value="unread" className="m-0">
                <ScrollArea className="h-[calc(100vh-16rem)]">
                  <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
                    <p>No unread messages</p>
                  </div>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="archived" className="m-0">
                <ScrollArea className="h-[calc(100vh-16rem)]">
                  <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
                    <p>No archived messages</p>
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="border-pink-500/20 overflow-hidden h-full flex flex-col">
          <CardHeader className="bg-gradient-to-r from-blue-500/10 to-pink-500/10 p-4 flex-shrink-0">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border border-pink-500/20">
                <AvatarImage src="/placeholder.svg?height=40&width=40&text=TK" alt="Taylor Kim" />
                <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-400 text-black">
                  TK
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">Taylor Kim</CardTitle>
                <p className="text-xs text-muted-foreground">Computer Science • Online</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex-grow flex flex-col">
            <ScrollArea className="flex-grow p-4">
              <ChatMessages />
            </ScrollArea>
            <Separator className="bg-pink-500/10" />
            <div className="p-4 flex gap-2 items-end">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full flex-shrink-0 hover:bg-pink-500/10 hover:text-pink-500"
              >
                <Paperclip className="h-4 w-4" />
                <span className="sr-only">Attach file</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full flex-shrink-0 hover:bg-pink-500/10 hover:text-pink-500"
              >
                <ImagePlus className="h-4 w-4" />
                <span className="sr-only">Add image</span>
              </Button>
              <EmojiPicker />
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
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  </div>
  );
}

function ChatMessages() {
    const messages = [
      {
        id: "1",
        sender: "Taylor Kim",
        content: "Hey! I saw we matched on Quadly. I'm also interested in distributed systems!",
        time: "10:30 AM",
        isMine: false,
      },
      {
        id: "2",
        sender: "You",
        content: "Hi Taylor! Yeah, I'm working on a project related to distributed databases right now. What about you?",
        time: "10:32 AM",
        isMine: true,
      },
      {
        id: "3",
        sender: "Taylor Kim",
        content:
          "I'm actually studying consensus algorithms for my research project. Have you read 'Designing Data-Intensive Applications'?",
        time: "10:35 AM",
        isMine: false,
      },
      {
        id: "4",
        sender: "You",
        content:
          "Yes! That's one of my favorite books. Martin Kleppmann explains complex concepts so clearly. I'm on the chapter about distributed transactions right now.",
        time: "10:38 AM",
        isMine: true,
      },
      {
        id: "5",
        sender: "Taylor Kim",
        content:
          "That's a great chapter! Would you be interested in grabbing coffee sometime to discuss? I'm usually free in the afternoons.",
        time: "10:40 AM",
        isMine: false,
      },
      {
        id: "6",
        sender: "You",
        content: "That sounds great! How about tomorrow at 3pm at the campus café?",
        time: "10:45 AM",
        isMine: true,
      },
      {
        id: "7",
        sender: "Taylor Kim",
        content: "Coffee tomorrow at 3pm sounds great! Looking forward to it! 😊",
        time: "10:47 AM",
        isMine: false,
      },
    ]
  
    return (
      <div className="space-y-4">
        <div className="flex justify-center">
          <span className="text-xs bg-pink-500/10 text-pink-500 rounded-full px-2 py-1">Today</span>
        </div>
  
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isMine ? "justify-end" : "justify-start"} gap-2 max-w-[80%] ${
              message.isMine ? "ml-auto" : "mr-auto"
            }`}
          >
            {!message.isMine && (
              <Avatar className="h-8 w-8 mt-1 border border-pink-500/20">
                <AvatarImage src="/placeholder.svg?height=32&width=32&text=TK" alt="Taylor Kim" />
                <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-400 text-black">TK</AvatarFallback>
              </Avatar>
            )}
            <div>
              <div
                className={`rounded-2xl px-4 py-2 ${
                  message.isMine
                    ? "bg-gradient-to-r from-pink-500 to-yellow-400 text-black"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

function ConversationList() {
    const conversations = [
      {
        id: "1",
        name: "Taylor Kim",
        avatar: "/placeholder.svg?height=40&width=40&text=TK",
        lastMessage: "Coffee tomorrow at 3pm sounds great!",
        time: "2m ago",
        unread: true,
      },
      {
        id: "2",
        name: "Jordan Smith",
        avatar: "/placeholder.svg?height=40&width=40&text=JS",
        lastMessage: "I've been reading that book too! Let's discuss it sometime.",
        time: "1h ago",
        unread: false,
      },
      {
        id: "3",
        name: "Casey Wong",
        avatar: "/placeholder.svg?height=40&width=40&text=CW",
        lastMessage: "Thanks for the distributed systems notes!",
        time: "3h ago",
        unread: false,
      },
      {
        id: "4",
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40&text=AJ",
        lastMessage: "Are you going to the CS meetup next week?",
        time: "Yesterday",
        unread: false,
      },
      {
        id: "5",
        name: "Morgan Lee",
        avatar: "/placeholder.svg?height=40&width=40&text=ML",
        lastMessage: "I found some interesting papers on cognitive biases.",
        time: "2d ago",
        unread: false,
      },
    ]
  
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