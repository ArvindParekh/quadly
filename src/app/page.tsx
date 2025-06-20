import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Coffee, Sparkles, Users } from "lucide-react";
import LoginButton from "@/components/signup/loginButton";
import { getServerSession, User } from "next-auth";
import { authOptions } from "@/lib/auth";
import DropdownMenuComponent from "@/components/dashboard-header/dropdownMenu";
import { getUser } from "@/lib/data/user";
import { sessionType } from "@/types/session";
import Image from "next/image";

export default async function LandingPage() {
   const session: sessionType | null = await getServerSession(authOptions);
   let user = null;
   if (session) {
      user = await getUser(session.user.id as string);
   }

   return (
      <div className='flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-pink-500/5'>
         <header className='sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex h-16 items-center justify-between mx-auto'>
               <div className='flex items-center gap-2'>
                  <div className='relative h-8 w-8'>
                     <div className='absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400' />
                     <div className='absolute inset-[2px] rounded-full bg-background' />
                     <div className='absolute inset-[4px] rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 opacity-50' />
                  </div>
                  <span className='text-xl font-bold tracking-tight'>
                     Quadly
                  </span>
               </div>
               <nav className='hidden md:flex items-center gap-6'>
                  <Link
                     href='#features'
                     className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
                  >
                     Features
                  </Link>
                  <Link
                     href='#how-it-works'
                     className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
                  >
                     How It Works
                  </Link>
                  <Link
                     href='/about'
                     className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
                  >
                     About
                  </Link>
               </nav>
               <div className='flex items-center gap-2'>
                  {session ? (
                    <DropdownMenuComponent name={user?.username as string} email={user?.email as string} />
                  ) : (
                     <>
                        <LoginButton variant='outline' size='sm' />
                        <Link href='/signup'>
                           <Button
                              size='sm'
                              className='bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90'
                           >
                              Sign up
                           </Button>
                        </Link>
                     </>
                  )}
               </div>
            </div>
         </header>
         <main className='flex-1'>
            <section className='relative overflow-hidden'>
               <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-3xl -z-10'></div>
               <div className='absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-yellow-400/20 rounded-full blur-3xl -z-10'></div>
               <div className='absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-blue-400/20 rounded-full blur-3xl -z-10'></div>

               <div className='container relative flex flex-col items-center justify-center space-y-10 py-20 md:py-32 mx-auto'>
                  <div className='space-y-6 text-center'>
                     <div className='inline-block rounded-full bg-pink-500/10 px-3 py-1 text-sm text-pink-500 border border-pink-500/20'>
                        University-only social platform
                     </div>
                     <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
                        Making friends shouldn't be{" "}
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500'>
                           this hard
                        </span>
                     </h1>
                     <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
                        Connect with people who actually get you. Share what
                        you're into, find your people, and grab coffee without
                        the awkward small talk.
                     </p>
                     <div className='flex flex-wrap items-center justify-center gap-4'>
                      
                        <Link href={session ? "/dashboard" : "/signup"}>
                           <Button
                              size='lg'
                              className='h-12 px-8 group bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90'
                           >
                              {session ? "Go to dashboard" : "Sign up now"}
                              <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                           </Button>
                        </Link>
                        <Link href='#how-it-works'>
                           <Button
                              variant='outline'
                              size='lg'
                              className='h-12 px-8 border-pink-500/20 hover:bg-pink-500/10'
                           >
                              See how it works
                           </Button>
                        </Link>
                     </div>
                  </div>
                  <div className='relative w-full max-w-4xl overflow-hidden rounded-3xl border border-pink-500/20 bg-background/50 shadow-xl'>
                     <div className='absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-yellow-400/10' />
                     <Image
                        src='/illustration-1.png'
                        alt='Quadly Dashboard Preview'
                        className='w-full h-auto'
                        width={1000}
                        height={1000}
                     />
                  </div>
               </div>
            </section>

            <section id='features' className='container py-20 mx-auto'>
               <div className='mx-auto mb-12 flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
                  <span className='rounded-full bg-pink-500/10 px-3 py-1 text-sm text-pink-500 border border-pink-500/20'>
                     Features
                  </span>
                  <h2 className='text-3xl font-bold leading-tight tracking-tight md:text-4xl'>
                     Find your people, no awkwardness required
                  </h2>
                  <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
                     Quadly makes it easy to find and connect with people who
                     share your interests.
                  </p>
               </div>
               <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                  <div className='group relative overflow-hidden rounded-xl border border-pink-500/20 bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg'>
                     <div className='absolute inset-0 bg-gradient-to-br from-pink-500/5 to-yellow-400/5 opacity-0 transition-opacity group-hover:opacity-100' />
                     <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/10'>
                        <BookOpen className='h-6 w-6 text-pink-500' />
                     </div>
                     <h3 className='mb-2 text-xl font-bold'>
                        Interest Matching
                     </h3>
                     <p className='text-muted-foreground'>
                        Share what you're reading, studying, or passionate about
                        and get matched with like-minded students.
                     </p>
                  </div>
                  <div className='group relative overflow-hidden rounded-xl border border-pink-500/20 bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg'>
                     <div className='absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100' />
                     <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/10'>
                        <Coffee className='h-6 w-6 text-yellow-400' />
                     </div>
                     <h3 className='mb-2 text-xl font-bold'>
                        Low-Pressure Meetups
                     </h3>
                     <p className='text-muted-foreground'>
                        Suggest casual coffee chats or study sessions without
                        the awkwardness of traditional networking.
                     </p>
                  </div>
                  <div className='group relative overflow-hidden rounded-xl border border-pink-500/20 bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg'>
                     <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-pink-500/5 opacity-0 transition-opacity group-hover:opacity-100' />
                     <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10'>
                        <Users className='h-6 w-6 text-blue-500' />
                     </div>
                     <h3 className='mb-2 text-xl font-bold'>
                        University Verified
                     </h3>
                     <p className='text-muted-foreground'>
                        Connect only with verified students from your university
                        for a safe, trusted community.
                     </p>
                  </div>
               </div>
            </section>

            <section
               id='how-it-works'
               className='container py-20 relative mx-auto'
            >
               <div className='absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl -z-10'></div>
               <div className='absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink-400/10 rounded-full blur-3xl -z-10'></div>

               <div className='mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2'>
                  <div>
                     <span className='rounded-full bg-pink-500/10 px-3 py-1 text-sm text-pink-500 border border-pink-500/20'>
                        How it works
                     </span>
                     <h2 className='mt-4 text-3xl font-bold tracking-tight md:text-4xl'>
                        It's actually pretty simple
                     </h2>
                     <ul className='mt-8 space-y-8'>
                        <li className='flex gap-4'>
                           <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 text-black font-bold'>
                              1
                           </div>
                           <div>
                              <h3 className='text-xl font-bold'>
                                 Create your profile
                              </h3>
                              <p className='text-muted-foreground'>
                                 Sign up with your university email and share
                                 your interests, current reads, and hobbies.
                              </p>
                           </div>
                        </li>
                        <li className='flex gap-4'>
                           <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-blue-500 text-black font-bold'>
                              2
                           </div>
                           <div>
                              <h3 className='text-xl font-bold'>
                                 Post your activities
                              </h3>
                              <p className='text-muted-foreground'>
                                 Share what you're currently working on,
                                 reading, or thinking about.
                              </p>
                           </div>
                        </li>
                        <li className='flex gap-4'>
                           <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-pink-500 text-black font-bold'>
                              3
                           </div>
                           <div>
                              <h3 className='text-xl font-bold'>
                                 Discover matches
                              </h3>
                              <p className='text-muted-foreground'>
                                 Get matched with students who share similar
                                 interests and activities.
                              </p>
                           </div>
                        </li>
                        <li className='flex gap-4'>
                           <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 text-black font-bold'>
                              4
                           </div>
                           <div>
                              <h3 className='text-xl font-bold'>Connect IRL</h3>
                              <p className='text-muted-foreground'>
                                 Suggest a casual coffee chat or study session
                                 to connect in person.
                              </p>
                           </div>
                        </li>
                     </ul>
                  </div>
                  <div className='relative aspect-video overflow-hidden rounded-3xl border border-pink-500/20 bg-background/50 shadow-xl'>
                     <div className='absolute inset-0 bg-gradient-to-tr ' />
                     <Image
                        src='/image.png'
                        alt='How Quadly works'
                        className='w-full h-auto'
                        width={1000}
                        height={1000}
                     />
                  </div>
               </div>
            </section>

            <section className='relative overflow-hidden py-20'>
               <div className='absolute inset-0 bg-gradient-to-b from-background via-pink-500/5 to-background'></div>
               <div className='container relative mx-auto'>
                  <div className='mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center'>
                     <span className='rounded-full bg-pink-500/10 px-3 py-1 text-sm text-pink-500 border border-pink-500/20'>
                        Ready?
                     </span>
                     <h2 className='text-3xl font-bold leading-tight tracking-tight md:text-5xl'>
                        Your social circle is waiting
                     </h2>
                     <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
                        Join Quadly today and connect with fellow students who
                        share your interests.
                     </p>
                     <div className='flex flex-wrap items-center justify-center gap-4 mt-6'>
                        <Link href={session ? "/dashboard" : "/signup"}>
                           <Button
                              size='lg'
                              className='h-12 px-8 bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90'
                           >
                              {session ? "Go to dashboard" : "Sign up now"}
                              <Sparkles className='ml-2 h-4 w-4' />
                           </Button>
                        </Link>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <footer className='bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container py-10 mx-auto'>
               <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
                  <div className='space-y-3'>
                     <h4 className='text-sm font-medium'>Platform</h4>
                     <ul className='space-y-2 text-sm'>
                        <li>
                           <Link
                              href='#'
                              className='text-muted-foreground hover:text-foreground'
                           >
                              Features
                           </Link>
                        </li>
                        <li>
                           <Link
                              href='#'
                              className='text-muted-foreground hover:text-foreground'
                           >
                              How it works
                           </Link>
                        </li>
                        <li>
                           <Link
                              href='#'
                              className='text-muted-foreground hover:text-foreground'
                           >
                              Pricing
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className='space-y-3'>
                     <h4 className='text-sm font-medium'>Company</h4>
                     <ul className='space-y-2 text-sm'>
                        <li>
                           <Link
                              href='#'
                              className='text-muted-foreground hover:text-foreground'
                           >
                              About
                           </Link>
                        </li>
                        <li>
                           <Link
                              href='#'
                              className='text-muted-foreground hover:text-foreground'
                           >
                              Blog
                           </Link>
                        </li>
                        <li>
                           <Link
                              href='#'
                              className='text-muted-foreground hover:text-foreground'
                           >
                              Careers
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className='space-y-3'>
                     <h4 className='text-sm font-medium'>Resources</h4>
                     <ul className='space-y-2 text-sm'>
                        <li>
                           <Link
                              href='#'
                              className='text-muted-foreground hover:text-foreground'
                           >
                              Community
                           </Link>
                        </li>
                        <li>
                           <Link
                              href='#'
                              className='text-muted-foreground hover:text-foreground'
                           >
                              Help Center
                           </Link>
                        </li>
                        <li>
                           <Link
                              href='#'
                              className='text-muted-foreground hover:text-foreground'
                           >
                              Partners
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className='space-y-3'>
                     <h4 className='text-sm font-medium'>Legal</h4>
                     <ul className='space-y-2 text-sm'>
                        <li>
                           <Link
                              href='#'
                              className='text-muted-foreground hover:text-foreground'
                           >
                              Privacy
                           </Link>
                        </li>
                        <li>
                           <Link
                              href='#'
                              className='text-muted-foreground hover:text-foreground'
                           >
                              Terms
                           </Link>
                        </li>
                        <li>
                           <Link
                              href='#'
                              className='text-muted-foreground hover:text-foreground'
                           >
                              Cookie Policy
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className='mt-10 flex flex-col items-center justify-between gap-4 border-t border-pink-500/10 pt-6 md:flex-row'>
                  <p className='text-center text-sm text-muted-foreground md:text-left'>
                     &copy; {new Date().getFullYear()} Quadly. All rights
                     reserved.
                  </p>
                  <div className='flex items-center gap-4'>
                     <Link
                        href='#'
                        className='text-muted-foreground hover:text-foreground'
                     >
                        <span className='sr-only'>Twitter</span>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           width='20'
                           height='20'
                           viewBox='0 0 24 24'
                           fill='none'
                           stroke='currentColor'
                           strokeWidth='2'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           className='lucide lucide-twitter'
                        >
                           <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
                        </svg>
                     </Link>
                     <Link
                        href='#'
                        className='text-muted-foreground hover:text-foreground'
                     >
                        <span className='sr-only'>Instagram</span>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           width='20'
                           height='20'
                           viewBox='0 0 24 24'
                           fill='none'
                           stroke='currentColor'
                           strokeWidth='2'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           className='lucide lucide-instagram'
                        >
                           <rect
                              width='20'
                              height='20'
                              x='2'
                              y='2'
                              rx='5'
                              ry='5'
                           />
                           <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                           <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
                        </svg>
                     </Link>
                     <Link
                        href='#'
                        className='text-muted-foreground hover:text-foreground'
                     >
                        <span className='sr-only'>GitHub</span>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           width='20'
                           height='20'
                           viewBox='0 0 24 24'
                           fill='none'
                           stroke='currentColor'
                           strokeWidth='2'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           className='lucide lucide-github'
                        >
                           <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                           <path d='M9 18c-4.51 2-5-2-7-2' />
                        </svg>
                     </Link>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
}
