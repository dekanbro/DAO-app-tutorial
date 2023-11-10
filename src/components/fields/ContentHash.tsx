import { Buildable,  ParMd } from "@daohaus/ui";
import { useDHConnect } from "@daohaus/connect";

import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { hashMessage } from 'viem';


export const ContentHashField = (props: Buildable<object>) => {
  const { watch, setValue } = useFormContext();
  const { address } = useDHConnect();

  const [title, description, link] = watch([
    "pubTitle",
    "pubDescription",
    "link",
  ]);

  const [errorText, setErrorText] = useState<string | null>(null);

  useEffect(() => {

    if (!title || !description) {
      return;
    }

    console.log("vaules", JSON.stringify({ title, description, link, address }));

    setErrorText(null);
    setValue(
      props.id,
      hashMessage(JSON.stringify({ title, description, link, address }))
    );
  }, [title, description, link, address]);

  if (!errorText) {
    return null;
  }

  return <ParMd style={{ color: "red" }}>{errorText}</ParMd>;
};
