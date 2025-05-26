"use client"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Smile } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

const emojiCategories = {
  smileys: ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘"],
  gestures: ["👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "👇"],
  animals: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🐔", "🐧"],
  food: ["🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🫐", "🍈", "🍒", "🍑", "🥭", "🍍", "🥥", "🥝", "🍅"],
  activities: ["⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🥏", "🎱", "🪀", "🏓", "🥊", "🥋", "🎽", "🛹", "🛼"],
  travel: ["🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚒", "🚐", "🛻", "🚚", "🚛", "🚜", "🛵", "🏍️", "🛺"],
  objects: ["⌚", "📱", "💻", "⌨️", "🖥️", "🖨️", "🖱️", "🖲️", "🕹️", "🗜️", "💽", "💾", "💿", "📀", "📼", "📷", "📸"],
  symbols: ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘"],
}

export function EmojiPicker({onEmojiSelect}: {onEmojiSelect: (emoji: string) => void}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full flex-shrink-0 hover:bg-pink-500/10 hover:text-pink-500"
        >
          <Smile className="h-4 w-4" />
          <span className="sr-only">Emoji</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 border-pink-500/20" align="start">
        <Tabs defaultValue="smileys" className="w-full">
          <div className="border-b border-pink-500/10 px-3">
            <TabsList className="h-12 bg-transparent">
              <TabsTrigger
                value="smileys"
                className="data-[state=active]:bg-transparent data-[state=active]:text-pink-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
              >
                😀
              </TabsTrigger>
              <TabsTrigger
                value="gestures"
                className="data-[state=active]:bg-transparent data-[state=active]:text-pink-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
              >
                👋
              </TabsTrigger>
              <TabsTrigger
                value="animals"
                className="data-[state=active]:bg-transparent data-[state=active]:text-pink-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
              >
                🐶
              </TabsTrigger>
              <TabsTrigger
                value="food"
                className="data-[state=active]:bg-transparent data-[state=active]:text-pink-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
              >
                🍎
              </TabsTrigger>
              <TabsTrigger
                value="activities"
                className="data-[state=active]:bg-transparent data-[state=active]:text-pink-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
              >
                ⚽
              </TabsTrigger>
              <TabsTrigger
                value="travel"
                className="data-[state=active]:bg-transparent data-[state=active]:text-pink-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
              >
                🚗
              </TabsTrigger>
              <TabsTrigger
                value="objects"
                className="data-[state=active]:bg-transparent data-[state=active]:text-pink-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
              >
                💻
              </TabsTrigger>
              <TabsTrigger
                value="symbols"
                className="data-[state=active]:bg-transparent data-[state=active]:text-pink-500 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
              >
                ❤️
              </TabsTrigger>
            </TabsList>
          </div>
          {Object.entries(emojiCategories).map(([category, emojis]) => (
            <TabsContent key={category} value={category} className="p-0 m-0">
              <ScrollArea className="h-[200px]">
                <div className="grid grid-cols-8 gap-2 p-4">
                  {emojis.map((emoji) => (
                    <button
                      key={emoji}
                      className="h-8 w-8 flex items-center justify-center text-lg hover:bg-pink-500/10 rounded-md"
                      onClick={() => onEmojiSelect(emoji)}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </PopoverContent>
    </Popover>
  )
}
