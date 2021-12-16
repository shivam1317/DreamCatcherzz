import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Faq from "./components/Faq";
import Enquiry from "./components/Enquiry";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
