import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function SettingsLoading() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-6 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-9 w-40" /> {/* Settings ⚙️ */}
        </div>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="md:w-64 flex-shrink-0">
            <div className="flex flex-col space-y-1">
              {/* Account Tab - Active */}
              <div className="w-full flex items-center justify-start px-3 py-2 bg-pink-500/10 text-pink-500 rounded-lg">
                <Skeleton className="h-4 w-4 mr-2 bg-pink-500/30" /> {/* Icon */}
                <Skeleton className="h-4 w-16 bg-pink-500/30" /> {/* Account */}
              </div>
              
              {/* Other Tabs */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="w-full flex items-center justify-start px-3 py-2 rounded-lg">
                  <Skeleton className="h-4 w-4 mr-2" /> {/* Icon */}
                  <Skeleton className="h-4 w-20" /> {/* Tab name */}
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 space-y-6">
            <Card className="border-pink-500/20">
              <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                <CardTitle>
                  <Skeleton className="h-6 w-36" /> {/* Account Settings */}
                </CardTitle>
                <CardDescription>
                  <Skeleton className="h-4 w-56" /> {/* Description */}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                {/* Personal Information Section */}
                <div className="space-y-4">
                  <Skeleton className="h-6 w-48" /> {/* Personal Information heading */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Form Fields */}
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="space-y-2">
                        <Skeleton className="h-4 w-20" /> {/* Label */}
                        <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Information Section */}
                <div className="space-y-4">
                  <Skeleton className="h-6 w-44" /> {/* Academic Information heading */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Select Fields */}
                    {Array.from({ length: 2 }).map((_, i) => (
                      <div key={i} className="space-y-2">
                        <Skeleton className="h-4 w-24" /> {/* Label */}
                        <Skeleton className="h-10 w-full rounded-md" /> {/* Select */}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-pink-500/10 pt-4">
                <Skeleton className="h-10 w-32 rounded-lg" /> {/* Save Changes */}
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
} 