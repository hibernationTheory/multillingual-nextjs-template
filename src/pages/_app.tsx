import React from "react";
import App from "next/app";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MaterialUIThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

import { materialUITheme, styledComponentsTheme } from "src/styles/theme";
import { TranslationsProvider } from "src/components";

interface Props extends App {
  translations: any;
}

export default class MyApp<Props> extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, translations } = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <TranslationsProvider translations={translations}>
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

MyApp.getInitialProps = async appContext => {
  const translations = await loadTranslationsIntoApp(appContext.ctx.req);

  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, translations };
};

const loadTranslationsIntoApp = async req => {
  const url = apiUrl("/api/translations", req);
  const res = await fetch(url);
  const data = res.json();

  return data;
};

function apiUrl(path, req) {
  if (req && typeof window === "undefined") {
    // this is running server-side, so we need an absolute URL
    const host = req.headers.host;
    if (host && host.startsWith("localhost")) {
      return `http://localhost:3000${path}`;
    } else {
      return `https://${host}${path}`;
    }
  } else {
    // this is running client-side, so a relative path is fine
    return path;
  }
}
