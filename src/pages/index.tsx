import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { getInitialLocale } from "../utilities/translations";

const Index = () => {
  const router = useRouter();

  // useEffect only runs on the client-side.
  React.useEffect(() => {
    router.replace("/[lang]", `/${getInitialLocale()}`);
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
