import { DHLayout, useDHConnect } from "@daohaus/connect";
import { TXBuilder } from "@daohaus/tx-builder";
import { FormBuilder } from "@daohaus/form-builder";
// import { useLocation } from "react-router-dom";

import { SingleColumnLayout } from "@daohaus/ui";
import { TARGET_DAO } from "../targetDao";
import { ExampleComponent } from "../components/ExampleComponent";
import { APP_FORM } from "../legos/forms";
import { AppFieldLookup } from "../legos/legoConfig";



export const Home = () => {
    const { publicClient, address } = useDHConnect();
    console.log("address", address);
    console.log("publicClient", publicClient)
  return (
    <DHLayout navLinks={[]} pathname={"/"}>
        <SingleColumnLayout>
        <TXBuilder
          publicClient={publicClient}
          chainId={TARGET_DAO.CHAIN_ID}
          appState={{ memberAddress: address }}
        >
          <>
            <ExampleComponent />

            <FormBuilder
              form={APP_FORM.NEW_POST}
              customFields={AppFieldLookup}
            />
          </>
        </TXBuilder>
        </SingleColumnLayout>
      </DHLayout>
  );
};
