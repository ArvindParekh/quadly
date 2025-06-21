import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Skeleton className="w-8 h-8 rounded-lg" /> {/* Logo */}
              <Skeleton className="h-6 w-16" /> {/* Quadly */}
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-24 rounded-lg" /> {/* Join Waitlist */}
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <Skeleton className="h-8 w-56 rounded-full mx-auto" /> {/* Badge */}
              
              {/* Main Heading */}
              <div className="space-y-4">
                <Skeleton className="h-12 md:h-16 w-full max-w-3xl mx-auto" />
                <Skeleton className="h-12 md:h-16 w-4/5 mx-auto" />
              </div>
              
              {/* Description */}
              <div className="space-y-2 mx-auto max-w-3xl">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4 mx-auto" />
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Skeleton className="h-14 w-48 rounded-lg" /> {/* Join Waitlist */}
                <Skeleton className="h-14 w-40 rounded-lg" /> {/* Explore Demo */}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center gap-6">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-28" />
                <Skeleton className="h-5 w-36" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center space-y-4 mb-16">
            <Skeleton className="h-10 md:h-12 w-96 mx-auto" /> {/* Section heading */}
            <Skeleton className="h-6 w-2/3 mx-auto" /> {/* Section description */}
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border-2 border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-transparent rounded-xl p-6">
                <Skeleton className="w-12 h-12 rounded-lg mb-4" /> {/* Icon */}
                <Skeleton className="h-6 w-32 mb-2" /> {/* Title */}
                <Skeleton className="h-4 w-full mb-4" /> {/* Description line 1 */}
                <Skeleton className="h-4 w-4/5 mb-6" /> {/* Description line 2 */}
                
                {/* Badges */}
                <div className="space-y-2">
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-28 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Skeleton className="h-10 md:h-12 w-80 mx-auto" /> {/* CTA heading */}
              <Skeleton className="h-6 w-2/3 mx-auto" /> {/* CTA description */}
            </div>

            <Skeleton className="h-14 w-56 mx-auto rounded-lg" /> {/* CTA button */}

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="text-center space-y-2">
                  <Skeleton className="h-8 w-12 mx-auto" /> {/* Stat number */}
                  <Skeleton className="h-4 w-20 mx-auto" /> {/* Stat label */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Skeleton className="w-6 h-6 rounded-lg" /> {/* Logo */}
              <Skeleton className="h-5 w-16" /> {/* Brand name */}
              <Skeleton className="h-5 w-20 rounded-full" /> {/* Badge */}
            </div>
            <Skeleton className="h-4 w-80" /> {/* Copyright */}
          </div>
        </footer>
      </div>
    </div>
  )
} 