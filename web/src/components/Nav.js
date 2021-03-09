import React from "react";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <nav className="topnav">
      <Link to="#home" class="active">
        Home
      </Link>
      <Link to="#news">News</Link>
      <Link to="#contact">Contact</Link>
      <div class="dropdown">
        <button class="dropbtn">
          Dropdown
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <Link to="#">Link 1</Link>
          <Link to="#">Link 2</Link>
          <Link to="#">Link 3</Link>
        </div>
      </div>
      <Link to="#about">About</Link>
      <Link to="javascript:void(0);" class="icon" onclick="myFunction()">
        &#9776;
      </Link>
    </nav>
  );
};

export default Nav;
