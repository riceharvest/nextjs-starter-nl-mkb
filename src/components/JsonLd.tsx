import { localBusinessJsonLd, serializeJsonLd } from "../lib/seo";
import type { Locale } from "../lib/i18n";

/** Renders <script type="application/ld+json"> built from src/config/site.ts. */
export function JsonLd({ locale }: { locale: Locale }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(localBusinessJsonLd(locale)) }}
    />
  );
}
