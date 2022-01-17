import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.pancakeswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://envoys.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.pancakeswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.pancakeswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://envoys.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.pancakeswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/envoys-lab",
      },
      {
        label: "Documentation",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@envoysvision-1/s/envoys/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.pancakeswap.finance/help/faq#is-envoys-safe-has-envoys-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/envoys",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/envoys",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/EnvoysSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/EnvoysSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/EnvoysSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/envoys_ita",
      },
      {
        label: "русский",
        href: "https://t.me/envoys_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/envoysturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/EnvoysSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/EnvoysswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/envoysjp",
      },
      {
        label: "Français",
        href: "https://t.me/envoysfr",
      },
      {
        label: "Datch",
        href: "https://t.me/EnvoysSwap_DE",
      },
      {
        label: "Filipino",
        href: "https://t.me/Envoysswap_Ph",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/EnvoysSwapGeorgia",
      },
      {
        label: "Announcements",
        href: "https://t.me/EnvoysSwapAnn",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/envoys",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/envoys_official",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/envoys-lab/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/envoys",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
