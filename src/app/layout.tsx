import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Bricolage_Grotesque, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/layout/cookie-banner";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
});

const description =
  "Private by default. No seed phrases, no paperwork. Hold, send, and keep your money yours. Now in private beta on TestFlight.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kivuli.xyz"),
  title: {
    default: "Kivuli · Private money for everyday life",
    template: "%s · Kivuli",
  },
  description,
  applicationName: "Kivuli",
  keywords: [
    "private money",
    "private payments",
    "no seed phrase",
    "Kivuli",
    "TestFlight",
    "private wallet",
  ],
  authors: [{ name: "Kivuli" }],
  creator: "Kivuli",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Kivuli",
    url: "https://kivuli.xyz",
    title: "Kivuli · Private money for everyday life",
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kivuli. Money that stays yours.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kivuli · Private money for everyday life",
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#dceae6" },
    { media: "(prefers-color-scheme: dark)", color: "#091413" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${bricolage.variable} ${syne.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-sans focus:text-[14px] focus:font-medium focus:text-on-accent"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
