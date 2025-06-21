import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar } from "@/components/ui/avatar"

export default function CoffeeChatsLoading() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-6 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-9 w-56" /> {/* Coffee Chats ☕ */}
          <div className="flex items-center gap-4">
            <Skeleton className="h-5 w-32" /> {/* stats summary */}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Pending Card */}
          <Card className="border-pink-500/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-yellow-400/10">
                  <Skeleton className="h-5 w-5 rounded-full bg-yellow-400/30" />
                </div>
                <div>
                  <Skeleton className="h-8 w-8 mb-1" /> {/* number */}
                  <Skeleton className="h-4 w-12" /> {/* label */}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Card */}
          <Card className="border-pink-500/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-green-500/10">
                  <Skeleton className="h-5 w-5 rounded-full bg-green-500/30" />
                </div>
                <div>
                  <Skeleton className="h-8 w-8 mb-1" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Completed Card */}
          <Card className="border-pink-500/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-blue-500/10">
                  <Skeleton className="h-5 w-5 rounded-full bg-blue-500/30" />
                </div>
                <div>
                  <Skeleton className="h-8 w-8 mb-1" />
                  <Skeleton className="h-4 w-18" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connections Card */}
          <Card className="border-pink-500/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-pink-500/10">
                  <Skeleton className="h-5 w-5 rounded-full bg-pink-500/30" />
                </div>
                <div>
                  <Skeleton className="h-8 w-8 mb-1" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="w-full">
          <div className="grid w-full grid-cols-4 rounded-xl p-1 bg-pink-500/10 mb-6 h-12">
            <Skeleton className="rounded-lg mx-1 bg-yellow-400" /> {/* Active: Pending */}
            <Skeleton className="rounded-lg mx-1 bg-pink-500/20" />
            <Skeleton className="rounded-lg mx-1 bg-pink-500/20" />
            <Skeleton className="rounded-lg mx-1 bg-pink-500/20" />
          </div>

          {/* Tab Content - Coffee Chat Cards */}
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="border-pink-500/20 overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" /> {/* Avatar */}
                      <div>
                        <Skeleton className="h-5 w-40 mb-1" /> {/* Title */}
                        <Skeleton className="h-4 w-32" /> {/* Department */}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-6 w-6" /> {/* Emoji */}
                      <Skeleton className="h-6 w-20 rounded-full" /> {/* Status badge */}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {/* Message */}
                  <div className="bg-muted/50 rounded-lg p-3">
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    {/* Date/Time */}
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    
                    {/* Duration */}
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                    
                    {/* Venue */}
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-28" />
                    </div>
                  </div>

                  {/* Venue Tags */}
                  <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-5 w-12 rounded-full" />
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <Skeleton className="h-5 w-14 rounded-full" />
                  </div>
                </CardContent>

                <CardFooter className="border-t border-pink-500/10 pt-4 flex justify-between">
                  <div className="flex gap-2">
                    <Skeleton className="h-9 w-20 rounded-lg" /> {/* Accept/Decline */}
                    <Skeleton className="h-9 w-20 rounded-lg" />
                  </div>
                  <Skeleton className="h-9 w-24 rounded-lg" /> {/* Message button */}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 