import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { Nav, NavItem, NavLink, ToolbarContainer } from "./components";

export const Navigation = () => {
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
                  {'About'}
                </NavLink>
              </NavItem>
            </Nav>
          </ToolbarContainer>
        </Toolbar>
      </AppBar>
      {/* This is to not have part of the page hidden behind the appbar */}
      {/* <Toolbar /> */}
    </>
  );
};
