import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import logoImage from "../../Images/llogo.png";

import "./header.css";
import { useState } from "react";
import { axiosGetSearch, getAllMovies } from "../../../REDUX/Actions/MovieAction";
import { useDispatch } from "react-redux";
import { Navbar } from "react-bootstrap";


function Header() {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);



  const onSearch = (word) => {
    search(word)

  }
  

  // ==== To Search API ==== //
  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovies());
    } else {
      dispatch(axiosGetSearch(word))
    }
  };




  return (
    <Navbar fixed="top" className="navbars">
      <nav className="containers">
        <Link className="logo" to="/">
          <img className="logo-img" src={logoImage} alt="" />
          <p className="logo-title">Movie Night</p>
        </Link>

        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon className="menu-icon" />
        </div>

        <ul className={menuOpen ? "menuOpen" : "open"}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/services">Services</NavLink>
            
          </li>


          <div className="search-box">
            <input 
                type="search" 
                placeholder="Search Here..." 
                onChange={(e) => onSearch(e.target.value)}
            />
            <div className="btn-btn">
               <SearchIcon className="search-icon"/>
            </div>
          </div>


        </ul>
       
      </nav>
    </Navbar>
  );
}

export default Header;
