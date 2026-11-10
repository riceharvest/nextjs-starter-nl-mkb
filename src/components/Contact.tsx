import { siteConfig } from "../config/site";
import { t } from "../lib/dictionary";
import { whatsappUrl } from "../lib/seo";
import type { Locale } from "../lib/i18n";

export function Contact({ locale }: { locale: Locale }) {
  const d = t(locale).contact;
  return (
    <section aria-labelledby="contact-heading" id="contact">
      <h2 id="contact-heading">{d.heading}</h2>
      <ul className="contact-list">
        <li>
          <a href={whatsappUrl(siteConfig.whatsapp, d.whatsappText)} rel="noopener">
            {d.whatsapp}
          </a>
        </li>
        <li>
          <a href={`mailto:${siteConfig.email}`}>{d.email}</a>
        </li>
        <li>
          <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>{d.phone}</a>
        </li>
      </ul>
    </section>
  );
}
