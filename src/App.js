import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer'
import AboutUs from './components/about/about';
import Menu from './components/menu/menu'
// import OurServices from './components/ourServices/ourServices';
// import Contacts from './components/contacts/contacts';

import './App.css';
import './components/header/header.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/our-services" element={<OurServices />} />
          <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
