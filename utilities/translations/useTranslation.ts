import { useContext } from "react";
import { LocaleContext } from "./context";
import translations from "../translations/strings";
import { defaultLocale } from "../translations/config";

export function useTranslation() {
  const { locale } = useContext(LocaleContext);

  function translate(key: string) {
    if (!translations[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }

    return translations[locale][key] || translations[defaultLocale][key] || "";
  }

  return {
    translate,
    locale
  };
}
