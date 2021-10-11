import React from "react";
import NextHead from "next/head";

const Head = ({ title }) => {
  return (
    <NextHead>
      <title>Strive | {title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta
        name="description"
        content="Strive is a pre-eminent platform known for its crafty ideas and vigorous responsive solutions. We are bound and determined to get the desired outcomes. We have extensive expertise and can implement projects of any complexity, from platforms such as Mobile App Development, Web App Development, Digital Marketing, and Website Designing by using cutting edge technologies putting together all required components to make an agile, safe, and distinctive digital experience."
      />
      <meta name="robots" content="noindex, nofollow" />
      <meta
        name="facebook-domain-verification"
        content="eklfikdmlg4k82kqih16ki3fpfpipe"
      />
    </NextHead>
  );
};

export default Head;
