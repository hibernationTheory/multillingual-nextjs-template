import React from "react";
import App from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MaterialUIThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

import { materialUITheme, styledComponentsTheme } from "src/styles/theme";
import { TranslationsProvider } from "src/components";

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <TranslationsProvider>
          <MaterialUIThemeProvider theme={materialUITheme}>
            <StyledComponentsThemeProvider theme={styledComponentsTheme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </StyledComponentsThemeProvider>
          </MaterialUIThemeProvider>
        </TranslationsProvider>
      </>
    );
  }
}
