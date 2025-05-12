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
import { useState } from "react"

export default function CreatePostButton() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle post creation logic here
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90">
          <Plus className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] border-pink-500/20">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create a new post</DialogTitle>
            <DialogDescription>Share what you're thinking, reading, or working on</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              placeholder="What's on your mind? Share your thoughts, current reads, or projects..."
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
                >
                  Study Group
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-500"
                >
                  Coffee Chat
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500"
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
  )
}
