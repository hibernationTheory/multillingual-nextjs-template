import React from "react";
import Head from "next/head";
import { useTranslation } from "../../utilities/translations";
import { Navigation } from "../Navigation";

export const Layout = ({ titleKey, children }) => {
  const { translate } = useTranslation();
  return (
    <>
      <Head>
        <title>{translate(titleKey)}</title>
      </Head>
      <Navigation />
      <>{children}</>
    </>
  );
};
