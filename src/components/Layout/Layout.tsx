import React from "react";
import Head from "next/head";
import { Navigation } from "../Navigation";
import { TranslationsProvider } from "../TranslationsProvider";

export const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navigation />
      <TranslationsProvider>
        <>{children}</>
      </TranslationsProvider>
    </>
  );
};
