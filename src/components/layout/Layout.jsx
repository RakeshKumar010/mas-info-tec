import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../container/Home";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import About from "../home/About";
import Services from "../home/Services";
const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
