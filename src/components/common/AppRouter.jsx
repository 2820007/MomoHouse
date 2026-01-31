import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../../pages/Home";
import About from "../../pages/About";
import Contact from "./../../pages/Contact";
import Login from "./../../pages/Login";
import Register from "./../../pages/Register";
import Profile from "./../../pages/Profile";
import PageNotFound from "./PageNotFound";
import Services from "../../pages/Services";
import Allergy from './../../pages/Allergy';
import Menu from './../../pages/Menu';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allergy" element={<Allergy/>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
