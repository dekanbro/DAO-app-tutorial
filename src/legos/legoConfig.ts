import { MolochFields } from "@daohaus/moloch-v3-fields";
import { FieldLegoBase, FormLegoBase } from "@daohaus/utils";

export const AppFieldLookup = {
  ...MolochFields,
};

export type CustomFieldLego = FieldLegoBase<typeof AppFieldLookup>;
export type CustomFormLego = FormLegoBase<typeof AppFieldLookup>;
