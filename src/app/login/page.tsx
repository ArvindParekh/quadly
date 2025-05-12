import FacebookSignupButton from "@/components/signup/facebookButton";
import GoogleSignupButton from "@/components/signup/googleButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
   return (
      <div className='min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-pink-500/5'>
         <div className='container flex h-16 items-center mx-auto'>
            <Link
               href='/'
               className='flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'
            >
               <ArrowLeft className='h-4 w-4' />
               <span>Back to home</span>
            </Link>
         </div>

         <div className='flex-1 flex items-center justify-center'>
            <div className='w-full max-w-md space-y-8 px-4'>
               <div className='space-y-2 text-center'>
                  <div className='flex justify-center'>
                     <div className='relative h-12 w-12'>
                        <div className='absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400' />
                        <div className='absolute inset-[3px] rounded-full bg-background' />
                        <div className='absolute inset-[6px] rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 opacity-50' />
                     </div>
                  </div>
                  <h1 className='text-3xl font-bold'>Welcome back!</h1>
                  <p className='text-muted-foreground'>
                     Sign in to your Quadly account
                  </p>
               </div>

               <div className='space-y-4'>
                  <div className='space-y-2'>
                     <Label htmlFor='email'>University Email</Label>
                     <Input
                        id='email'
                        type='email'
                        placeholder='you@university.edu'
                        className='border-pink-500/20 focus-visible:ring-pink-500'
                     />
                  </div>
                  <div className='space-y-2'>
                     <div className='flex items-center justify-between'>
                        <Label htmlFor='password'>Password</Label>
                        <Link
                           href='/forgot-password'
                           className='text-sm text-pink-500 hover:underline'
                        >
                           Forgot password?
                        </Link>
                     </div>
                     <Input
                        id='password'
                        type='password'
                        className='border-pink-500/20 focus-visible:ring-pink-500'
                     />
                  </div>
                  <Button className='w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90'>
                     <Sparkles className='mr-2 h-4 w-4' />
                     Sign in
                  </Button>
               </div>

               <div className='relative my-6'>
                  <div className='absolute inset-0 flex items-center'>
                     <div className='w-full border-t border-pink-500/10'></div>
                  </div>
                  <div className='relative flex justify-center text-xs uppercase'>
                     <span className='bg-background px-2 text-muted-foreground'>
                        Or continue with
                     </span>
                  </div>
               </div>

               <div className='grid grid-cols-2 gap-4'>
                     <GoogleSignupButton />
                     <FacebookSignupButton />
               </div>

               <div className='text-center text-sm'>
                  <p className='text-muted-foreground'>
                     Don't have an account?{" "}
                     <Link
                        href='/signup'
                        className='text-pink-500 hover:underline'
                     >
                        Sign up
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
