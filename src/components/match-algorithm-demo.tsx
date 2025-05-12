"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import type { MatchResult } from "@/lib/matching/types"
import MatchSuggestion from "./match-suggestion"
import { Sparkles } from "lucide-react"

export default function MatchAlgorithmDemo() {
  const [matches, setMatches] = useState<MatchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [threshold, setThreshold] = useState(50)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const interests = [
    "Distributed Systems",
    "Algorithms",
    "Machine Learning",
    "Web Development",
    "Databases",
    "Software Architecture",
    "Big Data",
    "System Design",
  ]

  const fetchMatches = async () => {
    setLoading(true)
    try {
      const filters = selectedInterests.length > 0 ? { interests: selectedInterests } : {}

      const response = await fetch("/api/matches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "user1",
          filters,
          limit: 10,
        }),
      })

      const data = await response.json()
      if (data.matches) {
        setMatches(data.matches)
      }
    } catch (error) {
      console.error("Error fetching matches:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMatches()
  }, [])

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  const filteredMatches = matches.filter((match) => match.matchPercentage >= threshold)

  return (
    <Card className="border-pink-500/20 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-pink-500" />
          Match Algorithm Demo
        </CardTitle>
        <CardDescription>See how the matching algorithm works in real-time</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Filter by interests:</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge
                  key={interest}
                  variant="outline"
                  className={`cursor-pointer ${
                    selectedInterests.includes(interest)
                      ? "bg-pink-500 text-white border-pink-500"
                      : "bg-pink-500/10 border-pink-500/20 hover:bg-pink-500/20"
                  }`}
                  onClick={() => toggleInterest(interest)}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <h3 className="text-sm font-medium">Match threshold: {threshold}%</h3>
              <span className="text-sm text-muted-foreground">
                Showing {filteredMatches.length} of {matches.length} matches
              </span>
            </div>
            <Slider
              value={[threshold]}
              min={0}
              max={100}
              step={5}
              onValueChange={(values) => setThreshold(values[0])}
              className="[&_[role=slider]]:bg-pink-500"
            />
          </div>

          <Button
            onClick={fetchMatches}
            disabled={loading}
            className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90"
          >
            {loading ? "Finding matches..." : "Find matches"}
          </Button>
        </div>

        <div className="space-y-4 pt-2">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match) => (
              <MatchSuggestion
                key={match.userId}
                user={{
                  name: match.name,
                  avatar: `/placeholder.svg?height=40&width=40&text=${match.name[0]}`,
                  department: match.department,
                }}
                matchReason={match.matchReason}
                commonInterests={match.commonInterests.map((i) => i.name)}
                matchPercentage={match.matchPercentage}
              />
            ))
          ) : (
            <div className="text-center py-6 text-muted-foreground">
              No matches found with the current filters and threshold.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
