import "./App.css";

import { Route, Routes } from "react-router-dom";
import Store from "./Components/Storepage/Store";
import About from "./Components/About/About";
import Home from "./Components/HomePage/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
