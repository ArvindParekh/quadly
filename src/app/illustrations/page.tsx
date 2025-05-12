import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardHeader from "@/app/dashboard/components/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IllustrationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Gen Z Illustrations 🎨</h1>
        </div>

        <Tabs defaultValue="blobs" className="w-full">
          <TabsList className="grid w-full grid-cols-4 rounded-xl p-1 bg-pink-500/10 mb-6">
            <TabsTrigger
              value="blobs"
              className="rounded-lg data-[state=active]:bg-pink-500 data-[state=active]:text-black"
            >
              Blobs & Gradients
            </TabsTrigger>
            <TabsTrigger
              value="patterns"
              className="rounded-lg data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
            >
              Patterns
            </TabsTrigger>
            <TabsTrigger
              value="emojis"
              className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-black"
            >
              Emoji Style
            </TabsTrigger>
            <TabsTrigger
              value="decorative"
              className="rounded-lg data-[state=active]:bg-pink-500 data-[state=active]:text-black"
            >
              Decorative Elements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="blobs" className="space-y-6">
            <Card className="border-pink-500/20">
              <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                <CardTitle>Blob Illustrations</CardTitle>
                <CardDescription>Organic, fluid shapes popular in Gen Z design</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="aspect-square relative rounded-xl overflow-hidden border border-pink-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-yellow-400/20"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-pink-500/30 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-blob"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-yellow-400/30 rounded-[50%_50%_40%_60%/60%_40%_50%_40%] animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/30 rounded-[60%_40%_30%_70%/50%_60%_30%_60%] animate-blob animation-delay-4000"></div>
                  </div>

                  <div className="aspect-square relative rounded-xl overflow-hidden border border-pink-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-500/20"></div>
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-yellow-400/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-pink-500/30 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-blue-500/30 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-blob animation-delay-4000"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-pink-500/30 rounded-[50%_50%_40%_60%/60%_40%_50%_40%] animate-blob animation-delay-6000"></div>
                  </div>

                  <div className="aspect-square relative rounded-xl overflow-hidden border border-pink-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-pink-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-3/4 h-3/4">
                        <div className="absolute inset-0 bg-blue-500/30 rounded-[70%_30%_50%_50%/50%_50%_70%_30%] animate-spin-slow"></div>
                        <div className="absolute inset-[15%] bg-pink-500/30 rounded-[30%_70%_70%_30%/50%_50%_50%_50%] animate-spin-slow animation-delay-2000 animate-reverse"></div>
                        <div className="absolute inset-[30%] bg-yellow-400/30 rounded-[50%_50%_50%_50%/30%_30%_70%_70%] animate-spin-slow animation-delay-4000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-500/20">
              <CardHeader className="bg-gradient-to-r from-yellow-400/10 to-blue-500/10">
                <CardTitle>Gradient Backgrounds</CardTitle>
                <CardDescription>Vibrant color transitions popular in Gen Z design</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="aspect-video rounded-xl overflow-hidden border border-pink-500/20">
                    <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 opacity-70"></div>
                  </div>

                  <div className="aspect-video rounded-xl overflow-hidden border border-pink-500/20">
                    <div className="w-full h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 opacity-70"></div>
                  </div>

                  <div className="aspect-video rounded-xl overflow-hidden border border-pink-500/20">
                    <div className="w-full h-full bg-gradient-to-tl from-blue-500 via-teal-500 to-green-500 opacity-70"></div>
                  </div>

                  <div className="aspect-video rounded-xl overflow-hidden border border-pink-500/20">
                    <div className="w-full h-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-pink-500 via-yellow-400 to-blue-500 opacity-70"></div>
                  </div>

                  <div className="aspect-video rounded-xl overflow-hidden border border-pink-500/20">
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500 via-purple-500 to-blue-500 opacity-70"></div>
                  </div>

                  <div className="aspect-video rounded-xl overflow-hidden border border-pink-500/20">
                    <div className="w-full h-full bg-[linear-gradient(to_right,_#ff3eb5,_#ffde59,_#26b0ff)] opacity-70"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patterns" className="space-y-6">
            <Card className="border-pink-500/20">
              <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                <CardTitle>Geometric Patterns</CardTitle>
                <CardDescription>Modern geometric patterns for backgrounds and accents</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="aspect-square rounded-xl overflow-hidden border border-pink-500/20">
                    <div className="w-full h-full bg-pink-500/10 bg-[radial-gradient(circle,_transparent_20%,_#ff3eb520_20%,_#ff3eb520_80%,_transparent_80%,_transparent),radial-gradient(circle,_transparent_20%,_#ff3eb520_20%,_#ff3eb520_80%,_transparent_80%,_transparent)] bg-[length:40px_40px] bg-[position:0_0,_20px_20px]"></div>
                  </div>

                  <div className="aspect-square rounded-xl overflow-hidden border border-pink-


