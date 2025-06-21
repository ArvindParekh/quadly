import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"

export default function DiscoverLoading() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-6 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-9 w-44" /> {/* Discover 🔍 */}
          <div className="relative w-full max-w-sm">
            <Skeleton className="h-10 w-full rounded-full" /> {/* Search input */}
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full">
          <div className="grid w-full grid-cols-4 rounded-xl p-1 bg-pink-500/10 mb-6 h-12">
            <Skeleton className="rounded-lg mx-1 bg-pink-500" /> {/* Active: Trending */}
            <Skeleton className="rounded-lg mx-1 bg-pink-500/20" />
            <Skeleton className="rounded-lg mx-1 bg-pink-500/20" />
            <Skeleton className="rounded-lg mx-1 bg-pink-500/20" />
          </div>

          {/* Tab Content - Trending (Default) */}
          <div className="space-y-6">
            {/* Trending Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="border-pink-500/20 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10 pb-2">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-5 w-5 rounded-full" /> {/* Icon */}
                      <Skeleton className="h-6 w-24" /> {/* Title */}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <div className="flex items-center justify-between pt-2">
                      <Skeleton className="h-4 w-20" /> {/* participants */}
                      <Skeleton className="h-8 w-16 rounded-full" /> {/* Join button */}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trending Books Section */}
            <Card className="border-pink-500/20 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                <CardTitle>
                  <Skeleton className="h-6 w-32" /> {/* Trending Books */}
                </CardTitle>
                <CardDescription>
                  <Skeleton className="h-4 w-48" /> {/* Description */}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i} className="border-pink-500/10">
                      <CardContent className="p-4 space-y-3">
                        <Skeleton className="h-5 w-full" /> {/* Book title */}
                        <Skeleton className="h-4 w-2/3" /> {/* Author */}
                        <div className="flex items-center justify-between">
                          <Skeleton className="h-4 w-16" /> {/* readers */}
                          <Skeleton className="h-5 w-20 rounded-full" /> {/* category badge */}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
} 