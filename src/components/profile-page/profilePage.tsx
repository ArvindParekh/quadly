"use client";

import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Camera, Plus, Save, Sparkles, X } from "lucide-react";
import { useEffect, useState, startTransition } from "react";
import { useActionState } from "react";
import { UserDetailsClient } from "@/types/userDetails";
import { updateUserDetails } from "@/actions/user";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { InterestTag } from "../interest-tag";
import { DialogDescription, DialogTrigger } from "@radix-ui/react-dialog";
import {
   Dialog,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog";
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from "@/components/ui/command";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

export default function ProfilePage({
   userDetails,
   userId,
}: {
   userDetails: UserDetailsClient;
   userId: string;
}) {
   const [state, formAction] = useActionState(updateUserDetails, null);

   // State for controlled inputs
   const [formData, setFormData] = useState({
      name: userDetails?.name,
      department: userDetails?.department,
      year: userDetails?.year,
      bio: userDetails?.bio,
      reading: userDetails?.reading,
      availability: userDetails?.availability,
   });

   const allInterests = [
      "Distributed Systems",
      "Algorithms",
      "Machine Learning",
      "Web Development",
      "Coffee",
      "Reading",
      "Hiking",
      "Photography",
      "Cloud Computing",
      "DevOps",
      "Cybersecurity",
      "Data Science",
      "Artificial Intelligence",
      "Blockchain",
      "Quantum Computing",
   ];
   const [selectedInterests, setSelectedInterests] = useState<string[]>(
      userDetails?.interests.map(
         (userInterest) => userInterest.interestName
      ) || []
   );
   const [popoverOpen, setPopoverOpen] = useState(false);
   const [searchTerm, setSearchTerm] = useState("");

   const handleSelectInterest = (interest: string) => {
      if (!selectedInterests.includes(interest)) {
         setSelectedInterests([...selectedInterests, interest]);
      }
      setSearchTerm("");
      // setPopoverOpen(false); // Keep popover open for multi-select if desired, or close it.
      // For this iteration, let's keep it open to allow easier multiple selections.
   };

   const handleRemoveInterest = (interestToRemove: string) => {
      setSelectedInterests(
         selectedInterests.filter((interest) => interest !== interestToRemove)
      );
   };

   const filteredInterests = allInterests.filter(
      (interest) =>
         !selectedInterests.includes(interest) &&
         interest.toLowerCase().includes(searchTerm.toLowerCase())
   );

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Compare formData with userDetails
      const updateFormData = new FormData(e.target as HTMLFormElement);
      const updatedData = Object.fromEntries(updateFormData);
      const { userId, ...updatedDataWithoutUserId } = updatedData;

      if (
         JSON.stringify(updatedDataWithoutUserId) === JSON.stringify(formData)
      ) {
         toast.error("No changes made");
         return;
      }

      // Wrap formAction in startTransition
      startTransition(() => {
         formAction(updateFormData);
      });
   };

   useEffect(() => {
      if (state?.success) {
         setFormData({
            name: userDetails?.name,
            department: userDetails?.department,
            year: userDetails?.year,
            bio: userDetails?.bio,
            reading: userDetails?.reading,
            availability: userDetails?.availability,
         });
      }
   }, [state, userDetails]);

   useEffect(() => {
      if (state?.success) {
         toast.success(state.message || "Profile updated successfully!");
      } else if (state?.error) {
         toast.error(state.error || "Failed to update profile.");
      }
   }, [state]);

   const handleInterestsSubmit = async (
      e: React.FormEvent<HTMLFormElement>
   ) => {
      e.preventDefault();

      const newInterests = selectedInterests.map((interest) => ({
         interest: {
            name: interest,
         },
      }));

      const updatedData = new FormData();
      updatedData.append("userId", userId);
      updatedData.append("interests", JSON.stringify(newInterests));

      console.log(updatedData);
      startTransition(() => {
         formAction(updatedData);
      });
   };

   return (
      <div className='min-h-screen bg-background'>
         <Toaster />
         <main className='container py-6 mx-auto'>
            <form onSubmit={handleSubmit}>
               <Input type='hidden' name='userId' value={userId} />
               <div className='max-w-3xl mx-auto space-y-6'>
                  <div className='flex items-center justify-between'>
                     <h1 className='text-3xl font-bold tracking-tight'>
                        Your Profile ✨
                     </h1>
                     <Button
                        type='submit'
                        className='bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90'
                     >
                        <Save className='mr-2 h-4 w-4' />
                        Save Changes
                     </Button>
                  </div>

                  <Card className='border-pink-500/20 overflow-hidden'>
                     <CardHeader className='bg-gradient-to-r from-pink-500/10 to-yellow-400/10'>
                        <CardTitle>Profile Picture</CardTitle>
                        <CardDescription>
                           This is how others will recognize you
                        </CardDescription>
                     </CardHeader>
                     <CardContent className='pt-6'>
                        <div className='flex flex-col items-center sm:flex-row sm:items-start gap-6'>
                           <div className='relative'>
                              <Avatar className='h-32 w-32 border-2 border-pink-500'>
                                 <AvatarImage
                                    src={userDetails?.profilePicture as string}
                                    alt='Profile'
                                 />
                                 <AvatarFallback className='text-4xl bg-gradient-to-br from-pink-500 to-yellow-400 text-black'>
                                    {userDetails?.name?.charAt(0)}
                                 </AvatarFallback>
                              </Avatar>
                              <Button
                                 size='icon'
                                 className='absolute bottom-0 right-0 h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90'
                              >
                                 <Camera className='h-4 w-4' />
                                 <span className='sr-only'>
                                    Change profile picture
                                 </span>
                              </Button>
                           </div>
                           <div className='flex flex-col space-y-2 flex-1'>
                              <div className='flex flex-col space-y-1'>
                                 <label
                                    htmlFor='name'
                                    className='text-sm font-medium'
                                 >
                                    Full Name
                                 </label>
                                 <Input
                                    id='name'
                                    name='name'
                                    defaultValue={formData.name}
                                    className='border-pink-500/20 focus-visible:ring-pink-500'
                                 />
                              </div>
                              <div className='flex flex-col space-y-1'>
                                 <label
                                    htmlFor='department'
                                    className='text-sm font-medium'
                                 >
                                    Department
                                 </label>
                                 <Input
                                    id='department'
                                    name='department'
                                    defaultValue={formData.department as string}
                                    className='border-pink-500/20 focus-visible:ring-pink-500'
                                 />
                              </div>
                              <div className='flex flex-col space-y-1'>
                                 <label
                                    htmlFor='year'
                                    className='text-sm font-medium'
                                 >
                                    Year
                                 </label>
                                 <Input
                                    id='year'
                                    name='year'
                                    defaultValue={formData.year as string}
                                    className='border-pink-500/20 focus-visible:ring-pink-500'
                                 />
                              </div>
                           </div>
                        </div>
                     </CardContent>
                  </Card>

                  <Card className='border-pink-500/20 overflow-hidden'>
                     <CardHeader className='bg-gradient-to-r from-yellow-400/10 to-blue-500/10'>
                        <CardTitle>About You</CardTitle>
                        <CardDescription>
                           Tell others about yourself and what you're interested
                           in
                        </CardDescription>
                     </CardHeader>
                     <CardContent className='space-y-4 pt-6'>
                        <div className='flex flex-col space-y-2'>
                           <label htmlFor='bio' className='text-sm font-medium'>
                              Bio
                           </label>
                           <Textarea
                              id='bio'
                              name='bio'
                              placeholder='Grad student passionate about distributed systems and software architecture. Always looking to connect with fellow tech enthusiasts over coffee! ☕'
                              className='min-h-[120px] border-pink-500/20 focus-visible:ring-pink-500'
                              defaultValue={formData.bio as string}
                           />
                        </div>

                        <div className='flex flex-col space-y-2'>
                           <label className='text-sm font-medium'>
                              Interests
                           </label>
                           <div className='flex flex-wrap gap-2'>
                              {userDetails?.interests.map(
                                 (userInterest) => (
                                    <InterestTag
                                       key={userInterest.id}
                                       name={userInterest.interestName}
                                       color='pink'
                                       removable={true}
                                       interactive={true}
                                    />
                                 )
                              )}
                              {/* <div className='flex items-center gap-1 bg-pink-500/10 rounded-full border border-pink-500/20 px-3 py-1 text-sm text-pink-500'>
                                 <span>Distributed Systems</span>
                                 <Button
                                    variant='ghost'
                                    size='icon'
                                    className='h-4 w-4 ml-1 hover:bg-pink-500/20'
                                 >
                                    <X className='h-3 w-3' />
                                    <span className='sr-only'>Remove</span>
                                 </Button>
                              </div>
                              <div className='flex items-center gap-1 bg-yellow-400/10 rounded-full border border-yellow-400/20 px-3 py-1 text-sm text-yellow-400'>
                                 <span>Algorithms</span>
                                 <Button
                                    variant='ghost'
                                    size='icon'
                                    className='h-4 w-4 ml-1 hover:bg-yellow-400/20'
                                 >
                                    <X className='h-3 w-3' />
                                    <span className='sr-only'>Remove</span>
                                 </Button>
                              </div>
                              <div className='flex items-center gap-1 bg-blue-500/10 rounded-full border border-blue-500/20 px-3 py-1 text-sm text-blue-500'>
                                 <span>Machine Learning</span>
                                 <Button
                                    variant='ghost'
                                    size='icon'
                                    className='h-4 w-4 ml-1 hover:bg-blue-500/20'
                                 >
                                    <X className='h-3 w-3' />
                                    <span className='sr-only'>Remove</span>
                                 </Button>
                              </div>
                              <div className='flex items-center gap-1 bg-pink-500/10 rounded-full border border-pink-500/20 px-3 py-1 text-sm text-pink-500'>
                                 <span>Web Development</span>
                                 <Button
                                    variant='ghost'
                                    size='icon'
                                    className='h-4 w-4 ml-1 hover:bg-pink-500/20'

                                 >
                                    <X className='h-3 w-3' />
                                    <span className='sr-only'>Remove</span>
                                 </Button>
                              </div>
                              <div className='flex items-center gap-1 bg-yellow-400/10 rounded-full border border-yellow-400/20 px-3 py-1 text-sm text-yellow-400'>
                                 <span>Coffee</span>
                                 <Button
                                    variant='ghost'
                                    size='icon'
                                    className='h-4 w-4 ml-1 hover:bg-yellow-400/20'
                                 >
                                    <X className='h-3 w-3' />
                                    <span className='sr-only'>Remove</span>
                                 </Button>
                              </div> */}
                              <Dialog>
                                 <DialogTrigger asChild>
                                    <Button
                                       variant='outline'
                                       size='sm'
                                       className='rounded-full border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-500'
                                    >
                                       <Plus className='h-3 w-3 mr-1' />
                                       Add Interest
                                    </Button>
                                 </DialogTrigger>
                                 <DialogContent>
                                    <DialogHeader>
                                       <DialogTitle>Add Interest</DialogTitle>
                                       <DialogDescription>
                                          Select interests to add to your
                                          profile. Click an interest to add it,
                                          click the 'X' on a tag to remove it.
                                       </DialogDescription>
                                    </DialogHeader>

                                    {/* Display selected interests as tags */}
                                    <div className='flex flex-wrap gap-2 mb-4 pt-2'>
                                       {selectedInterests.map((interest) => (
                                          <div
                                             key={interest}
                                             className='flex items-center gap-1 bg-blue-500/10 rounded-full border border-blue-500/20 px-3 py-1 text-sm text-blue-500'
                                          >
                                             <span>{interest}</span>
                                             <Button
                                                variant='ghost'
                                                size='icon'
                                                className='h-4 w-4 ml-1 hover:bg-blue-500/20 rounded-full'
                                                onClick={() =>
                                                   handleRemoveInterest(
                                                      interest
                                                   )
                                                }
                                             >
                                                <X className='h-3 w-3' />
                                                <span className='sr-only'>
                                                   Remove {interest}
                                                </span>
                                             </Button>
                                          </div>
                                       ))}
                                    </div>

                                    <Popover
                                       open={popoverOpen}
                                       onOpenChange={setPopoverOpen}
                                    >
                                       <PopoverTrigger asChild>
                                          <Button
                                             variant='outline'
                                             role='combobox'
                                             aria-expanded={popoverOpen}
                                             className='w-full justify-between border-pink-500/20 focus-visible:ring-pink-500 text-muted-foreground hover:text-muted-foreground'
                                             onClick={() =>
                                                setPopoverOpen(!popoverOpen)
                                             } // Toggle popover
                                          >
                                             {selectedInterests.length > 0
                                                ? "Add more interests..."
                                                : "Select interests..."}
                                             <Plus className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                                          </Button>
                                       </PopoverTrigger>
                                       <PopoverContent className='w-[--radix-popover-trigger-width] p-0'>
                                          <Command>
                                             <CommandInput
                                                placeholder='Search interests...'
                                                value={searchTerm}
                                                onValueChange={setSearchTerm}
                                             />
                                             <CommandList>
                                                <CommandEmpty>
                                                   {searchTerm
                                                      ? "No interest found."
                                                      : "Type to search or add new."}
                                                </CommandEmpty>
                                                <CommandGroup
                                                   heading={
                                                      filteredInterests.length >
                                                      0
                                                         ? "Suggestions"
                                                         : undefined
                                                   }
                                                >
                                                   {filteredInterests.map(
                                                      (interest) => (
                                                         <CommandItem
                                                            key={interest}
                                                            value={interest}
                                                            onSelect={() => {
                                                               handleSelectInterest(
                                                                  interest
                                                               );
                                                            }}
                                                         >
                                                            <span>
                                                               {interest}
                                                            </span>
                                                         </CommandItem>
                                                      )
                                                   )}
                                                </CommandGroup>
                                                {searchTerm &&
                                                   !allInterests
                                                      .map((i) =>
                                                         i.toLowerCase()
                                                      )
                                                      .includes(
                                                         searchTerm.toLowerCase()
                                                      ) && (
                                                      <CommandGroup heading='New Interest'>
                                                         <CommandItem
                                                            onSelect={() =>
                                                               handleSelectInterest(
                                                                  searchTerm.trim()
                                                               )
                                                            }
                                                            className='italic'
                                                         >
                                                            Add "
                                                            {searchTerm.trim()}"
                                                         </CommandItem>
                                                      </CommandGroup>
                                                   )}
                                             </CommandList>
                                          </Command>
                                       </PopoverContent>
                                    </Popover>
                                    <DialogFooter className='mt-4'>
                                       <Button
                                          variant='outline'
                                          onClick={() => {
                                             /* Close dialog */
                                          }}
                                       >
                                          Cancel
                                       </Button>
                                       <Button
                                          className='bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90'
                                          onClick={(
                                             e: React.MouseEvent<HTMLButtonElement>
                                          ) => {
                                             handleInterestsSubmit(
                                                e as unknown as React.FormEvent<HTMLFormElement>
                                             );
                                          }}
                                       >
                                          Add Selected
                                       </Button>
                                    </DialogFooter>
                                 </DialogContent>
                              </Dialog>
                           </div>
                        </div>

                        <div className='flex flex-col space-y-2'>
                           <label
                              htmlFor='reading'
                              className='text-sm font-medium'
                           >
                              Currently Reading
                           </label>
                           <div className='flex items-center gap-2'>
                              <BookOpen className='h-4 w-4 text-pink-500' />
                              <Input
                                 id='reading'
                                 name='reading'
                                 placeholder='Designing Data-Intensive Applications'
                                 defaultValue={formData.reading as string}
                                 className='flex-1 border-pink-500/20 focus-visible:ring-pink-500'
                              />
                           </div>
                        </div>
                     </CardContent>
                  </Card>

                  <Card className='border-pink-500/20 overflow-hidden'>
                     <CardHeader className='bg-gradient-to-r from-blue-500/10 to-pink-500/10'>
                        <CardTitle>Connection Preferences</CardTitle>
                        <CardDescription>
                           How would you like to connect with others?
                        </CardDescription>
                     </CardHeader>
                     <CardContent className='space-y-4 pt-6'>
                        <div className='flex flex-col space-y-2'>
                           <label className='text-sm font-medium'>
                              I'm open to:
                           </label>
                           <div className='flex flex-wrap gap-2'>
                              <ToggleGroup type='multiple'>
                                 
                                    {/* <Badge
                                       variant='outline'
                                       className='bg-pink-500/10 border-pink-500/20 hover:bg-pink-500/20 cursor-pointer'
                                 > */}
                                    <ToggleGroupItem value='coffee' className='rounded-full px-2.5 py-0.5 text-xs font-semibold border text-pink-700 bg-pink-500/10 border-pink-500/20 hover:bg-pink-500/20 data-[state=on]:bg-pink-500 data-[state=on]:text-white data-[state=on]:border-pink-500 cursor-pointer'>
                                    Coffee Chats
                                    </ToggleGroupItem>
                                 {/* </Badge> */}
                                 <ToggleGroupItem value='study' className='rounded-full px-2.5 py-0.5 text-xs font-semibold border text-yellow-700 bg-yellow-400/10 border-yellow-400/20 hover:bg-yellow-400/20 data-[state=on]:bg-yellow-400 data-[state=on]:text-black data-[state=on]:border-yellow-400 cursor-pointer'>
                                       Study Groups
                                 </ToggleGroupItem>
                                 <ToggleGroupItem value='collaboration' className='rounded-full px-2.5 py-0.5 text-xs font-semibold border text-blue-700 bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 data-[state=on]:bg-blue-500 data-[state=on]:text-white data-[state=on]:border-blue-500 cursor-pointer'>
                                       Project Collaboration
                                 </ToggleGroupItem>
                                 <ToggleGroupItem value='mentorship' className='rounded-full px-2.5 py-0.5 text-xs font-semibold border text-pink-700 bg-pink-500/10 border-pink-500/20 hover:bg-pink-500/20 data-[state=on]:bg-pink-500 data-[state=on]:text-white data-[state=on]:border-pink-500 cursor-pointer'>
                                       Mentorship
                                 </ToggleGroupItem>
                                 <ToggleGroupItem value='book-discussions' className='rounded-full px-2.5 py-0.5 text-xs font-semibold border text-yellow-700 bg-yellow-400/10 border-yellow-400/20 hover:bg-yellow-400/20 data-[state=on]:bg-yellow-400 data-[state=on]:text-black data-[state=on]:border-yellow-400 cursor-pointer'>
                                       Book Discussions
                                 </ToggleGroupItem>
                              </ToggleGroup>
                           </div>
                        </div>

                        <div className='flex flex-col space-y-2'>
                           <label
                              htmlFor='availability'
                              className='text-sm font-medium'
                           >
                              Availability
                           </label>
                           <Textarea
                              id='availability'
                              name='availability'
                              placeholder='Weekday afternoons and evenings. Coffee chats on campus preferred.'
                              className='min-h-[80px] border-pink-500/20 focus-visible:ring-pink-500'
                              defaultValue={formData.availability as string}
                           />
                        </div>
                     </CardContent>
                     <CardFooter className='flex justify-between border-t border-pink-500/10 pt-4'>
                        <Button
                           variant='outline'
                           className='border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500'
                        >
                           Cancel
                        </Button>
                        <Button
                           type='submit'
                           className='bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90'
                        >
                           <Sparkles className='mr-2 h-4 w-4' />
                           Save Preferences
                        </Button>
                     </CardFooter>
                  </Card>
               </div>
            </form>
         </main>
      </div>
   );
}
