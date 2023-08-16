"use client"

import * as React from "react"
import { useEmailConfig } from "@/hooks/use-email-config"
import type { EmailStyle } from "@/lib/config/email-styles"

interface StyleWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  styleName?: EmailStyle["name"]
}

export function StyleWrapper({ styleName, children }: StyleWrapperProps) {
  const [config] = useEmailConfig()

  if (!styleName || config.style === styleName) {
    return <>{children}</>
  }

  return null
}
