import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Link from "next/link";

import { useTranslation } from "src/utilities/translations";
import { LocaleSwitcher } from "../LocaleSwitcher";

export const Navigation = () => {
  const { locale, translate } = useTranslation();

  return (
    <>
      <AppBar>
        <Toolbar>
          <ul className="root">
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
          <LocaleSwitcher />
        </Toolbar>
      </AppBar>
      {/* This is to not have part of the page hidden behind the appbar */}
      <Toolbar />
    </>
  );
};
