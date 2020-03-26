import React from "react";
import Error from "next/error";
import { getDisplayName } from "next/dist/next-server/lib/utils";

import { LocaleProvider } from "src/components";
import { isLocale } from "src/utilities/translations";

export default WrappedPage => {
  const WithLocale = ({ locale, ...pageProps }) => {
    if (!locale) {
      return <Error statusCode={404} />;
    }
    return (
      <LocaleProvider lang={locale}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    );
  };

  WithLocale.getInitialProps = async ctx => {
    let pageProps = {};
    const locale = ctx.query.lang;

    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx);
    }

    if (typeof locale !== "string" || !isLocale(locale)) {
      return { ...pageProps, locale: undefined };
    }

    return { ...pageProps, locale };
  };

  WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`;

  return WithLocale;
};
