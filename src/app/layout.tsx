import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import { Zen_Old_Mincho } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import CustomCursor from "@/components/CustomCursor";
import IntroAnimation from "@/components/IntroAnimation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const zenOldMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-zen-mincho",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "株式会社DK | ビジネスの課題をテクノロジーで解決",
    template: "%s | 株式会社DK",
  },
  description:
    "株式会社DK（dkInc.）は、デジタル広告・SEOメディア・コンテンツ制作・有料職業紹介を通じて、企業の集客・ブランディング・売上拡大を支援します。",
  keywords: ["Webシステム開発", "DXコンサルティング", "クラウド", "システム開発", "株式会社DK"],
  authors: [{ name: "株式会社DK" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://dk311.jp",
    siteName: "株式会社DK",
    title: "株式会社DK | ビジネスの課題をテクノロジーで解決",
    description:
      "株式会社DK（dkInc.）は、デジタル広告・SEOメディア・コンテンツ制作・有料職業紹介を通じて、企業の集客・ブランディング・売上拡大を支援します。",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社DK | ビジネスの課題をテクノロジーで解決",
    description:
      "株式会社DK（dkInc.）は、デジタル広告・SEOメディア・コンテンツ制作・有料職業紹介を通じて、企業の集客・ブランディング・売上拡大を支援します。",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable} ${zenOldMincho.variable}`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-white text-[#0F172A] font-sans antialiased">
        <ScrollRevealInit />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CustomCursor />
        <IntroAnimation />
      </body>
    </html>
  );
}
