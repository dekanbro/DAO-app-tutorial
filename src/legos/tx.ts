import { buildMultiCallTX } from "@daohaus/tx-builder";
import { APP_CONTRACT } from "./contracts";
import { TARGET_DAO } from "../targetDao";

export enum ProposalTypeIds {
    Signal = "SIGNAL",
    IssueSharesLoot = "ISSUE",
    AddShaman = "ADD_SHAMAN",
    TransferErc20 = "TRANSFER_ERC20",
    TransferNetworkToken = "TRANSFER_NETWORK_TOKEN",
    UpdateGovSettings = "UPDATE_GOV_SETTINGS",
    UpdateTokenSettings = "TOKEN_SETTINGS",
    TokensForShares = "TOKENS_FOR_SHARES",
    GuildKick = "GUILDKICK",
    WalletConnect = "WALLETCONNECT",
  }

export const APP_TX = {
    COLLECT: {
        id: "COLLECT",
        contract: APP_CONTRACT.WORDSMITH_POST,
        method: 'collect',
        args: [
          ".postId"
        ],
        disablePoll: true,
        staticOverrides: {
          value: TARGET_DAO.NFT_PRICE,
        }
      },
    MINT_POST: buildMultiCallTX({
        id: "MINT_PROPOSAL",
    JSONDetails: {
      type: "JSONDetails",
      jsonSchema: {
        title: `.formValues.pubTitle`,
        description: `.formValues.pubDescription`,
        contentURI: `.formValues.link`,
        contentURIType: { type: "static", value: "url" },
        proposalType: { type: "static", value: ProposalTypeIds.Signal },
      },
    },
    actions: [{
        contract: APP_CONTRACT.WORDSMITH_POST,
        method: 'post',
        args: [
          ".memberAddress",
          ".formValues.contentHash",
          {
            type: "JSONDetails",
            jsonSchema: {
              daoId: { type: 'static', value: TARGET_DAO.DAO_ADDRESS},
              table: { type: 'static', value: 'crazyPub' },
              queryType: { type: 'static', value: 'list' },
              title: ".formValues.pubTitle",
              description: ".formValues.pubDescription",
              contentURI: ".formValues.link",
              contentURIType: { type: "static", value: "url" },
              imageURI: ".formValues.image",
              imageURIType: { type: "static", value: "url" },
              contentHash: ".formValues.contentHash",
              authorAddress: ".memberAddress",
              parentId: { type: "static", value: 0 },
            },
          },
        ],
      }
    ],
    }),
}