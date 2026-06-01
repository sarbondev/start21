import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Space_Grotesk, Inter } from "next/font/google";
import { getDictionary, isLocale, locales, localeHtml, SITE } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { buildJsonLd, buildLanguageAlternates } from "@/lib/seo";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import Providers from "@/store/Providers";
import "../globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#001413",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "uz");
  const languages = buildLanguageAlternates();

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: dict.meta.title,
      template: "%s | START21",
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    applicationName: SITE.name,
    category: "education",
    creator: SITE.name,
    publisher: SITE.name,
    formatDetection: { telephone: true, address: true, email: true },
    openGraph: {
      type: "website",
      locale,
      url: `${SITE.url}/${locale}`,
      siteName: SITE.name,
      title: dict.meta.title,
      description: dict.meta.description,
      images: [{ url: SITE.logo, width: 1200, height: 630, alt: "START21" }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [SITE.logo],
    },
    icons: {
      icon: [{ url: SITE.logo, type: "image/webp" }],
      shortcut: [SITE.logo],
      apple: [SITE.logo],
    },
    alternates: {
      canonical: `${SITE.url}/${locale}`,
      languages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const jsonLd = buildJsonLd(locale, dict);

  return (
    <html lang={localeHtml[locale as Locale]} className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <LocaleProvider dict={dict} locale={locale}>
            {children}
          </LocaleProvider>
        </Providers>
      </body>
    </html>
  );
}
