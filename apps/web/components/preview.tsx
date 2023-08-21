"use client"

import { useEmailConfig } from "@/hooks/use-email-config"
import { email_templates_directory } from "@/lib/config/email-templates"
import { render } from "@react-email/render"

interface PreviewComponentProps {
  name: string
}

export default function Preview({ name }: PreviewComponentProps) {
  const [config] = useEmailConfig()
  const Component = email_templates_directory[config.style][name]?.component

  return (
    <iframe
      srcDoc={render(<Component />)}
      className="w-full h-[calc(60vh_-_150px)]"
    />
  )
}
