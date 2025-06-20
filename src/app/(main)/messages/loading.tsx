import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

export default function MessagesLoading() {
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
              {/* Conversation Skeleton 1 */}
              <div className="flex items-center gap-3 p-3">
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

              {/* Conversation Skeleton 2 */}
              <div className="flex items-center gap-3 p-3">
                <div className="relative">
                  <Skeleton className="h-10 w-10 rounded-full" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-3 w-8" />
                  </div>
                  <Skeleton className="h-3 w-48 mt-1" />
                </div>
              </div>
              <Separator className="bg-pink-500/5" />

              {/* Conversation Skeleton 3 */}
              <div className="flex items-center gap-3 p-3">
                <div className="relative">
                  <Skeleton className="h-10 w-10 rounded-full" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-10" />
                  </div>
                  <Skeleton className="h-3 w-36 mt-1" />
                </div>
              </div>
              <Separator className="bg-pink-500/5" />

              {/* Conversation Skeleton 4 */}
              <div className="flex items-center gap-3 p-3">
                <div className="relative">
                  <Skeleton className="h-10 w-10 rounded-full" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                  <Skeleton className="h-3 w-44 mt-1" />
                </div>
              </div>
              <Separator className="bg-pink-500/5" />

              {/* Conversation Skeleton 5 */}
              <div className="flex items-center gap-3 p-3">
                <div className="relative">
                  <Skeleton className="h-10 w-10 rounded-full" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-26" />
                    <Skeleton className="h-3 w-14" />
                  </div>
                  <Skeleton className="h-3 w-52 mt-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Chat Area - Empty State Skeleton */}
          <Card className="border-pink-500/20 overflow-hidden h-full flex flex-col">
            <CardContent className="flex items-center justify-center h-full">
              <div className="text-center space-y-4">
                <Skeleton className="h-6 w-48 mx-auto" />
                <Skeleton className="h-4 w-64 mx-auto" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 