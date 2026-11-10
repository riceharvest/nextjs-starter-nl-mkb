import type { Locale } from "./i18n";

export type LegalSection = { heading: string; body: string };

const dictionary = {
  nl: {
    skip: "Direct naar de inhoud",
    nav: { home: "Home", privacy: "Privacy", terms: "Algemene voorwaarden", language: "Taal" },
    home: {
      title: "Welkom",
      lead: "Dit is de startpagina van uw website. Pas deze tekst aan in src/lib/dictionary.ts.",
    },
    contact: {
      heading: "Contact",
      whatsapp: "Stuur een WhatsApp-bericht",
      whatsappText: "Hallo, ik heb een vraag.",
      email: "Stuur een e-mail",
      phone: "Bel ons",
    },
    legalBlock: {
      heading: "Bedrijfsgegevens",
      name: "Handelsnaam",
      legalName: "Statutaire naam",
      address: "Bezoekadres",
      email: "E-mailadres",
      phone: "Telefoonnummer",
      kvk: "KvK-nummer",
      btw: "Btw-identificatienummer",
    },
    template: {
      label: "TEMPLATE, geen juridisch advies, laat controleren",
      note: "Dit is een skelet. Vul het aan en laat het controleren door een jurist of branchevereniging voordat u het publiceert. Verwijder dit label pas daarna.",
    },
    privacy: {
      title: "Privacyverklaring",
      sections: [
        { heading: "Wie is verantwoordelijk", body: "[Naam, adres en contactgegevens van uw bedrijf. Zie het blok Bedrijfsgegevens.]" },
        { heading: "Welke persoonsgegevens verwerken wij", body: "[Noem per soort gegeven wat u verwerkt, bijvoorbeeld gegevens uit een contactbericht.]" },
        { heading: "Waarvoor en op welke grondslag", body: "[Noem per doel de grondslag uit artikel 6 AVG.]" },
        { heading: "Hoe lang bewaren wij gegevens", body: "[Noem per soort gegeven de bewaartermijn.]" },
        { heading: "Met wie delen wij gegevens", body: "[Noem verwerkers en andere ontvangers, bijvoorbeeld hosting of e-mail.]" },
        { heading: "Cookies en analytics", body: "[Beschrijf wat uw website daadwerkelijk gebruikt. De standaardinstelling van deze starter plaatst geen cookies en heeft geen analytics.]" },
        { heading: "Uw rechten en klachten", body: "[Beschrijf hoe mensen inzage, correctie of verwijdering kunnen vragen en dat zij een klacht kunnen indienen bij de Autoriteit Persoonsgegevens.]" },
      ] as LegalSection[],
    },
    terms: {
      title: "Algemene voorwaarden",
      sections: [
        { heading: "Definities", body: "[Wie is opdrachtnemer, wie is klant, wat zijn de diensten of producten.]" },
        { heading: "Toepasselijkheid", body: "[Op welke offertes en overeenkomsten zijn de voorwaarden van toepassing.]" },
        { heading: "Offertes en prijzen", body: "[Geldigheidsduur, prijzen inclusief of exclusief btw.]" },
        { heading: "Betaling", body: "[Betalingstermijn en gevolgen van te late betaling.]" },
        { heading: "Levering of uitvoering", body: "[Termijnen en wijze van uitvoering.]" },
        { heading: "Aansprakelijkheid", body: "[Laat dit onderdeel door een jurist opstellen.]" },
        { heading: "Klachten", body: "[Hoe en binnen welke termijn kan de klant klagen.]" },
        { heading: "Toepasselijk recht en geschillen", body: "[Bijvoorbeeld Nederlands recht en de bevoegde rechter.]" },
      ] as LegalSection[],
    },
    notFound: { title: "Pagina niet gevonden", body: "Deze pagina bestaat niet.", back: "Terug naar de homepage" },
  },
  en: {
    skip: "Skip to content",
    nav: { home: "Home", privacy: "Privacy", terms: "Terms", language: "Language" },
    home: {
      title: "Welcome",
      lead: "This is your website's home page. Edit this text in src/lib/dictionary.ts.",
    },
    contact: {
      heading: "Contact",
      whatsapp: "Send a WhatsApp message",
      whatsappText: "Hello, I have a question.",
      email: "Send an email",
      phone: "Call us",
    },
    legalBlock: {
      heading: "Company details",
      name: "Trade name",
      legalName: "Legal name",
      address: "Visiting address",
      email: "Email",
      phone: "Phone",
      kvk: "KvK number (Chamber of Commerce)",
      btw: "VAT identification number",
    },
    template: {
      label: "TEMPLATE, not legal advice, have it reviewed",
      note: "This is a skeleton. Complete it and have a lawyer or trade association review it before you publish. Remove this label only after that.",
    },
    privacy: {
      title: "Privacy statement",
      sections: [
        { heading: "Who is responsible", body: "[Name, address and contact details of your business. See the Company details block.]" },
        { heading: "Which personal data we process", body: "[List each kind of data you process, for example data from a contact message.]" },
        { heading: "Purposes and legal basis", body: "[State the Article 6 GDPR basis for each purpose.]" },
        { heading: "How long we keep data", body: "[State the retention period per kind of data.]" },
        { heading: "Who we share data with", body: "[List processors and other recipients, for example hosting or email.]" },
        { heading: "Cookies and analytics", body: "[Describe what your site actually uses. The default of this starter sets no cookies and has no analytics.]" },
        { heading: "Your rights and complaints", body: "[Describe how people can ask for access, correction or deletion, and that they can complain to the Dutch Data Protection Authority.]" },
      ] as LegalSection[],
    },
    terms: {
      title: "Terms and conditions",
      sections: [
        { heading: "Definitions", body: "[Who is the supplier, who is the customer, what are the services or products.]" },
        { heading: "Applicability", body: "[Which quotes and agreements the terms apply to.]" },
        { heading: "Quotes and prices", body: "[Validity period, prices including or excluding VAT.]" },
        { heading: "Payment", body: "[Payment term and consequences of late payment.]" },
        { heading: "Delivery or performance", body: "[Timelines and way of performing the work.]" },
        { heading: "Liability", body: "[Have a lawyer draft this section.]" },
        { heading: "Complaints", body: "[How and within what period the customer can complain.]" },
        { heading: "Governing law and disputes", body: "[For example Dutch law and the competent court.]" },
      ] as LegalSection[],
    },
    notFound: { title: "Page not found", body: "This page does not exist.", back: "Back to the home page" },
  },
} as const;

export function t(locale: Locale) {
  return dictionary[locale];
}
