import { Badge } from "@/components/ui/badge"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface InterestTagProps {
  name: string
  category?: string
  weight?: number
  color?: "pink" | "yellow" | "blue"
  onRemove?: () => void
  onClick?: () => void
  removable?: boolean
  interactive?: boolean
}

export function InterestTag({
  name,
  color = "pink",
  onRemove,
  onClick,
  removable = false,
  interactive = false,
}: InterestTagProps) {
  const colorClasses = {
    pink: "bg-pink-500/10 text-pink-500 border-pink-500/20 hover:bg-pink-500/20",
    yellow: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20 hover:bg-yellow-400/20",
    blue: "bg-blue-500/10 text-blue-500 border-blue-500/20 hover:bg-blue-500/20",
  }

  if (removable) {
    return (
      <div className={`flex items-center gap-1 rounded-full border px-3 py-1 text-sm ${colorClasses[color]}`}>
        <span>{name}</span>
        <Button variant="ghost" size="icon" className="h-4 w-4 ml-1 hover:bg-pink-500/20" onClick={onRemove}>
          <X className="h-3 w-3" />
          <span className="sr-only">Remove</span>
        </Button>
      </div>
    )
  }

  return (
    <Badge
      variant="outline"
      className={`${colorClasses[color]} ${interactive ? "cursor-pointer" : ""}`}
      onClick={interactive ? onClick : undefined}
    >
      {name}
    </Badge>
  )
}