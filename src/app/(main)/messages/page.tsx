import { getChats } from "@/actions/chat";
import ChatClient from "@/components/messages/Chat-Client";
import { authOptions } from "@/lib/auth";
import { getUser } from "@/lib/data/user";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function MessagesPage() {
  const session = await getServerSession(authOptions);
  const user = await getUser(session?.user?.id as string);

  if(!session){
    redirect("/");
  }

  const chats = await getChats(user.userDetails?.id as string);

  console.log(chats);

  return <ChatClient chats={chats} />;
}