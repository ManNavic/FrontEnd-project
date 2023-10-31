import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './../src/components/header/header';
import Main from './../src/components/main/main';
import Login from './../src/components/Login/Login';
import './App.css';
import AboutUs from './../src/components/about/about'
import Menu from './../src/components/menu/menu'
import Footer from './../src/components/footer/footer'
import Wedding from './components/wedding-qoute/wedding';
import Event from './components/event-qoute/event';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/menu" element={<Menu userLoggedIn={isLoggedIn} />} />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/event" element={<Event />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
