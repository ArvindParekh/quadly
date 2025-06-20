import { Skeleton } from "@/components/ui/skeleton"

export default function LoginLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-pink-500/5">
      {/* Header */}
      <div className="container flex h-16 items-center mx-auto">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4" /> {/* Arrow icon */}
          <Skeleton className="h-4 w-24" /> {/* Back to home */}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8 px-4">
          {/* Header Section */}
          <div className="space-y-2 text-center">
            <div className="flex justify-center">
              <Skeleton className="h-12 w-12 rounded-full" /> {/* Logo */}
            </div>
            <Skeleton className="h-8 w-48 mx-auto" /> {/* Welcome back! */}
            <Skeleton className="h-5 w-56 mx-auto" /> {/* Description */}
          </div>

          {/* Login Form */}
          <div className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" /> {/* University Email label */}
              <Skeleton className="h-10 w-full rounded-md" /> {/* Email input */}
            </div>
            
            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-20" /> {/* Password label */}
                <Skeleton className="h-4 w-32" /> {/* Forgot password link */}
              </div>
              <Skeleton className="h-10 w-full rounded-md" /> {/* Password input */}
            </div>
            
            {/* Sign In Button */}
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-pink-500/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-10 w-full rounded-lg" /> {/* Google */}
            <Skeleton className="h-10 w-full rounded-lg" /> {/* Facebook */}
          </div>

          {/* Footer */}
          <div className="text-center text-sm">
            <div className="flex items-center justify-center gap-1">
              <Skeleton className="h-4 w-36" /> {/* Don't have an account? */}
              <Skeleton className="h-4 w-16" /> {/* Sign up link */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 