"use client"

import Link from "next/link"
import LogOutButton from "../signup/logOutButton"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"

export default function DropdownMenuComponent({ name, email }: { name: string, email: string }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8 border border-pink-500/20">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Profile" />
                        <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-400 text-black">
                            {name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56 border-pink-500/20" align="end" forceMount>
      <DropdownMenuLabel className="font-normal">
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">{name}</p>
          <p className="text-xs leading-none text-muted-foreground">{email}</p>
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
                    <LogOutButton />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}