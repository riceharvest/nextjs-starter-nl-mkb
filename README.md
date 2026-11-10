# nextjs-starter-nl-mkb

English | [Nederlands](#nederlands)

A small Next.js (App Router, TypeScript) starter for Dutch small-business (MKB) websites. Dutch is the default language, English is included.

## What it is

- Dutch/English routing: `nl` at `/`, `en` at `/en`, `hreflang` alternates with `x-default`, `sitemap.xml`
- `LocalBusiness` JSON-LD (schema.org) generated from one config file: `src/config/site.ts`
- A footer block with the business details the Dutch government lists for websites: trade name and statutory name, visiting address, e-mail, phone, KvK number, btw-id. The source is cited in `src/components/LegalBlock.tsx` (Ondernemersplein, BW 3:15d)
- Privacy statement and general terms as skeleton TEMPLATES, labelled "TEMPLATE, geen juridisch advies, laat controleren"
- No cookies and no analytics by default
- Contact section with a WhatsApp link, a `mailto:` link and a `tel:` link
- Security headers in `next.config.ts`: CSP, HSTS, `X-Content-Type-Options`, plus Referrer-Policy, Permissions-Policy and X-Frame-Options
- `robots.txt`, `sitemap.xml` and `llms.txt`
- Accessibility defaults: skip link, visible focus styles, colour tokens checked for 4.5:1 contrast by a test
- A 404 page (Dutch and English)
- Tests (vitest) that fail if the JSON-LD, hreflang, legal block, templates or headers go missing

## How to use it

```bash
git clone https://github.com/riceharvest/nextjs-starter-nl-mkb.git my-site
cd my-site
npm install
npm run dev        # http://localhost:3000
npm test           # vitest
npm run typecheck
npm run build
npm run check:config   # lists placeholders you have not filled in
```

Needs Node.js 20.9 or newer (Next.js 16).

## Checklist: what you must fill in

- [ ] `src/config/site.ts`: `url`, `name`, `legalName`, `description`, `address`, `email`, `phone`, `whatsapp`, `kvk`, `btwId`, `openingHours`, `sameAs`
- [ ] Run `npm run check:config` until it reports no placeholders. Placeholders in `[square brackets]` are left out of the JSON-LD but are still visible in the footer
- [ ] `src/lib/dictionary.ts`: replace the home page text and complete the privacy statement and terms in Dutch and English
- [ ] Have the privacy statement and terms checked by a lawyer or your trade association, then remove the TEMPLATE label
- [ ] Check what your own situation requires. A webshop has more information duties than a brochure site
- [ ] Check the CSP in `src/config/security-headers.ts` if you add third-party scripts, fonts, maps or embeds
- [ ] Replace the colour tokens in `src/app/globals.css` with your brand colours and run `npm test` to re-check contrast
- [ ] Add a logo, favicon and real content

## Honest limits

- This is a starting point, not legal advice. The legal pages are skeletons and contain no legal claims of their own.
- The business-details list follows the Ondernemersplein pages cited in the code, checked on 2026-11-11. Rules change, so check the current text.
- The CSP uses `'unsafe-inline'` for scripts because Next.js emits inline scripts. A nonce-based CSP is stricter but makes pages dynamic. See the Next.js docs.
- No automated test replaces an accessibility review with real users.
- No contact form is included, so there is no server code and no data processing beyond hosting logs.
- Licences: this repo is MIT. Direct dependencies are MIT (Next.js, React, vitest) and Apache-2.0 (TypeScript). Some transitive packages installed by npm have other licences, for example `@img/sharp-libvips-*` (LGPL-3.0, optional, from Next.js) and `lightningcss` (MPL-2.0, from vitest). Check them if you redistribute your build output together with node_modules.

## Credits

Gemaakt door darioa ([https://www.darioa.nl](https://www.darioa.nl)).

---

## Nederlands

Een kleine Next.js-starter (App Router, TypeScript) voor websites van Nederlandse mkb-bedrijven. Nederlands is de standaardtaal, Engels zit erbij.

### Wat zit erin

- Routing in Nederlands en Engels: `nl` op `/`, `en` op `/en`, `hreflang`-alternatieven met `x-default`, `sitemap.xml`
- `LocalBusiness` JSON-LD (schema.org) uit een enkel configbestand: `src/config/site.ts`
- Een voetblok met de bedrijfsgegevens die de overheid voor websites noemt: handelsnaam en statutaire naam, bezoekadres, e-mailadres, telefoonnummer, KvK-nummer, btw-id. De bron staat in `src/components/LegalBlock.tsx` (Ondernemersplein, BW 3:15d)
- Privacyverklaring en algemene voorwaarden als skelet-TEMPLATES met het label "TEMPLATE, geen juridisch advies, laat controleren"
- Standaard geen cookies en geen analytics
- Contactsectie met WhatsApp-link, `mailto:` en `tel:`
- Beveiligingsheaders in `next.config.ts`: CSP, HSTS, `X-Content-Type-Options`, plus Referrer-Policy, Permissions-Policy en X-Frame-Options
- `robots.txt`, `sitemap.xml` en `llms.txt`
- Toegankelijke basis: skiplink, zichtbare focusstijlen, kleurtokens met 4,5:1 contrast dat een test controleert
- Een 404-pagina (Nederlands en Engels)
- Tests (vitest) die falen als JSON-LD, hreflang, het gegevensblok, de templates of de headers ontbreken

### Gebruik

```bash
git clone https://github.com/riceharvest/nextjs-starter-nl-mkb.git mijn-site
cd mijn-site
npm install
npm run dev
npm test
npm run typecheck
npm run build
npm run check:config   # toont de placeholders die u nog moet invullen
```

Vereist Node.js 20.9 of nieuwer.

### Checklist: wat u zelf moet invullen

- [ ] `src/config/site.ts`: `url`, `name`, `legalName`, `description`, `address`, `email`, `phone`, `whatsapp`, `kvk`, `btwId`, `openingHours`, `sameAs`
- [ ] Draai `npm run check:config` tot er geen placeholders meer staan. Placeholders in `[blokhaken]` blijven buiten de JSON-LD maar zijn nog zichtbaar in de voet
- [ ] `src/lib/dictionary.ts`: vervang de tekst van de homepage en maak de privacyverklaring en voorwaarden af, in beide talen
- [ ] Laat privacyverklaring en voorwaarden controleren door een jurist of uw branchevereniging en verwijder daarna het TEMPLATE-label
- [ ] Ga na wat uw eigen situatie vraagt. Een webwinkel heeft meer informatieplichten dan een visitekaartjessite
- [ ] Controleer de CSP in `src/config/security-headers.ts` als u scripts, lettertypen, kaarten of embeds van derden toevoegt
- [ ] Vervang de kleurtokens in `src/app/globals.css` door uw huiskleuren en draai `npm test` om het contrast opnieuw te controleren
- [ ] Voeg logo, favicon en echte inhoud toe

### Eerlijke grenzen

- Dit is een startpunt, geen juridisch advies. De juridische pagina's zijn skeletten en bevatten zelf geen juridische beweringen.
- De lijst met bedrijfsgegevens volgt de Ondernemersplein-pagina's uit de code, gecontroleerd op 2026-11-11. Regels veranderen, controleer de actuele tekst.
- De CSP gebruikt `'unsafe-inline'` voor scripts omdat Next.js inline scripts uitstuurt. Een CSP met nonce is strenger maar maakt pagina's dynamisch. Zie de Next.js-documentatie.
- Geen enkele geautomatiseerde test vervangt een toegankelijkheidscontrole met echte gebruikers.
- Er zit geen contactformulier in, dus geen servercode en geen gegevensverwerking buiten de logs van uw hosting.
- Licenties: deze repo is MIT. Directe dependencies zijn MIT (Next.js, React, vitest) en Apache-2.0 (TypeScript). Sommige indirecte pakketten hebben een andere licentie, zoals `@img/sharp-libvips-*` (LGPL-3.0, optioneel, via Next.js) en `lightningcss` (MPL-2.0, via vitest). Controleer die als u uw build samen met node_modules verspreidt.

### Gemaakt door darioa

Gemaakt door darioa ([https://www.darioa.nl](https://www.darioa.nl)).

## Licence / Licentie

MIT, see [LICENSE](LICENSE).
