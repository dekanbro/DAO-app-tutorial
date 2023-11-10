import { ValidNetwork } from "@daohaus/keychain-utils";
import { EthAddress } from "@daohaus/utils";

export const TARGET_DAO: {
  CHAIN_ID: ValidNetwork;
  NFT_ADDRESS: EthAddress;
  DAO_ADDRESS: EthAddress;
  SAFE_ADDRESS: EthAddress;
} = {
  CHAIN_ID: "0x5", // 0xa
  NFT_ADDRESS: "0x7b4A6772Fe09B5E3fa177BDF5791E8DBF268535f",
  DAO_ADDRESS: "0x5af8251405d0af2ac5b70d48c2ff1e4fe4e04fc4",
  SAFE_ADDRESS: "0xcda52c7d55af172feb74179e7c391e8dd4edd748",
};
