# Quadly - University Connect

## About the Project
Quadly is a university-only platform designed to solve the common problem: "It's hard to make friends in graduate school." Our platform enables students to connect based on shared interests, activities, and academic pursuits in a low-pressure environment.

### Core Concept
Students can post about:
- What they're currently reading or watching
- Topics they'd love to discuss with others
- Academic projects they're working on
- Low-pressure thoughts or questions

Instead of direct messaging, Quadly's intelligent system:
- Pairs people with overlapping interests using our similarity algorithm
- Enables reactions to posts to express interest in topics
- Suggests gentle ways to connect (like "grab coffee this week?")
- Includes a leaderboard for engagement

Think of it as subtle matchmaking for friendships in the university environment.

## Features

### User Experience
- **University-based Authentication**: Secure login system
- **Rich User Profiles**: Share your interests, department, year, and current readings
- **Interest-based Posts**: Share what you're working on or thinking about
- **Smart Matching**: Our algorithm connects you with like-minded peers
- **Coffee Chat System**: Low-pressure way to schedule meetups
- **Direct Messaging**: Once connected, communicate directly
- **Events**: Discover and join campus events

### Technical Features
- **Real-time Notifications**: Stay updated on interactions
- **Similarity Scoring**: Advanced algorithm to find your best matches
- **Comment System**: Engage in discussions on posts
- **Tagging System**: Categorize posts for better discovery

## Tech Stack

### Frontend
- **Next.js 15** with App Router
- **React 19**
- **TypeScript**
- **TailwindCSS 4** for styling
- **Radix UI and Shadcn UI** components

### Backend
- **Next.js Server Actions**
- **Prisma ORM** with PostgreSQL
- **NextAuth.js** for authentication
- **WebSockets** for real-time features

### Infrastructure
- **Docker** and **Docker Compose** for development environment
- **PostgreSQL** database
- **Redis** for caching and real-time features

## Getting Started

### Prerequisites
- Node.js (latest LTS version)
- pnpm
- Docker and Docker Compose (for containerized development)

### Development Setup

#### Using Docker (Recommended, but being updated as the project grows - might break)
```bash
# Clone the repository
git clone <repository-url>
cd quadly-university-connect

# Start the Docker containers
docker-compose up
```

#### Local Development
```bash
# Install dependencies
pnpm install

# Set up your .env file with database connection
# Example: DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres

# Run database migrations
pnpm prisma migrate dev

# Start the development server with Turbopack
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure
- `/src/app`: Next.js application routes
- `/src/components`: Reusable UI components
- `/src/actions`: Server actions for data mutations
- `/src/lib`: Utility functions and shared code
- `/prisma`: Database schema and migrations
- `/socket`: WebSocket server for real-time features

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is private and not licensed for public use.
