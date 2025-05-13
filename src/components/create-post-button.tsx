"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Sparkles } from "lucide-react"
import { startTransition, useActionState, useEffect, useState } from "react"
import { createPost } from "@/actions/post";
import { toast } from "sonner"
import { Toaster } from "./ui/sonner"

export default function CreatePostButton({ userId }: { userId: string }) {
  const [open, setOpen] = useState(false)
  const [state, formAction] = useActionState(createPost, null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle post creation logic here
    setOpen(false)
    const formData = new FormData(e.target as HTMLFormElement);

    startTransition(() => {
      formAction(formData);
    })
  }

  useEffect(()=> {
    if (state?.success) {
      toast.success("Post created successfully");
    } else if (state?.error) {
      toast.error("Failed to create post");
    }
  }, [state])

  return (
    <>
    <Toaster />
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90">
          <Plus className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] border-pink-500/20">
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="userId" value={userId} />
          <DialogHeader>
            <DialogTitle>Create a new post</DialogTitle>
            <DialogDescription>Share what you're thinking, reading, or working on</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              placeholder="What's on your mind? Share your thoughts, current reads, or projects..."
              name="content"
              className="min-h-[120px] border-pink-500/20 focus-visible:ring-pink-500"
            />
            <div className="space-y-2">
              <label htmlFor="interests" className="text-sm font-medium">
                Add relevant interests (comma separated)
              </label>
              <Input
                id="interests"
                placeholder="e.g., Machine Learning, Poetry, Coffee"
                className="border-pink-500/20 focus-visible:ring-pink-500"
                name="interests"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Looking for:</label>
              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500"
                >
                  Discussion
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full border-yellow-400/20 hover:bg-yellow-400/10 hover:text-yellow-400"
                  name="studyGroup"
                >
                  Study Group
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-500"
                  name="coffeeChat"
                >
                  Coffee Chat
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500"
                  name="projectPartner"
                >
                  Project Partner
                </Button>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90">
              <Sparkles className="mr-2 h-4 w-4" />
              Post
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    </>
  )
}
