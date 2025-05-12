import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell, Calendar, Heart, MessageSquare, Sparkles, User, Users } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background">

      <main className="container py-6 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Notifications 🔔</h1>
          <Button variant="outline" className="border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500">
            Mark All as Read
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 rounded-xl p-1 bg-pink-500/10 mb-6">
            <TabsTrigger
              value="all"
              className="rounded-lg data-[state=active]:bg-pink-500 data-[state=active]:text-black"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="matches"
              className="rounded-lg data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
            >
              <Users className="h-4 w-4 mr-2" />
              Matches
            </TabsTrigger>
            <TabsTrigger
              value="messages"
              className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-black"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Messages
            </TabsTrigger>
            <TabsTrigger
              value="likes"
              className="rounded-lg data-[state=active]:bg-pink-500 data-[state=active]:text-black"
            >
              <Heart className="h-4 w-4 mr-2" />
              Likes
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className="rounded-lg data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Events
            </TabsTrigger>
          </TabsList>

          <Card className="border-pink-500/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10 p-4">
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-pink-500" />
                Recent Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <TabsContent value="all" className="m-0">
                <ScrollArea className="h-[calc(100vh-20rem)]">
                  <NotificationList notifications={allNotifications} />
                </ScrollArea>
              </TabsContent>
              <TabsContent value="matches" className="m-0">
                <ScrollArea className="h-[calc(100vh-20rem)]">
                  <NotificationList notifications={allNotifications.filter((n) => n.type === "match")} />
                </ScrollArea>
              </TabsContent>
              <TabsContent value="messages" className="m-0">
                <ScrollArea className="h-[calc(100vh-20rem)]">
                  <NotificationList notifications={allNotifications.filter((n) => n.type === "message")} />
                </ScrollArea>
              </TabsContent>
              <TabsContent value="likes" className="m-0">
                <ScrollArea className="h-[calc(100vh-20rem)]">
                  <NotificationList notifications={allNotifications.filter((n) => n.type === "like")} />
                </ScrollArea>
              </TabsContent>
              <TabsContent value="events" className="m-0">
                <ScrollArea className="h-[calc(100vh-20rem)]">
                  <NotificationList notifications={allNotifications.filter((n) => n.type === "event")} />
                </ScrollArea>
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </main>
    </div>
  )
}

interface Notification {
  id: string
  type: "match" | "message" | "like" | "event" | "system"
  title: string
  description: string
  time: string
  read: boolean
  user?: {
    name: string
    avatar: string
  }
  action?: {
    label: string
    icon: React.ReactNode
  }
}

const allNotifications: Notification[] = [
  {
    id: "1",
    type: "match",
    title: "New Match!",
    description: "You and Taylor Kim matched! You both share an interest in Distributed Systems.",
    time: "2 minutes ago",
    read: false,
    user: {
      name: "Taylor Kim",
      avatar: "/placeholder.svg?height=40&width=40&text=TK",
    },
    action: {
      label: "Message",
      icon: <MessageSquare className="h-3 w-3 mr-1" />,
    },
  },
  {
    id: "2",
    type: "message",
    title: "New Message",
    description: "Taylor Kim sent you a message: 'Hey! I saw we matched on Quadly...'",
    time: "10 minutes ago",
    read: false,
    user: {
      name: "Taylor Kim",
      avatar: "/placeholder.svg?height=40&width=40&text=TK",
    },
    action: {
      label: "Reply",
      icon: <MessageSquare className="h-3 w-3 mr-1" />,
    },
  },
  {
    id: "3",
    type: "like",
    title: "Post Liked",
    description: "Jordan Smith liked your post about Designing Data-Intensive Applications.",
    time: "1 hour ago",
    read: true,
    user: {
      name: "Jordan Smith",
      avatar: "/placeholder.svg?height=40&width=40&text=JS",
    },
  },
  {
    id: "4",
    type: "event",
    title: "Event Reminder",
    description: "Coffee chat with Taylor Kim tomorrow at 3:00 PM at Campus Café.",
    time: "2 hours ago",
    read: true,
    action: {
      label: "View Details",
      icon: <Calendar className="h-3 w-3 mr-1" />,
    },
  },
  {
    id: "5",
    type: "match",
    title: "New Match!",
    description: "You and Casey Wong matched! You both share an interest in Software Architecture.",
    time: "3 hours ago",
    read: true,
    user: {
      name: "Casey Wong",
      avatar: "/placeholder.svg?height=40&width=40&text=CW",
    },
    action: {
      label: "Message",
      icon: <MessageSquare className="h-3 w-3 mr-1" />,
    },
  },
  {
    id: "6",
    type: "system",
    title: "Profile Verified",
    description: "Your university email has been verified. You now have full access to Quadly!",
    time: "1 day ago",
    read: true,
    action: {
      label: "View Profile",
      icon: <User className="h-3 w-3 mr-1" />,
    },
  },
  {
    id: "7",
    type: "event",
    title: "New Event",
    description: "CS Department Mixer on May 15, 2023 at 6:00 PM. 42 students are attending.",
    time: "1 day ago",
    read: true,
    action: {
      label: "RSVP",
      icon: <Calendar className="h-3 w-3 mr-1" />,
    },
  },
  {
    id: "8",
    type: "like",
    title: "Post Liked",
    description: "Alex Johnson and 3 others liked your post about distributed systems.",
    time: "2 days ago",
    read: true,
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40&text=AJ",
    },
  },
  {
    id: "9",
    type: "message",
    title: "New Message",
    description: "Casey Wong sent you a message: 'Thanks for the distributed systems notes!'",
    time: "3 days ago",
    read: true,
    user: {
      name: "Casey Wong",
      avatar: "/placeholder.svg?height=40&width=40&text=CW",
    },
    action: {
      label: "Reply",
      icon: <MessageSquare className="h-3 w-3 mr-1" />,
    },
  },
  {
    id: "10",
    type: "system",
    title: "Welcome to Quadly!",
    description: "Complete your profile to start connecting with fellow students.",
    time: "1 week ago",
    read: true,
    action: {
      label: "Complete Profile",
      icon: <User className="h-3 w-3 mr-1" />,
    },
  },
]

function NotificationList({ notifications }: { notifications: Notification[] }) {
  if (notifications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <Bell className="h-12 w-12 mb-4 text-muted-foreground/50" />
        <p>No notifications to display</p>
      </div>
    )
  }

  return (
    <div>
      {notifications.map((notification, index) => (
        <div key={notification.id}>
          <div
            className={`flex items-start gap-4 p-4 ${
              notification.read ? "" : "bg-pink-500/5"
            } hover:bg-pink-500/10 transition-colors`}
          >
            {notification.user ? (
              <Avatar className="h-10 w-10 border border-pink-500/20">
                <AvatarImage src={notification.user.avatar || "/placeholder.svg"} alt={notification.user.name} />
                <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-400 text-black">
                  {notification.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            ) : (
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-br from-pink-500/20 to-yellow-400/20">
                {notification.type === "event" ? (
                  <Calendar className="h-5 w-5 text-pink-500" />
                ) : notification.type === "system" ? (
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Bell className="h-5 w-5 text-pink-500" />
                )}
              </div>
            )}
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className={`font-medium ${notification.read ? "" : "text-pink-500"}`}>{notification.title}</h4>
                <div className="flex items-center gap-2">
                  {!notification.read && <Badge className="bg-pink-500 text-xs h-5 px-1.5">New</Badge>}
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.time}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{notification.description}</p>
              {notification.action && (
                <Button
                  size="sm"
                  className="h-7 mt-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90"
                >
                  {notification.action.icon}
                  {notification.action.label}
                </Button>
              )}
            </div>
          </div>
          {index < notifications.length - 1 && <Separator className="bg-pink-500/5" />}
        </div>
      ))}
    </div>
  )
}
