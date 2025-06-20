import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ChatLoading() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-6 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-9 w-40" /> {/* Messages 💬 */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 h-[calc(100vh-12rem)]">
          {/* Conversations List Skeleton */}
          <div className="border-pink-500/20 border rounded-lg overflow-hidden h-full">
            {/* Conversation Items */}
            <div className="p-0">
              {/* Active Conversation Skeleton */}
              <div className="flex items-center gap-3 p-3 bg-pink-500/10">
                <div className="relative">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <Skeleton className="absolute bottom-0 right-0 h-3 w-3 rounded-full" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-12" />
                  </div>
                  <Skeleton className="h-3 w-40 mt-1" />
                </div>
              </div>
              <Separator className="bg-pink-500/5" />

              {/* Other Conversation Skeletons */}
              <div className="flex items-center gap-3 p-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-3 w-8" />
                  </div>
                  <Skeleton className="h-3 w-48 mt-1" />
                </div>
              </div>
              <Separator className="bg-pink-500/5" />

              <div className="flex items-center gap-3 p-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-10" />
                  </div>
                  <Skeleton className="h-3 w-36 mt-1" />
                </div>
              </div>
              <Separator className="bg-pink-500/5" />

              <div className="flex items-center gap-3 p-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                  <Skeleton className="h-3 w-44 mt-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Chat Area - Active Chat Skeleton */}
          <Card className="border-pink-500/20 overflow-hidden h-full flex flex-col">
            {/* Chat Header */}
            <CardHeader className="bg-gradient-to-r from-blue-500/10 to-pink-500/10 p-4 flex-shrink-0">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div>
                  <Skeleton className="h-5 w-24 mb-1" />
                  <Skeleton className="h-3 w-32" />
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0 flex flex-col flex-1 min-h-0">
              {/* Messages Area */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {/* Date Separator */}
                  <div className="flex justify-center">
                    <Skeleton className="h-4 w-12 rounded-full" />
                  </div>

                  {/* Message Skeleton 1 - Other User */}
                  <div className="flex justify-start gap-2 max-w-[80%]">
                    <Skeleton className="h-8 w-8 rounded-full mt-1" />
                    <div>
                      <div className="rounded-2xl px-4 py-2 bg-secondary">
                        <Skeleton className="h-4 w-48" />
                      </div>
                      <Skeleton className="h-3 w-16 mt-1" />
                    </div>
                  </div>

                  {/* Message Skeleton 2 - Current User */}
                  <div className="flex justify-end gap-2 max-w-[80%] ml-auto">
                    <div>
                      <div className="rounded-2xl px-4 py-2 bg-gradient-to-r from-pink-500/20 to-yellow-400/20">
                        <Skeleton className="h-4 w-40" />
                      </div>
                      <Skeleton className="h-3 w-16 mt-1 ml-auto" />
                    </div>
                  </div>

                  {/* Message Skeleton 3 - Other User */}
                  <div className="flex justify-start gap-2 max-w-[80%]">
                    <Skeleton className="h-8 w-8 rounded-full mt-1" />
                    <div>
                      <div className="rounded-2xl px-4 py-2 bg-secondary">
                        <Skeleton className="h-4 w-56" />
                      </div>
                      <Skeleton className="h-3 w-16 mt-1" />
                    </div>
                  </div>

                  {/* Message Skeleton 4 - Current User */}
                  <div className="flex justify-end gap-2 max-w-[80%] ml-auto">
                    <div>
                      <div className="rounded-2xl px-4 py-2 bg-gradient-to-r from-pink-500/20 to-yellow-400/20">
                        <Skeleton className="h-4 w-64" />
                      </div>
                      <Skeleton className="h-3 w-16 mt-1 ml-auto" />
                    </div>
                  </div>

                  {/* Message Skeleton 5 - Other User */}
                  <div className="flex justify-start gap-2 max-w-[80%]">
                    <Skeleton className="h-8 w-8 rounded-full mt-1" />
                    <div>
                      <div className="rounded-2xl px-4 py-2 bg-secondary">
                        <Skeleton className="h-4 w-32" />
                      </div>
                      <Skeleton className="h-3 w-16 mt-1" />
                    </div>
                  </div>
                </div>
              </ScrollArea>

              <Separator className="bg-pink-500/10" />

              {/* Message Input Area */}
              <div className="p-4 flex gap-2 items-end flex-shrink-0">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="flex-1 h-10 rounded-lg" />
                <Skeleton className="h-10 w-10 rounded-lg" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 