import { LegalBlock } from "./LegalBlock";
import type { Locale } from "../lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <LegalBlock locale={locale} />
    </footer>
  );
}
