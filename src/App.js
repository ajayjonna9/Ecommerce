import "./App.css";
import Header from "./Components/Header/Header";
import ItemDetails from "./Components/Items/ItemDetails";
import ContexProvider from "./Components/Store/ContexProvider";

function App() {
  return (
    <>
      <ContexProvider>
        <Header />

        <ItemDetails />
      </ContexProvider>
    </>
  );
}

export default App;
