
import { FieldLegoBase, FormLegoBase } from "@daohaus/utils";
import { MarkdownField } from "../components/fields/MarkDownField";
import { CoreFieldLookup } from "@daohaus/form-builder";
import { ContentHashField } from "../components/fields/ContentHash";

export const AppFieldLookup = {
    ...CoreFieldLookup,
    markdownField: MarkdownField,
    contentHash: ContentHashField,
};

export type CustomFieldLego = FieldLegoBase<typeof AppFieldLookup>;
export type CustomFormLego = FormLegoBase<typeof AppFieldLookup>;
