import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Header from "./Header";
import Footer from "./Footer";
import Project from "../pages/Project";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <section name="home">
          <Home />
        </section>

        <section name="about">
          <About />
        </section>

        <section name="project" id="project">
          <Project />
        </section>

        <section name="contact">
          <Contact />
        </section>
          <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
