import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { alternates, canonical } from "../../../lib/seo";
import { t } from "../../../lib/dictionary";
import { locales, pages, pageKeyForSlug, type Locale } from "../../../lib/i18n";
import { Header } from "../../../components/Header";
import { LegalTemplate } from "../../../components/LegalTemplate";

export const dynamicParams = false;
type Props = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    (["privacy", "terms"] as const).map((k) => ({ locale, slug: pages[k][locale] })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const key = pageKeyForSlug(locale, slug);
  if (key !== "privacy" && key !== "terms") return {};
  return {
    title: t(locale)[key].title,
    alternates: { canonical: canonical(locale, key), languages: alternates(key) },
  };
}

export default async function LegalPage({ params }: Props) {
  const { locale, slug } = await params;
  const key = pageKeyForSlug(locale, slug);
  if (key !== "privacy" && key !== "terms") notFound();
  const d = t(locale)[key];
  return (
    <>
      <Header locale={locale} page={key} />
      <main id="main">
        <LegalTemplate locale={locale} title={d.title} sections={d.sections} />
      </main>
    </>
  );
}
