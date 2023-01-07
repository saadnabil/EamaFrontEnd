import React from "react";
import { BilboardComponent } from "../../components/bilboard/bilboard";
import Head from "next/head";

const BilbaordPage = () => {
  return (
    <div>
      <Head>
        <title>emma website</title>
        <meta key="description" name="description" content="My new title" />
        <meta key="keywords" name="keywords" content="My, new, title" />
      </Head>
      <BilboardComponent />
    </div>
  );
};

export default BilbaordPage;
