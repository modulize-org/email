import * as React from "react"
import { emailConfig } from "../theme"
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface EmailMagicLinkProps {
  description?: string
  loginLink: string
  browser?: string
  os?: string
  time?: Date
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ""

export const VercelInviteUserEmail = ({
  description = "Click the button below to securely log in to your account. If you did not request this, you can safely ignore this email.",
  loginLink = emailConfig.isDev
    ? "http://email.modulized.co"
    : "http://email.modulized.co",
  browser = emailConfig.isDev ? "Chrome" : undefined,
  os = emailConfig.isDev ? "Mac OS" : undefined,
  time = emailConfig.isDev ? new Date() : undefined,
}: EmailMagicLinkProps) => {
  const previewText = `Log in to ${emailConfig.companyName}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind config={emailConfig.twConfig}>
        <Body className="bg-body my-auto font-sans">
          <Container className="bg-body-email rounded-lg my-[40px]  p-[20px] w-[465px]">
            <Section>
              <Img
                src={`${baseUrl}/static/vercel-logo.png`}
                width="40"
                height="37"
                alt="Vercel"
                className="my-0"
              />
            </Section>

            <Heading className="text-black text-[24px] font-bold p-0 my-[20px] mx-0">
              Log in to {emailConfig.companyName}
            </Heading>

            <Text className="text-black text-[14px] leading-[24px]">
              {description}
            </Text>

            <Section className="mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#000000] bg-primary rounded text-primary-highlight text-[12px] font-semibold no-underline text-center"
                href={loginLink}
              >
                Join the team
              </Button>
            </Section>

            <Text className="text-black text-[14px] leading-[24px]">
              or copy and paste this URL into your browser:{" "}
              <Link href={loginLink} className="text-blue-600 no-underline">
                {loginLink}
              </Link>
            </Text>

            {browser && os && time && (
              <>
                <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

                <Text className="text-[#666666] text-[12px] leading-[24px]">
                  This login was requested using {browser} on {os} at{" "}
                  {time.toLocaleString("en-US", {
                    timeZone: "UTC",
                    hour12: true,
                    hour: "numeric",
                    minute: "numeric",
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  . If you did not request this login link, you can safely
                  ignore this email.
                </Text>
              </>
            )}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default VercelInviteUserEmail
