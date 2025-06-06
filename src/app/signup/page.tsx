"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import LoginButton from "@/components/signup/loginButton";
import FacebookSignupButton from "@/components/signup/facebookButton";
import GoogleSignupButton from "@/components/signup/googleButton";
import { startTransition, useActionState, useEffect } from "react";
import { signup } from "@/actions/signup";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignupPage() {
   const router = useRouter();
   const [state, formAction, isPending] = useActionState(signup, null);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      // check if the password and confirm password match
      const password = formData.get("password");
      const confirmPassword = formData.get("confirm-password");

      if (password !== confirmPassword) {
         toast.error("Passwords do not match");
         return { error: "Passwords do not match" };
      }

      // check if user has agreed to the terms of service
      const terms = formData.get("terms");
      if (terms !== "on") {
         toast.error("You must agree to the terms of service");
         return { error: "You must agree to the terms of service" };
      }

      startTransition(() => {
         formAction(formData);
      });
   }

   useEffect(() => {
      if (state?.success) {
         toast.success("User created successfully! Redirecting you to login page :)");
         setTimeout(() => {
            router.push("/login");
         }, 3000);
      }
      if (state?.error) {
         toast.error(state.message);
      }
   }, [state]);

   
   return (
      <>
      <Toaster />
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
                  <h1 className='text-3xl font-bold'>Join the garden</h1>
                  <p className='text-muted-foreground'>
                     Create your account and start connecting
                  </p>
               </div>

               <form onSubmit={handleSubmit}>
                  <div className='space-y-4'>
                     <div className='grid grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                           <Label htmlFor='first-name'>First name</Label>
                           <Input
                              id='first-name'
                              className='border-pink-500/20 focus-visible:ring-pink-500'
                              name='first-name'
                           />
                        </div>
                        <div className='space-y-2'>
                           <Label htmlFor='last-name'>Last name</Label>
                           <Input
                              id='last-name'
                              className='border-pink-500/20 focus-visible:ring-pink-500'
                              name='last-name'
                           />
                        </div>
                     </div>
                     <div className='space-y-2'>
                        <Label htmlFor='email'>University Email</Label>
                        <Input
                           id='email'
                           type='email'
                           placeholder='you@university.edu'
                           className='border-pink-500/20 focus-visible:ring-pink-500'
                           name='email'
                        />
                        <p className='text-xs text-muted-foreground'>
                           We'll verify your university email to ensure a safe
                           community
                        </p>
                     </div>
                     <div className='space-y-2'>
                        <Label htmlFor='password'>Password</Label>
                        <Input
                           id='password'
                           type='password'
                           className='border-pink-500/20 focus-visible:ring-pink-500'
                           name='password'
                        />
                     </div>
                     <div className='space-y-2'>
                        <Label htmlFor='confirm-password'>
                           Confirm Password
                        </Label>
                        <Input
                           id='confirm-password'
                           type='password'
                           className='border-pink-500/20 focus-visible:ring-pink-500'
                           name='confirm-password'
                        />
                     </div>
                     <div className='flex items-center space-x-2'>
                        <Checkbox
                           id='terms'
                           className='border-pink-500/20 data-[state=checked]:bg-pink-500 data-[state=checked]:text-black'
                           name='terms'
                        />
                        <label
                           htmlFor='terms'
                           className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                           I agree to the{" "}
                           <Link
                              href='/terms'
                              className='text-pink-500 hover:underline'
                           >
                              terms of service
                           </Link>{" "}
                           and{" "}
                           <Link
                              href='/privacy'
                              className='text-pink-500 hover:underline'
                           >
                              privacy policy
                           </Link>
                        </label>
                     </div>
                     <Button className='w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90'>
                        <Sparkles className='mr-2 h-4 w-4' />
                        Create account
                     </Button>
                  </div>
               </form>

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
                     Already have an account?{" "}
                     <LoginButton
                        variant='ghost'
                        size='sm'
                        className='text-pink-500 hover:text-pink-500 hover:underline hover:bg-transparent hover:cursor-pointer'
                     />
                  </p>
               </div>
               </div>
            </div>
         </div>
      </>
   );
}
