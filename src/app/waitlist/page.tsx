"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
   CheckCircle,
   Coffee,
   Users,
   Sparkles,
   Heart,
   BookOpen,
   Gamepad2,
   Music,
   Palette,
   Code,
   Camera,
   Dumbbell,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import { addToWaitlist } from "@/actions/waitlist";

const interests = [
   {
      name: "Coffee Chats",
      icon: Coffee,
      color: "bg-amber-500/20 text-amber-400",
   },
   {
      name: "Study Groups",
      icon: BookOpen,
      color: "bg-blue-500/20 text-blue-400",
   },
   {
      name: "Gaming",
      icon: Gamepad2,
      color: "bg-purple-500/20 text-purple-400",
   },
   { name: "Music", icon: Music, color: "bg-green-500/20 text-green-400" },
   {
      name: "Art & Design",
      icon: Palette,
      color: "bg-pink-500/20 text-pink-400",
   },
   { name: "Coding", icon: Code, color: "bg-cyan-500/20 text-cyan-400" },
   {
      name: "Photography",
      icon: Camera,
      color: "bg-orange-500/20 text-orange-400",
   },
   { name: "Fitness", icon: Dumbbell, color: "bg-red-500/20 text-red-400" },
];

export default function WaitlistPage() {
   const [email, setEmail] = useState("");
   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [waitlistPosition, setWaitlistPosition] = useState<number | null>(
      null
   );

   const handleInterestToggle = (interest: string) => {
      setSelectedInterests((prev) =>
         prev.includes(interest)
            ? prev.filter((i) => i !== interest)
            : [...prev, interest]
      );
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!email.trim()) {
         toast.error("Please enter your email address");
         return;
      }

      setIsSubmitting(true);

      try {
         const response = await addToWaitlist(email, selectedInterests);

         if (response.success) {
            setIsSubmitted(true);
            setWaitlistPosition(response.position || 100);
            toast.success("Welcome to the waitlist! 🎉");
         } else {
            toast.error(response.message);
         }
      } catch (error) {
         toast.error("Something went wrong. Please try again.");
      } finally {
         setIsSubmitting(false);
      }
   };

   if (isSubmitted) {
      return (
         <>
            <Toaster />
            <div className='min-h-screen bg-background flex items-center justify-center p-4'>
               <div className='max-w-md w-full text-center space-y-6'>
                  <div className='relative'>
                     <div className='absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl' />
                     <div className='relative bg-green-500/20 rounded-full p-6 w-24 h-24 mx-auto flex items-center justify-center'>
                        <CheckCircle className='w-12 h-12 text-green-400' />
                     </div>
                  </div>

                  <div className='space-y-4'>
                     <h1 className='text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent'>
                        You're In! 🎉
                     </h1>
                     <p className='text-muted-foreground text-lg'>
                        Welcome to the Quadly waitlist!
                     </p>
                     {waitlistPosition && (
                        <div className='bg-card border rounded-lg p-4'>
                           <p className='text-sm text-muted-foreground'>
                              Your position
                           </p>
                           <p className='text-2xl font-bold text-primary'>
                              #{waitlistPosition}
                           </p>
                        </div>
                     )}
                  </div>

                  <div className='space-y-4 text-left'>
                     <h3 className='font-semibold text-center'>
                        What happens next?
                     </h3>
                     <div className='space-y-3'>
                        <div className='flex items-start gap-3'>
                           <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0' />
                           <p className='text-sm text-muted-foreground'>
                              We'll send you updates as we get closer to launch
                           </p>
                        </div>
                        <div className='flex items-start gap-3'>
                           <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0' />
                           <p className='text-sm text-muted-foreground'>
                              You'll get early access before the public launch
                           </p>
                        </div>
                        <div className='flex items-start gap-3'>
                           <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0' />
                           <p className='text-sm text-muted-foreground'>
                              Be among the first to start making meaningful
                              connections
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className='pt-4'>
                     <Link href='/'>
                        <Button variant='outline' className='w-full'>
                           Back to Home
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
         </>
      );
   }

   return (
      <>
         <Toaster />
         <div className='min-h-screen bg-background flex items-center justify-center'>
            {/* Background Effects */}
            <div className='fixed inset-0 overflow-hidden pointer-events-none'>
               <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob' />
               <div className='absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000' />
               <div className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-4000' />
            </div>

            <div className='relative z-10 container mx-auto px-4 py-12'>
               <div className='max-w-4xl mx-auto'>
                  {/* Header */}
                  <div className='text-center space-y-6 mb-12'>
                     <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium'>
                        <Sparkles className='w-4 h-4' />
                        Coming Soon
                     </div>

                     <h1 className='text-4xl md:text-6xl font-bold'>
                        <span className='bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent'>
                           Quadly
                        </span>
                     </h1>

                     <p className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto'>
                        Where university students grow meaningful connections
                        through shared interests and coffee chats ☕
                     </p>
                  </div>

                  {/* Main Content */}
                  <div className='grid lg:grid-cols-2 gap-12 items-center'>
                     {/* Left Side - Features */}
                     <div className='space-y-8'>
                        <div className='space-y-6'>
                           <h2 className='text-2xl font-bold'>
                              Why Join Quadly?
                           </h2>

                           <div className='space-y-4'>
                              <div className='flex items-start gap-4'>
                                 <div className='bg-pink-500/20 p-2 rounded-lg'>
                                    <Coffee className='w-5 h-5 text-pink-400' />
                                 </div>
                                 <div>
                                    <h3 className='font-semibold'>
                                       Coffee Chat Connections
                                    </h3>
                                    <p className='text-muted-foreground text-sm'>
                                       Skip the small talk. Meet for purposeful
                                       conversations with built-in conversation
                                       starters.
                                    </p>
                                 </div>
                              </div>

                              <div className='flex items-start gap-4'>
                                 <div className='bg-purple-500/20 p-2 rounded-lg'>
                                    <Users className='w-5 h-5 text-purple-400' />
                                 </div>
                                 <div>
                                    <h3 className='font-semibold'>
                                       Smart Matching
                                    </h3>
                                    <p className='text-muted-foreground text-sm'>
                                       Connect with students who share your
                                       interests, study habits, and social
                                       preferences.
                                    </p>
                                 </div>
                              </div>

                              <div className='flex items-start gap-4'>
                                 <div className='bg-blue-500/20 p-2 rounded-lg'>
                                    <Heart className='w-5 h-5 text-blue-400' />
                                 </div>
                                 <div>
                                    <h3 className='font-semibold'>
                                       Introvert-Friendly
                                    </h3>
                                    <p className='text-muted-foreground text-sm'>
                                       Structured interactions that make
                                       socializing comfortable for everyone.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Interest Selection */}
                        <div className='space-y-4'>
                           <h3 className='font-semibold'>
                              What are you interested in? (Optional)
                           </h3>
                           <div className='flex flex-wrap gap-2'>
                              {interests.map((interest) => {
                                 const Icon = interest.icon;
                                 const isSelected = selectedInterests.includes(
                                    interest.name
                                 );
                                 return (
                                    <Badge
                                       key={interest.name}
                                       variant={
                                          isSelected ? "default" : "outline"
                                       }
                                       className={`cursor-pointer transition-all hover:scale-105 ${
                                          isSelected
                                             ? interest.color
                                             : "hover:bg-muted"
                                       }`}
                                       onClick={() =>
                                          handleInterestToggle(interest.name)
                                       }
                                    >
                                       <Icon className='w-3 h-3 mr-1' />
                                       {interest.name}
                                    </Badge>
                                 );
                              })}
                           </div>
                        </div>
                     </div>

                     {/* Right Side - Waitlist Form */}
                     <div className='lg:pl-8'>
                        <Card className='border-2 border-primary/20 bg-card/50 backdrop-blur-sm'>
                           <CardContent className='p-8'>
                              <div className='space-y-6'>
                                 <div className='text-center space-y-2'>
                                    <h2 className='text-2xl font-bold'>
                                       Join the Waitlist
                                    </h2>
                                    <p className='text-muted-foreground'>
                                       Be the first to experience meaningful
                                       connections on campus
                                    </p>
                                 </div>

                                 <form
                                    onSubmit={handleSubmit}
                                    className='space-y-4'
                                 >
                                    <div className='space-y-2'>
                                       <Input
                                          type='email'
                                          placeholder='Enter your email address'
                                          value={email}
                                          onChange={(e) =>
                                             setEmail(e.target.value)
                                          }
                                          className='h-12 text-lg'
                                          required
                                       />
                                    </div>

                                    <Button
                                       type='submit'
                                       className='w-full h-12 text-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'
                                       disabled={isSubmitting}
                                    >
                                       {isSubmitting
                                          ? "Joining..."
                                          : "Join Waitlist 🚀"}
                                    </Button>
                                 </form>

                                 <div className='text-center space-y-2'>
                                    <p className='text-xs text-muted-foreground'>
                                       No spam, ever. Just updates on our launch
                                       progress.
                                    </p>
                                    <div className='flex items-center justify-center gap-4 text-xs text-muted-foreground'>
                                       <span>✨ Early access</span>
                                       <span>📧 Launch updates</span>
                                       <span>🎁 Exclusive perks</span>
                                    </div>
                                 </div>
                              </div>
                           </CardContent>
                        </Card>

                        {/* Social Proof */}
                        <div className='mt-6 text-center'>
                           <p className='text-sm text-muted-foreground'>
                              Join{" "}
                              <span className='font-semibold text-primary'>
                                 500+
                              </span>{" "}
                              students already on the waitlist
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className='mt-16 text-center'>
                     <div className='inline-flex items-center gap-2 text-sm text-muted-foreground'>
                        <span>Want to see what we're building?</span>
                        <Link href='/' className='text-primary hover:underline'>
                           Explore the demo
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
