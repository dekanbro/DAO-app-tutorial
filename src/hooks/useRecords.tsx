import { useQuery } from "react-query";

import { ValidNetwork, Keychain } from "@daohaus/keychain-utils";
import { listRecords } from "@daohaus/moloch-v3-data";
import { handleErrorMessage } from "@daohaus/utils";

const defaultGraphApiKeys = {
  "0x1": import.meta.env.VITE_GRAPH_API_KEY_MAINNET,
  "0x64": import.meta.env.VITE_GRAPH_API_KEY_MAINNET,
};

type Record = {
  id: string;
  createdAt: string;
  createdBy: string;
  tag: string;
  table: string;
  contentType: string;
  content: string;
  queryType: string;
  dao: {
    id: string;
  };
  parsedContent: {
    daoId: string;
    table: string;
    queryType: string;
    title: string;
    description: string;
    contentURI: string;
    contentURIType: string;
    imageURI: string;
    imageURIType: string;
    contentHash: string;
  };
};



const fetchRecords = async ({
  daoId,
  chainId,
  recordType,
  hash,
  pageSize,
  offset,
  graphApiKeys,
}: {
  daoId: string;
  chainId: ValidNetwork;
  recordType: string;
  hash?: string;
  pageSize: number;
  offset: number;
  graphApiKeys: Keychain;
}) => {
  try {
    const data = await listRecords({
      networkId: chainId,
      graphApiKeys: graphApiKeys,
      filter: { dao: daoId, table: recordType },
      paging: { pageSize, offset },
    });

    console.log('items', data.items);
    

    if (hash) {
      return data.items.filter(
        (item) => (item as Record)?.parsedContent?.contentHash === hash
      );
    }

    return data.items;
  } catch (error) {
    console.error(error);
    throw new Error(
      handleErrorMessage({ error, fallback: "Error fetching records" })
    );
  }
};

export const useRecords = ({
  daoId,
  chainId,
  recordType,
  hash,
  pageSize = 500,
  offset = 0,
  graphApiKeys = defaultGraphApiKeys,
}: {
  daoId: string;
  chainId: ValidNetwork;
  recordType: string;
  hash?: string;
  pageSize?: number;
  offset?: number;
  graphApiKeys?: Keychain;
}) => {
  const { data, error, ...rest } = useQuery(
    [`${daoId}_${recordType}_${hash || ""}`, { daoId, chainId }],
    () =>
      fetchRecords({
        daoId,
        chainId: chainId as ValidNetwork,
        recordType,
        hash,
        pageSize,
        offset,
        graphApiKeys,
      }),
    { enabled: !!daoId && !!chainId }
  );

  return { records: data, error: error as Error | null, ...rest };
};