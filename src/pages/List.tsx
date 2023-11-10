import { useDHConnect } from "@daohaus/connect";

import { SingleColumnLayout } from "@daohaus/ui";
// import styled from "styled-components";
import { TARGET_DAO } from "../targetDao";

import { useRecords } from "../hooks/useRecords";

export const List = () => {
  const { publicClient, address } = useDHConnect();
  console.log("address", address);
  console.log("publicClient", publicClient);
  const { records } = useRecords({
    daoId: TARGET_DAO.DAO_ADDRESS,
    chainId: TARGET_DAO.CHAIN_ID,
    recordType: "crazyPub",
  });
  console.log("records", records);
  return (
    <SingleColumnLayout>
      {records?.map((record) => {
        return record?.content;
      })}
    </SingleColumnLayout>
  );
};
