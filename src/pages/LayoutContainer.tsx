import { DHLayout, useDHConnect } from "@daohaus/connect";

import { Outlet, useLocation } from "react-router-dom";

import { TXBuilder } from "@daohaus/tx-builder";
import { TARGET_DAO } from "../targetDao";


export const LayoutContainer = () => {
  const location = useLocation();
  const { publicClient, address } = useDHConnect();


  return (

      <DHLayout navLinks={[
        { label: "Home", href: `/` },
        { label: "List", href: `/list` },
      ]} pathname={location.pathname}>
        <TXBuilder
          publicClient={publicClient}
          chainId={TARGET_DAO.CHAIN_ID}
          daoId={TARGET_DAO.DAO_ADDRESS}
          safeId={TARGET_DAO.SAFE_ADDRESS}
          appState={{ memberAddress: address }}
        >
          <Outlet />
        </TXBuilder>
      </DHLayout>

  );
};
