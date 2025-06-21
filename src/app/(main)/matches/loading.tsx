import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function MatchesLoading() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-6 mx-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Skeleton className="h-9 w-48" /> {/* Your Matches ✨ */}
          </div>

          {/* Match Algorithm Demo Skeleton */}
          <Card className="border-pink-500/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
              <CardTitle>
                <Skeleton className="h-6 w-40" /> {/* Match Algorithm Demo */}
              </CardTitle>
              <CardDescription>
                <Skeleton className="h-4 w-80" /> {/* Description */}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Algorithm demo content */}
              <div className="space-y-4">
                <Skeleton className="h-6 w-32" /> {/* Section title */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* User profiles */}
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-12 w-12 rounded-full" /> {/* Avatar */}
                        <div className="space-y-2">
                          <Skeleton className="h-5 w-24" /> {/* Name */}
                          <Skeleton className="h-4 w-32" /> {/* Department */}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-16" /> {/* Interests label */}
                        <div className="flex flex-wrap gap-2">
                          {Array.from({ length: 4 }).map((_, j) => (
                            <Skeleton key={j} className="h-6 w-20 rounded-full" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Match score visualization */}
                <div className="text-center space-y-4 py-6">
                  <Skeleton className="h-8 w-32 mx-auto" /> {/* Match Score */}
                  <Skeleton className="h-4 w-64 mx-auto" /> {/* Score description */}
                  <div className="flex justify-center">
                    <Skeleton className="h-2 w-96 rounded-full" /> {/* Progress bar */}
                  </div>
                </div>
                
                {/* Shared interests */}
                <div className="space-y-3">
                  <Skeleton className="h-5 w-32" /> {/* Shared interests title */}
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Skeleton key={i} className="h-6 w-28 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How Algorithm Works Card */}
          <Card className="border-pink-500/20">
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-6 w-64" /> {/* How the Matching Algorithm Works */}
              </CardTitle>
              <CardDescription>
                <Skeleton className="h-4 w-80" /> {/* Description */}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Interest Matching Section */}
              <div className="space-y-2">
                <Skeleton className="h-5 w-32" /> {/* Interest Matching */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>

              {/* Match Score Calculation Section */}
              <div className="space-y-3">
                <Skeleton className="h-5 w-48" /> {/* Match Score Calculation */}
                <Skeleton className="h-4 w-80" /> {/* Description */}
                <div className="pl-5 space-y-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Skeleton className="h-1 w-1 rounded-full" /> {/* Bullet */}
                      <Skeleton className="h-4 w-48" /> {/* List item */}
                    </div>
                  ))}
                </div>
              </div>

              {/* Improving Matches Section */}
              <div className="space-y-2">
                <Skeleton className="h-5 w-40" /> {/* Improving Your Matches */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 