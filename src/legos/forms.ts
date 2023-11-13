import { APP_FIELD } from "./fields";
import { CustomFormLego } from "./legoConfig";
import { TXLego } from "@daohaus/utils";
import { APP_TX } from "./tx";

export const APP_FORM: Record<string, CustomFormLego> = {
  NEW_POST: {
    id: "NEW_POST",
    title: "Smith Form",
    subtitle: "Super WordSmith Proposal",
    description: "Ratify Smith on-chain using a DAO proposal.",
    requiredFields: { pubTitle: true, pubDescription: true },
    log: true,
    tx: APP_TX.MINT_POST as TXLego,
    fields: [
      APP_FIELD.IMAGE_FIELD,
      APP_FIELD.TITLE_FIELD,
      {...APP_FIELD.DESC_FIELD, type: "markdownField"},
      APP_FIELD.LINK_FIELD,
      APP_FIELD.CONTENTHASH_FIELD,
    ],
  },
};
