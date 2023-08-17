"use client"

import * as React from "react"
import { CodeBlockWrapper } from "@/components/code-block-wrapper"
import { cn } from "@/lib/utils"

interface EmailSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
}

export function EmailSource({
  children,
  className,
  ...props
}: EmailSourceProps) {
  return (
    <CodeBlockWrapper
      expandButtonTitle="Expand"
      className={cn("my-6 overflow-hidden rounded-md", className)}
    >
      {children}
    </CodeBlockWrapper>
  )
}
