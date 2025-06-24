"use client"

import { Button } from "../ui/button"
import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { InstantSearch, SearchBox, Configure } from "react-instantsearch"
import { searchClient, INDICES } from "@/lib/algolia-client"
import SearchResults from "./search-results"

// Custom SearchBox component that maintains the existing UI
function CustomSearchBox({ onFocus, onBlur, isOpen }: { onFocus: () => void; onBlur: () => void; isOpen: boolean }) {
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }, [isOpen])

  return (
    <SearchBox
      searchAsYouType
      placeholder="Search interests, people..."
      classNames={{
        root: "relative w-full max-w-sm",
        form: "relative",
        input: "w-full rounded-full bg-background pl-8 pr-10 py-2 text-sm border border-pink-500/20 focus-visible:ring-pink-500 focus-visible:ring-2 focus-visible:ring-offset-2 outline-none",
        submit: "hidden",
        reset: "absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer",
        loadingIndicator: "absolute right-8 top-2.5 h-4 w-4",
      }}
      submitIconComponent={() => null}
      resetIconComponent={() => <X className="h-4 w-4" />}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}

export default function SearchComponent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle clicks outside to close search
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearchFocus = () => {
    setShowResults(true)
  }

  const handleSearchBlur = () => {
    // Delay hiding results to allow for clicks on results
    setTimeout(() => {
      setShowResults(false)
    }, 200)
  }

  if (!isSearchOpen) {
    return (
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsSearchOpen(true)} 
        className="hidden md:flex"
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
    )
  }

  return (
    <div ref={containerRef} className="relative">
      <InstantSearch searchClient={searchClient} indexName={INDICES.USERS}>
        <Configure hitsPerPage={20} />
        
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground z-10" />
          <CustomSearchBox 
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            isOpen={isSearchOpen}
          />
        </div>

        <SearchResults 
          isOpen={showResults}
          onClose={() => setShowResults(false)}
        />
      </InstantSearch>
    </div>
  )
}