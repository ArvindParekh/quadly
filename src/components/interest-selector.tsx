import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

interface InterestSelectorProps {
  onSelect: (interest: string) => void
  existingInterests: string[]
  suggestedInterests?: string[]
}

export function InterestSelector({ onSelect, existingInterests, suggestedInterests = [] }: InterestSelectorProps) {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [interests, setInterests] = useState<string[]>(suggestedInterests)

  // Filter out existing interests
  const filteredInterests = interests.filter(
    (interest) => !existingInterests.includes(interest) && interest.toLowerCase().includes(inputValue.toLowerCase())
  )

  const handleSelect = (interest: string) => {
    onSelect(interest)
    setInputValue("")
    setOpen(false)
  }

  const handleAddCustom = () => {
    if (inputValue.trim() && !existingInterests.includes(inputValue.trim())) {
      onSelect(inputValue.trim())
      setInputValue("")
      setOpen(false)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500"
        >
          <Plus className="h-3 w-3 mr-1" />
          Add Interest
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 border-pink-500/20">
        <Command>
          <CommandInput
            placeholder="Search interests..."
            value={inputValue}
            onValueChange={setInputValue}
            className="border-none focus:ring-0"
          />
          <CommandList>
            <CommandEmpty>
              <div className="py-2 px-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start border-pink-500/20"
                  onClick={handleAddCustom}
                >
                  <Plus className="h-3 w-3 mr-1" />
                  Add "{inputValue}"
                </Button>
              </div>
            </CommandEmpty>
            <CommandGroup>
              {filteredInterests.map((interest) => (
                <CommandItem key={interest} onSelect={() => handleSelect(interest)}>
                  {interest}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}