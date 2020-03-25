import React from "react";
import { defaultLocale } from "./config";
import { Locale } from "./types";

interface ContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const defaultValues = {
  locale: defaultLocale,
  setLocale: () => null
};

export const LocaleContext = React.createContext<ContextProps>(defaultValues);
