import styled from "styled-components";
import {
  AddressDisplay,
  H1,
  H2,
  Label,
  Link,
  ParLg,
  SingleColumnLayout,
} from "@daohaus/ui";
import { TARGET_DAO } from "../targetDao";

const InfoLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

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
      <ParLg> --- </ParLg>
      <ParLg>
        🔵 This was build in the DAOhaus hackathon 2023 to showcase the DAOhaus
        tools and protocol. It was made into a tutorial for all to enjoy{" "}
        <Link href="https://github.com/dekanbro/DAO-app-tutorial">
          check it
        </Link>
      </ParLg>

      <InfoLinks>
        <Link
          href={`https://admin.daohaus.club/#/molochv3/${TARGET_DAO.CHAIN_ID}/${TARGET_DAO.DAO_ADDRESS}/proposals`}
        >
          Full DAO Admin
        </Link>
        <Label>DAO Info</Label>
        <AddressDisplay
          copy
          explorerNetworkId={TARGET_DAO.CHAIN_ID}
          address={TARGET_DAO.DAO_ADDRESS}
        />
        <Label>NFT Info</Label>
        <AddressDisplay
          copy
          explorerNetworkId={TARGET_DAO.CHAIN_ID}
          address={TARGET_DAO.NFT_ADDRESS}
        />
        <Label>Treasury Info</Label>
        <AddressDisplay
          copy
          explorerNetworkId={TARGET_DAO.CHAIN_ID}
          address={TARGET_DAO.SAFE_ADDRESS}
        />
      </InfoLinks>
    </SingleColumnLayout>
  );
};
