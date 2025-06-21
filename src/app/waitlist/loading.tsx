import { Skeleton } from "@/components/ui/skeleton"

export default function WaitlistLoading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            <Skeleton className="h-8 w-32 rounded-full mx-auto" /> {/* Coming Soon badge */}
            <Skeleton className="h-16 md:h-20 w-48 mx-auto" /> {/* Quadly title */}
            <div className="space-y-2 max-w-2xl mx-auto">
              <Skeleton className="h-6 w-full" /> {/* Description line 1 */}
              <Skeleton className="h-6 w-3/4 mx-auto" /> {/* Description line 2 */}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Features */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Skeleton className="h-8 w-48" /> {/* "Why Join Quadly?" heading */}

                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <Skeleton className="w-10 h-10 rounded-lg flex-shrink-0" /> {/* Icon */}
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-5 w-40" /> {/* Feature title */}
                        <Skeleton className="h-4 w-full" /> {/* Feature description line 1 */}
                        <Skeleton className="h-4 w-4/5" /> {/* Feature description line 2 */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interest Selection */}
              <div className="space-y-4">
                <Skeleton className="h-5 w-64" /> {/* "What are you interested in?" heading */}
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Skeleton key={i} className="h-8 w-20 rounded-full" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Waitlist Form */}
            <div className="lg:pl-8">
              <div className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm rounded-xl p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <Skeleton className="h-8 w-40 mx-auto" /> {/* "Join the Waitlist" heading */}
                    <Skeleton className="h-5 w-64 mx-auto" /> {/* Form description */}
                  </div>

                  <div className="space-y-4">
                    <Skeleton className="h-12 w-full rounded-lg" /> {/* Email input */}
                    <Skeleton className="h-12 w-full rounded-lg" /> {/* Submit button */}
                  </div>

                  <div className="text-center space-y-2">
                    <Skeleton className="h-3 w-56 mx-auto" /> {/* "No spam" text */}
                    <div className="flex items-center justify-center gap-4">
                      <Skeleton className="h-3 w-20" /> {/* Perk 1 */}
                      <Skeleton className="h-3 w-24" /> {/* Perk 2 */}
                      <Skeleton className="h-3 w-20" /> {/* Perk 3 */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="mt-6 text-center">
                <Skeleton className="h-4 w-48 mx-auto" /> {/* "Join 500+ students" text */}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Skeleton className="h-4 w-64 mx-auto" /> {/* Bottom link text */}
          </div>
        </div>
      </div>
    </div>
  )
} 