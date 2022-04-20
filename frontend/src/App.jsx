import Header from "@components/Header";
import Home from "@pages/Home";
import Regles from "@pages/Regles";
import Contact from "@pages/Contact";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Regles" element={<Regles />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
