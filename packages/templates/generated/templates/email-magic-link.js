import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { emailConfig } from "../email-config";
import { Body, Button, Container, Head, Heading, Hr, Html, Img, Link, Preview, Section, Tailwind, Text } from "@react-email/components";
export const MagicLinkEmail = ({ description = "Click the button below to securely log in to your account. If you did not request this, you can safely ignore this email.", loginLink = emailConfig.isDev
    ? "http://email.modulize.co"
    : "http://email.modulize.co", browser = emailConfig.isDev ? "Chrome" : undefined, os = emailConfig.isDev ? "Mac OS" : undefined, time = emailConfig.isDev ? new Date() : undefined, }) => {
    const previewText = `Log in to ${emailConfig.companyName}`;
    return (_jsxs(Html, { children: [_jsx(Head, {}), _jsx(Preview, { children: previewText }), _jsx(Tailwind, Object.assign({ config: emailConfig.twConfig }, { children: _jsx(Body, Object.assign({ className: "bg-body my-auto font-sans" }, { children: _jsxs(Container, Object.assign({ className: "bg-body-email rounded-lg my-[40px]  p-[20px] w-[465px]" }, { children: [_jsx(Section, { children: _jsx(Img, { src: emailConfig.logo, height: "34", alt: emailConfig.companyName, className: "my-0" }) }), _jsxs(Section, Object.assign({ className: "mt-[14px]" }, { children: [_jsxs(Heading, Object.assign({ className: "text-black text-[24px] font-bold p-0 my-[20px] mx-0" }, { children: ["Log in to ", emailConfig.companyName] })), _jsx(Text, Object.assign({ className: "text-black text-[16px] leading-[24px]" }, { children: description }))] })), _jsx(Section, Object.assign({ className: "mt-[10px] mb-[32px]" }, { children: _jsxs(Button, Object.assign({ pX: 20, pY: 12, className: "bg-[#000000] bg-primary rounded text-primary-highlight text-[12px] font-semibold no-underline text-center", href: loginLink }, { children: ["Log in to ", emailConfig.companyName] })) })), _jsxs(Text, Object.assign({ className: "text-black text-[14px] leading-[24px]" }, { children: ["or copy and paste this URL into your browser:", " ", _jsx(Link, Object.assign({ href: loginLink, className: "text-blue-600 no-underline" }, { children: loginLink }))] })), browser && os && time && (_jsxs(_Fragment, { children: [_jsx(Hr, { className: "border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" }), _jsxs(Text, Object.assign({ className: "text-[#666666] text-[12px] leading-[24px]" }, { children: ["This login was requested using ", browser, " on ", os, " at", " ", time.toLocaleString("en-US", {
                                                timeZone: "UTC",
                                                hour12: true,
                                                hour: "numeric",
                                                minute: "numeric",
                                                weekday: "long",
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            }), ". If you did not request this login link, you can safely ignore this email."] }))] }))] })) })) }))] }));
};
export default MagicLinkEmail;
