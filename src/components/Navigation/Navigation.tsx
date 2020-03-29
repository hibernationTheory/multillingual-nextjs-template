import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { useTranslation } from "src/utilities/translations";
import { LocaleSwitcher } from "../LocaleSwitcher";

import { Nav, NavItem, NavLink, ToolbarContainer } from "./components";

export const Navigation = () => {
  const { translate } = useTranslation();

  return (
    <>
      <AppBar>
        <Toolbar>
          <ToolbarContainer>
            <Nav>
              <NavItem>
                <NavLink
                  href={
                    "https://github.com/hibernationTheory/multillingual-nextjs-template"
                  }
                >
                  {translate("root.aboutPage")}
                </NavLink>
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
