import React from "react";
import { TranslationsContext } from "src/utilities/translations";
import translations from "src/translations/translations.json";

export function TranslationsProvider(props) {
  return (
    <TranslationsContext.Provider value={{ translations }}>
      {props.children}
    </TranslationsContext.Provider>
  );
}
