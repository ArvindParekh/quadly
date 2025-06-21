import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProfileLoading() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-6 mx-auto">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Skeleton className="h-9 w-48" /> {/* Your Profile ✨ */}
            <Skeleton className="h-10 w-32 rounded-lg" /> {/* Save Changes */}
          </div>

          {/* Profile Picture Card */}
          <Card className="border-pink-500/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
              <CardTitle>
                <Skeleton className="h-6 w-32" /> {/* Profile Picture */}
              </CardTitle>
              <CardDescription>
                <Skeleton className="h-4 w-64" /> {/* Description */}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                {/* Avatar */}
                <div className="relative">
                  <Skeleton className="h-32 w-32 rounded-full" />
                  <Skeleton className="absolute bottom-0 right-0 h-8 w-8 rounded-full" /> {/* Camera button */}
                </div>
                
                {/* Profile Form Fields */}
                <div className="flex flex-col space-y-4 flex-1 w-full">
                  {/* Full Name */}
                  <div className="flex flex-col space-y-2">
                    <Skeleton className="h-4 w-20" /> {/* Label */}
                    <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
                  </div>
                  
                  {/* Department */}
                  <div className="flex flex-col space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full rounded-md" />
                  </div>
                  
                  {/* Year */}
                  <div className="flex flex-col space-y-2">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-10 w-full rounded-md" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About You Card */}
          <Card className="border-pink-500/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-yellow-400/10 to-blue-500/10">
              <CardTitle>
                <Skeleton className="h-6 w-24" /> {/* About You */}
              </CardTitle>
              <CardDescription>
                <Skeleton className="h-4 w-80" /> {/* Description */}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              {/* Bio */}
              <div className="flex flex-col space-y-2">
                <Skeleton className="h-4 w-8" /> {/* Bio label */}
                <Skeleton className="h-32 w-full rounded-md" /> {/* Textarea */}
              </div>

              {/* Interests */}
              <div className="flex flex-col space-y-2">
                <Skeleton className="h-4 w-16" /> {/* Interests label */}
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-6 w-24 rounded-full" /> /* Interest tags */
                  ))}
                  <Skeleton className="h-6 w-28 rounded-full" /> {/* Add Interest button */}
                </div>
              </div>

              {/* Currently Reading */}
              <div className="flex flex-col space-y-2">
                <Skeleton className="h-4 w-32" /> {/* Currently Reading label */}
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4" /> {/* Book icon */}
                  <Skeleton className="h-10 flex-1 rounded-md" /> {/* Input */}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connection Preferences Card */}
          <Card className="border-pink-500/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-500/10 to-pink-500/10">
              <CardTitle>
                <Skeleton className="h-6 w-48" /> {/* Connection Preferences */}
              </CardTitle>
              <CardDescription>
                <Skeleton className="h-4 w-64" /> {/* Description */}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              {/* I'm open to */}
              <div className="flex flex-col space-y-2">
                <Skeleton className="h-4 w-24" /> {/* Label */}
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-6 w-32 rounded-full" /> /* Toggle options */
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="flex flex-col space-y-2">
                <Skeleton className="h-4 w-20" /> {/* Availability label */}
                <Skeleton className="h-20 w-full rounded-md" /> {/* Textarea */}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-pink-500/10 pt-4">
              <Skeleton className="h-10 w-16 rounded-lg" /> {/* Cancel */}
              <Skeleton className="h-10 w-36 rounded-lg" /> {/* Save Preferences */}
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
} 