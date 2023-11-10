import { useDHConnect } from "@daohaus/connect";

import { FormBuilder } from "@daohaus/form-builder";
// import { useLocation } from "react-router-dom";

import { SingleColumnLayout } from "@daohaus/ui";
import { TARGET_DAO } from "../targetDao";
import { ExampleComponent } from "../components/ExampleComponent";
import { APP_FORM } from "../legos/forms";
import { AppFieldLookup } from "../legos/legoConfig";
import { useRecords } from "../hooks/useRecords";

export const Home = () => {
  const { publicClient, address } = useDHConnect();
  console.log("address", address);
  console.log("publicClient", publicClient);
  const { records } = useRecords({
    daoId: TARGET_DAO.DAO_ADDRESS,
    chainId: TARGET_DAO.CHAIN_ID,
    recordType: "crazyPub",
  });
  console.log("records", records);
  return (
    <SingleColumnLayout>
      <>
        <ExampleComponent />

        <FormBuilder form={APP_FORM.NEW_POST} customFields={AppFieldLookup} />
      </>
    </SingleColumnLayout>
  );
};
