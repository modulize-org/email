export const email_styles = [
  {
    name: "default",
    label: "Default",
  },
] as const

export type EmailStyle = (typeof email_styles)[number]
