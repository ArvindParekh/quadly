export interface WaitlistEntry {
    id: string
    email: string
    createdAt: Date
    source?: string // Track where they came from
    interests?: string[] // Optional interests they're excited about
  }
  
  export interface WaitlistSubmission {
    email: string
    source?: string
    interests?: string[]
  }
  
  export interface WaitlistResponse {
    success: boolean
    message: string
    position?: number // Their position in the waitlist
  }
  