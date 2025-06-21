"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coffee, MessageSquare, X } from "lucide-react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { getOrCreateChat } from "@/actions/chat";
import { useRouter } from "next/navigation";
import { CoffeeChatInviteModal } from "./coffee-chat/coffee-chat-invite-modal";
import Link from "next/link";

interface MatchSuggestionProps {
   user: {
      name: string;
      avatar: string;
      department: string;
      id: string;
   };
   matchReason: string;
   commonInterests: string[];
   matchPercentage: number;
   currentUserId: string;
}

export default function MatchSuggestion({
   user,
   matchReason,
   commonInterests,
   matchPercentage,
   currentUserId,
}: MatchSuggestionProps) {
   const [dismissed, setDismissed] = useState(false);
   const { data: session } = useSession();
   const router = useRouter();

   if (dismissed) {
      return null;
   }

   const handleMessage = async (userId1: string, userId2: string) => {
      console.log(userId1, userId2);
      const chat = await getOrCreateChat(userId1, userId2);
      router.push(`/messages/${chat.id}`);
   };

   return (
      <div className='flex items-start gap-3 p-3 rounded-xl border border-pink-500/20 bg-background/50 relative group hover:shadow-md transition-all'>
         <Button
            variant='ghost'
            size='icon'
            className='absolute right-2 top-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-pink-500/10 hover:text-pink-500'
            onClick={() => setDismissed(true)}
         >
            <X className='h-3 w-3' />
            <span className='sr-only'>Dismiss</span>
         </Button>

         <Link href={`/user/${user.id}`}>
            <Avatar className='border border-pink-500/20'>
               <AvatarImage
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
               />
               <AvatarFallback className='bg-gradient-to-br from-pink-500 to-yellow-400 text-black'>
                  {user.name.charAt(0)}
               </AvatarFallback>
            </Avatar>
         </Link>
         <div className='flex-1 min-w-0'>
            <div className='flex items-center justify-between'>
               <Link href={`/user/${user.id}`} className='font-medium'>
                  {user.name}
               </Link>
               <div className='text-xs font-medium text-pink-500'>
                  {matchPercentage}% match
               </div>
            </div>
            <div className='text-xs text-muted-foreground'>
               {user.department}
            </div>
            <div className='text-xs mt-1'>{matchReason}</div>

            <div className='flex flex-wrap gap-1 mt-2'>
               {commonInterests.map((interest, index) => {
                  const colors = [
                     "bg-pink-500/10 text-pink-500 border-pink-500/20",
                     "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
                     "bg-blue-500/10 text-blue-500 border-blue-500/20",
                  ];
                  const colorIndex = index % colors.length;
                  return (
                     <Badge
                        key={interest}
                        variant='outline'
                        className={`text-xs py-0 ${colors[colorIndex]}`}
                     >
                        {interest}
                     </Badge>
                  );
               })}
            </div>

            <div className='flex gap-2 mt-3'>
               <Button
                  size='sm'
                  variant='outline'
                  className='h-8 text-xs flex-1 border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-500'
                  onClick={() => handleMessage(currentUserId, user.id)}
               >
                  <MessageSquare className='h-3 w-3 mr-1' />
                  Message
               </Button>
               <CoffeeChatInviteModal
                  user={{
                     id: user.id,
                     name: user.name,
                     avatar: user.avatar,
                     department: user.department,
                     currentUserId: currentUserId,
                  }}
                  sharedInterests={commonInterests}
               >
                  <Button
                     size='sm'
                     className='h-8 text-xs flex-1 bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90'
                  >
                     <Coffee className='h-3 w-3 mr-1' />
                     Coffee Chat
                  </Button>
               </CoffeeChatInviteModal>
            </div>
         </div>
      </div>
   );
}
