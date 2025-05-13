import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface ConnectionPreferenceProps {
  id: string
  label: string
  description?: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export function ConnectionPreference({
  id,
  label,
  description,
  checked,
  onCheckedChange,
}: ConnectionPreferenceProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label htmlFor={id}>{label}</Label>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="data-[state=checked]:bg-pink-500"
      />
    </div>
  )
}