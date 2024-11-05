
import "./Styles/Navbar.css";
import CartWidget from "./CartWidget";

import { NavLink } from "react-router-dom";


const Navbar = () => {
  
  return (
  <>
    <header className="header">
        {/* links de navegación */}
        <nav>
           {/* <a href="/" className="logo1"><h1>Shoppin</h1></a>*/}
          <ul className="nav-container">
            <li><NavLink className="menu-link" to={"/"}>Home</NavLink ></li>
            <li><NavLink className="menu-link" to={"/productos/Aventura"}>Aventura</NavLink  ></li>
            <li><NavLink className="menu-link" to={"/productos/Drama"}>Drama</NavLink ></li>
            <li><NavLink className="menu-link" to={"/productos/Comedia"} >Comedia</NavLink ></li>
            <li><NavLink className="menu-link" to={"/productos/Romance"}>Romance</NavLink ></li>
            <li><NavLink className="menu-link" to={"/contacto"}>Contacto</NavLink></li>
            <li>< CartWidget /></li>
          </ul>
          
        </nav>
        
    </header>

  </>
  );//termina render
};

export default Navbar;