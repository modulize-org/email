import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Body, Button, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Tailwind, Text } from "@react-email/components";
import { emailConfig } from "../email-config";
export const NewDeviceSignInEmail = ({ description = "We noticed your account was accessed from a new IP address.", ipAddress = "192.0.0.2", accountLink = emailConfig.isDev
    ? "http://email.modulize.co"
    : "http://email.modulize.co", passwordResetLink = emailConfig.isDev
    ? "http://email.modulize.co"
    : "http://email.modulize.co", supportLink = emailConfig.isDev
    ? "http://email.modulize.co"
    : "http://email.modulize.co", browser = emailConfig.isDev ? "Chrome" : undefined, os = emailConfig.isDev ? "Mac OS" : undefined, time = emailConfig.isDev ? new Date() : undefined, }) => {
    const previewText = `New device signed in to your account`;
    return (_jsxs(Html, { children: [_jsx(Head, {}), _jsx(Preview, { children: previewText }), _jsx(Tailwind, Object.assign({ config: emailConfig.twConfig }, { children: _jsx(Body, Object.assign({ className: "bg-body my-auto font-sans" }, { children: _jsxs(Container, Object.assign({ className: "bg-body-email rounded-lg my-[40px]  p-[20px] w-[465px]" }, { children: [_jsx(Section, { children: _jsx(Img, { src: emailConfig.logo, height: "34", alt: emailConfig.companyName, className: "my-0" }) }), _jsxs(Section, Object.assign({ className: "mt-[14px]" }, { children: [_jsx(Heading, Object.assign({ className: "text-black text-[24px] font-bold p-0 my-[20px] mx-0" }, { children: "A new device has signed in to your account" })), _jsx(Text, Object.assign({ className: "text-black text-[16px] leading-[24px]" }, { children: description }))] })), _jsxs(Section, { children: [_jsxs(Text, Object.assign({ className: "text-black text-[16px] leading-[24px]" }, { children: [_jsx("b", { children: "Where:" }), " ", ipAddress] })), browser && os && (_jsxs(Text, Object.assign({ className: "text-black text-[16px] leading-[24px]" }, { children: [_jsx("b", { children: "Device:" }), " ", os, " (", browser, ")"] }))), time && (_jsxs(Text, Object.assign({ className: "text-black text-[16px] leading-[24px]" }, { children: [_jsx("b", { children: "When:" }), "  ", time.toLocaleString("en-US", {
                                                timeZone: "UTC",
                                                hour12: true,
                                                hour: "numeric",
                                                minute: "numeric",
                                                weekday: "long",
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })] })))] }), _jsx(Section, Object.assign({ className: "mt-[10px] mb-[32px]" }, { children: _jsx(Button, Object.assign({ pX: 20, pY: 12, className: "bg-[#000000] bg-primary rounded text-primary-highlight text-[12px] font-semibold no-underline text-center", href: accountLink }, { children: "Go to Account" })) })), _jsxs(Text, Object.assign({ className: "text-black text-[14px] leading-[24px]" }, { children: ["Don\u2019t recognize this activity? Please ", ' ', _jsx(Link, Object.assign({ href: passwordResetLink, className: "text-blue-600 no-underline" }, { children: "reset your password" })), " ", ' ', "and", ' ', _jsx(Link, Object.assign({ href: supportLink, className: "text-blue-600 no-underline" }, { children: "contact customer support" })), " immediately."] })), _jsx(Text, Object.assign({ className: "text-slate-500 italic" }, { children: "This is an automated message, please do not reply." })), browser && os && time && (_jsxs(_Fragment, { children: [_jsx(Hr, { className: "border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" }), _jsxs(Text, Object.assign({ className: "text-[#666666] text-[12px] leading-[24px]" }, { children: ["This login was requested using ", browser, " on ", os, " at", " ", time.toLocaleString("en-US", {
                                                timeZone: "UTC",
                                                hour12: true,
                                                hour: "numeric",
                                                minute: "numeric",
                                                weekday: "long",
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })] }))] }))] })) })) }))] }));
};
export default NewDeviceSignInEmail;
