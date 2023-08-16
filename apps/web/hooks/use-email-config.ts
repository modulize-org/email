import { EmailStyle } from "@/lib/config/email-styles"
import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

type EmailTemplatesConfig = {
  style: EmailStyle["name"]
  radius: number
}

const configAtom = atomWithStorage<EmailTemplatesConfig>("config", {
  style: "default",
  radius: 0.5,
})

export function useEmailConfig() {
  return useAtom(configAtom)
}
