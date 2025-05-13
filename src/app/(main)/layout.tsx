import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/data/user";
import DashboardHeader from "@/components/dashboard-header/dashboard-header";
import { sessionType } from "@/types/session";

export default async function MainLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const session: sessionType | null = await getServerSession(authOptions);

   if (!session) {
      redirect("/login");
   }

   const user = await getUser(session?.user?.id);
   return (
      <>
         <DashboardHeader user={user} />
         {children}
      </>
   );
}
