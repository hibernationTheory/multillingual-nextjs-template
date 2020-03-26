import React from "react";

import { TranslationsContext } from "src/utilities/translations";

export function TranslationsProvider(props) {
  return (
    <TranslationsContext.Provider value={{ translations: props.translations }}>
      {props.children}
    </TranslationsContext.Provider>
  );
}
