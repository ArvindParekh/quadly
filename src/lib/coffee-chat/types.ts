export interface Venue {
    id: string
    name: string
    type: "cafe" | "library" | "outdoor" | "study-room" | "dining"
    description: string
    features: string[] // ['wifi', 'quiet', 'food', 'outlets', 'group-friendly']
    rating: number
    location: string
    hours: string
    atmosphere: "quiet" | "moderate" | "lively"
    capacity: "small" | "medium" | "large"
  }
  
  export interface CoffeeChatInvitation {
    id: string
    fromUserId: string
    fromUser: {
      name: string
      avatar: string
      department: string
    }
    toUserId: string
    toUser: {
      name: string
      avatar: string
      department: string
    }
    venue: Venue
    proposedDateTime: Date
    duration: number // minutes
    purpose: "study" | "casual" | "project" | "book-discussion" | "networking"
    message?: string
    status: "pending" | "accepted" | "declined" | "completed" | "cancelled"
    conversationStarters?: string[]
    createdAt: Date
    updatedAt: Date
    rescheduleCount?: number
  }
  
  export interface ConversationStarter {
    id: string
    category: "icebreaker" | "academic" | "interests" | "projects"
    question: string
    context?: string // When to use this starter
  }
  
  export type CoffeeChatPurpose = {
    id: string
    label: string
    description: string
    icon: string
    suggestedDuration: number
  }
  