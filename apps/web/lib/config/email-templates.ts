import { EmailChangeEmail, MagicLinkEmail, NewDeviceSignInEmail } from "@modulize/templates"
import * as React from "react"
import type { EmailStyle } from "./email-styles"

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
    "magic-link": {
      name: "magic-link",
      type: "components:ui",
      registryDependencies: undefined,
      component: MagicLinkEmail,
    },
    "new-device-sign-in": {
      name: "new-device-sign-in",
      type: "components:ui",
      registryDependencies: undefined,
      component: NewDeviceSignInEmail,
    },
    "email-change": {
      name: "email-change",
      type: "components:ui",
      registryDependencies: undefined,
      component: EmailChangeEmail,
    },
  },
} satisfies EmailDirectory
