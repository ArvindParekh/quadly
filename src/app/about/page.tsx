import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Coffee, Users } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400" />
              <div className="absolute inset-[2px] rounded-full bg-background" />
              <div className="absolute inset-[4px] rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 opacity-50" />
            </div>
            <span className="text-xl font-bold tracking-tight">Social Garden</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground transition-colors hover:text-foreground">
              About
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Login
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400">
                Social Garden
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connecting university students through shared interests and meaningful conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                Social Garden was created to solve a common problem: making meaningful connections in university can be
                hard, especially for grad students and those who don't fit into the typical social scene.
              </p>
              <p className="text-muted-foreground">
                We believe that the best connections start with shared interests and authentic conversations. Our
                platform helps you find people who are into the same things you are, making it easier to break the ice
                and form genuine connections.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-pink-500/20 bg-background/50 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-yellow-400/10" />
              <img src="/placeholder.svg?height=600&width=800" alt="Students connecting" className="w-full h-auto" />
            </div>
          </div>

          <Separator className="bg-pink-500/10" />

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-pink-500/20 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-pink-500/10 to-pink-500/5 text-center pb-2">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/10">
                    <BookOpen className="h-6 w-6 text-pink-500" />
                  </div>
                  <CardTitle>Share Your Interests</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-4">
                  <p className="text-muted-foreground">
                    Tell us what you're passionate about, what you're studying, and what books you're reading.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-yellow-400/20 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 text-center pb-2">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/10">
                    <Users className="h-6 w-6 text-yellow-400" />
                  </div>
                  <CardTitle>Find Your People</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-4">
                  <p className="text-muted-foreground">
                    Our algorithm matches you with students who share your interests and academic pursuits.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-500/20 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 text-center pb-2">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                    <Coffee className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle>Connect IRL</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-4">
                  <p className="text-muted-foreground">
                    Schedule coffee chats, study sessions, or join group events to meet in person.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="bg-pink-500/10" />

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-xl p-1 bg-pink-500/10 mb-6">
                <TabsTrigger
                  value="general"
                  className="rounded-lg data-[state=active]:bg-pink-500 data-[state=active]:text-black"
                >
                  General
                </TabsTrigger>
                <TabsTrigger
                  value="account"
                  className="rounded-lg data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                >
                  Account
                </TabsTrigger>
                <TabsTrigger
                  value="privacy"
                  className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-black"
                >
                  Privacy
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-pink-500/10">
                    <AccordionTrigger className="hover:text-pink-500">Who can use Social Garden?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Social Garden is exclusively for university students. You'll need a valid university email address
                      to sign up and verify your account.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-pink-500/10">
                    <AccordionTrigger className="hover:text-pink-500">Is Social Garden free to use?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes! Social Garden is completely free for all university students. We believe in making meaningful
                      connections accessible to everyone.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-pink-500/10">
                    <AccordionTrigger className="hover:text-pink-500">
                      How does the matching algorithm work?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Our algorithm analyzes your interests, academic background, and preferences to find students who
                      share similar passions. The more specific your interests, the better your matches will be!
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-pink-500/10">
                    <AccordionTrigger className="hover:text-pink-500">
                      Can I organize events on Social Garden?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      You can create study groups, coffee chats, or interest-based meetups and invite other students to
                      join.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="account">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-pink-500/10">
                    <AccordionTrigger className="hover:text-yellow-400">
                      How do I verify my university email?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      After signing up, we'll send a verification link to your university email address. Simply click
                      the link to verify your account.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-pink-500/10">
                    <AccordionTrigger className="hover:text-yellow-400">
                      Can I change my department or year?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, you can update your academic information at any time in your profile settings.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-pink-500/10">
                    <AccordionTrigger className="hover:text-yellow-400">
                      What happens to my account after I graduate?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      You can continue using Social Garden for up to 6 months after graduation to maintain your
                      connections. After that, you'll be transitioned to our alumni network.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-pink-500/10">
                    <AccordionTrigger className="hover:text-yellow-400">How do I delete my account?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      You can delete your account at any time in your account settings. All your data will be
                      permanently removed from our systems.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="privacy">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-pink-500/10">
                    <AccordionTrigger className="hover:text-blue-500">Who can see my profile?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      By default, only verified students from your university can see your profile. You can further
                      restrict visibility in your privacy settings.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-pink-500/10">
                    <AccordionTrigger className="hover:text-blue-500">How is my data used?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      We only use your data to provide and improve the Social Garden service. We never sell your
                      personal information to third parties.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-pink-500/10">
                    <AccordionTrigger className="hover:text-blue-500">
                      Can I control who can message me?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, you can set messaging preferences to only allow messages from matches, connections, or anyone
                      on the platform.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-pink-500/10">
                    <AccordionTrigger className="hover:text-blue-500">
                      How do I report inappropriate behavior?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      You can report any user or content through the report button. Our team reviews all reports within
                      24 hours and takes appropriate action.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>

          <Separator className="bg-pink-500/10" />

          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to grow your social circle?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students already connecting on Social Garden.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="h-12 px-8 bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90"
                >
                  Sign up now
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg" className="h-12 px-8 border-pink-500/20 hover:bg-pink-500/10">
                  Log in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400" />
                <div className="absolute inset-[2px] rounded-full bg-background" />
                <div className="absolute inset-[4px] rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 opacity-50" />
              </div>
              <span className="text-xl font-bold tracking-tight">Social Garden</span>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Social Garden. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
