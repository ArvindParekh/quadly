import { ProfileSkeleton } from "@/components/ui/skeleton"
import DashboardHeader from "@/components/dashboard-header/dashboard-header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function LoadingUserProfile() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container py-6">
        {/* Profile Header Skeleton */}
        <div className="relative rounded-3xl overflow-hidden mb-6 bg-gradient-to-r from-pink-500/5 via-yellow-400/5 to-blue-500/5">
          <div className="relative z-10 py-12 px-6 md:px-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* Avatar Skeleton */}
            <div className="relative">
              <ProfileSkeleton className="h-32 w-32 rounded-full" />
            </div>

            {/* User Info Skeleton */}
            <div className="text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-2 mb-2">
                <ProfileSkeleton className="h-8 w-48" />
                <ProfileSkeleton className="h-6 w-24" />
              </div>
              <ProfileSkeleton className="h-4 w-36 mb-4" />
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <ProfileSkeleton className="h-10 w-32" />
                <ProfileSkeleton className="h-10 w-32" />
                <ProfileSkeleton className="h-10 w-10 rounded-full" />
              </div>
            </div>

            {/* Match Info Card Skeleton */}
            <div className="hidden md:block ml-auto">
              <Card className="border-pink-500/20 bg-background/80 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <ProfileSkeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <ProfileSkeleton className="h-4 w-full" />
                    <ProfileSkeleton className="h-4 w-full" />
                    <div className="flex flex-wrap gap-1 mt-1">
                      <ProfileSkeleton className="h-6 w-24" />
                      <ProfileSkeleton className="h-6 w-24" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
          <div className="space-y-6">
            {/* Tabs Skeleton */}
            <div className="w-full">
              <ProfileSkeleton className="h-10 w-full rounded-xl mb-6" />

              {/* Content Skeleton */}
              <Card className="border-pink-500/20">
                <CardHeader>
                  <ProfileSkeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent>
                  <ProfileSkeleton className="h-4 w-full mb-2" />
                  <ProfileSkeleton className="h-4 w-full mb-2" />
                  <ProfileSkeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="space-y-6">
            <Card className="border-pink-500/20">
              <CardHeader>
                <ProfileSkeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <ProfileSkeleton className="w-16 h-24 rounded-md" />
                  <div className="space-y-2">
                    <ProfileSkeleton className="h-4 w-32" />
                    <ProfileSkeleton className="h-4 w-24" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-500/20">
              <CardHeader>
                <ProfileSkeleton className="h-6 w-40" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <ProfileSkeleton className="h-10 w-10 rounded-full" />
                  <div className="flex-1">
                    <ProfileSkeleton className="h-4 w-full mb-2" />
                    <ProfileSkeleton className="h-3 w-24" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ProfileSkeleton className="h-10 w-10 rounded-full" />
                  <div className="flex-1">
                    <ProfileSkeleton className="h-4 w-full mb-2" />
                    <ProfileSkeleton className="h-3 w-24" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
