import { useDHConnect } from "@daohaus/connect";

import { FormBuilder } from "@daohaus/form-builder";
// import { useLocation } from "react-router-dom";

import { SingleColumnLayout } from "@daohaus/ui";
import { APP_FORM } from "../legos/forms";
import { AppFieldLookup } from "../legos/legoConfig";

export const Home = () => {
  const { publicClient, address } = useDHConnect();
  console.log("address", address);
  console.log("publicClient", publicClient);

  return (
    <SingleColumnLayout>


      <FormBuilder form={APP_FORM.NEW_POST} customFields={AppFieldLookup} />
    </SingleColumnLayout>
  );
};
