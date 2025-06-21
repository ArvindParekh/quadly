"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Share,
  Copy,
  Check,
  QrCode,
  Mail,
  MessageCircle,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Sparkles,
} from "lucide-react"
import { toast } from "sonner"

interface ShareProfileModalProps {
  user: {
    name: string
    username: string
    avatar: string
    department: string
    year: string
    matchPercentage?: number
  }
}

export function ShareProfileModal({ user }: ShareProfileModalProps) {
  const [copied, setCopied] = useState(false)
  const [showQR, setShowQR] = useState(false)

  const profileUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/user/${user.username}`
  const shareText = `Check out ${user.name}'s profile on Quadly! 🌱✨`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl)
      setCopied(true)
      toast.success("Link copied to clipboard! 📋")
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error("Failed to copy link")
    }
  }

  const shareToSocial = (platform: string) => {
    const encodedUrl = encodeURIComponent(profileUrl)
    const encodedText = encodeURIComponent(shareText)

    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      instagram: `https://www.instagram.com/`, // Instagram doesn't support direct URL sharing
      email: `mailto:?subject=${encodeURIComponent(`Check out ${user.name} on Quadly`)}&body=${encodedText}%0A%0A${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    }

    if (platform === "instagram") {
      toast.info("Instagram doesn't support direct link sharing. Copy the link and share manually! 📸")
      return
    }

    window.open(urls[platform as keyof typeof urls], "_blank", "width=600,height=400")
    toast.success(`Shared to ${platform}! 🚀`)
  }

  const generateQRCode = () => {
    // Using a QR code API service
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(profileUrl)}&bgcolor=1a1a1a&color=ff3eb5`
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-500/10 hover:text-pink-500">
          <Share className="h-4 w-4" />
          <span className="sr-only">Share Profile</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-pink-500/20 bg-background">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Share className="h-5 w-5 text-pink-500" />
            Share Profile
          </DialogTitle>
          <DialogDescription>Share {user.name}'s profile with your friends and connections</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Profile Preview */}
          <div className="rounded-xl border border-pink-500/20 bg-gradient-to-r from-pink-500/5 to-yellow-400/5 p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-pink-500/20">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-400 text-black">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{user.name}</h3>
                  {user.matchPercentage && (
                    <Badge className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black text-xs">
                      {user.matchPercentage}% Match
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {user.department}, Year {user.year}
                </p>
              </div>
              <Sparkles className="h-5 w-5 text-yellow-400" />
            </div>
          </div>

          {/* Copy Link Section */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Share Link</h4>
            <div className="flex gap-2">
              <Input value={profileUrl} readOnly className="flex-1 border-pink-500/20 focus-visible:ring-pink-500" />
              <Button
                onClick={copyToClipboard}
                className={`px-3 transition-all ${
                  copied
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90"
                }`}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Social Media Sharing */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Share to Social Media</h4>
            <div className="grid grid-cols-4 gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => shareToSocial("twitter")}
                className="flex flex-col items-center gap-1 h-auto py-3 border-blue-400/20 hover:bg-blue-400/10 hover:text-blue-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="text-xs">Twitter</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => shareToSocial("instagram")}
                className="flex flex-col items-center gap-1 h-auto py-3 border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-xs">Instagram</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => shareToSocial("facebook")}
                className="flex flex-col items-center gap-1 h-auto py-3 border-blue-600/20 hover:bg-blue-600/10 hover:text-blue-600"
              >
                <Facebook className="h-5 w-5" />
                <span className="text-xs">Facebook</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => shareToSocial("linkedin")}
                className="flex flex-col items-center gap-1 h-auto py-3 border-blue-700/20 hover:bg-blue-700/10 hover:text-blue-700"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-xs">LinkedIn</span>
              </Button>
            </div>
          </div>

          {/* Messaging Apps */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Share via Messaging</h4>
            <div className="grid grid-cols-3 gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => shareToSocial("email")}
                className="flex flex-col items-center gap-1 h-auto py-3 border-yellow-400/20 hover:bg-yellow-400/10 hover:text-yellow-400"
              >
                <Mail className="h-5 w-5" />
                <span className="text-xs">Email</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => shareToSocial("whatsapp")}
                className="flex flex-col items-center gap-1 h-auto py-3 border-green-500/20 hover:bg-green-500/10 hover:text-green-500"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-xs">WhatsApp</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => shareToSocial("telegram")}
                className="flex flex-col items-center gap-1 h-auto py-3 border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-500"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.58 7.44c-.12.539-.432.672-.864.42l-2.388-1.764-1.152 1.116c-.128.128-.236.236-.48.236l.168-2.388L16.8 8.424c.204-.18-.048-.288-.312-.108l-5.592 3.528-2.4-.756c-.528-.168-.54-.528.108-.78l9.372-3.612c.432-.156.816.108.672.756z" />
                </svg>
                <span className="text-xs">Telegram</span>
              </Button>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">QR Code</h4>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowQR(!showQR)}
                className="border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500"
              >
                <QrCode className="h-4 w-4 mr-2" />
                {showQR ? "Hide" : "Show"} QR
              </Button>
            </div>

            {showQR && (
              <div className="flex justify-center">
                <div className="rounded-xl border border-pink-500/20 bg-white p-4">
                  <img src={generateQRCode() || "/placeholder.svg"} alt="Profile QR Code" className="w-48 h-48" />
                  <p className="text-center text-xs text-gray-600 mt-2">Scan to view profile</p>
                </div>
              </div>
            )}
          </div>

          {/* Fun Stats */}
          <div className="rounded-xl border border-yellow-400/20 bg-gradient-to-r from-yellow-400/5 to-blue-500/5 p-4">
            <div className="flex items-center justify-between text-sm">
              <div className="text-center">
                <div className="font-bold text-lg">🌱</div>
                <div className="text-xs text-muted-foreground">Growing connections</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">✨</div>
                <div className="text-xs text-muted-foreground">Sparking conversations</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">🚀</div>
                <div className="text-xs text-muted-foreground">Building community</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
