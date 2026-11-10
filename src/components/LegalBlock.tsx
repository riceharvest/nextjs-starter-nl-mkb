import { siteConfig, type SiteConfig } from "../config/site";
import { t } from "../lib/dictionary";
import type { Locale } from "../lib/i18n";

/**
 * Legally required business details, shown in the footer.
 *
 * Source: Ondernemersplein (RVO), "Regels voor bedrijfscorrespondentie",
 * section "Verplichte gegevens op uw website",
 * https://ondernemersplein.overheid.nl/regels-voor-bedrijfscorrespondentie/
 * (checked 2026-11-11, page last reviewed by RVO 3 Dec 2025), and
 * "Btw-identificatienummer opvragen, controleren en vermelden",
 * https://ondernemersplein.overheid.nl/wetten-en-regels/btw-identificatienummer-opvragen-controleren-en-vermelden/
 * Basis in law: Burgerlijk Wetboek Boek 3, artikel 15d (BW 3:15d) and the
 * information duties for online providers. The list there: full (statutory)
 * name and trade name, visiting address, e-mail address and phone number,
 * and, when you sell or offer services online, the KvK number and the btw-id.
 * This is a starting point, not legal advice: check your own situation
 * (for example a webshop has more information duties).
 */
export function LegalBlock({ locale, config = siteConfig }: { locale: Locale; config?: SiteConfig }) {
  const d = t(locale).legalBlock;
  const a = config.address;
  const rows: [string, string][] = [
    [d.name, config.name],
    [d.legalName, config.legalName],
    [d.address, `${a.street}, ${a.postalCode} ${a.city}`],
    [d.email, config.email],
    [d.phone, config.phone],
    [d.kvk, config.kvk],
    [d.btw, config.btwId],
  ];
  return (
    <section aria-labelledby="legal-block-heading" data-testid="legal-block">
      <h2 id="legal-block-heading">{d.heading}</h2>
      <dl>
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
