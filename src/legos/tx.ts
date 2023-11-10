import { APP_CONTRACT } from "./contracts";

export const APP_TX = {
    MINT_POST: {
        id: 'mint_post',
        contract: APP_CONTRACT.WORDSMITH_POST,
        method: 'post',
        disablePoll: true,
        args: [
          ".formValues.contentHash",
          {
            type: "JSONDetails",
            jsonSchema: {
              title: ".formValues.pubTitle",
              description: ".formValues.pubDescription",
              contentURI: ".formValues.link",
              contentURIType: { type: "static", value: "url" },
            },
          },
        ],
      }
}