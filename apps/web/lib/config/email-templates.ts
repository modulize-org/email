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
      component: React.LazyExoticComponent<React.ComponentType<any>>
    }
  >
>

export const email_templates_directory = {
  default: {
    "magic-link-login": {
      name: "magic-link-login",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() =>
        import("@modulize/templates").then((module) => ({
          default: module.MagicLinkEmail,
        }))
      ),
    },
  },
} satisfies EmailDirectory
