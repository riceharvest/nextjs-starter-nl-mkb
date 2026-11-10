import type { Metadata } from "next";
import "../globals.css";
import { siteConfig } from "../../config/site";
import { locales, isLocale, type Locale } from "../../lib/i18n";
import { t } from "../../lib/dictionary";
import { notFound } from "next/navigation";
import { JsonLd } from "../../components/JsonLd";
import { Footer } from "../../components/Footer";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  return (
    <html lang={locale}>
      <body>
        <a className="skip-link" href="#main">
          {t(locale).skip}
        </a>
        <JsonLd locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
