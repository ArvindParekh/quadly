import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-full" /> {/* Logo */}
            <Skeleton className="h-6 w-16" /> {/* Quadly */}
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Skeleton className="h-4 w-12" /> {/* Home */}
            <Skeleton className="h-4 w-12" /> {/* About */}
            <Skeleton className="h-4 w-12" /> {/* Login */}
          </nav>
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-16 rounded-lg" /> {/* Log in */}
            <Skeleton className="h-9 w-20 rounded-lg" /> {/* Sign up */}
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-12 w-48 mx-auto" />
              <Skeleton className="h-12 w-32 mx-auto" />
            </div>
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Skeleton className="h-8 w-32" /> {/* Our Mission */}
              <div className="space-y-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-4/5" />
              </div>
            </div>
            <Skeleton className="relative aspect-video rounded-3xl" /> {/* Mission Image */}
          </div>

          <Separator className="bg-pink-500/10" />

          {/* How It Works Section */}
          <div className="space-y-8">
            <Skeleton className="h-8 w-40 mx-auto" /> {/* How It Works */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="border-pink-500/20 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-pink-500/10 to-pink-500/5 text-center pb-2">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/10">
                      <Skeleton className="h-6 w-6" />
                    </div>
                    <Skeleton className="h-6 w-24 mx-auto" /> {/* Card Title */}
                  </CardHeader>
                  <CardContent className="text-center pt-4">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4 mx-auto" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="bg-pink-500/10" />

          {/* FAQ Section */}
          <div className="space-y-8">
            <Skeleton className="h-8 w-64 mx-auto" /> {/* FAQ Title */}
            
            {/* Tabs */}
            <div className="w-full">
              <div className="grid w-full grid-cols-3 rounded-xl p-1 bg-pink-500/10 mb-6">
                <Skeleton className="rounded-lg mx-1 bg-pink-500" /> {/* Active tab */}
                <Skeleton className="rounded-lg mx-1 bg-pink-500/20" />
                <Skeleton className="rounded-lg mx-1 bg-pink-500/20" />
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="border border-pink-500/10 rounded-lg">
                    <div className="p-4 space-y-3">
                      <Skeleton className="h-5 w-64" /> {/* Question */}
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Separator className="bg-pink-500/10" />

          {/* Final CTA Section */}
          <div className="text-center space-y-6">
            <Skeleton className="h-8 w-80 mx-auto" /> {/* CTA Title */}
            <Skeleton className="h-6 w-96 mx-auto" /> {/* CTA Description */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Skeleton className="h-12 w-32 rounded-lg" /> {/* Sign up now */}
              <Skeleton className="h-12 w-24 rounded-lg" /> {/* Log in */}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-6 w-16" />
            </div>
            <Skeleton className="h-4 w-48" /> {/* Copyright */}
            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-12" /> {/* Terms */}
              <Skeleton className="h-4 w-14" /> {/* Privacy */}
              <Skeleton className="h-4 w-16" /> {/* Contact */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 