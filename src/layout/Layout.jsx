import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Header from "./Header";
import Footer from "./Footer";
import Project from "../pages/Project";
import PreLoader from "./Preloader";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 1200);
  },[])
  if(loading) return <PreLoader />
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
