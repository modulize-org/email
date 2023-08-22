import { Body, Button, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Tailwind, Text } from "@react-email/components";
import { emailConfig } from "../email-config";


export interface NewDeviceSignInEmailProps {
    description?: string
    ipAddress: string
    accountLink: string
    passwordResetLink: string
    supportLink: string
    browser?: string
    os?: string
    time?: Date
}

export const NewDeviceSignInEmail = ({

    description = "We noticed your account was accessed from a new IP address.",
    ipAddress = "192.0.0.2",
    accountLink = emailConfig.isDev
        ? "http://email.modulize.co"
        : "http://email.modulize.co",
    passwordResetLink  = emailConfig.isDev
        ? "http://email.modulize.co"
        : "http://email.modulize.co",
    supportLink  = emailConfig.isDev
        ? "http://email.modulize.co"
        : "http://email.modulize.co",
    browser = emailConfig.isDev ? "Chrome" : undefined,
    os = emailConfig.isDev ? "Mac OS" : undefined,
    time = emailConfig.isDev ? new Date() : undefined,
}: NewDeviceSignInEmailProps) => {
    const previewText = `New device signed in to your account`

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
                                A new device has signed in to your account
                            </Heading>

                            <Text className="text-black text-[16px] leading-[24px]">
                                {description}
                            </Text>
                        </Section>

                        <Section >

                            <Text className="text-black text-[16px] leading-[24px]">
                                <b>Where:</b> {ipAddress}
                            </Text>
                            {browser && os && (

                                <Text className="text-black text-[16px] leading-[24px]">
                                    <b>Device:</b> {os} ({browser})
                                </Text>

                            )}
                            {time && (

                                <Text className="text-black text-[16px] leading-[24px]">
                                    <b>When:</b>  {time.toLocaleString("en-US", {
                                        timeZone: "UTC",
                                        hour12: true,
                                        hour: "numeric",
                                        minute: "numeric",
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </Text>

                            )}
                        </Section>

                        <Section className="mt-[10px] mb-[32px]">
                            <Button
                                pX={20}
                                pY={12}
                                className="bg-[#000000] bg-primary rounded text-primary-highlight text-[12px] font-semibold no-underline text-center"
                                href={accountLink}
                            >
                                Go to Account
                            </Button>
                        </Section>

                        <Text className="text-black text-[14px] leading-[24px]">
                            Don’t recognize this activity? Please {' '}
                            <Link href={passwordResetLink} className="text-blue-600 no-underline">
                                reset your password
                            </Link> {' '}
                            and{' '}<Link href={supportLink} className="text-blue-600 no-underline">
                                contact customer support
                            </Link> immediately.
                        </Text>

                        <Text className="text-slate-500 italic">
                            This is an automated message, please do not reply.
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
                                </Text>
                            </>
                        )}
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default NewDeviceSignInEmail