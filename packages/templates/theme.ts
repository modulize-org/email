import type { Properties } from 'csstype';
import type { TailwindConfig } from "tw-to-css"


const constants = {
  isDev: process.env.NODE_ENV === "development",
  baseUrl: "https://email.modulize.co",
  logo: "https://email.modulize.co/logo/logo-dark.png",
  companyName: "Modulize",
  icon: "",
} as const

/**
 * The config for the email template.
 *
 * Note: Most email clients are style-limited and some styles may not work.
 * @see https://react.email/docs/components/tailwind
 */
const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        body: "#f7f7f7",
        "body-email": "#ffffff",
        primary: "#4E75E1",
        "primary-highlight": "#ffffff",
      },
    },
  },
} satisfies TailwindConfig

const emailConfig = {
  twConfig: tailwindConfig,
  ...constants,
}

export { emailConfig }