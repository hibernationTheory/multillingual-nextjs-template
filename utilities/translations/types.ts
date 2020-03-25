import { locales } from "./config";

export type Locale = typeof locales[number];

export function isLocale(tested: string) {
  return locales.some(locale => locale === tested);
}
