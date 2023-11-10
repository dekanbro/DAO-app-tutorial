import { DHConnectProvider } from "@daohaus/connect";
import { Home } from "./pages/Home";
import { TARGET_DAO } from "./targetDao";


function App() {
  
  return (
    <DHConnectProvider daoChainId={TARGET_DAO.CHAIN_ID}>
      <Home />
    </DHConnectProvider>
  );
}

export default App;