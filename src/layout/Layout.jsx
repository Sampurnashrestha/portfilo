import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Header from './Header'
import Project from '../pages/Project'
import ProductDetail from '../pages/productDetail'
import ScrollSection from '../coponents/ScrollSection'


const Layout = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <section name="home">
        <Home />
      </section>
        
       <section name="about">
        <ScrollSection>
        <About />
        </ScrollSection>
      </section>

      <section name="project" id='project'>
        <ScrollSection>
        <Project />
        </ScrollSection>
      </section>

      <section name="contact">
        <ScrollSection>
        <Contact />
        </ScrollSection>
      </section>
      {/* <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/product' element={<Contact />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes> */}
      </BrowserRouter>
    </div>
  )
}

export default Layout
