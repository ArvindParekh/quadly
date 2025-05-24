// import { type NextRequest, NextResponse } from "next/server"
// import { matchingService } from "@/lib/matching/matcher"
// import type { UserProfile } from "@/lib/matching/types"

// // Mock data for demonstration
// const mockUsers: UserProfile[] = [
//   {
//     id: "user1",
//     name: "Current User",
//     department: "Computer Science",
//     year: 2,
//     interests: [
//       { id: "i1", name: "Distributed Systems", weight: 8 },
//       { id: "i2", name: "Algorithms", weight: 7 },
//       { id: "i3", name: "Machine Learning", weight: 6 },
//       { id: "i4", name: "Web Development", weight: 5 },
//       { id: "i5", name: "Coffee", weight: 9 },
//     ],
//     currentlyReading: "Designing Data-Intensive Applications",
//   },
//   {
//     id: "user2",
//     name: "Taylor Kim",
//     department: "Computer Science",
//     year: 2,
//     interests: [
//       { id: "i1", name: "Distributed Systems", weight: 9 },
//       { id: "i2", name: "Algorithms", weight: 8 },
//       { id: "i6", name: "Data Structures", weight: 7 },
//     ],
//     currentlyReading: "Clean Code",
//   },
//   {
//     id: "user3",
//     name: "Jordan Smith",
//     department: "Data Science",
//     year: 3,
//     interests: [
//       { id: "i3", name: "Machine Learning", weight: 9 },
//       { id: "i7", name: "Databases", weight: 8 },
//       { id: "i8", name: "Big Data", weight: 7 },
//     ],
//     currentlyReading: "Designing Data-Intensive Applications",
//   },
//   {
//     id: "user4",
//     name: "Casey Wong",
//     department: "Computer Engineering",
//     year: 2,
//     interests: [
//       { id: "i9", name: "Software Architecture", weight: 8 },
//       { id: "i10", name: "System Design", weight: 7 },
//       { id: "i1", name: "Distributed Systems", weight: 6 },
//     ],
//   },
//   {
//     id: "user5",
//     name: "Alex Johnson",
//     department: "Computer Science",
//     year: 3,
//     interests: [
//       { id: "i1", name: "Distributed Systems", weight: 7 },
//       { id: "i11", name: "Software Architecture", weight: 8 },
//       { id: "i12", name: "Databases", weight: 6 },
//     ],
//   },
//   {
//     id: "user6",
//     name: "Morgan Lee",
//     department: "Psychology",
//     year: 2,
//     interests: [
//       { id: "i13", name: "Cognitive Psychology", weight: 9 },
//       { id: "i14", name: "Decision Making", weight: 8 },
//       { id: "i15", name: "Research Methods", weight: 7 },
//     ],
//   },
//   {
//     id: "user7",
//     name: "Jamie Rivera",
//     department: "Literature",
//     year: 3,
//     interests: [
//       { id: "i16", name: "Contemporary Literature", weight: 9 },
//       { id: "i17", name: "Environmental Studies", weight: 7 },
//       { id: "i18", name: "Book Club", weight: 8 },
//     ],
//   },
// ]

// // Initialize the matching service with mock data
// mockUsers.forEach((user) => {
//   matchingService.addUserProfile(user)
// })

// export async function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams
//   const userId = searchParams.get("userId") || "user1" // Default to user1 for demo
//   const limit = Number.parseInt(searchParams.get("limit") || "10")

//   try {
//     const matches = matchingService.findMatchesForUser(userId, limit)
//     return NextResponse.json({ matches })
//   } catch (error) {
//     return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 400 })
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const { userId, filters, limit } = body

//     if (!userId) {
//       return NextResponse.json({ error: "userId is required" }, { status: 400 })
//     }

//     const matches = matchingService.findFilteredMatches(userId, filters || {}, limit || 10)

//     return NextResponse.json({ matches })
//   } catch (error) {
//     return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 400 })
//   }
// }
