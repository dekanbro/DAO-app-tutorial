import { ContractLego } from "@daohaus/utils";
import wordSmithNFTAbi from "../abis/WordSmithNFT.json";
import { TARGET_DAO } from "../targetDao";

export const APP_CONTRACT: Record<string, ContractLego> = {
    WORDSMITH_POST: {
      type: "static",
      contractName: "WORDSMITH_POST",
      abi: wordSmithNFTAbi,
      targetAddress: TARGET_DAO.NFT_ADDRESS,
    },
  };
  