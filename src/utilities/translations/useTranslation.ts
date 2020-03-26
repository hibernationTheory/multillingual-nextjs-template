import { useContext } from "react";

import { LocaleContext, TranslationsContext } from "./context";
import { defaultLocale } from "./config";

export function useTranslation() {
  const { locale } = useContext(LocaleContext);
  const { translations } = useContext(TranslationsContext);

  function translate(key: string) {
    if (!translations?.[locale]?.[key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }

    return (
      translations?.[locale]?.[key] ||
      translations?.[defaultLocale]?.[key] ||
      ""
    );
  }

  return {
    translate,
    locale,
  };
}
