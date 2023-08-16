"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEmailConfig } from "@/hooks/use-email-config"
import { email_styles, EmailStyle } from "@/lib/config/email-styles"
import { cn } from "@/lib/utils"
import { type SelectTriggerProps } from "@radix-ui/react-select"

export function StyleSwitcher({ className }: SelectTriggerProps) {
  const [config, setConfig] = useEmailConfig()

  return (
    <Select
      value={config.style}
      onValueChange={(value: EmailStyle["name"]) =>
        setConfig({
          ...config,
          style: value,
        })
      }
    >
      <SelectTrigger
        className={cn(
          "h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4",
          className
        )}
      >
        <span className="text-muted-foreground">Style: </span>
        <SelectValue placeholder="Select style" />
      </SelectTrigger>
      <SelectContent>
        {email_styles.map((style) => (
          <SelectItem key={style.name} value={style.name} className="text-xs">
            {style.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
