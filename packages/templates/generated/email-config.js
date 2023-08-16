const constants = {
    isDev: process.env.NODE_ENV === "development",
    baseUrl: "https://email.modulize.co",
    logo: "https://email.modulize.co/logo/logo-dark.png",
    companyName: "Modulize",
    icon: "",
};
/**
 * The config for the email template.
 *
 * Note: Most email clients are style-limited and some styles may not work.
 * @see https://react.email/docs/components/tailwind
 *
 * For type completion you can optionally install `tw-to-css`:
 * ```
 * import import type { TailwindConfig } from "tw-to-css"
 *
 * const tailwindConfig: TailwindConfig = { ... }
 * ```
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
        blabla: {},
    },
};
const emailConfig = Object.assign({ twConfig: tailwindConfig }, constants);
export { emailConfig };
