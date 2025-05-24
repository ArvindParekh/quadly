import { getChats } from "@/actions/chat";
import ConversationList from "@/components/messages/conversation-list";
import { authOptions } from "@/lib/auth";
import { getUser } from "@/lib/data/user";
import { sessionType } from "@/types/session";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function MessagesLayout({ children }: { children: React.ReactNode }) {
    const session: sessionType | null = await getServerSession(authOptions);
    const user = await getUser(session?.user?.id as string);
  
    if(!session){
      redirect("/");
    }
  
    const chats = await getChats(user.userDetails?.id as string);
  
    console.log(chats);
    
    return (
        <div className="min-h-screen bg-background">

        <main className="container py-6 mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Messages 💬</h1>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 h-[calc(100vh-12rem)]">
            {/* Conversations List */}
            {/* <Card className="border-pink-500/20 overflow-hidden h-full">
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
                      <ConversationList chats={chats} />
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
            </Card> */}
            <ConversationList chats={chats} />
  
            {/* Chat Area - empty state */}
            {/* <ChatArea messages={[]} /> */}
            {children}
            </div>
          </main>
        </div>
    )

}