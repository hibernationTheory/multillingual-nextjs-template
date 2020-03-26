import React from "react";
import { defaultLocale } from "./config";
import { Locale } from "./types";

interface LocaleContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const LocaleContext = React.createContext<LocaleContextProps>({
  locale: defaultLocale,
  setLocale: () => null,
});

export const TranslationsContext = React.createContext({
  translations: {},
});
