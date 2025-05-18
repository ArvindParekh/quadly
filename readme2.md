# Quadly - University Connect

**Quadly - University Connect** is a social platform designed to help university students connect, share, and collaborate. The project aims to foster meaningful connections through posts, matches, interests, and more, all within a modern, scalable web application.

---

## 🚀 Features

- **User Profiles:** Register, update, and manage user accounts.
- **Posts & Comments:** Share content, like, and comment on posts.
- **Matching System:** Connect with other users based on interests.
- **Interests:** Tag and discover users with similar interests.
- **API-First:** RESTful API routes for all major resources.
- **Modern Stack:** Built with Next.js, Prisma, TailwindCSS, and more.

---

## 🗂️ Project Structure

```
Quadly - University Connect/
├── src/                # Application source code
│   ├── pages/          # Next.js pages (API routes, frontend)
│   ├── components/     # React components
│   └── ...             # Other app logic
├── prisma/             # Prisma schema and migrations
├── public/             # Static assets
├── plan.tldr           # Project planning, schemas, and flow
├── README.md           # Project documentation
├── package.json        # Project dependencies and scripts
├── tailwind.config.ts  # TailwindCSS configuration
└── ...                 # Other config and support files
```

---

## 📋 API Overview

- **User**
  - `GET /api/user/:id` - Get user by ID
  - `POST /api/user/:id` - Create new user
  - `PATCH /api/user/:id` - Update user
  - `GET /api/user/:id/posts` - Get all posts by user
  - `GET /api/user/:id/comments` - Get all comments by user

- **Posts**
  - `GET /api/posts/:id` - Get post by ID
  - `POST /api/posts/:id` - Create new post
  - `PATCH /api/posts/:id` - Update post
  - `GET /api/posts` - Get all posts

- **Matches**
  - `GET /api/matches/:id` - Get match by ID
  - `POST /api/matches` - Create new match
  - `PATCH /api/matches/:id` - Update match
  - `GET /api/matches` - Get all matches

---

## ✅ What's Done

- Core database schema (users, posts, matches, interests)
- Basic API routes for users, posts, and matches
- Initial frontend and backend integration
- Planning and flow documentation (`plan.tldr`)
- TailwindCSS and component setup

---

## 🛠️ What's Left / TODO

- **Leaderboard:** Implement leaderboard feature for user engagement
- **Like Tracking:** Show which users liked a post
- **Frontend Polish:** Improve UI/UX and add more interactive components
- **Authentication:** Integrate NextAuth for secure login
- **Testing:** Add unit and integration tests
- **Deployment:** Prepare for production deployment

---

## 🧑‍💻 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/quadly-university-connect.git
   cd quadly-university-connect
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up the database:**
   - Configure your database in `prisma/schema.prisma`
   - Run migrations:
     ```bash
     npx prisma migrate dev
     ```

4. **Run the development server:**
   ```bash
   pnpm dev
   ```

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for suggestions, bug fixes, or new features.

---

## 📄 License

This project is licensed under the MIT License.

---

## 📬 Contact

For questions or feedback, open an issue or reach out to the maintainer.

--- 