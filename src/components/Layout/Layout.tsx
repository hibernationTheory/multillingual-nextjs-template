import React from "react";
import Head from "next/head";
import { Navigation } from "../Navigation";

export const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navigation />
      {children}
    </>
  );
};
