"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Coffee, MapPin, MessageSquare, Sparkles, Star } from "lucide-react";
import { campusVenues, coffeeChatPurposes } from "@/lib/coffee-chat/venue";
import { getConversationStartersForPurpose } from "@/lib/coffee-chat/conversation-starters";
import type { Venue, CoffeeChatPurpose } from "@/lib/coffee-chat/types";
import { toast } from "sonner";
import { createCoffeeChat } from "@/actions/coffeeChat";

interface CoffeeChatInviteModalProps {
   user: {
      id: string;
      name: string;
      avatar: string;
      department: string;
      interests?: string[];
      currentUserId: string;
   };
   sharedInterests?: string[];
   children: React.ReactNode;
}

export function CoffeeChatInviteModal({
   user,
   sharedInterests = [],
   children,
}: CoffeeChatInviteModalProps) {
   const [open, setOpen] = useState(false);
   const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
   const [selectedPurpose, setSelectedPurpose] =
      useState<CoffeeChatPurpose | null>(null);
   const [selectedDate, setSelectedDate] = useState("");
   const [selectedTime, setSelectedTime] = useState("");
   const [duration, setDuration] = useState("");
   const [message, setMessage] = useState("");
   const [showConversationStarters, setShowConversationStarters] =
      useState(false);

   const conversationStarters = selectedPurpose
      ? getConversationStartersForPurpose(selectedPurpose.id, sharedInterests)
      : [];

   const handleVenueSelect = (venueId: string) => {
      const venue = campusVenues.find((v) => v.id === venueId);
      setSelectedVenue(venue || null);
   };

   const handlePurposeSelect = (purposeId: string) => {
      setSelectedPurpose(
         coffeeChatPurposes.find((p) => p.id === purposeId) || null
      );
      const purpose = coffeeChatPurposes.find((p) => p.id === purposeId);
      if (purpose) {
         setDuration(purpose.suggestedDuration.toString());
      }
   };

   const handleSendInvitation = async () => {
      if (
         !selectedVenue ||
         !selectedPurpose ||
         !selectedDate ||
         !selectedTime ||
         !duration
      ) {
         toast.error("Please fill in all required fields");
         return;
      }

      // Basic date validation
      const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);
      if (selectedDateTime <= new Date()) {
         toast.error("Please select a future date and time");
         return;
      }

      try {
         const coffeeChatData = {
            inviterId: user.currentUserId,
            inviteeId: user.id,
            purpose: selectedPurpose,
            venue: {
               name: selectedVenue.name,
               description: selectedVenue.description,
               tags: selectedVenue.features,
               rating: selectedVenue.rating,
               location: selectedVenue.location,
               hours: selectedVenue.hours,
               noiseLevel: selectedVenue.atmosphere,
            },
            dateTime: `${selectedDate} ${selectedTime}`,
            duration: Number.parseInt(duration),
            personalMessage: message || undefined,
            scheduledAt: selectedDateTime,
         };

         console.log("sending coffee chat data", coffeeChatData);

        //  const result = await createCoffeeChat(coffeeChatData);

        const result = {
          success: true,
          message: "Coffee chat invitation sent to " + user.name + "! ☕",
        }

         if (result.success) {
            toast.success(`Coffee chat invitation sent to ${user.name}! ☕`);
            setOpen(false);
            // Reset form
            setSelectedVenue(null);
            setSelectedPurpose(null);
            setSelectedDate("");
            setSelectedTime("");
            setDuration("");
            setMessage("");
            setShowConversationStarters(false);
         } else {
            toast.error(result.message || "Failed to send invitation");
         }
      } catch (error) {
         toast.error("Failed to send invitation. Please try again.");
         console.error("Error creating coffee chat:", error);
      }
   };

   const getVenueIcon = (type: string) => {
      switch (type) {
         case "cafe":
            return "☕";
         case "library":
            return "📚";
         case "outdoor":
            return "🌳";
         case "study-room":
            return "🏢";
         case "dining":
            return "🍽️";
         default:
            return "📍";
      }
   };

   const getAtmosphereColor = (atmosphere: string) => {
      switch (atmosphere) {
         case "quiet":
            return "bg-blue-500/10 text-blue-500 border-blue-500/20";
         case "moderate":
            return "bg-yellow-400/10 text-yellow-400 border-yellow-400/20";
         case "lively":
            return "bg-pink-500/10 text-pink-500 border-pink-500/20";
         default:
            return "bg-gray-500/10 text-gray-500 border-gray-500/20";
      }
   };

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>{children}</DialogTrigger>
         <DialogContent className='sm:max-w-2xl border-pink-500/20 max-h-[90vh] overflow-y-auto'>
            <DialogHeader>
               <DialogTitle className='flex items-center gap-2'>
                  <Coffee className='h-5 w-5 text-pink-500' />
                  Invite {user.name} for Coffee
               </DialogTitle>
               <DialogDescription>
                  Set up a coffee chat to connect and share ideas
               </DialogDescription>
            </DialogHeader>

            <div className='space-y-6'>
               {/* User Preview */}
               <Card className='border-pink-500/20 bg-gradient-to-r from-pink-500/5 to-yellow-400/5'>
                  <CardContent className='pt-4'>
                     <div className='flex items-center gap-3'>
                        <Avatar className='h-12 w-12 border-2 border-pink-500/20'>
                           <AvatarImage
                              src={user.avatar || "/placeholder.svg"}
                              alt={user.name}
                           />
                           <AvatarFallback className='bg-gradient-to-br from-pink-500 to-yellow-400 text-black'>
                              {user.name
                                 .split(" ")
                                 .map((n) => n[0])
                                 .join("")}
                           </AvatarFallback>
                        </Avatar>
                        <div className='flex-1'>
                           <h3 className='font-semibold'>{user.name}</h3>
                           <p className='text-sm text-muted-foreground'>
                              {user.department}
                           </p>
                           {sharedInterests.length > 0 && (
                              <div className='flex flex-wrap gap-1 mt-2'>
                                 {sharedInterests
                                    .slice(0, 3)
                                    .map((interest) => (
                                       <Badge
                                          key={interest}
                                          variant='outline'
                                          className='text-xs bg-pink-500/10 text-pink-500 border-pink-500/20'
                                       >
                                          {interest}
                                       </Badge>
                                    ))}
                              </div>
                           )}
                        </div>
                        <Sparkles className='h-5 w-5 text-yellow-400' />
                     </div>
                  </CardContent>
               </Card>

               {/* Purpose Selection */}
               <div className='space-y-3'>
                  <Label className='text-base font-medium'>
                     What's the purpose of this coffee chat?
                  </Label>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                     {coffeeChatPurposes.map((purpose) => (
                        <Card
                           key={purpose.id}
                           className={`cursor-pointer transition-all hover:shadow-md ${
                              selectedPurpose?.id === purpose.id
                                 ? "border-pink-500 bg-pink-500/5"
                                 : "border-pink-500/20 hover:border-pink-500/40"
                           }`}
                           onClick={() => handlePurposeSelect(purpose.id)}
                        >
                           <CardContent className='p-4'>
                              <div className='flex items-center gap-3'>
                                 <span className='text-2xl'>
                                    {purpose.icon}
                                 </span>
                                 <div>
                                    <h4 className='font-medium'>
                                       {purpose.label}
                                    </h4>
                                    <p className='text-xs text-muted-foreground'>
                                       {purpose.description}
                                    </p>
                                    <p className='text-xs text-pink-500 mt-1'>
                                       ~{purpose.suggestedDuration} min
                                    </p>
                                 </div>
                              </div>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               </div>

               {/* Venue Selection */}
               <div className='space-y-3'>
                  <Label className='text-base font-medium'>
                     Choose a venue
                  </Label>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto'>
                     {campusVenues.map((venue) => (
                        <Card
                           key={venue.id}
                           className={`cursor-pointer transition-all hover:shadow-md ${
                              selectedVenue?.id === venue.id
                                 ? "border-pink-500 bg-pink-500/5"
                                 : "border-pink-500/20 hover:border-pink-500/40"
                           }`}
                           onClick={() => handleVenueSelect(venue.id)}
                        >
                           <CardContent className='p-4'>
                              <div className='space-y-2'>
                                 <div className='flex items-start justify-between'>
                                    <div className='flex items-center gap-2'>
                                       <span className='text-lg'>
                                          {getVenueIcon(venue.type)}
                                       </span>
                                       <div>
                                          <h4 className='font-medium text-sm'>
                                             {venue.name}
                                          </h4>
                                          <div className='flex items-center gap-1'>
                                             <Star className='h-3 w-3 text-yellow-400 fill-current' />
                                             <span className='text-xs text-muted-foreground'>
                                                {venue.rating}
                                             </span>
                                          </div>
                                       </div>
                                    </div>
                                    <Badge
                                       variant='outline'
                                       className={`text-xs ${getAtmosphereColor(
                                          venue.atmosphere
                                       )}`}
                                    >
                                       {venue.atmosphere}
                                    </Badge>
                                 </div>
                                 <p className='text-xs text-muted-foreground'>
                                    {venue.description}
                                 </p>
                                 <div className='flex items-center gap-1 text-xs text-muted-foreground'>
                                    <MapPin className='h-3 w-3' />
                                    <span>{venue.location}</span>
                                 </div>
                                 <div className='flex flex-wrap gap-1'>
                                    {venue.features
                                       .slice(0, 3)
                                       .map((feature) => (
                                          <Badge
                                             key={feature}
                                             variant='outline'
                                             className='text-xs'
                                          >
                                             {feature}
                                          </Badge>
                                       ))}
                                 </div>
                              </div>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               </div>

               {/* Date and Time */}
               <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div className='space-y-2'>
                     <Label htmlFor='date'>Date</Label>
                     <Input
                        id='date'
                        type='date'
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className='border-pink-500/20 focus-visible:ring-pink-500'
                     />
                  </div>
                  <div className='space-y-2'>
                     <Label htmlFor='time'>Time</Label>
                     <Input
                        id='time'
                        type='time'
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className='border-pink-500/20 focus-visible:ring-pink-500'
                     />
                  </div>
                  <div className='space-y-2'>
                     <Label htmlFor='duration'>Duration (minutes)</Label>
                     <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger className='border-pink-500/20 focus:ring-pink-500'>
                           <SelectValue placeholder='Select duration' />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value='30'>30 minutes</SelectItem>
                           <SelectItem value='45'>45 minutes</SelectItem>
                           <SelectItem value='60'>1 hour</SelectItem>
                           <SelectItem value='90'>1.5 hours</SelectItem>
                           <SelectItem value='120'>2 hours</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
               </div>

               {/* Personal Message */}
               <div className='space-y-2'>
                  <Label htmlFor='message'>Personal message (optional)</Label>
                  <Textarea
                     id='message'
                     placeholder='Add a personal note to your invitation...'
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                     className='border-pink-500/20 focus-visible:ring-pink-500'
                     rows={3}
                  />
               </div>

               {/* Conversation Starters Preview */}
               {conversationStarters.length > 0 && (
                  <div className='space-y-3'>
                     <div className='flex items-center justify-between'>
                        <Label className='text-base font-medium'>
                           Conversation Starters
                        </Label>
                        <Button
                           variant='ghost'
                           size='sm'
                           onClick={() =>
                              setShowConversationStarters(
                                 !showConversationStarters
                              )
                           }
                           className='text-pink-500 hover:text-pink-600'
                        >
                           <MessageSquare className='h-4 w-4 mr-2' />
                           {showConversationStarters ? "Hide" : "Show"} Ideas
                        </Button>
                     </div>

                     {showConversationStarters && (
                        <Card className='border-yellow-400/20 bg-gradient-to-r from-yellow-400/5 to-blue-500/5'>
                           <CardHeader className='pb-3'>
                              <CardTitle className='text-sm flex items-center'>
                                 <Sparkles className='h-4 w-4 mr-2 text-yellow-400' />
                                 Suggested conversation starters
                              </CardTitle>
                              <CardDescription className='text-xs'>
                                 These will be shared with both of you after the
                                 invitation is accepted
                              </CardDescription>
                           </CardHeader>
                           <CardContent className='space-y-2'>
                              {conversationStarters.map((starter, index) => (
                                 <div
                                    key={starter.id}
                                    className='text-sm p-2 rounded-lg bg-background/50'
                                 >
                                    <span className='text-yellow-400 font-medium'>
                                       {index + 1}.
                                    </span>{" "}
                                    {starter.question}
                                 </div>
                              ))}
                           </CardContent>
                        </Card>
                     )}
                  </div>
               )}
            </div>

            <DialogFooter>
               <Button variant='outline' onClick={() => setOpen(false)}>
                  Cancel
               </Button>
               <Button
                  onClick={handleSendInvitation}
                  className='bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90'
               >
                  <Coffee className='h-4 w-4 mr-2' />
                  Send Invitation
               </Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
}
