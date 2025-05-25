import ChatPageClient from "./chatPage";
import { getMessages } from "@/actions/messages";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getUser } from "@/lib/data/user";
import { sessionType } from "@/types/session";
import { getChat } from "@/actions/chat";

export default async function ChatPage({params}: {params: {chatId: string}}) {

  const chatId = params.chatId;
  const currentChat = await getChat(chatId);
  // const messages = await getMessages(chatId);
  const session: sessionType | null = await getServerSession(authOptions);
  const user = await getUser(session?.user?.id as string);
  const receiverId = currentChat?.user1.id === user.userDetails?.id ? currentChat?.user2.id : currentChat?.user1.id;
  const messages = currentChat?.messages || [];


  // const params = useParams();
  // const chatId = params.chatId as string;
  // console.log(params);
  // const [messages, setMessages] = useState<Prisma.MessageGetPayload<{
  //   include: {
  //     sender: true,
  //   }
  // }>[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     const messages = await getMessages(chatId);
  //     setMessages(messages);
  //     setLoading(false);
  //   }

  //   fetchMessages();
  // }, [chatId]);

  return <ChatPageClient messages={messages} userId={user.userDetails?.id as string} receiverId={receiverId} />
}