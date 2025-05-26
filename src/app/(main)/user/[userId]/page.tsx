import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Coffee, Share, Sparkles, Users } from "lucide-react"
import InterestPost from "@/components/interest-post"
import { Separator } from "@/components/ui/separator"
import { getUser, getUserWithPosts } from "@/lib/data/user"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { sessionType } from "@/types/session"
import { getCommonInterests } from "@/lib/data/interests"
import { redirect } from "next/navigation"
import { getPostsByUserId } from "@/lib/data/posts"
import SendMessageButton from "@/components/profile-page/sendMessageButton"

interface UserProfileProps {
  params: {
    userId: string
  }
}

export default async function UserProfilePage({ params }: UserProfileProps) {
  // In a real app, you would fetch user data based on the username
  // This is mock data for demonstration
  console.log(params);
  const session: sessionType | null = await getServerSession(authOptions);

  if (session?.user?.id === params.userId) {
    redirect("/profile");
  }

  const user = await getUserWithPosts(params.userId);
  const thisUser = await getUser(session?.user?.id as string);
  const commonInterests = await getCommonInterests(params.userId, thisUser.id);
  const userPosts = await getPostsByUserId(params.userId);

  // const user = {
  //   username: params.username,
  //   name: "Taylor Kim",
  //   avatar: "/placeholder.svg?height=200&width=200&text=TK",
  //   department: "Computer Science",
  //   year: 2,
  //   bio: "Grad student passionate about distributed systems and software architecture. Always looking to connect with fellow tech enthusiasts over coffee! ☕",
  //   interests: [
  //     { id: "i1", name: "Distributed Systems", category: "Technology", weight: 8 },
  //     { id: "i2", name: "Algorithms", category: "Technology", weight: 7 },
  //     { id: "i3", name: "Data Structures", category: "Technology", weight: 7 },
  //     { id: "i4", name: "Coffee", category: "Lifestyle", weight: 9 },
  //     { id: "i5", name: "Hiking", category: "Outdoors", weight: 6 },
  //   ],
  //   currentlyReading: "Clean Code by Robert C. Martin",
  //   connectionPreferences: ["Coffee Chats", "Study Groups", "Project Collaboration"],
  //   matchPercentage: 92,
  //   mutualInterests: ["Distributed Systems", "Algorithms"],
  //   mutualConnections: 3,
  //   posts: [
  //     {
  //       id: "p1",
  //       content:
  //         "Just finished implementing a distributed consensus algorithm for my research project. Anyone interested in discussing Raft vs Paxos?",
  //       timestamp: "2 days ago",
  //       likes: 15,
  //       comments: 7,
  //       interests: ["Distributed Systems", "Algorithms", "Research"],
  //     },
  //     {
  //       id: "p2",
  //       content:
  //         "Found this amazing coffee shop near campus with free WiFi and great study vibes. Who wants to join for a study session this weekend? ☕📚",
  //       timestamp: "1 week ago",
  //       likes: 24,
  //       comments: 12,
  //       interests: ["Coffee", "Study Groups"],
  //     },
  //   ],
  //   upcomingEvents: [
  //     {
  //       id: "e1",
  //       title: "CS Department Mixer",
  //       date: "May 15, 2023",
  //       time: "6:00 PM - 8:00 PM",
  //       location: "Computer Science Building, Room 101",
  //     },
  //   ],
  // }


  // Generate a color based on the first letter of the username
  const getColorFromUsername = (username: string) => {
    const colors = ["pink", "yellow", "blue"]
    const charCode = username.charCodeAt(0)
    return colors[charCode % colors.length]
  }

  const userColor = getColorFromUsername(user.userDetails?.name || "")

  return (
    <div className="min-h-screen bg-background">
      {/* <DashboardHeader user={user} /> */}

      <main className="container py-6 mx-auto">
        {/* Profile Header with Blob Background */}
        <div className="relative rounded-3xl overflow-hidden mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-yellow-400/10 to-blue-500/10"></div>

          {/* Decorative blobs */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 py-12 px-6 md:px-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* Profile Avatar with Decorative Ring */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 scale-[1.15] blur-sm animate-pulse"></div>
              <Avatar className="h-32 w-32 border-4 border-background relative">
                <AvatarImage src={user.userDetails?.profilePicture || "/placeholder.svg"} alt={user.userDetails?.name || ""} />
                <AvatarFallback className="text-4xl bg-gradient-to-br from-pink-500 to-yellow-400 text-black">
                  {user.userDetails?.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="absolute bottom-1 right-1 h-6 w-6 rounded-full bg-green-500 border-4 border-background"></div>
            </div>

            {/* User Info */}
            <div className="text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-2 mb-2">
                <h1 className="text-3xl font-bold">{user.userDetails?.name}</h1>
                <Badge className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black">
                  {/* {user.userDetails?.matchPercentage}% Match */}
                  40% Match
                </Badge>
              </div>
              <p className="text-muted-foreground mb-4">
                {user.userDetails?.department}, Year {user.userDetails?.year}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90">
                  <Coffee className="mr-2 h-4 w-4" />
                  Coffee Chat
                </Button>
                <SendMessageButton thisUserId={thisUser.userDetails?.id as string} userId={user.userDetails?.id as string} />
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-500/10 hover:text-pink-500">
                  <Share className="h-4 w-4" />
                  <span className="sr-only">Share Profile</span>
                </Button>
              </div>
            </div>

            {/* Match Info Card */}
            <div className="hidden md:block ml-auto">
              <Card className="border-pink-500/20 bg-background/80 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 text-pink-500" />
                    Why You Match
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-yellow-400" />
                      {/* <p className="text-sm">{user.mutualConnections} mutual connections</p> */}
                      <p className="text-sm">3 mutual connections</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Common interests:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {/* {user.mutualInterests.map((interest) => ( */}
                        {commonInterests.map((interest) => (
                          <Badge
                            key={interest.id}
                            variant="outline"
                            className="text-xs bg-pink-500/10 text-pink-500 border-pink-500/20"
                          >
                            {interest.interestName}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6">
          <div className="space-y-6">
            {/* Profile Tabs */}
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-xl p-1 bg-pink-500/10">
                <TabsTrigger
                  value="about"
                  className="rounded-lg data-[state=active]:bg-pink-500 data-[state=active]:text-black"
                >
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="posts"
                  className="rounded-lg data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                >
                  Posts
                </TabsTrigger>
                <TabsTrigger
                  value="events"
                  className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-black"
                >
                  Events
                </TabsTrigger>
              </TabsList>

              {/* About Tab */}
              <TabsContent value="about" className="space-y-6 mt-6">
                <Card className="border-pink-500/20">
                  <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                    <CardTitle>Bio</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p>{user.userDetails?.bio || "No bio"}</p>
                  </CardContent>
                </Card>

                <Card className="border-pink-500/20">
                  <CardHeader className="bg-gradient-to-r from-yellow-400/10 to-blue-500/10">
                    <CardTitle>Interests</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2">
                      {commonInterests.map((interest, index) => {
                        const colors = [
                          "bg-pink-500/10 text-pink-500 border-pink-500/20",
                          "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
                          "bg-blue-500/10 text-blue-500 border-blue-500/20",
                        ]
                        const colorIndex = index % colors.length
                        return (
                          <Badge key={interest.id} variant="outline" className={colors[colorIndex]}>
                            {interest.interestName}
                          </Badge>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-pink-500/20">
                  <CardHeader className="bg-gradient-to-r from-blue-500/10 to-pink-500/10">
                    <CardTitle>Connection Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2">
                      {/* {user.userDetails?.connectionPreferences.map((preference, index) => {
                        const colors = [
                          "bg-pink-500/10 text-pink-500 border-pink-500/20",
                          "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
                          "bg-blue-500/10 text-blue-500 border-blue-500/20",
                        ]
                        const colorIndex = index % colors.length
                        return (
                          <Badge key={preference} variant="outline" className={colors[colorIndex]}>
                            {preference}
                          </Badge>
                        )
                      })} */}
                      Incoming feature
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Posts Tab */}
              <TabsContent value="posts" className="space-y-4 mt-6">
                {userPosts.length > 0 ? (
                userPosts.map((post) => (
                  <InterestPost
                    key={post.id}
                    postId={post.id}
                    userId={params.userId}
                    user={{
                      name: user.userDetails?.name as string,
                      avatar: user.userDetails?.profilePicture as string,
                      department: user.userDetails?.department as string,
                    }}
                    content={post.content}
                    interests={post.postTags.map((tag) => tag.tagName)}
                    timestamp={post.createdAt.toLocaleString()}
                    likes={post.reaction?.likes || 0}
                      comments={post.commentCount || 0}
                    />
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No posts to show</p>
                  </div>
                )}
              </TabsContent>

              {/* Events Tab */}
              <TabsContent value="events" className="space-y-4 mt-6">
                <Card className="border-pink-500/20">
                  <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                    <CardTitle>Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {user.userDetails?.asEventOrganizer && user.userDetails?.asEventOrganizer.length > 0 ? (
                      <div className="space-y-4">
                        {user.userDetails?.asEventOrganizer.map((event) => (
                          <div key={event.id} className="rounded-lg border border-pink-500/20 p-4">
                            <h3 className="font-medium mb-2">{event.title}</h3>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-start gap-2">
                                <Calendar className="h-4 w-4 mt-0.5 text-pink-500" />
                                <span>
                                  {event.date} • {event.time}
                                </span>
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
                                  className="h-4 w-4 mt-0.5 text-pink-500"
                                >
                                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                  <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span>{event.location}</span>
                              </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90"
                              >
                                RSVP
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <Calendar className="h-12 w-12 mx-auto mb-2 opacity-50" />
                        <p>No upcoming events</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-pink-500/20">
                  <CardHeader className="bg-gradient-to-r from-yellow-400/10 to-blue-500/10">
                    <CardTitle>Past Events</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="text-center py-8 text-muted-foreground">
                      <Calendar className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>No past events to show</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Currently Reading */}
            <Card className="border-pink-500/20 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                <CardTitle className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-pink-500" />
                  Currently Reading
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="w-16 h-24 bg-gradient-to-br from-pink-500/20 to-yellow-400/20 rounded-md flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-pink-500" />
                  </div>
                  <div>
                    <p className="font-medium">{user.userDetails?.reading?.split(" by ")[0] || "No reading"}</p>
                    {user.userDetails?.reading?.split(" by ")[1] ? <p className="text-sm text-muted-foreground">by {user.userDetails?.reading?.split(" by ")[1]}</p> : null}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match Info Card (Mobile) */}
            <Card className="border-pink-500/20 md:hidden">
              <CardHeader className="bg-gradient-to-r from-yellow-400/10 to-blue-500/10">
                <CardTitle className="text-lg flex items-center">
                  <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
                  Why You Match
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-yellow-400" />
                    {/* <p className="text-sm">{user.mutualConnections} mutual connections</p> */}
                    <p className="text-sm">3 mutual connections</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Common interests:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {/* {user.mutualInterests.map((interest) => ( */}
                      {commonInterests.map((interest) => (
                        <Badge
                          key={interest.id}
                          variant="outline"
                          className="text-xs bg-yellow-400/10 text-yellow-400 border-yellow-400/20"
                        >
                          {interest.interestName}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mutual Connections */}
            <Card className="border-pink-500/20 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500/10 to-pink-500/10">
                <CardTitle className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-blue-500" />
                  Mutual Connections
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex -space-x-2 mb-4">
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32&text=AJ" />
                    <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-400 text-black">
                      AJ
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32&text=ML" />
                    <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-blue-500 text-black">
                      ML
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32&text=CW" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-pink-500 text-black">
                      CW
                    </AvatarFallback>
                  </Avatar>
                </div>
                <p className="text-sm text-muted-foreground">Connected with Alex Johnson, Morgan Lee, and Casey Wong</p>
                <p className="text-sm text-muted-foreground">(Incoming feature)</p>
              </CardContent>
              <CardFooter className="border-t border-pink-500/10 pt-4">
                <Button
                  variant="outline"
                  className="w-full border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500"
                >
                  View All Connections
                </Button>
              </CardFooter>
            </Card>

            {/* Similar Users */}
            <Card className="border-pink-500/20 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                <CardTitle className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-pink-500" />
                  Similar Users
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-pink-500/20">
                    <AvatarImage src="/placeholder.svg?height=40&width=40&text=JS" />
                    <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-400 text-black">
                      JS
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <p className="font-medium truncate">Jordan Smith</p>
                      <span className="text-xs text-pink-500">85%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Data Science</p>
                  </div>
                </div>

                <Separator className="bg-pink-500/10" />

                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-pink-500/20">
                    <AvatarImage src="/placeholder.svg?height=40&width=40&text=CW" />
                    <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-400 text-black">
                      CW
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <p className="font-medium truncate">Casey Wong</p>
                      <span className="text-xs text-pink-500">78%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Computer Engineering</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-pink-500/10 pt-4">
                <Button
                  variant="outline"
                  className="w-full border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500"
                >
                  View More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
