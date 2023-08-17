import * as React from "react"
import type { EmailStyle } from "./email-styles"
import { MagicLinkEmail } from "@modulize/templates"

type EmailDirectory = Record<
  EmailStyle["name"],
  Record<
    string,
    {
      name: string
      type: string
      registryDependencies: string[] | undefined
      component: React.ComponentType<any>
    }
  >
>

export const email_templates_directory = {
  default: {
    "magic-link-login": {
      name: "magic-link-login",
      type: "components:ui",
      registryDependencies: undefined,
      component: MagicLinkEmail,
    },
  },
} satisfies EmailDirectory
