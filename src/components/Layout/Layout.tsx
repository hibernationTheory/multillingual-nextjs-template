import React from "react";
import Head from "next/head";

import { useTranslation } from "src/utilities/translations";
import { Navigation } from "../Navigation";

export const Layout = ({ title, children }) => {
  const { translate } = useTranslation();
  const siteTitle = translate("meta.siteTitle");
  const description = translate("meta.description");

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta
          data-react-html="true"
          property="twitter:title"
          content={siteTitle}
        />
        <meta
          data-react-html="true"
          property="twitter:description"
          content={description}
        />
        <meta property="og:site_name" content="Multilingual Next.js Template" />
      </Head>
      <Navigation />
      {children}
    </>
  );
};
