import type { ConversationStarter } from "./types"

export const conversationStarters: ConversationStarter[] = [
  // Icebreakers
  {
    id: "icebreaker-1",
    category: "icebreaker",
    question: "What's the most interesting thing you've learned this semester?",
    context: "Great for first meetings",
  },
  {
    id: "icebreaker-2",
    category: "icebreaker",
    question: "If you could have coffee with anyone (living or dead), who would it be?",
    context: "Fun conversation starter",
  },
  {
    id: "icebreaker-3",
    category: "icebreaker",
    question: "What's your go-to study spot on campus?",
    context: "Campus-specific icebreaker",
  },
  {
    id: "icebreaker-4",
    category: "icebreaker",
    question: "What's a skill you'd love to learn but haven't had time for?",
    context: "Reveals interests and goals",
  },

  // Academic
  {
    id: "academic-1",
    category: "academic",
    question: "What got you interested in your field of study?",
    context: "Good for understanding motivations",
  },
  {
    id: "academic-2",
    category: "academic",
    question: "What's the most challenging course you've taken so far?",
    context: "Shared academic experiences",
  },
  {
    id: "academic-3",
    category: "academic",
    question: "Are you working on any research projects right now?",
    context: "For grad students and researchers",
  },
  {
    id: "academic-4",
    category: "academic",
    question: "What's your favorite thing about being a student here?",
    context: "Positive campus discussion",
  },

  // Interests
  {
    id: "interests-1",
    category: "interests",
    question: "I see you're into [shared interest]. How did you get started with that?",
    context: "Use shared interests from profiles",
  },
  {
    id: "interests-2",
    category: "interests",
    question: "What's the last book you read that you couldn't put down?",
    context: "For book lovers",
  },
  {
    id: "interests-3",
    category: "interests",
    question: "Do you have any side projects you're passionate about?",
    context: "Great for tech students",
  },
  {
    id: "interests-4",
    category: "interests",
    question: "What's your favorite way to unwind after a long study session?",
    context: "Personal interests and habits",
  },

  // Projects
  {
    id: "projects-1",
    category: "projects",
    question: "What kind of projects are you hoping to work on this semester?",
    context: "For collaboration meetings",
  },
  {
    id: "projects-2",
    category: "projects",
    question: "Have you worked on any group projects that went really well?",
    context: "Understanding collaboration style",
  },
  {
    id: "projects-3",
    category: "projects",
    question: "What tools or technologies are you excited to learn more about?",
    context: "Tech-focused discussions",
  },
  {
    id: "projects-4",
    category: "projects",
    question: "Do you prefer working independently or in teams?",
    context: "Understanding work preferences",
  },
]

export function getConversationStartersForPurpose(purpose: string, sharedInterests?: string[]): ConversationStarter[] {
  let starters: ConversationStarter[] = []

  switch (purpose) {
    case "casual":
      starters = conversationStarters.filter((s) => s.category === "icebreaker" || s.category === "interests")
      break
    case "study":
      starters = conversationStarters.filter((s) => s.category === "academic" || s.category === "icebreaker")
      break
    case "project":
      starters = conversationStarters.filter((s) => s.category === "projects" || s.category === "academic")
      break
    case "book-discussion":
      starters = conversationStarters.filter((s) => s.category === "interests" || s.category === "icebreaker")
      break
    case "networking":
      starters = conversationStarters.filter((s) => s.category === "academic" || s.category === "projects")
      break
    default:
      starters = conversationStarters.filter((s) => s.category === "icebreaker")
  }

  // add personalized starters based on shared interests
  if (sharedInterests && sharedInterests.length > 0) {
    const personalizedStarter: ConversationStarter = {
      id: "personalized-interest",
      category: "interests",
      question: `I noticed we both share an interest in ${sharedInterests[0]}. What drew you to that?`,
      context: "Personalized based on shared interests",
    }
    starters.unshift(personalizedStarter)
  }

  return starters.slice(0, 4) // Return top 4 suggestions
}
