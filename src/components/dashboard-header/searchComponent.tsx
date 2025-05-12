"use client"

import { Button } from "../ui/button"
import { useState } from "react"
import { Input } from "../ui/input"
import { Search } from "lucide-react"

export default function SearchComponent() {

    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <>
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
        </>
    )
}