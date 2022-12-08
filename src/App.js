import "./App.css";

import { Route, Routes } from "react-router-dom";
import Store from "./Components/Storepage/Store";
import About from "./Components/About/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
