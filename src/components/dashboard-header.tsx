"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Menu, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DashboardHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px] border-pink-500/20">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/dashboard" className="text-sm font-medium hover:text-pink-500 transition-colors">
                  Dashboard
                </Link>
                <Link href="/profile" className="text-sm font-medium hover:text-pink-500 transition-colors">
                  Profile
                </Link>
                <Link href="/matches" className="text-sm font-medium hover:text-pink-500 transition-colors">
                  Matches
                </Link>
                <Link href="/messages" className="text-sm font-medium hover:text-pink-500 transition-colors">
                  Messages
                </Link>
                <Link href="/settings" className="text-sm font-medium hover:text-pink-500 transition-colors">
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400" />
              <div className="absolute inset-[2px] rounded-full bg-background" />
              <div className="absolute inset-[4px] rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 opacity-50" />
            </div>
            <span className="text-xl font-bold tracking-tight hidden md:inline-block">Social Garden</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 ml-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-foreground transition-colors hover:text-pink-500"
            >
              Dashboard
            </Link>
            <Link
              href="/matches"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-pink-500"
            >
              Matches
            </Link>
            <Link
              href="/messages"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-pink-500"
            >
              Messages
            </Link>
            <Link
              href="/discover"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-pink-500"
            >
              Discover
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search interests, people..."
                className="w-full rounded-full bg-background pl-8 border-pink-500/20 focus-visible:ring-pink-500"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-pink-500"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8 border border-pink-500/20">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Profile" />
                  <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-400 text-black">
                    YP
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 border-pink-500/20" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Your Name</p>
                  <p className="text-xs leading-none text-muted-foreground">your.email@university.edu</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-pink-500/10" />
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-pink-500/10" />
              <DropdownMenuItem asChild>
                <Link href="/api/auth/logout">Log out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
