export const locales = ["uz", "ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "uz";

export const localeNames: Record<Locale, string> = {
  uz: "O'zbekcha",
  ru: "Русский",
  en: "English",
};

export const localeShort: Record<Locale, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

export const localeHtml: Record<Locale, string> = {
  uz: "uz",
  ru: "ru",
  en: "en",
};

/* Tildan qat'i nazar o'zgarmaydigan ma'lumotlar */
export const SITE = {
  name: "START21",
  logo: "https://static.tildacdn.one/tild3665-6663-4437-a136-613261613531/START21_new_logo_1.webp",
  url: "https://start21.uz",
  phonePrimary: "+998 69 211 21 21",
  phonePrimaryHref: "+998692112121",
  phoneSecondary: "+998 78 113 73 10",
  phoneSecondaryHref: "+998781137310",
  telegram: "https://t.me/Start21",
  instagram: "https://instagram.com/start21.lc",
  youtube: "https://youtube.com/@Start21",
} as const;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
