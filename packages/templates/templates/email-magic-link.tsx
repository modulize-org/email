import * as React from "react";
import { emailConfig } from "../email-config"
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"


export interface MagicLinkEmailProps {
  description?: string
  loginLink: string
  browser?: string
  os?: string
  time?: Date
}

export const MagicLinkEmail = ({
  description = "Click the button below to securely log in to your account. If you did not request this, you can safely ignore this email.",
  loginLink = emailConfig.isDev
    ? "http://email.modulized.co"
    : "http://email.modulized.co",
  browser = emailConfig.isDev ? "Chrome" : undefined,
  os = emailConfig.isDev ? "Mac OS" : undefined,
  time = emailConfig.isDev ? new Date() : undefined,
}: MagicLinkEmailProps) => {
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
                src={emailConfig.logo}
                height="34"
                alt={emailConfig.companyName}
                className="my-0"
              />
            </Section>

            <Section className="mt-[14px]">
              <Heading className="text-black text-[24px] font-bold p-0 my-[20px] mx-0">
                Log in to {emailConfig.companyName}
              </Heading>

              <Text className="text-black text-[16px] leading-[24px]">
                {description}
              </Text>
            </Section>

            <Section className="mt-[10px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#000000] bg-primary rounded text-primary-highlight text-[12px] font-semibold no-underline text-center"
                href={loginLink}
              >
                Log in to {emailConfig.companyName}
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

export default MagicLinkEmail