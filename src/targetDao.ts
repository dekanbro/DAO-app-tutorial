import { ValidNetwork } from "@daohaus/keychain-utils";
import { EthAddress } from "@daohaus/utils";

export const TARGET_DAO: {
  CHAIN_ID: ValidNetwork;
  NFT_ADDRESS: EthAddress;
  DAO_ADDRESS: EthAddress;
  SAFE_ADDRESS: EthAddress;
  NFT_PRICE: string;
} = {
  CHAIN_ID: "0x5", // 0xa
  NFT_ADDRESS: "0x9032d948F4672370B4B0ED2002fFb1122B3676B1",
  DAO_ADDRESS: "0x79627fc796c2e61e4d23d3635a512f0068f65b58",
  SAFE_ADDRESS: "0xe2770a17525c78dd27f386831ff922d82762b851",
  NFT_PRICE: "420000000000000"
};
