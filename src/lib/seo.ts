import type { Dictionary } from "./i18n/types";
import { SITE, locales, type Locale } from "./i18n/config";

/**
 * Boy structured data (JSON-LD @graph).
 * Google'da rich-result chiqishi uchun: EducationalOrganization /
 * LocalBusiness, WebSite, FAQPage va Course ro'yxati.
 */
export function buildJsonLd(locale: Locale, dict: Dictionary) {
  const base = SITE.url;
  const orgId = `${base}/#organization`;
  const siteId = `${base}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": orgId,
        name: SITE.name,
        legalName: "START21 o'quv markazi",
        url: `${base}/${locale}`,
        logo: { "@type": "ImageObject", url: SITE.logo },
        image: SITE.logo,
        description: dict.meta.description,
        telephone: SITE.phonePrimary,
        priceRange: "$$",
        foundingDate: "2017",
        areaServed: { "@type": "City", name: "Namangan" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Namangan",
          addressRegion: "Namangan",
          addressCountry: "UZ",
        },
        sameAs: [SITE.telegram, SITE.instagram, SITE.youtube],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2140",
          bestRating: "5",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "20:00",
        },
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: base,
        name: SITE.name,
        publisher: { "@id": orgId },
        inLanguage: locales,
      },
      {
        "@type": "FAQPage",
        "@id": `${base}/${locale}#faq`,
        mainEntity: dict.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${base}/${locale}#courses`,
        name: dict.courses.title,
        itemListElement: dict.courses.items.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Course",
            name: `${c.name} — START21`,
            description: c.outcome,
            inLanguage: locale,
            provider: { "@id": orgId },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "Onsite",
              courseWorkload: c.duration,
              location: { "@type": "Place", name: "Namangan" },
            },
          },
        })),
      },
    ],
  };
}

/** hreflang alternates — barcha tillar + x-default */
export function buildLanguageAlternates(): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${SITE.url}/${l}`;
  languages["x-default"] = `${SITE.url}/uz`;
  return languages;
}
