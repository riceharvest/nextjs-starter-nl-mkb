import "./globals.css";
import { t } from "../lib/dictionary";

// Root-level 404: it also catches unknown locales. Shown in Dutch (default) and English.
export default function NotFound() {
  const nl = t("nl").notFound;
  const en = t("en").notFound;
  return (
    <html lang="nl">
      <body>
        <main id="main">
          <h1>{nl.title}</h1>
          <p>{nl.body}</p>
          <p><a href="/">{nl.back}</a></p>
          <h2 lang="en">{en.title}</h2>
          <p lang="en">{en.body}</p>
          <p><a href="/en" lang="en">{en.back}</a></p>
        </main>
      </body>
    </html>
  );
}
