"use client"

import { Button } from "@/components/ui/button"

import { Bell, Menu, Search } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import SearchComponent from "./searchComponent"
import DropdownMenuComponent from "./dropdownMenu"
import { usePathname } from "next/navigation"
import { Prisma } from "@prisma/client"

export default function DashboardHeader({user}: {user: Prisma.UserGetPayload<{
  include: {
    userDetails: {
      include: {
        interests: true,
      }
    }
  }
}>}) {

  const activePage = usePathname();

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
                <Link href="/coffee-chats" className="text-sm font-medium hover:text-pink-500 transition-colors">
                  Coffee Chats
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
            <span className="text-xl font-bold tracking-tight hidden md:inline-block">Quadly</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 ml-6">
            <Link
              href="/dashboard"
              className={`text-sm font-medium  transition-colors hover:text-pink-500 ${activePage === "/dashboard" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Dashboard
            </Link>
            <Link
              href="/matches"
              className={`text-sm font-medium  transition-colors hover:text-pink-500 ${activePage === "/matches" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Matches
            </Link>
            <Link
              href="/messages"
              className={`text-sm font-medium  transition-colors hover:text-pink-500 ${activePage === "/messages" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Messages
            </Link>
            <Link
              href="/coffee-chats"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-pink-500"
            >
              Coffee Chats
            </Link>
            <Link
              href="/discover"
              className={`text-sm font-medium  transition-colors hover:text-pink-500 ${activePage === "/discover" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Discover
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <SearchComponent />

          <Link href="/notifications" className="relative">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-pink-500"></span>
            </Button>
          </Link>

          <DropdownMenuComponent name={user.username} email={user.email} profilePicture={user.userDetails?.profilePicture || null} />
        </div>
      </div>
    </header>
  )
}
