import React from "react";
import { Link } from "gatsby";
import HomeHelmet from "../components/homeHelmet";
import SEO from "../components/SEO";
import "../styles/styles.scss";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { IconContext } from "@react-icons/all-files";

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <HomeHelmet></HomeHelmet>
      <div className="home">
        <div className="home-nav">
          <h1>Lori Joe Art</h1>
          <ul>
            <li>
              <Link to="/galleries/">Galleries</Link>
            </li>
            <li>
              <Link to="/shop/">Shop</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
            <li>
              <a
                href="http://www.instagram.com/lorijoeart/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider
                  value={{ style: { verticalAlign: "middle" } }}
                >
                  <AiOutlineInstagram />
                </IconContext.Provider>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
