import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function NotificationsLoading() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-6 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-9 w-56" /> {/* Notifications 🔔 */}
          <Skeleton className="h-10 w-32 rounded-lg" /> {/* Mark All as Read */}
        </div>

        {/* Tabs */}
        <div className="w-full">
          <div className="grid w-full grid-cols-5 rounded-xl p-1 bg-pink-500/10 mb-6 h-12">
            <Skeleton className="rounded-lg mx-1 bg-pink-500" /> {/* Active: All */}
            <Skeleton className="rounded-lg mx-1 bg-pink-500/20" />
            <Skeleton className="rounded-lg mx-1 bg-pink-500/20" />
            <Skeleton className="rounded-lg mx-1 bg-pink-500/20" />
            <Skeleton className="rounded-lg mx-1 bg-pink-500/20" />
          </div>

          {/* Notifications Card */}
          <Card className="border-pink-500/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10 p-4">
              <CardTitle className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full" /> {/* Bell icon */}
                <Skeleton className="h-6 w-40" /> {/* Recent Notifications */}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[calc(100vh-20rem)]">
                <div>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-4 p-4 hover:bg-pink-500/10 transition-colors">
                        {/* Avatar */}
                        <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />

                        {/* Content */}
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <Skeleton className="h-5 w-32" /> {/* Title */}
                            <div className="flex items-center gap-2">
                              {/* Conditionally show "New" badge for some items */}
                              {index < 2 && (
                                <Skeleton className="h-5 w-8 rounded-full bg-pink-500/30" />
                              )}
                              <Skeleton className="h-4 w-20" /> {/* Timestamp */}
                            </div>
                          </div>
                          
                          {/* Description */}
                          <div className="space-y-1">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                          </div>

                          {/* Action Button (show for some items) */}
                          {index % 3 === 0 && (
                            <Skeleton className="h-7 w-20 rounded-lg mt-2" />
                          )}
                        </div>
                      </div>
                      
                      {/* Separator (not for last item) */}
                      {index < 7 && <Separator className="bg-pink-500/5" />}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 