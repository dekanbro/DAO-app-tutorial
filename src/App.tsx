import { DHConnectProvider } from "@daohaus/connect";
import { TARGET_DAO } from "./targetDao";
import { Routes } from "./Routes";


function App() {
  
  return (
    <DHConnectProvider daoChainId={TARGET_DAO.CHAIN_ID}>
      <Routes />
    </DHConnectProvider>
  );
}

export default App;