import React from "react";
import { useRouter } from "next/dist/client/router";
import {
  locales,
  languageNames,
  useTranslation
} from "../../utilities/translations";

export const LocaleSwitcher = () => {
  const router = useRouter();
  const { locale } = useTranslation();

  const handleLocaleChange = React.useCallback(
    e => {
      const regex = new RegExp(`^/(${locales.join("|")})`);
      router.push(
        router.pathname,
        router.asPath.replace(regex, `/${e.target.value}`)
      );
    },
    [router]
  );

  return (
    <select value={locale} onChange={handleLocaleChange}>
      {locales.map(locale => (
        <option key={locale} value={locale}>
          {languageNames[locale]}
        </option>
      ))}
    </select>
  );
};
