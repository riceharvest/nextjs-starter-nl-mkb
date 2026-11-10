import type { Metadata } from "next";
import { siteConfig } from "../../config/site";
import { alternates, canonical, isPlaceholder } from "../../lib/seo";
import { t } from "../../lib/dictionary";
import { type Locale } from "../../lib/i18n";
import { Header } from "../../components/Header";
import { Contact } from "../../components/Contact";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const desc = siteConfig.description[locale];
  return {
    title: t(locale).home.title,
    description: isPlaceholder(desc) ? undefined : desc,
    alternates: { canonical: canonical(locale, "home"), languages: alternates("home") },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const d = t(locale);
  return (
    <>
      <Header locale={locale} page="home" />
      <main id="main">
        <h1>{d.home.title}</h1>
        <p>{d.home.lead}</p>
        <Contact locale={locale} />
      </main>
    </>
  );
}
