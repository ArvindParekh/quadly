import { z } from "zod";

export const createCoffeeChatSchema = z.object({
    inviterId: z.string().min(1),
    inviteeId: z.string().min(1),
    purpose: z.object({
        id: z.string().min(1),
        label: z.string().min(1),
        description: z.string().min(1),
        suggestedDuration: z.number().min(1).max(120),
    }),
    duration: z.number().min(1).max(120),
    personalMessage: z.string().optional(),
    scheduledAt: z.date(),
    venue: z.object({
        name: z.string().min(1),
        description: z.string().min(1),
        tags: z.array(z.string()).min(1),
        rating: z.number().min(1).max(5),
        location: z.string().min(1),
        hours: z.string().min(1),
        noiseLevel: z.string().min(1),
        // capacity: z.string().min(1),
    }),
    
    
    
    
    // inviterId: z.string().min(1),
    // inviteeId: z.string().min(1),
    // purposeId: z.string().min(1),
    // venueId: z.string().min(1),
    // duration: z.number().min(1).max(120),
    // personalMessage: z.string().optional(),
    // status: z.enum(["pending", "accepted", "declined", "completed", "cancelled"]),
    // scheduledAt: z.date(),
})

// {
//   "toUser": {
//     "id": "a94cd98a-8e1a-47c2-ae0c-d5f0fed47fc2",
//     "name": "Demo User",
//     "avatar": "/placeholder.svg?height=40&width=40",
//     "department": "Computer Science"
//   },
//   "venue": {
//     "id": "library-collaboration",
//     "name": "Library Collaboration Pods",
//     "type": "library",
//     "description": "Small group study rooms perfect for project discussions",
//     "features": [
//       "wifi",
//       "private",
//       "whiteboards",
//       "outlets"
//     ],
//     "rating": 4.7,
//     "location": "Main Library, 3rd Floor",
//     "hours": "6:00 AM - 12:00 AM",
//     "atmosphere": "quiet",
//     "capacity": "small"
//   },
//   "purpose": {
//     "id": "study",
//     "label": "Study Session",
//     "description": "Work on assignments or study together",
//     "icon": "📚",
//     "suggestedDuration": 120
//   },
//   "dateTime": "2025-06-09 12:00",
//   "duration": 120,
//   "message": "sdadad"
// }