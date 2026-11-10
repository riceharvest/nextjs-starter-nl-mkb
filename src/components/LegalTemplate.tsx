import { t, type LegalSection } from "../lib/dictionary";
import type { Locale } from "../lib/i18n";

export function LegalTemplate({ locale, title, sections }: { locale: Locale; title: string; sections: readonly LegalSection[] }) {
  const d = t(locale).template;
  return (
    <article>
      <p className="template-banner" role="note">
        <strong>{d.label}</strong>
        <br />
        {d.note}
      </p>
      <h1>{title}</h1>
      {sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          <p>{s.body}</p>
        </section>
      ))}
    </article>
  );
}
