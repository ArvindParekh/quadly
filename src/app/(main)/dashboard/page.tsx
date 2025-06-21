import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Coffee, MessageSquare, Plus, User } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import InterestPost from "@/components/interest-post";
import MatchSuggestion from "@/components/match-suggestion";
import CreatePostButton from "@/components/create-post-button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getUser } from "@/lib/data/user";
import { sessionType } from "@/types/session";
import { getAllPosts } from "@/lib/data/posts";
import CoffeeChatSidebar from "@/components/dashboard/coffee-chat-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function DashboardPage() {
   const session: sessionType | null = await getServerSession(authOptions);
   console.log("session", session);
   if (!session) {
      redirect("/login");
   }

   const user = await getUser(session.user?.id);

   const posts = await getAllPosts();

   return (
      <div className='min-h-screen bg-background'>
         <main className='container py-6 mx-auto'>
            <div className='grid gap-6 md:grid-cols-[1fr_300px]'>
               <div className='space-y-6'>
                  <div className='flex items-center justify-between'>
                     <h1 className='text-3xl font-bold tracking-tight'>
                        Your Garden 🌱
                     </h1>
                     <CreatePostButton
                        userId={user.userDetails?.id as string}
                     />
                  </div>

                  <Tabs defaultValue='feed' className='w-full'>
                     <TabsList className='grid w-full grid-cols-3 rounded-xl p-1 bg-pink-500/10'>
                        <TabsTrigger
                           value='feed'
                           className='rounded-lg data-[state=active]:bg-pink-500 data-[state=active]:text-black'
                        >
                           Feed
                        </TabsTrigger>
                        <TabsTrigger
                           value='matches'
                           className='rounded-lg data-[state=active]:bg-yellow-400 data-[state=active]:text-black'
                        >
                           Matches
                        </TabsTrigger>
                        <TabsTrigger
                           value='discover'
                           className='rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-black'
                        >
                           Discover
                        </TabsTrigger>
                     </TabsList>
                     <TabsContent value='feed' className=' mt-6 h-screen'>
                        <ScrollArea className='h-screen'>
                           <div className='space-y-4 p-1'>
                              {posts.map((post, index) => {
                                 console.log(
                                    post.postTags.map((tag) => tag.tagName)
                                 );
                                 return (
                                    <InterestPost
                                       key={index}
                                       user={{
                                          name: post.author.name,
                                          avatar:
                                             post.author.profilePicture ||
                                             "/placeholder.svg?height=40&width=40",
                                          department:
                                             post.author.department || "",
                                          id: post.authorId,
                                          authorId: post.author.userId,
                                       }}
                                       userDetailsId={
                                          user.userDetails?.id as string
                                       }
                                       content={post.content}
                                       interests={post.postTags.map(
                                          (tag) => tag.tagName
                                       )}
                                       timestamp={post.createdAt.toLocaleString()}
                                       likes={post.reaction?.likes || 0}
                                       comments={post.commentCount}
                                       postId={post.id}
                                       userId={user.id as string}
                                    />
                                 );
                              })}
                              <InterestPost
                                 user={{
                                    name: "Alex Johnson",
                                    avatar:
                                       "/placeholder.svg?height=40&width=40",
                                    department: "Computer Science",
                                    id: user.userDetails?.id as string,
                                    authorId: user.id as string,
                                 }}
                                 userDetailsId={user.userDetails?.id as string}
                                 content="I've been reading 'Designing Data-Intensive Applications' and would love to discuss distributed systems with anyone interested. Coffee's on me! ☕"
                                 interests={[
                                    "Distributed Systems",
                                    "Software Architecture",
                                    "Databases",
                                 ]}
                                 timestamp='2 hours ago'
                                 likes={12}
                                 comments={3}
                                 postId={""}
                                 userId={""}
                              />

                              <InterestPost
                                 user={{
                                    name: "Morgan Lee",
                                    avatar:
                                       "/placeholder.svg?height=40&width=40",
                                    department: "Psychology",
                                    id: user.userDetails?.id as string,
                                    authorId: user.id as string,
                                 }}
                                 userDetailsId={user.userDetails?.id as string}
                                 content='Working on my thesis about cognitive biases in decision making. Would appreciate any recommendations on recent papers in this area! 🧠 #GradSchoolProblems'
                                 interests={[
                                    "Cognitive Psychology",
                                    "Decision Making",
                                    "Research Methods",
                                 ]}
                                 timestamp='5 hours ago'
                                 likes={8}
                                 comments={7}
                                 postId={""}
                                 userId={""}
                              />

                              <InterestPost
                                 user={{
                                    name: "Jamie Rivera",
                                    avatar:
                                       "/placeholder.svg?height=40&width=40",
                                    department: "Literature",
                                    id: user.userDetails?.id as string,
                                    authorId: user.id as string,
                                 }}
                                 userDetailsId={user.userDetails?.id as string}
                                 content="Just finished 'The Overstory' by Richard Powers. It's changed how I think about nature and our relationship with trees. Anyone else read it? 📚 This book hit different fr"
                                 interests={[
                                    "Contemporary Literature",
                                    "Environmental Studies",
                                    "Book Club",
                                 ]}
                                 timestamp='Yesterday'
                                 likes={15}
                                 comments={4}
                                 postId={""}
                                 userId={""}
                              />
                           </div>
                        </ScrollArea>
                     </TabsContent>

                     <TabsContent value='matches' className='space-y-4 mt-6'>
                        <Card className='border-pink-500/20 overflow-hidden'>
                           <CardHeader className='bg-gradient-to-r from-pink-500/10 to-yellow-400/10'>
                              <CardTitle>Your Matches</CardTitle>
                              <CardDescription>
                                 People who share your interests
                              </CardDescription>
                           </CardHeader>
                           <CardContent className='space-y-4 pt-6'>
                              <MatchSuggestion
                                 user={{
                                    name: "Taylor Kim",
                                    avatar:
                                       "/placeholder.svg?height=40&width=40",
                                    department: "Computer Science",
                                    id: user.id,
                                 }}
                                 currentUserId={user.userDetails?.id as string}
                                 matchReason='Both interested in Distributed Systems'
                                 commonInterests={[
                                    "Distributed Systems",
                                    "Algorithms",
                                 ]}
                                 matchPercentage={92}
                              />

                              <MatchSuggestion
                                 user={{
                                    name: "Jordan Smith",
                                    avatar:
                                       "/placeholder.svg?height=40&width=40",
                                    department: "Data Science",
                                    id: "2",
                                 }}
                                 currentUserId={user.userDetails?.id as string}
                                 matchReason="Both reading 'Designing Data-Intensive Applications'"
                                 commonInterests={["Databases", "Big Data"]}
                                 matchPercentage={85}
                              />

                              <MatchSuggestion
                                 user={{
                                    name: "Casey Wong",
                                    avatar:
                                       "/placeholder.svg?height=40&width=40",
                                    department: "Computer Engineering",
                                    id: "3",
                                 }}
                                 currentUserId={user.userDetails?.id as string}
                                 matchReason='Both interested in Software Architecture'
                                 commonInterests={[
                                    "Software Architecture",
                                    "System Design",
                                 ]}
                                 matchPercentage={78}
                              />
                           </CardContent>
                        </Card>
                     </TabsContent>

                     <TabsContent value='discover' className='space-y-4 mt-6'>
                        <Card className='border-pink-500/20 overflow-hidden'>
                           <CardHeader className='bg-gradient-to-r from-blue-500/10 to-pink-500/10'>
                              <CardTitle>Discover New Interests</CardTitle>
                              <CardDescription>
                                 Explore topics popular in your university
                              </CardDescription>
                           </CardHeader>
                           <CardContent className='pt-6'>
                              <div className='flex flex-wrap gap-2'>
                                 <Badge
                                    variant='outline'
                                    className='bg-pink-500/10 border-pink-500/20 hover:bg-pink-500/20 cursor-pointer'
                                 >
                                    Machine Learning
                                 </Badge>
                                 <Badge
                                    variant='outline'
                                    className='bg-yellow-400/10 border-yellow-400/20 hover:bg-yellow-400/20 cursor-pointer'
                                 >
                                    Climate Science
                                 </Badge>
                                 <Badge
                                    variant='outline'
                                    className='bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 cursor-pointer'
                                 >
                                    Quantum Computing
                                 </Badge>
                                 <Badge
                                    variant='outline'
                                    className='bg-pink-500/10 border-pink-500/20 hover:bg-pink-500/20 cursor-pointer'
                                 >
                                    Behavioral Economics
                                 </Badge>
                                 <Badge
                                    variant='outline'
                                    className='bg-yellow-400/10 border-yellow-400/20 hover:bg-yellow-400/20 cursor-pointer'
                                 >
                                    Modern Poetry
                                 </Badge>
                                 <Badge
                                    variant='outline'
                                    className='bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 cursor-pointer'
                                 >
                                    Neuroscience
                                 </Badge>
                                 <Badge
                                    variant='outline'
                                    className='bg-pink-500/10 border-pink-500/20 hover:bg-pink-500/20 cursor-pointer'
                                 >
                                    Urban Planning
                                 </Badge>
                                 <Badge
                                    variant='outline'
                                    className='bg-yellow-400/10 border-yellow-400/20 hover:bg-yellow-400/20 cursor-pointer'
                                 >
                                    Game Theory
                                 </Badge>
                              </div>
                           </CardContent>
                        </Card>

                        <Card className='border-pink-500/20 overflow-hidden'>
                           <CardHeader className='bg-gradient-to-r from-yellow-400/10 to-blue-500/10'>
                              <CardTitle>Trending Discussions</CardTitle>
                              <CardDescription>
                                 Hot topics on campus right now
                              </CardDescription>
                           </CardHeader>
                           <CardContent className='space-y-4 pt-6'>
                              <div className='flex items-start gap-4'>
                                 <div className='rounded-full bg-pink-500/10 p-2'>
                                    <MessageSquare className='h-4 w-4 text-pink-500' />
                                 </div>
                                 <div>
                                    <h4 className='text-sm font-medium'>
                                       AI Ethics in Research
                                    </h4>
                                    <p className='text-sm text-muted-foreground'>
                                       32 students discussing
                                    </p>
                                 </div>
                              </div>

                              <div className='flex items-start gap-4'>
                                 <div className='rounded-full bg-yellow-400/10 p-2'>
                                    <MessageSquare className='h-4 w-4 text-yellow-400' />
                                 </div>
                                 <div>
                                    <h4 className='text-sm font-medium'>
                                       Sustainable Campus Initiatives
                                    </h4>
                                    <p className='text-sm text-muted-foreground'>
                                       24 students discussing
                                    </p>
                                 </div>
                              </div>

                              <div className='flex items-start gap-4'>
                                 <div className='rounded-full bg-blue-500/10 p-2'>
                                    <MessageSquare className='h-4 w-4 text-blue-500' />
                                 </div>
                                 <div>
                                    <h4 className='text-sm font-medium'>
                                       Remote Learning Effectiveness
                                    </h4>
                                    <p className='text-sm text-muted-foreground'>
                                       18 students discussing
                                    </p>
                                 </div>
                              </div>
                           </CardContent>
                        </Card>
                     </TabsContent>
                  </Tabs>
               </div>

               <div className='space-y-6'>
                  <Card className='border-pink-500/20 overflow-hidden'>
                     <CardHeader className='bg-gradient-to-r from-pink-500/10 to-yellow-400/10'>
                        <CardTitle>Your Profile</CardTitle>
                     </CardHeader>
                     <CardContent className='space-y-4 pt-6'>
                        <div className='flex flex-col items-center space-y-2'>
                           <div className='relative'>
                              <Avatar className='h-20 w-20 border-2 border-pink-500'>
                                 <AvatarImage
                                    src={user?.userDetails?.profilePicture || "/placeholder.svg?height=80&width=80"}
                                    alt='Profile'
                                    width={80}
                                    height={80}
                                 />
                                 <AvatarFallback className='bg-gradient-to-br from-pink-500 to-yellow-400 text-black'>
                                    {user?.username?.charAt(0)}
                                 </AvatarFallback>
                              </Avatar>
                              <span className='absolute bottom-0 right-0 h-5 w-5 rounded-full bg-green-500 border-2 border-background'></span>
                           </div>
                           <div className='text-center'>
                              <h3 className='text-lg font-medium'>
                                 {user?.username}
                              </h3>
                              <p className='text-sm text-muted-foreground'>
                                 {user?.userDetails?.department},{" "}
                                 {user?.userDetails?.year}
                              </p>
                           </div>
                        </div>

                        <div>
                           <h4 className='text-sm font-medium mb-2'>
                              Your Interests
                           </h4>
                           <div className='flex flex-wrap gap-2'>
                              {user?.userDetails?.interests.map((interest) => (
                                 <Badge
                                    key={interest.id}
                                    className='bg-pink-500 hover:bg-pink-600'
                                 >
                                    {interest.interestName}
                                 </Badge>
                              ))}
                              {/* <Badge className="bg-pink-500 hover:bg-pink-600">Distributed Systems</Badge>
                    <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">Algorithms</Badge>
                    <Badge className="bg-blue-500 hover:bg-blue-600">Machine Learning</Badge>
                    <Badge className="bg-pink-500 hover:bg-pink-600">Web Development</Badge>
                    <Badge className="bg-yellow-400 text-black hover:bg-yellow-500">Coffee</Badge> */}
                           </div>
                        </div>

                        <div>
                           <h4 className='text-sm font-medium mb-2'>
                              Currently Reading
                           </h4>
                           <div className='flex items-center gap-2'>
                              <BookOpen className='h-4 w-4 text-pink-500' />
                              <span className='text-sm'>
                                 {user?.userDetails?.reading}
                              </span>
                           </div>
                        </div>
                     </CardContent>
                     <CardFooter className='border-t border-pink-500/10 pt-4'>
                        <Link href='/profile' className='w-full'>
                           <Button
                              variant='outline'
                              className='w-full border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500'
                           >
                              <User className='mr-2 h-4 w-4' />
                              Edit Profile
                           </Button>
                        </Link>
                     </CardFooter>
                  </Card>

                  {/* <Card className="border-pink-500/20 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-yellow-400/10 to-blue-500/10">
                <CardTitle>Coffee Chats</CardTitle>
                <CardDescription>Upcoming meetups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-yellow-400/10 p-2">
                    <Coffee className="h-4 w-4 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">With Taylor Kim</h4>
                    <p className="text-sm text-muted-foreground">Tomorrow, 3:00 PM</p>
                    <p className="text-sm text-muted-foreground">Campus Café</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-500/10 p-2">
                    <Coffee className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Study Group</h4>
                    <p className="text-sm text-muted-foreground">Friday, 5:00 PM</p>
                    <p className="text-sm text-muted-foreground">Library, Room 204</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-pink-500/10 pt-4">
                <Button
                  variant="outline"
                  className="w-full border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Schedule New Chat
                </Button>
              </CardFooter>
            </Card> */}
                  <CoffeeChatSidebar />
               </div>
            </div>
         </main>
      </div>
   );
}
