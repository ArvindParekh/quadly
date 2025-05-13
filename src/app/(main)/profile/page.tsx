import ProfilePage from "@/components/profile-page/profilePage"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { sessionType } from "@/types/session"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Profile() {
  const session: sessionType | null = await getServerSession(authOptions) 
  if (!session) {
    redirect("/login")
  }
  const userDetails = await prisma.userDetails.findUnique({
    where: {
      userId: session.user.id 
    },
    include: {
      userInterests: {
        include: {
          interest: true
        }
      }
    }
  })

  return (
    <ProfilePage userDetails={userDetails} userId={session.user.id} />
  )
}
