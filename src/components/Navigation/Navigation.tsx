import React from "react";
import Link from "next/link";

import { useTranslation } from "src/utilities/translations";
import { LocaleSwitcher } from "../LocaleSwitcher";

export const Navigation = () => {
  const { locale, translate } = useTranslation();
  return (
    <ul className="root">
      <li>
        <LocaleSwitcher />
      </li>
      <li>
        <Link href="/[lang]" as={`/${locale}`}>
          <a>{translate("painting")}</a>
        </Link>
      </li>
      <li>
        <Link href="/[lang]/artist" as={`/${locale}/artist`}>
          <a>{translate("artist")}</a>
        </Link>
      </li>
    </ul>
  );
};
