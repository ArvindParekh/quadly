"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, MessageSquare, Coffee, CheckCircle, XCircle, RotateCcw } from "lucide-react"
import type { CoffeeChatInvitation } from "@/lib/coffee-chat/types"
import { toast } from "sonner"

interface CoffeeChatCardProps {
  invitation: CoffeeChatInvitation
  currentUserId: string
  onStatusChange?: (invitationId: string, newStatus: string) => void
}

export function CoffeeChatCard({ invitation, currentUserId, onStatusChange }: CoffeeChatCardProps) {
  const isFromCurrentUser = invitation.fromUserId === currentUserId
  const otherUser = isFromCurrentUser ? invitation.toUser : invitation.fromUser

  const formatDateTime = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-400/10 text-yellow-400 border-yellow-400/20"
      case "accepted":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "declined":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "completed":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "cancelled":
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />
      case "accepted":
        return <CheckCircle className="h-4 w-4" />
      case "declined":
        return <XCircle className="h-4 w-4" />
      case "completed":
        return <Coffee className="h-4 w-4" />
      case "cancelled":
        return <XCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
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

  const handleAccept = () => {
    onStatusChange?.(invitation.id, "accepted")
    toast.success(`Coffee chat with ${otherUser.name} accepted! ☕`)
  }

  const handleDecline = () => {
    onStatusChange?.(invitation.id, "declined")
    toast.success("Coffee chat invitation declined")
  }

  const handleReschedule = () => {
    // This would open a reschedule modal
    toast.info("Reschedule feature coming soon!")
  }

  const handleMessage = () => {
    // This would open the messaging interface
    toast.info("Opening message thread...")
  }

  const handleMarkCompleted = () => {
    onStatusChange?.(invitation.id, "completed")
    toast.success("Coffee chat marked as completed! 🎉")
  }

  return (
    <Card className="border-pink-500/20 overflow-hidden hover:shadow-md transition-all">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border border-pink-500/20">
              <AvatarImage src={otherUser.avatar || "/placeholder.svg"} alt={otherUser.name} />
              <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-400 text-black">
                {otherUser.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">
                {isFromCurrentUser ? `Coffee with ${otherUser.name}` : `${otherUser.name} invited you`}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{otherUser.department}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">{getPurposeEmoji(invitation.purpose)}</span>
            <Badge variant="outline" className={getStatusColor(invitation.status)}>
              {getStatusIcon(invitation.status)}
              <span className="ml-1 capitalize">{invitation.status}</span>
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Meeting Details */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-pink-500" />
            <span>{formatDateTime(invitation.proposedDateTime)}</span>
            <Clock className="h-4 w-4 text-yellow-400 ml-2" />
            <span>{invitation.duration} min</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-blue-500" />
            <span>{invitation.venue.name}</span>
            <Badge variant="outline" className="text-xs ml-2">
              {invitation.venue.type}
            </Badge>
          </div>
        </div>

        {/* Personal Message */}
        {invitation.message && (
          <div className="p-3 rounded-lg bg-pink-500/5 border border-pink-500/10">
            <p className="text-sm italic">"{invitation.message}"</p>
          </div>
        )}

        {/* Venue Details */}
        <div className="text-xs text-muted-foreground">
          <p>{invitation.venue.description}</p>
          <p className="mt-1">📍 {invitation.venue.location}</p>
        </div>
      </CardContent>

      <CardFooter className="border-t border-pink-500/10 pt-4">
        <div className="flex gap-2 w-full">
          {invitation.status === "pending" && !isFromCurrentUser && (
            <>
              <Button
                size="sm"
                onClick={handleAccept}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Accept
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleDecline}
                className="flex-1 border-red-500/20 hover:bg-red-500/10 hover:text-red-500"
              >
                <XCircle className="h-4 w-4 mr-2" />
                Decline
              </Button>
            </>
          )}

          {invitation.status === "accepted" && (
            <>
              <Button
                size="sm"
                onClick={handleMessage}
                className="flex-1 bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleReschedule}
                className="border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reschedule
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleMarkCompleted}
                className="border-green-500/20 hover:bg-green-500/10 hover:text-green-500"
              >
                <Coffee className="h-4 w-4 mr-2" />
                Complete
              </Button>
            </>
          )}

          {invitation.status === "pending" && isFromCurrentUser && (
            <Button
              size="sm"
              variant="outline"
              onClick={handleMessage}
              className="w-full border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
          )}

          {(invitation.status === "declined" || invitation.status === "cancelled") && (
            <Button
              size="sm"
              variant="outline"
              onClick={handleMessage}
              className="w-full border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
          )}

          {invitation.status === "completed" && (
            <div className="w-full text-center text-sm text-muted-foreground">
              <Coffee className="h-4 w-4 inline mr-2" />
              Coffee chat completed! Hope it went well ✨
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
