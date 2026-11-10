import Link from "next/link";
import { siteConfig } from "../config/site";
import { pagePath } from "../config/routing";
import { t } from "../lib/dictionary";
import { locales, type Locale, type PageKey } from "../lib/i18n";

export function Header({ locale, page }: { locale: Locale; page: PageKey }) {
  const d = t(locale);
  return (
    <header className="site-header">
      <Link href={pagePath(locale, "home")} className="brand">
        {siteConfig.name}
      </Link>
      <nav aria-label="Hoofdmenu / Main">
        <Link href={pagePath(locale, "home")}>{d.nav.home}</Link>
        <Link href={pagePath(locale, "privacy")}>{d.nav.privacy}</Link>
        <Link href={pagePath(locale, "terms")}>{d.nav.terms}</Link>
      </nav>
      <nav aria-label={d.nav.language} className="lang">
        {locales.map((l) => (
          <Link key={l} href={pagePath(l, page)} hrefLang={l} lang={l} aria-current={l === locale ? "true" : undefined}>
            {l.toUpperCase()}
          </Link>
        ))}
      </nav>
    </header>
  );
}
