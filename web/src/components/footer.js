import React from "react";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="inner-footer">
        <p>
          Copyright &copy; Lori Joe Art {new Date().getFullYear()}. All Rights
          Reserved. Developed by{" "}
          <a href="mailto:braidon.joe@gmail.com">Braidon Joe</a>.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
