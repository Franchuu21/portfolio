import React from "react";
import "../styles.css";
import { Link, Outlet } from "react-router-dom";


export default function Nav(){

  return(
   <React.Fragment>
        <div className="navbar">
           <ul className="nav-links">
            <Link to="/">Home</Link>
              <Link to="/creaciones">Mis Creaciones</Link>
              <Link to="/favoritos">Favoritos</Link>
              <Link to="/aboutus">Acerca de mi</Link>
           </ul>
        </div>
        <Outlet />
    </React.Fragment>
  );

}