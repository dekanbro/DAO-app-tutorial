import { useDHConnect } from "@daohaus/connect";

import { Button, Card, ParMd } from "@daohaus/ui";
import styled from "styled-components";
import { TARGET_DAO } from "../targetDao";

import { useRecords } from "../hooks/useRecords";
import { AuthorAvatar } from "../components/AuthorAvatar";
import { Link } from "react-router-dom";

type BlogPost = {
  title: string;
  description: string;
  contentURI: string;
  imageURI: string;
  authorAddress: string;
  contentHash: string;
};

const CardWrapper = styled.div`
  margin: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  justify-items: center;
`;

const CardTitle = styled(ParMd)`
  font-size: 1.5rem;
  font-weight: 700;
`;

const CardDescription = styled(ParMd)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardAvatar = styled.div`
  margin-top: 0px;
`;

const CardImg = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ArticleList = () => {
  const { address } = useDHConnect();
  const { records } = useRecords({
    daoId: TARGET_DAO.DAO_ADDRESS,
    chainId: TARGET_DAO.CHAIN_ID,
    recordType: "crazyPub",
  });
  console.log("records >>", records);
  return (
    <CardWrapper>
      {records?.map((record) => {
        const parsedContent: BlogPost = record.parsedContent as BlogPost;
        return (
          <Card key={record.id}>
            <CardImg>
              <img
                src={
                  parsedContent?.imageURI ||
                  "https://hackmd.io/_uploads/rkWi13-ba.png"
                }
              />
            </CardImg>
            <CardAvatar>
              {parsedContent?.authorAddress ? (
                <AuthorAvatar address={parsedContent?.authorAddress} />
              ) : (
                <AuthorAvatar address={address || TARGET_DAO.SAFE_ADDRESS} />
              )}
            </CardAvatar>
            <CardTitle>{parsedContent?.title}</CardTitle>
            <CardDescription>{parsedContent?.description}</CardDescription>
            <ParMd>{parsedContent?.contentURI}</ParMd>
            <Button variant="link"><Link to={parsedContent?.contentHash}> More...</Link></Button>
          </Card>
        );
      })}
    </CardWrapper>
  );
};
