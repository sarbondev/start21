import type { Dictionary } from "./types";
import { uz } from "./dictionaries/uz";
import { ru } from "./dictionaries/ru";
import { en } from "./dictionaries/en";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { uz, ru, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? uz;
}

export * from "./config";
export type { Dictionary } from "./types";
