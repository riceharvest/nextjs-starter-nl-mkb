/**
 * The ONE file you edit. Everything else (JSON-LD, footer, contact section,
 * sitemap, robots, llms.txt) reads from here.
 *
 * Values wrapped in [square brackets] are placeholders. `npm run check:config`
 * lists the ones you have not replaced yet, and the JSON-LD leaves them out.
 */
export const siteConfig = {
  /** Public URL without trailing slash, e.g. "https://www.example.nl" */
  url: "https://www.example.nl",
  /** Handelsnaam (trade name) */
  name: "[Handelsnaam]",
  /** Statutory name as in the oprichtingsakte, if different from the trade name */
  legalName: "[Statutaire naam, indien afwijkend]",
  description: {
    nl: "[Korte omschrijving van uw bedrijf in het Nederlands]",
    en: "[Short description of your business in English]",
  },
  /** Visiting address (bezoekadres). Not a PO box. */
  address: {
    street: "[Straat en huisnummer]",
    postalCode: "[1234 AB]",
    city: "[Plaats]",
    country: "NL",
  },
  email: "[info@example.nl]",
  /** International format, used for tel: and wa.me links */
  phone: "[+31 6 12345678]",
  whatsapp: "[+31612345678]",
  /** Chamber of Commerce number, 8 digits */
  kvk: "[KvK-nummer]",
  /** VAT identification number, e.g. NL123456789B01. Not your BSN. */
  btwId: "[btw-id]",
  /** Opening hours. dayOfWeek uses schema.org day names. Empty array = omit. */
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
  ] as { days: string[]; opens: string; closes: string }[],
  /** Optional: profile URLs (sameAs in JSON-LD) */
  sameAs: [] as string[],
};

export type SiteConfig = typeof siteConfig;
