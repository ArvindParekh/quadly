import { Skeleton } from "@/components/ui/skeleton"

export default function LandingLoading() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-pink-500/5">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-full" /> {/* Logo */}
            <Skeleton className="h-6 w-16" /> {/* Quadly */}
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Skeleton className="h-4 w-16" /> {/* Features */}
            <Skeleton className="h-4 w-24" /> {/* How It Works */}
          </nav>
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-16 rounded-lg" /> {/* Login */}
            <Skeleton className="h-9 w-20 rounded-lg" /> {/* Sign up */}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-yellow-400/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-blue-400/20 rounded-full blur-3xl -z-10"></div>

          <div className="container relative flex flex-col items-center justify-center space-y-10 py-20 md:py-32 mx-auto">
            <div className="space-y-6 text-center">
              <Skeleton className="h-6 w-48 rounded-full mx-auto" /> {/* Badge */}
              
              {/* Main Heading */}
              <div className="space-y-4">
                <Skeleton className="h-12 w-96 mx-auto" />
                <Skeleton className="h-12 w-80 mx-auto" />
                <Skeleton className="h-12 w-64 mx-auto" />
              </div>
              
              {/* Description */}
              <div className="space-y-2 mx-auto max-w-[700px]">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4 mx-auto" />
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Skeleton className="h-12 w-32 rounded-lg" /> {/* Sign up now */}
                <Skeleton className="h-12 w-40 rounded-lg" /> {/* See how it works */}
              </div>
            </div>
            
            {/* Hero Image */}
            <Skeleton className="relative w-full max-w-4xl h-96 rounded-3xl" />
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-20 mx-auto">
          <div className="mx-auto mb-12 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <Skeleton className="h-6 w-16 rounded-full" /> {/* Features badge */}
            <Skeleton className="h-10 w-96" /> {/* Heading */}
            <div className="space-y-2 max-w-[85%]">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-2/3 mx-auto" />
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl border border-pink-500/20 bg-background p-6">
                <Skeleton className="h-12 w-12 rounded-full mb-4" /> {/* Icon */}
                <Skeleton className="h-6 w-32 mb-2" /> {/* Title */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container py-20 relative mx-auto">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink-400/10 rounded-full blur-3xl -z-10"></div>

          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
            <div>
              <Skeleton className="h-6 w-24 rounded-full" /> {/* How it works badge */}
              <Skeleton className="h-10 w-64 mt-4 mb-8" /> {/* Heading */}
              
              {/* Steps */}
              <ul className="space-y-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i} className="flex gap-4">
                    <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" /> {/* Number */}
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-6 w-48" /> {/* Step title */}
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Skeleton className="relative aspect-video rounded-3xl" /> {/* How it works image */}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-pink-500/5 to-background"></div>
          <div className="container relative mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <Skeleton className="h-6 w-16 rounded-full" /> {/* Ready badge */}
              <Skeleton className="h-12 w-80 mb-2" /> {/* Heading */}
              <div className="space-y-2 max-w-[85%]">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-2/3 mx-auto" />
              </div>
              <Skeleton className="h-12 w-32 rounded-lg mt-6" /> {/* CTA button */}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-10 mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-4 w-20" /> {/* Section title */}
                <ul className="space-y-2">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <li key={j}>
                      <Skeleton className="h-4 w-16" /> {/* Link */}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-pink-500/10 pt-6 md:flex-row">
            <Skeleton className="h-4 w-48" /> {/* Copyright */}
            <div className="flex items-center gap-4">
              <Skeleton className="h-5 w-5 rounded" /> {/* Social icons */}
              <Skeleton className="h-5 w-5 rounded" />
              <Skeleton className="h-5 w-5 rounded" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 