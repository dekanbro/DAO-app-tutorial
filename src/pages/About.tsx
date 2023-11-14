// import { useLocation } from "react-router-dom";

import { H1, H2, ParLg, SingleColumnLayout } from "@daohaus/ui";

export const About = () => {
  return (
    <SingleColumnLayout>
      <H1>Welcome to DIN</H1>
      <H2>DAO Immutable News</H2>
      <ParLg> --- </ParLg>
      <ParLg>
        🔵 Submit an article it will be collectively approved by the editors.
      </ParLg>
      <ParLg> --- </ParLg>
      <ParLg>
        🔵 If approved you will become an editor as well. More articles that are
        approved more editorial weight you will gain.
      </ParLg>
      <ParLg> --- </ParLg>
      <ParLg>
        🔵 Also If an article is published your followers can collect the
        article, receive an NFT, and pay you and the DAO out in the process.
      </ParLg>
    </SingleColumnLayout>
  );
};
