import "./App.css";

import { Route, Routes } from "react-router-dom";
import Store from "./Components/Storepage/Store";
import About from "./Components/About/About";
import Home from "./Components/HomePage/Home";
import ContactUsPage from "./Components/ContactUs/ContactUsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
