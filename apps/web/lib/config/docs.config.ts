import { MainNavItem, SidebarNavItem } from "@/lib/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Emails",
      href: "/docs/emails/magic-link-login",
    },
    {
      title: "GitHub",
      href: "https://github.com/modulize-org/email",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        // {
        //   title: "Installation",
        //   href: "/docs/installation",
        //   items: [],
        // },
        {
          title: "About",
          href: "/docs/about",
          items: [],
        },
      ],
    },
    {
      title: "Emails",
      items: [
        {
          title: "Magic Link Login",
          href: "/docs/emails/magic-link",
          items: [],
        },
        {
          title: "New Device Sign In",
          href: "/docs/emails/new-device-sign-in",
          items: [],
        },
        {
          title: "Email Change",
          href: "/docs/emails/email-change",
          items: [],
        },
      ],
    },
  ],
}
