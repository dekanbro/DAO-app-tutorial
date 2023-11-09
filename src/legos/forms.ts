import { CustomFormLego } from "./legoConfig";

export const APP_FORM: Record<string, CustomFormLego> = {
  TEST_FORM: {
    id: "TEST_FORM",
    title: "Super Signal Form",
    subtitle: "Super Signal Proposal",
    description: "Ratify on-chain using a DAO proposal.",
    requiredFields: { title: true, description: true, testField: true },
    log: true,
    // tx: APP_TX.TEST_TX,
    fields: [
      {
        id: "pubTitle",
        type: "input",
        placeholder: "pubtitle",
        label: "Publication Title",
      },
      {
        id: "pubDescription",
        type: "textarea",
        placeholder: "pubDescription",
        label: "Publication Description",
      },
      {
        id: "amount",
        type: "toWeiInput",
        placeholder: "amount",
        label: "Amount",
      },
      {
        id: "testField",
        type: "csInput",
        placeholder: "testField",
        label: "Test Field",
        itemNoun: {
            singular: 'tag',
            plural: 'tags'
          },
      },
    ],
  },
};
