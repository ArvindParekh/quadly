"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Heart, MessageSquare, MoreHorizontal } from "lucide-react";
import { startTransition, useOptimistic, useState, useTransition } from "react";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { likePost } from "@/actions/post";
interface InterestPostProps {
   user: {
      name: string;
      avatar: string;
      department: string;
   };
   content: string;
   interests: string[];
   timestamp: string;
   likes: number;
   comments: number;
   postId: string;
   userId: string;
}

export default function InterestPost({
   user,
   content,
   interests,
   timestamp,
   likes,
   comments,
   postId,
   userId,
}: InterestPostProps) {
   const [liked, setLiked] = useState(false);
   const [likeCount, setLikeCount] = useState(likes);

   console.log("postId", postId);
   console.log("userId", userId);
   const [optimisticState, updateOptimistic] = useOptimistic(
      { likes: likes, isLiked: liked },
      (state, newLikeStatus: boolean) => ({
         likes: newLikeStatus ? state.likes + 1 : state.likes - 1,
         isLiked: newLikeStatus,
      })
   );

   const handleLike = async () => {
      startTransition(() => {
         updateOptimistic(!optimisticState.isLiked);
      });

      try {
         await likePost(postId, userId);
      } catch (error) {
         console.error("Error liking post", error);
         updateOptimistic(!optimisticState.isLiked);
      }
   };

   // const handleLike = () => {
   //   if (liked) {
   //     setLikeCount(likeCount - 1)
   //   } else {
   //     setLikeCount(likeCount + 1)
   //   }
   //   setLiked(!liked)
   // }

   // const handleLike = async () => {
   //   const state = await likePost(postId, userId);
   //   if (state?.success) {
   //     setLiked(!liked);
   //     setLikeCount(likeCount + (liked ? -1 : 1));
   //   }
   // }

   return (
      <Card className='overflow-hidden transition-all hover:shadow-md border-pink-500/20 rounded-xl'>
         <CardHeader className='flex flex-row items-start justify-between space-y-0 pb-2'>
            <div className='flex space-x-3'>
               <Avatar className='border border-pink-500/20'>
                  <AvatarImage
                     src={user.avatar || "/placeholder.svg"}
                     alt={user.name}
                  />
                  <AvatarFallback className='bg-gradient-to-br from-pink-500 to-yellow-400 text-black'>
                     {user.name.charAt(0)}
                  </AvatarFallback>
               </Avatar>
               <div>
                  <div className='font-semibold'>{user.name}</div>
                  <div className='text-xs text-muted-foreground flex items-center gap-1'>
                     <span>{user.department}</span>
                     <span>•</span>
                     <span>{timestamp}</span>
                  </div>
               </div>
            </div>
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button
                     variant='ghost'
                     size='icon'
                     className='h-8 w-8 hover:bg-pink-500/10 hover:text-pink-500'
                  >
                     <MoreHorizontal className='h-4 w-4' />
                     <span className='sr-only'>More options</span>
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align='end' className='border-pink-500/20'>
                  <DropdownMenuItem>Save post</DropdownMenuItem>
                  <DropdownMenuItem>Hide post</DropdownMenuItem>
                  <DropdownMenuItem>Report</DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </CardHeader>
         <CardContent className='pb-3'>
            <p className='mb-3'>{content}</p>
            <div className='flex flex-wrap gap-2'>
               {interests.map((interest, index) => {
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
                        className={colors[colorIndex]}
                     >
                        {interest}
                     </Badge>
                  );
               })}
            </div>
         </CardContent>
         <CardFooter className='border-t border-pink-500/10 pt-3 flex justify-between'>
            <div className='flex gap-3'>
               {optimisticState.isLiked ? (
                  <Button
                     variant='ghost'
                     size='sm'
                     className={`flex items-center gap-1 hover:bg-pink-500/10 hover:text-pink-500 text-pink-500`}
                     onClick={handleLike}
                  >
                     <Heart
                        className={`h-4 w-4 fill-pink-500`}
                     />
                     <span>{optimisticState.likes}</span>
                  </Button>
               ) : (
                  <Button
                     variant='ghost'
                     size='sm'
                     className={`flex items-center gap-1 hover:bg-pink-500/10 hover:text-pink-500`}
                     onClick={handleLike}
                  >
                     <Heart
                        className={`h-4 w-4`}
                     />
                     <span>{optimisticState.likes}</span>
                  </Button>
               )}

               <Button
                  variant='ghost'
                  size='sm'
                  className='flex items-center gap-1 hover:bg-blue-500/10 hover:text-blue-500'
               >
                  <MessageSquare className='h-4 w-4' />
                  <span>{comments}</span>
               </Button>
            </div>
            <Button
               variant='outline'
               size='sm'
               className='flex items-center gap-1 border-yellow-400/20 hover:bg-yellow-400/10 hover:text-yellow-400'
            >
               <Coffee className='h-4 w-4' />
               <span>Coffee Chat</span>
            </Button>
         </CardFooter>
      </Card>
   );
}
