import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import MatchAlgorithmDemo from "@/components/match-algorithm-demo"
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { sessionType } from "@/types/session";
export default async function MatchesPage() {

  const session: sessionType | null = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background">

      <main className="container py-6 mx-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Your Matches ✨</h1>
          </div>

          {/* <MatchAlgorithmDemo /> */}

          <Card className="border-pink-500/20">
            <CardHeader>
              <CardTitle>How the Matching Algorithm Works</CardTitle>
              <CardDescription>Understanding how we find your perfect connections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Interest Matching</h3>
                <p className="text-muted-foreground">
                  Our algorithm analyzes shared interests between users to find meaningful connections. The more
                  specific interests you share with someone, the higher your match score.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Match Score Calculation</h3>
                <p className="text-muted-foreground">Your match score is calculated using several factors:</p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Number of shared interests</li>
                  <li>Importance of those interests to both users</li>
                  <li>Department and year compatibility</li>
                  <li>Shared reading materials or projects</li>
                  <li>Connection preferences alignment</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Improving Your Matches</h3>
                <p className="text-muted-foreground">
                  To get better matches, make sure your profile is complete with specific interests rather than general
                  ones. The more details you provide, the better we can connect you with like-minded students!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
