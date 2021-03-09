import React from "react";
import "../styles/styles.scss";

//Import Components
import SEO from "../components/SEO";
import Header from "../components/header";
import Footer from "../components/footer";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdPhone } from "@react-icons/all-files/md/MdPhone";
import { AiOutlineInstagram } from "@react-icons/all-files/Ai/AiOutlineInstagram";
import { IconContext } from "@react-icons/all-files";

const ContactPage = () => (
  <>
    <SEO title="Contact"></SEO>
    <Header></Header>
    <div className="container">
      <div className="contact">
        <div>
          <h3>Contact</h3>
        </div>
        <div className="contact-content">
          <ul>
            <IconContext.Provider value={{ style: { verticalAlign: "-10%" } }}>
              <li>
                <a href="mailto:lorijoeart@gmail.com">
                  <span className="icon">
                    <MdEmail />
                  </span>{" "}
                  lorijoeart@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+12504278092">
                  <span className="icon">
                    <MdPhone />
                  </span>{" "}
                  250.427.8092
                </a>
              </li>
              <li>
                <a
                  href="http://www.instagram.com/lorijoeart/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <AiOutlineInstagram />
                  </span>{" "}
                  @lorijoeart
                </a>
              </li>
            </IconContext.Provider>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </>
);

export default ContactPage;
