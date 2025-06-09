import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Coffee, Calendar, Clock, Users, Sparkles } from "lucide-react"
import DashboardHeader from "@/components/dashboard-header/dashboard-header"
import { CoffeeChatCard } from "@/components/coffee-chat/coffee-chat-card"
import type { CoffeeChatInvitation } from "@/lib/coffee-chat/types"
import { campusVenues } from "@/lib/coffee-chat/venue"
import { getUser } from "@/lib/data/user"
import { sessionType } from "@/types/session"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { getInvitedByMeCoffeeChats, getPastCoffeeChats, getPendingCoffeeChats, getUpcomingCoffeeChats } from "@/lib/data/coffeeChat"

// Mock data for demonstration
const mockInvitations: CoffeeChatInvitation[] = [
  {
    id: "1",
    fromUserId: "user1",
    fromUser: {
      name: "Current User",
      avatar: "/placeholder.svg?height=40&width=40&text=YP",
      department: "Computer Science",
    },
    toUserId: "user2",
    toUser: {
      name: "Taylor Kim",
      avatar: "/placeholder.svg?height=40&width=40&text=TK",
      department: "Computer Science",
    },
    venue: campusVenues[0], // Campus Café
    proposedDateTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
    duration: 60,
    purpose: "casual",
    message: "Hey! I'd love to chat about distributed systems over coffee. Looking forward to meeting you!",
    status: "accepted",
    conversationStarters: [],
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
  },
  {
    id: "2",
    fromUserId: "user3",
    fromUser: {
      name: "Jordan Smith",
      avatar: "/placeholder.svg?height=40&width=40&text=JS",
      department: "Data Science",
    },
    toUserId: "user1",
    toUser: {
      name: "Current User",
      avatar: "/placeholder.svg?height=40&width=40&text=YP",
      department: "Computer Science",
    },
    venue: campusVenues[1], // Library Quiet Study Area
    proposedDateTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    duration: 90,
    purpose: "study",
    message: "Want to work on our machine learning assignments together?",
    status: "pending",
    conversationStarters: [],
    createdAt: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    updatedAt: new Date(Date.now() - 30 * 60 * 1000),
  },
  {
    id: "3",
    fromUserId: "user1",
    fromUser: {
      name: "Current User",
      avatar: "/placeholder.svg?height=40&width=40&text=YP",
      department: "Computer Science",
    },
    toUserId: "user4",
    toUser: {
      name: "Casey Wong",
      avatar: "/placeholder.svg?height=40&width=40&text=CW",
      department: "Computer Engineering",
    },
    venue: campusVenues[2], // Library Collaboration Pods
    proposedDateTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    duration: 75,
    purpose: "project",
    message: "Let's discuss the software architecture project we talked about!",
    status: "completed",
    conversationStarters: [],
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
  },
  {
    id: "4",
    fromUserId: "user5",
    fromUser: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40&text=AJ",
      department: "Computer Science",
    },
    toUserId: "user1",
    toUser: {
      name: "Current User",
      avatar: "/placeholder.svg?height=40&width=40&text=YP",
      department: "Computer Science",
    },
    venue: campusVenues[3], // Student Center Lounge
    proposedDateTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
    duration: 45,
    purpose: "networking",
    status: "declined",
    conversationStarters: [],
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
  },
]

export default async function CoffeeChatsPage() {
  const session: sessionType | null = await getServerSession(authOptions)
  const user = await getUser(session?.user?.id as string);
  const currentUserId = user.userDetails?.id as string

  // const pendingInvitations = mockInvitations.filter((inv) => inv.status === "pending")
  // const upcomingChats = mockInvitations.filter((inv) => inv.status === "accepted")
  // const pastChats = mockInvitations.filter(
  //   (inv) => inv.status === "completed" || inv.status === "declined" || inv.status === "cancelled",
  // )

  const pendingInvitations = await getPendingCoffeeChats(currentUserId);
  const upcomingChats = await getUpcomingCoffeeChats(currentUserId);
  const pastChats = await getPastCoffeeChats(currentUserId);
  const invitedByMe = await getInvitedByMeCoffeeChats(currentUserId);


  const handleStatusChange = (invitationId: string, newStatus: string) => {
    // In a real app, this would update the backend
    console.log(`Updating invitation ${invitationId} to status: ${newStatus}`)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* <DashboardHeader user={user} /> */}

      <main className="container py-6 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Coffee Chats ☕</h1>
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              {pendingInvitations.length} pending • {upcomingChats.length} upcoming
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="border-pink-500/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-yellow-400/10">
                  <Clock className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{pendingInvitations.length}</p>
                  <p className="text-sm text-muted-foreground">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-pink-500/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-green-500/10">
                  <Calendar className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{upcomingChats.length}</p>
                  <p className="text-sm text-muted-foreground">Upcoming</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-pink-500/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-blue-500/10">
                  <Coffee className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{pastChats.filter(chat => chat.status === "ACCEPTED").length}</p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-pink-500/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-pink-500/10">
                  <Users className="h-5 w-5 text-pink-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {new Set(mockInvitations.flatMap((inv) => [inv.fromUserId, inv.toUserId])).size - 1}
                  </p>
                  <p className="text-sm text-muted-foreground">Connections</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coffee Chats Tabs */}
        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="grid w-full grid-cols-4 rounded-xl p-1 bg-pink-500/10 mb-6">
            <TabsTrigger
              value="pending"
              className="rounded-lg data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
            >
              <Clock className="h-4 w-4 mr-2" />
              Pending ({pendingInvitations.length})
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="rounded-lg data-[state=active]:bg-green-500 data-[state=active]:text-black"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Upcoming ({upcomingChats.length})
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-black"
            >
              <Coffee className="h-4 w-4 mr-2" />
              History ({pastChats.length})
            </TabsTrigger>
            <TabsTrigger
              value="invitations-sent"
              className="rounded-lg data-[state=active]:bg-pink-500 data-[state=active]:text-black"
            >
              <Coffee className="h-4 w-4 mr-2" />
              Invitations sent ({invitedByMe.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pendingInvitations.length > 0 ? (
              <div className="space-y-4">
                {pendingInvitations.map((invitation) => (
                  <CoffeeChatCard
                    key={invitation.id}
                    invitation={invitation}
                    currentUserId={currentUserId}
                    // onStatusChange={handleStatusChange}
                  />
                ))}
              </div>
            ) : (
              <Card className="border-pink-500/20">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Clock className="h-12 w-12 text-muted-foreground/50 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No pending invitations</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    When someone invites you for coffee or you send an invitation, it will appear here.
                  </p>
                  <Button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Find People to Connect With
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingChats.length > 0 ? (
              <div className="space-y-4">
                {upcomingChats.map((invitation) => (
                  <CoffeeChatCard
                    key={invitation.id}
                    invitation={invitation}
                    currentUserId={currentUserId}
                    // onStatusChange={handleStatusChange}
                  />
                ))}
              </div>
            ) : (
              <Card className="border-pink-500/20">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Calendar className="h-12 w-12 text-muted-foreground/50 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No upcoming coffee chats</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Accept pending invitations or send new ones to schedule coffee chats.
                  </p>
                  <Button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90">
                    <Coffee className="h-4 w-4 mr-2" />
                    Schedule a Coffee Chat
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {pastChats.length > 0 ? (
              <div className="space-y-4">
                {pastChats.map((invitation) => (
                  <CoffeeChatCard
                    key={invitation.id}
                    invitation={invitation}
                    currentUserId={currentUserId}
                    // onStatusChange={handleStatusChange}
                  />
                ))}
              </div>
            ) : (
              <Card className="border-pink-500/20">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Coffee className="h-12 w-12 text-muted-foreground/50 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No coffee chat history</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Your completed, declined, and cancelled coffee chats will appear here.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="invitations-sent" className="space-y-4">
            {invitedByMe.length > 0 ? (
              <div className="space-y-4">
                {invitedByMe.map((invitation) => (
                  <CoffeeChatCard
                    key={invitation.id}
                    invitation={invitation}
                    currentUserId={currentUserId}
                    // onStatusChange={handleStatusChange}
                  />
                ))}
              </div>
            ) : (
              <Card className="border-pink-500/20">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Coffee className="h-12 w-12 text-muted-foreground/50 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No coffee chats invited by you</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    When you invite someone for coffee, it will appear here.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        
      </main>
    </div>
  )
}
