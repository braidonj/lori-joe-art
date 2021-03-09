import React from "react";
import { Link } from "gatsby";
import { AiOutlineInstagram } from "@react-icons/all-files/Ai/AiOutlineInstagram";
import { IconContext } from "@react-icons/all-files";

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">Lori Joe Art</Link>
        </div>
        <div className="navigation">
          <nav>
            <span className="dropdown">
              <Link className="dropdown-button" to="/galleries/">
                Galleries
              </Link>
              <div className="dropdown-content">
                <Link to="/kl-gallery/">Kootenay Life</Link>
                <Link to="/mmh-gallery/">Mickey Mouse Houses</Link>
                <Link to="/can-gallery/">Canadiana</Link>
                <Link to="/dog-gallery/">Dogs</Link>
              </div>
            </span>
            <Link to="/shop/">Shop</Link>
            <Link to="/about/">About</Link>
            <Link to="/contact/">Contact</Link>
            <a
              href="http://www.instagram.com/lorijoeart/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconContext.Provider
                value={{ style: { verticalAlign: "-20%", fontSize: "1.65em" } }}
              >
                <AiOutlineInstagram />
              </IconContext.Provider>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
