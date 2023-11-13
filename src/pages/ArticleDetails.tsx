import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import { TARGET_DAO } from "../targetDao";
import { useRecords } from "../hooks/useRecords";
import { useParams } from "react-router-dom";
import { Button, ParLg, useToast } from "@daohaus/ui";
import { AuthorAvatar } from "../components/AuthorAvatar";
import { useDHConnect } from "@daohaus/connect";
import { useTxBuilder } from "@daohaus/tx-builder";
import {
    // TXLego,
    handleErrorMessage,
  } from "@daohaus/utils";
import { APP_TX } from "../legos/tx";
import { useState } from "react";


type BlogPost = {
  title: string;
  description: string;
  contentURI: string;
  imageURI: string;
  authorAddress: string;
  contentHash: string;
};

const ArticleLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 110rem;
  align-items: left;
  font-size: 1.5rem;
`;

const HeaderImageWrapper = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
  margin-top: 2rem;
`;

const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TitleWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const ArticleDetails = () => {
  //   const location = useLocation(); // for share link
  const [isLoadingTx, setIsLoadingTx] = useState(false);
  const { hash } = useParams();
  const { address } = useDHConnect();
  const { fireTransaction } = useTxBuilder();
  const { records } = useRecords({
    daoId: TARGET_DAO.DAO_ADDRESS,
    chainId: TARGET_DAO.CHAIN_ID,
    recordType: "crazyPub",
    hash,
  });
  const { successToast, errorToast, defaultToast } = useToast();

  if (!records) {
    return <div>Loading...</div>;
  }

  const parsedContent: BlogPost = records[0]?.parsedContent as BlogPost;

  const handleCollect = () => {
    if(!address) {
        return;
    }
    
    fireTransaction({
        tx: APP_TX.COLLECT as any,
        callerState: {
            postId: hash,
            },
        lifeCycleFns: {
          onRequestSign() {
            setIsLoadingTx(true);
            defaultToast({
                title: "Success",
                description: "Transaction submitted: Wating",
              })
          },
          onTxSuccess() {
            setIsLoadingTx(false);
            successToast({ title: "Success", description: "Minted" });
          },
          onTxError(err) {
            const errMsg = handleErrorMessage(err as any);
            console.error(err);
            errorToast({ title: "Error", description: errMsg });
            setIsLoadingTx(false);
          },
        },
      });

}

  return (
    <ArticleLayout>
      <HeaderImageWrapper>
        <HeaderImage
          src={
            parsedContent?.imageURI ||
            "https://hackmd.io/_uploads/rkWi13-ba.png"
          }
        />
      </HeaderImageWrapper>
      <TitleWrapper>
        <ParLg>{parsedContent?.title}</ParLg>
      </TitleWrapper>

      {parsedContent?.authorAddress ? (
        <AuthorAvatar address={parsedContent?.authorAddress} />
      ) : (
        <AuthorAvatar address={TARGET_DAO.SAFE_ADDRESS} />
      )}

      <ReactMarkdown>{parsedContent?.description}</ReactMarkdown>
      <Button onClick={handleCollect} disabled={!!isLoadingTx}>Collect</Button>
    </ArticleLayout>
  );
};
