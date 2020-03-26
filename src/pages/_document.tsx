import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

import { ServerStyleSheets as MaterialUIServerStyleSheet } from "@material-ui/core/styles";
import { ServerStyleSheet as StyledComponentServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i,800,800i&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const materialUISheets = new MaterialUIServerStyleSheet();
  const styledComponentSheets = new StyledComponentServerStyleSheet();

  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => {
          return styledComponentSheets.collectStyles(
            materialUISheets.collect(<App {...props} />)
          );
        },
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        materialUISheets.getStyleElement(),
        styledComponentSheets.getStyleElement(),
      ],
    };
  } finally {
    styledComponentSheets.seal();
  }
};
