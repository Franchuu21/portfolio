import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/components/Home';
import AboutUs from '../src/components/AboutUs';
import MyCreations from '../src/components/MyCreations';
import Favorites from '../src/components/Favorites';

function App() {
  return (
    <React.Fragment>
      <Header />
      
        <div className="navbar">
           <ul className="nav-links">
              <Link to="/">Puntos Verdes</Link>
              <Link to="/Header">Más Información</Link>
           </ul>
        </div>
        <Outlet />
        <Footer />
    </React.Fragment>
      
  );
}

export default App;
