"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Coffee, Clock, Plus, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { CoffeeChatInvitation } from "@/lib/coffee-chat/types"
import { campusVenues } from "@/lib/coffee-chat/venue"

// Mock data for the sidebar
const upcomingChats: CoffeeChatInvitation[] = [
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
    venue: campusVenues[0],
    proposedDateTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
    duration: 60,
    purpose: "casual",
    status: "accepted",
    conversationStarters: [],
    createdAt: new Date(),
    updatedAt: new Date(),
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
    venue: campusVenues[1],
    proposedDateTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    duration: 90,
    purpose: "study",
    status: "accepted",
    conversationStarters: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

const pendingInvitations: CoffeeChatInvitation[] = [
  {
    id: "3",
    fromUserId: "user4",
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
    venue: campusVenues[3],
    proposedDateTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    duration: 45,
    purpose: "networking",
    status: "pending",
    conversationStarters: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export default function CoffeeChatSidebar() {
  const currentUserId = "user1"

  const formatDateTime = (date: Date) => {
    const now = new Date()
    const diffTime = date.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "Today"
    if (diffDays === 1) return "Tomorrow"
    if (diffDays < 7) return `In ${diffDays} days`

    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date)
  }

  const getPurposeEmoji = (purpose: string) => {
    switch (purpose) {
      case "casual":
        return "☕"
      case "study":
        return "📚"
      case "project":
        return "🚀"
      case "book-discussion":
        return "📖"
      case "networking":
        return "🤝"
      default:
        return "☕"
    }
  }

  return (
    <div className="space-y-6">
      {/* Pending Invitations */}
      {pendingInvitations.length > 0 && (
        <Card className="border-yellow-400/20 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-yellow-400/10 to-yellow-400/5">
            <CardTitle className="text-lg flex items-center">
              <Clock className="h-4 w-4 mr-2 text-yellow-400" />
              Pending Invitations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-4">
            {pendingInvitations.slice(0, 2).map((invitation) => {
              const otherUser = invitation.fromUserId === currentUserId ? invitation.toUser : invitation.fromUser
              return (
                <div key={invitation.id} className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 border border-yellow-400/20">
                    <AvatarImage src={otherUser.avatar || "/placeholder.svg"} alt={otherUser.name} />
                    <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-blue-500 text-black text-xs">
                      {otherUser.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <p className="font-medium text-sm truncate">{otherUser.name}</p>
                      <span className="text-sm">{getPurposeEmoji(invitation.purpose)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{formatDateTime(invitation.proposedDateTime)}</p>
                    <p className="text-xs text-muted-foreground truncate">{invitation.venue.name}</p>
                  </div>
                </div>
              )
            })}
          </CardContent>
          <CardFooter className="border-t border-yellow-400/10 pt-4">
            <Link href="/coffee-chats" className="w-full">
              <Button
                variant="outline"
                className="w-full border-yellow-400/20 hover:bg-yellow-400/10 hover:text-yellow-400"
              >
                <Clock className="mr-2 h-4 w-4" />
                View All Pending
              </Button>
            </Link>
          </CardFooter>
        </Card>
      )}

      {/* Upcoming Coffee Chats */}
      <Card className="border-pink-500/20 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
          <CardTitle className="text-lg flex items-center">
            <Coffee className="h-4 w-4 mr-2 text-pink-500" />
            Coffee Chats
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          {upcomingChats.length > 0 ? (
            upcomingChats.slice(0, 3).map((chat) => {
              const otherUser = chat.fromUserId === currentUserId ? chat.toUser : chat.fromUser
              return (
                <div key={chat.id} className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 border border-pink-500/20">
                    <AvatarImage src={otherUser.avatar || "/placeholder.svg"} alt={otherUser.name} />
                    <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-400 text-black text-xs">
                      {otherUser.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <p className="font-medium text-sm truncate">{otherUser.name}</p>
                      <span className="text-sm">{getPurposeEmoji(chat.purpose)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{formatDateTime(chat.proposedDateTime)}</p>
                    <p className="text-xs text-muted-foreground truncate">{chat.venue.name}</p>
                  </div>
                  <Badge variant="outline" className="text-xs bg-green-500/10 text-green-500 border-green-500/20">
                    {chat.status}
                  </Badge>
                </div>
              )
            })
          ) : (
            <div className="text-center py-4">
              <Coffee className="h-8 w-8 mx-auto mb-2 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">No upcoming coffee chats</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="border-t border-pink-500/10 pt-4">
          <div className="flex gap-2 w-full">
            <Link href="/coffee-chats" className="flex-1">
              <Button variant="outline" className="w-full border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500">
                <ArrowRight className="mr-2 h-4 w-4" />
                View All
              </Button>
            </Link>
            <Link href="/dashboard/matches">
              <Button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90">
                <Plus className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
