"use client"

import { useState } from "react"
import { Hits, Index, useHits } from "react-instantsearch"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { User, MessageSquare, Users, FileText } from "lucide-react"
import { INDICES } from "@/lib/algolia-client"

// User hit component
function UserHit({ hit }: { hit: any }) {
  return (
    <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
      <CardContent className="p-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={hit.profilePicture} alt={hit.name} />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-medium text-sm truncate">{hit.name}</h4>
              {hit.department && (
                <Badge variant="secondary" className="text-xs">
                  {hit.department}
                </Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground truncate">
              {hit.bio || `${hit.year} year student`}
            </p>
            {hit.availability && (
              <div className="flex items-center gap-1 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs text-green-600">Available</span>
              </div>
            )}
          </div>
          <Button variant="ghost" size="sm">
            <MessageSquare className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Post hit component
function PostHit({ hit }: { hit: any }) {
  return (
    <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
      <CardContent className="p-3">
        <div className="flex gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={hit.authorProfilePicture} alt={hit.authorName} />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium text-sm">{hit.authorName}</span>
              <FileText className="h-3 w-3 text-muted-foreground" />
            </div>
            <p className="text-sm line-clamp-2 mb-2">{hit.content}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Custom Hits component for users
function UserHits() {
  const { hits } = useHits()
  
  if (hits.length === 0) return null

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 px-3 py-2">
        <Users className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">People</span>
      </div>
      <div className="space-y-1">
        {hits.slice(0, 3).map((hit) => (
          <UserHit key={hit.objectID} hit={hit} />
        ))}
      </div>
    </div>
  )
}

// Custom Hits component for posts
function PostHits() {
  const { hits } = useHits()
  
  if (hits.length === 0) return null

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 px-3 py-2">
        <FileText className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">Posts</span>
      </div>
      <div className="space-y-1">
        {hits.slice(0, 3).map((hit) => (
          <PostHit key={hit.objectID} hit={hit} />
        ))}
      </div>
    </div>
  )
}

interface SearchResultsProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchResults({ isOpen, onClose }: SearchResultsProps) {
  if (!isOpen) return null

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
      <div className="p-2">
        {/* Users Results */}
        <Index indexName={INDICES.USERS}>
          <UserHits />
        </Index>
        
        <Separator className="my-3" />
        
        {/* Posts Results */}
        <Index indexName={INDICES.POSTS}>
          <PostHits />
        </Index>
      </div>
    </div>
  )
} 