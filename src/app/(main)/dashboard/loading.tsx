import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-6 mx-auto">
        <div className="grid gap-6 md:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <Skeleton className="h-9 w-48" /> {/* Your Garden 🌱 */}
              <Skeleton className="h-10 w-32 rounded-lg" /> {/* Create Post Button */}
            </div>

            {/* Tabs */}
            <div className="w-full">
              <Skeleton className="h-10 w-full rounded-xl bg-pink-500/10 mb-6" />
              
              {/* Feed Content - Multiple Post Skeletons */}
              <div className="space-y-4">
                {/* Post Skeleton 1 */}
                <Card className="border-pink-500/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-3 w-20" />
                        </div>
                        <Skeleton className="h-3 w-32" />
                      </div>
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-4/5" />
                      <Skeleton className="h-4 w-3/5" />
                      
                      {/* Interest Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Skeleton className="h-6 w-20 rounded-full" />
                        <Skeleton className="h-6 w-24 rounded-full" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-pink-500/10 pt-3">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <Skeleton className="h-8 w-16" />
                        <Skeleton className="h-8 w-20" />
                      </div>
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                  </CardFooter>
                </Card>

                {/* Post Skeleton 2 */}
                <Card className="border-pink-500/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Skeleton className="h-4 w-28" />
                          <Skeleton className="h-3 w-16" />
                        </div>
                        <Skeleton className="h-3 w-28" />
                      </div>
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      
                      {/* Interest Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Skeleton className="h-6 w-24 rounded-full" />
                        <Skeleton className="h-6 w-20 rounded-full" />
                        <Skeleton className="h-6 w-28 rounded-full" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-pink-500/10 pt-3">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <Skeleton className="h-8 w-16" />
                        <Skeleton className="h-8 w-20" />
                      </div>
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                  </CardFooter>
                </Card>

                {/* Post Skeleton 3 */}
                <Card className="border-pink-500/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Skeleton className="h-4 w-32" />
                          <Skeleton className="h-3 w-12" />
                        </div>
                        <Skeleton className="h-3 w-24" />
                      </div>
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                      
                      {/* Interest Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Skeleton className="h-6 w-28 rounded-full" />
                        <Skeleton className="h-6 w-24 rounded-full" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-pink-500/10 pt-3">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <Skeleton className="h-8 w-16" />
                        <Skeleton className="h-8 w-20" />
                      </div>
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="border-pink-500/20 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                <Skeleton className="h-6 w-24" />
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex flex-col items-center space-y-2">
                  <div className="relative">
                    <Skeleton className="h-20 w-20 rounded-full" />
                    <Skeleton className="absolute bottom-0 right-0 h-5 w-5 rounded-full" />
                  </div>
                  <div className="text-center space-y-1">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>

                <div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-24 rounded-full" />
                    <Skeleton className="h-6 w-18 rounded-full" />
                  </div>
                </div>

                <div>
                  <Skeleton className="h-4 w-28 mb-2" />
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-pink-500/10 pt-4">
                <Skeleton className="h-10 w-full rounded-lg" />
              </CardFooter>
            </Card>

            {/* Coffee Chat Sidebar */}
            <Card className="border-pink-500/20 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-yellow-400/10 to-blue-500/10">
                <Skeleton className="h-6 w-28" />
                <Skeleton className="h-4 w-32" />
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-start gap-4">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-24 mb-1" />
                    <Skeleton className="h-3 w-32 mb-1" />
                    <Skeleton className="h-3 w-28" />
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-20 mb-1" />
                    <Skeleton className="h-3 w-28 mb-1" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-pink-500/10 pt-4">
                <Skeleton className="h-10 w-full rounded-lg" />
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
} 