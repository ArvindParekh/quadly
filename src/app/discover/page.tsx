import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Coffee, Flame, Globe, Lightbulb, MessageSquare, Plus, Sparkles, Zap } from "lucide-react"
import DashboardHeader from "@/components/dashboard-header"
import { Input } from "@/components/ui/input"

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container py-6 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Discover 🔍</h1>
          <div className="relative w-full max-w-sm">
            <Input
              type="search"
              placeholder="Search interests, topics, people..."
              className="rounded-full border-pink-500/20 focus-visible:ring-pink-500 pl-10"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>

        <Tabs defaultValue="trending" className="w-full">
          <TabsList className="grid w-full grid-cols-4 rounded-xl p-1 bg-pink-500/10 mb-6">
            <TabsTrigger
              value="trending"
              className="rounded-lg data-[state=active]:bg-pink-500 data-[state=active]:text-black"
            >
              <Flame className="h-4 w-4 mr-2" />
              Trending
            </TabsTrigger>
            <TabsTrigger
              value="topics"
              className="rounded-lg data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
            >
              <Lightbulb className="h-4 w-4 mr-2" />
              Topics
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-black"
            >
              <Globe className="h-4 w-4 mr-2" />
              Events
            </TabsTrigger>
            <TabsTrigger
              value="people"
              className="rounded-lg data-[state=active]:bg-pink-500 data-[state=active]:text-black"
            >
              <Zap className="h-4 w-4 mr-2" />
              People
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TrendingTopicCard
                title="AI Ethics"
                description="Discussions about ethical implications of AI in research and society"
                icon={<Sparkles className="h-5 w-5 text-pink-500" />}
                participants={32}
                color="pink"
              />
              <TrendingTopicCard
                title="Sustainable Campus"
                description="Initiatives to make our university more environmentally friendly"
                icon={<Sparkles className="h-5 w-5 text-yellow-400" />}
                participants={24}
                color="yellow"
              />
              <TrendingTopicCard
                title="Remote Learning"
                description="Effectiveness of remote vs. in-person learning experiences"
                icon={<Sparkles className="h-5 w-5 text-blue-500" />}
                participants={18}
                color="blue"
              />
              <TrendingTopicCard
                title="Mental Health"
                description="Resources and discussions about student mental health"
                icon={<Sparkles className="h-5 w-5 text-pink-500" />}
                participants={42}
                color="pink"
              />
              <TrendingTopicCard
                title="Quantum Computing"
                description="Latest developments in quantum computing research"
                icon={<Sparkles className="h-5 w-5 text-yellow-400" />}
                participants={15}
                color="yellow"
              />
              <TrendingTopicCard
                title="Campus Food"
                description="Reviews and recommendations for campus dining options"
                icon={<Sparkles className="h-5 w-5 text-blue-500" />}
                participants={37}
                color="blue"
              />
            </div>

            <Card className="border-pink-500/20 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                <CardTitle>Trending Books</CardTitle>
                <CardDescription>What students are reading right now</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <TrendingBookCard
                    title="Designing Data-Intensive Applications"
                    author="Martin Kleppmann"
                    readers={28}
                    category="Computer Science"
                  />
                  <TrendingBookCard
                    title="Atomic Habits"
                    author="James Clear"
                    readers={42}
                    category="Self-Improvement"
                  />
                  <TrendingBookCard title="The Overstory" author="Richard Powers" readers={15} category="Fiction" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="topics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-pink-500/20 overflow-hidden md:col-span-2 md:row-span-2">
                <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                  <CardTitle>Popular Topics</CardTitle>
                  <CardDescription>Explore topics by category</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TopicCategoryCard
                      title="Technology"
                      topics={["Machine Learning", "Web Development", "Cybersecurity", "Blockchain", "Mobile Apps"]}
                      icon={<Zap className="h-5 w-5" />}
                      color="pink"
                    />
                    <TopicCategoryCard
                      title="Science"
                      topics={["Physics", "Biology", "Chemistry", "Astronomy", "Environmental Science"]}
                      icon={<Lightbulb className="h-5 w-5" />}
                      color="yellow"
                    />
                    <TopicCategoryCard
                      title="Arts & Humanities"
                      topics={["Literature", "Philosophy", "History", "Visual Arts", "Music"]}
                      icon={<BookOpen className="h-5 w-5" />}
                      color="blue"
                    />
                    <TopicCategoryCard
                      title="Social Sciences"
                      topics={["Psychology", "Sociology", "Economics", "Political Science", "Anthropology"]}
                      icon={<Globe className="h-5 w-5" />}
                      color="pink"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-pink-500/20 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500/10 to-pink-500/10">
                  <CardTitle>Topic of the Day</CardTitle>
                  <CardDescription>Join today's featured discussion</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="rounded-lg bg-blue-500/10 p-4 text-center">
                    <h3 className="text-xl font-bold text-blue-500">Climate Action</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      How can students contribute to climate solutions on campus and beyond?
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">47 students participating</span>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-pink-500 text-black hover:opacity-90"
                    >
                      Join Discussion
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-pink-500/20 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-yellow-400/10 to-blue-500/10">
                  <CardTitle>Suggested for You</CardTitle>
                  <CardDescription>Based on your interests</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <Badge
                      variant="outline"
                      className="w-full justify-start text-sm py-2 px-3 bg-pink-500/10 border-pink-500/20 hover:bg-pink-500/20"
                    >
                      <Sparkles className="h-3.5 w-3.5 mr-2 text-pink-500" />
                      Distributed Systems
                    </Badge>
                    <Badge
                      variant="outline"
                      className="w-full justify-start text-sm py-2 px-3 bg-yellow-400/10 border-yellow-400/20 hover:bg-yellow-400/20"
                    >
                      <Sparkles className="h-3.5 w-3.5 mr-2 text-yellow-400" />
                      Algorithm Design
                    </Badge>
                    <Badge
                      variant="outline"
                      className="w-full justify-start text-sm py-2 px-3 bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20"
                    >
                      <Sparkles className="h-3.5 w-3.5 mr-2 text-blue-500" />
                      Software Architecture
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <EventCard
                title="CS Department Mixer"
                date="May 15, 2023"
                time="6:00 PM - 8:00 PM"
                location="Computer Science Building, Room 101"
                attendees={42}
                color="pink"
              />
              <EventCard
                title="Research Symposium"
                date="May 20, 2023"
                time="10:00 AM - 4:00 PM"
                location="University Center, Grand Hall"
                attendees={87}
                color="yellow"
              />
              <EventCard
                title="Coffee & Code"
                date="May 18, 2023"
                time="3:00 PM - 5:00 PM"
                location="Campus Café"
                attendees={23}
                color="blue"
              />
              <EventCard
                title="Book Club: 'The Overstory'"
                date="May 22, 2023"
                time="7:00 PM - 8:30 PM"
                location="Library, Reading Room"
                attendees={15}
                color="pink"
              />
              <EventCard
                title="Hackathon Kickoff"
                date="May 27-28, 2023"
                time="9:00 AM - 5:00 PM"
                location="Innovation Center"
                attendees={64}
                color="yellow"
              />
              <EventCard
                title="Grad Student Happy Hour"
                date="May 19, 2023"
                time="7:00 PM - 9:00 PM"
                location="The Graduate Pub"
                attendees={38}
                color="blue"
              />
            </div>
          </TabsContent>

          <TabsContent value="people" className="space-y-6">
            <Card className="border-pink-500/20 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                <CardTitle>People You Might Know</CardTitle>
                <CardDescription>Connect with students who share your background</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <PersonCard
                    name="Alex Johnson"
                    department="Computer Science"
                    year={3}
                    interests={["Distributed Systems", "Software Architecture", "Databases"]}
                    mutualConnections={4}
                  />
                  <PersonCard
                    name="Morgan Lee"
                    department="Psychology"
                    year={2}
                    interests={["Cognitive Psychology", "Decision Making", "Research Methods"]}
                    mutualConnections={2}
                  />
                  <PersonCard
                    name="Jamie Rivera"
                    department="Literature"
                    year={3}
                    interests={["Contemporary Literature", "Environmental Studies", "Book Club"]}
                    mutualConnections={1}
                  />
                </div>
              </CardContent>
              <CardFooter className="border-t border-pink-500/10 pt-4 flex justify-center">
                <Button variant="outline" className="border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500">
                  View More People
                </Button>
              </CardFooter>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-pink-500/20 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-yellow-400/10 to-blue-500/10">
                  <CardTitle>Popular Mentors</CardTitle>
                  <CardDescription>Connect with experienced students in your field</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <MentorCard
                    name="Dr. Sarah Chen"
                    department="Computer Science"
                    expertise="Machine Learning, AI Ethics"
                    availability="Tuesdays and Thursdays"
                  />
                  <MentorCard
                    name="Prof. Michael Rodriguez"
                    department="Psychology"
                    expertise="Cognitive Development, Research Methods"
                    availability="Mondays and Wednesdays"
                  />
                  <MentorCard
                    name="Dr. Aisha Patel"
                    department="Literature"
                    expertise="Contemporary Fiction, Postcolonial Studies"
                    availability="Fridays"
                  />
                </CardContent>
              </Card>

              <Card className="border-pink-500/20 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500/10 to-pink-500/10">
                  <CardTitle>Study Groups</CardTitle>
                  <CardDescription>Join students studying similar subjects</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <StudyGroupCard
                    name="Algorithms Study Group"
                    members={8}
                    schedule="Tuesdays, 4-6 PM"
                    location="Library, Room 204"
                  />
                  <StudyGroupCard
                    name="Research Methods Workshop"
                    members={12}
                    schedule="Wednesdays, 3-5 PM"
                    location="Psychology Building, Lab 3"
                  />
                  <StudyGroupCard
                    name="Literature Discussion Circle"
                    members={6}
                    schedule="Thursdays, 7-8:30 PM"
                    location="Humanities Center, Room 101"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function TrendingTopicCard({
  title,
  description,
  icon,
  participants,
  color,
}: {
  title: string
  description: string
  icon: React.ReactNode
  participants: number
  color: "pink" | "yellow" | "blue"
}) {
  const colorClasses = {
    pink: "bg-gradient-to-r from-pink-500/10 to-pink-500/5 border-pink-500/20",
    yellow: "bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border-yellow-400/20",
    blue: "bg-gradient-to-r from-blue-500/10 to-blue-500/5 border-blue-500/20",
  }

  return (
    <Card className={`border-${color}-500/20 overflow-hidden hover:shadow-md transition-all`}>
      <CardHeader className={colorClasses[color]}>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          {icon}
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MessageSquare className={`h-4 w-4 mr-2 text-${color}-500`} />
            <span className="text-sm">{participants} students discussing</span>
          </div>
          <Button
            size="sm"
            variant="outline"
            className={`border-${color}-500/20 hover:bg-${color}-500/10 hover:text-${color}-500`}
          >
            Join
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function TrendingBookCard({
  title,
  author,
  readers,
  category,
}: {
  title: string
  author: string
  readers: number
  category: string
}) {
  return (
    <div className="flex gap-3 p-3 rounded-lg border border-pink-500/20 bg-background/50 hover:bg-pink-500/5 transition-colors">
      <div className="flex-shrink-0 w-12 h-16 bg-gradient-to-br from-pink-500/20 to-yellow-400/20 rounded flex items-center justify-center">
        <BookOpen className="h-6 w-6 text-pink-500" />
      </div>
      <div className="flex-grow">
        <h3 className="font-medium text-sm line-clamp-1">{title}</h3>
        <p className="text-xs text-muted-foreground">{author}</p>
        <div className="flex items-center justify-between mt-2">
          <Badge variant="outline" className="text-xs bg-pink-500/10 text-pink-500 border-pink-500/20">
            {category}
          </Badge>
          <span className="text-xs text-muted-foreground">{readers} readers</span>
        </div>
      </div>
    </div>
  )
}

function TopicCategoryCard({
  title,
  topics,
  icon,
  color,
}: {
  title: string
  topics: string[]
  icon: React.ReactNode
  color: "pink" | "yellow" | "blue"
}) {
  const colorClasses = {
    pink: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    yellow: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
    blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  }

  return (
    <div className="space-y-3">
      <div className={`flex items-center gap-2 p-2 rounded-lg ${colorClasses[color]}`}>
        {icon}
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="space-y-2 pl-2">
        {topics.map((topic) => (
          <div
            key={topic}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-pink-500/5 transition-colors cursor-pointer"
          >
            <span className="text-sm">{topic}</span>
            <Button
              size="icon"
              variant="ghost"
              className="h-6 w-6 rounded-full hover:bg-pink-500/10 hover:text-pink-500"
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Add {topic}</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

function EventCard({
  title,
  date,
  time,
  location,
  attendees,
  color,
}: {
  title: string
  date: string
  time: string
  location: string
  attendees: number
  color: "pink" | "yellow" | "blue"
}) {
  const colorClasses = {
    pink: "bg-gradient-to-r from-pink-500/10 to-pink-500/5 border-pink-500/20",
    yellow: "bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border-yellow-400/20",
    blue: "bg-gradient-to-r from-blue-500/10 to-blue-500/5 border-blue-500/20",
  }

  return (
    <Card className={`border-${color}-500/20 overflow-hidden hover:shadow-md transition-all`}>
      <CardHeader className={colorClasses[color]}>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-clock h-4 w-4 mt-0.5 text-${color}-500`}
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-map-pin h-4 w-4 mt-0.5 text-${color}-500`}
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-sm">{location}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-users h-4 w-4 mr-2 text-${color}-500`}
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span className="text-sm">{attendees} attending</span>
          </div>
          <Button
            size="sm"
            className={`bg-gradient-to-r from-${color}-500 to-${
              color === "pink" ? "yellow-400" : color === "yellow" ? "blue-500" : "pink-500"
            } text-black hover:opacity-90`}
          >
            RSVP
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function PersonCard({
  name,
  department,
  year,
  interests,
  mutualConnections,
}: {
  name: string
  department: string
  year: number
  interests: string[]
  mutualConnections: number
}) {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg border border-pink-500/20 bg-background/50 hover:bg-pink-500/5 transition-colors text-center">
      <Avatar className="h-16 w-16 mb-3 border-2 border-pink-500">
        <AvatarImage src={`/placeholder.svg?height=64&width=64&text=${name[0]}`} alt={name} />
        <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-400 text-black text-xl">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <h3 className="font-medium">{name}</h3>
      <p className="text-xs text-muted-foreground">
        {department}, Year {year}
      </p>
      <div className="flex flex-wrap justify-center gap-1 mt-3 mb-4">
        {interests.map((interest, index) => {
          const colors = [
            "bg-pink-500/10 text-pink-500 border-pink-500/20",
            "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
            "bg-blue-500/10 text-blue-500 border-blue-500/20",
          ]
          const colorIndex = index % colors.length
          return (
            <Badge key={interest} variant="outline" className={`text-xs py-0 ${colors[colorIndex]}`}>
              {interest}
            </Badge>
          )
        })}
      </div>
      <div className="text-xs text-muted-foreground mb-3">{mutualConnections} mutual connections</div>
      <Button size="sm" className="w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90">
        Connect
      </Button>
    </div>
  )
}

function MentorCard({
  name,
  department,
  expertise,
  availability,
}: {
  name: string
  department: string
  expertise: string
  availability: string
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg border border-yellow-400/20 bg-background/50 hover:bg-yellow-400/5 transition-colors">
      <Avatar className="h-10 w-10 border border-yellow-400/20">
        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${name[0]}`} alt={name} />
        <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-blue-500 text-black">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium text-sm">{name}</h3>
          <Badge variant="outline" className="text-xs bg-yellow-400/10 text-yellow-400 border-yellow-400/20">
            Mentor
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground">{department}</p>
        <p className="text-xs mt-1">
          <span className="font-medium">Expertise:</span> {expertise}
        </p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs">
            <span className="font-medium">Available:</span> {availability}
          </p>
          <Button
            size="sm"
            variant="outline"
            className="h-7 text-xs border-yellow-400/20 hover:bg-yellow-400/10 hover:text-yellow-400"
          >
            <Coffee className="h-3 w-3 mr-1" />
            Schedule
          </Button>
        </div>
      </div>
    </div>
  )
}

function StudyGroupCard({
  name,
  members,
  schedule,
  location,
}: {
  name: string
  members: number
  schedule: string
  location: string
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg border border-blue-500/20 bg-background/50 hover:bg-blue-500/5 transition-colors">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-users h-5 w-5 text-blue-500"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium text-sm">{name}</h3>
          <span className="text-xs text-muted-foreground">{members} members</span>
        </div>
        <p className="text-xs mt-1">
          <span className="font-medium">Schedule:</span> {schedule}
        </p>
        <p className="text-xs">
          <span className="font-medium">Location:</span> {location}
        </p>
        <div className="flex justify-end mt-2">
          <Button
            size="sm"
            className="h-7 text-xs bg-gradient-to-r from-blue-500 to-pink-500 text-black hover:opacity-90"
          >
            Join Group
          </Button>
        </div>
      </div>
    </div>
  )
}
