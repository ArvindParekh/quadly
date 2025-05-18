## About the project:
- Quadly
	- Problem: “It’s hard to make friends in grad school.”
	- A private, university-only site where students post:
		- What they’re reading, watching, working on
		- “I'd love to talk to someone about…” posts
		- Low-pressure questions or small thoughts
	
		You don’t message directly. Instead, the system:
		- Pairs people with overlapping interests
		- Lets them react (e.g., "I'd love to chat about this!")
		- Suggests gentle nudges to meet (e.g., “grab coffee this week?”)
		- Implements a leaderboard
	
		Think: Subtle matchmaking for friendships.


# Quadly MVP Context

**Problem**: It’s hard to make friends in grad school.

**Solution**: A university-only platform where students can post their current activities and interests (books, hobbies, thoughts) and get matched with others who share similar interests. The app provides low-pressure ways to start conversations (e.g., “let’s grab coffee this week?”).

## Key Features:
- **User Authentication**: Use NextAuth.js for university-based or email-based login.
- **Profile Creation**: Users set up profiles with interests, books they're reading, hobbies, etc.
- **Interest Posts**: Users can post about what they’re reading, working on, or looking for discussions about.
- **Matchmaking Algorithm**: Pairs users based on shared interests and suggests gentle nudges to connect (e.g., “grab coffee”).
- **Reactions & Interaction**: Users can react to posts and indicate interest in connecting (e.g., "I'd love to chat about this").
- **Database**: Prisma with PostgreSQL to store users, posts, and matches.

## Tech Stack:
- **Next.js** (App Router, SSR, SSG)
- **Prisma** (Database ORM)
- **PostgreSQL** (Database)
- **TailwindCSS** (Styling)
- **TypeScript** (Type Safety)
- **NextAuth.js** (Authentication)

## User Flow:
1. Users sign up and create profiles.
2. They post their current activities or thoughts.
3. The app suggests potential matches based on shared interests.
4. Users can interact by reacting to posts or suggesting a low-pressure meetup (e.g., grab coffee).

## Tools & Resources:
- **React Query / SWR**: For data fetching
- **Tailwind UI**: For UI components
- **Prisma Studio**: For managing database
- **Zod / Yup**: For form validation


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
