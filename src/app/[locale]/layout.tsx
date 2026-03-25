import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { routing } from "@/i18n/routing";
import {
  absoluteUrl,
  buildAlternates,
  getMetadataBase,
  openGraphLocale,
} from "@/lib/seo";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const tSite = await getTranslations({ locale, namespace: "site" });
  const siteName = tSite("name");
  const defaultTitle = t("defaultTitle");
  const defaultDescription = t("defaultDescription");
  const ogLoc = openGraphLocale(locale);
  const homeUrl = absoluteUrl(locale, "/");

  return {
    metadataBase: getMetadataBase(),
    /** Home title; inner routes set full `metaTitle` in each page. */
    title: defaultTitle,
    description: defaultDescription,
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      title: defaultTitle,
      description: defaultDescription,
      url: homeUrl,
      siteName,
      locale: ogLoc,
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
    },
    alternates: buildAlternates(locale, "/"),
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${dmSans.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <NextIntlClientProvider messages={messages}>
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
