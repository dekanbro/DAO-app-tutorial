
import { CustomFieldLego } from "./legoConfig";


export const APP_FIELD: Record<string, CustomFieldLego> = {
  TITLE_FIELD:  {
    id: "pubTitle",
    type: "input",
    placeholder: "pubtitle",
    label: "Publication Title",
  },
  DESC_FIELD: {
    id: "pubDescription",
    type: "textarea",
    placeholder: "pubDescription",
    label: "Publication Description",
  },
  AMOUNT_FIELD:  {
    id: "amount",
    type: "toWeiInput",
    placeholder: "amount",
    label: "Amount",
  },
  LINK_FIELD:  {
    id: "link",
    type: "input",
    placeholder: "http://",
    label: "External Link",
  },
  IMAGE_FIELD:  {
    id: "image",
    type: "input",
    placeholder: "http://",
    label: "Image Header Link",
  },
  TAGS_FIELD: {
    id: "testField",
    type: "csInput",
    placeholder: "testField",
    label: "Test Field",
    itemNoun: {
        singular: 'tag',
        plural: 'tags'
      },
  },
  CONTENTHASH_FIELD: {
    id: 'contentHash',
    type: 'contentHash',
  },
};
