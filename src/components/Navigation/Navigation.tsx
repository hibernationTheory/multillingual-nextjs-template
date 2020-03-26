import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Link from "next/link";

import { useTranslation } from "src/utilities/translations";
import { LocaleSwitcher } from "../LocaleSwitcher";

import { Nav, NavItem, NavLink, ToolbarContainer } from "./components";

export const Navigation = () => {
  const { locale, translate } = useTranslation();

  return (
    <>
      <AppBar>
        <Toolbar>
          <ToolbarContainer>
            <Nav>
              <NavItem>
                <Link href="/[lang]/about" as={`/${locale}/about`}>
                  <NavLink>{translate("root.aboutPage")}</NavLink>
                </Link>
              </NavItem>
            </Nav>
            <LocaleSwitcher />
          </ToolbarContainer>
        </Toolbar>
      </AppBar>
      {/* This is to not have part of the page hidden behind the appbar */}
      {/* <Toolbar /> */}
    </>
  );
};
