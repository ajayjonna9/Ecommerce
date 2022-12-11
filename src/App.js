import "./App.css";

import ContexProvider from "./Components/Store/ContexProvider";
import Routing from "./Routing";

function App() {
  return (
    <ContexProvider>
      <Routing />
    </ContexProvider>
  );
}

export default App;
