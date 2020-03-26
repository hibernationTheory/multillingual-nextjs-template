import React from "react";
import { useRouter } from "next/router";
import { isLocale, LocaleContext } from "src/utilities/translations";

export const LocaleProvider = ({ lang, children }) => {
  const [locale, setLocale] = React.useState(lang);
  const query = useRouter?.()?.query;

  const queryLang = query?.lang;

  // store the preference
  React.useEffect(() => {
    if (locale !== localStorage.getItem("locale")) {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  // sync locale value on every client-side route changes
  React.useEffect(() => {
    if (
      typeof queryLang === "string" &&
      isLocale(queryLang) &&
      locale !== queryLang
    ) {
      setLocale(queryLang);
    }
  }, [queryLang, locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
