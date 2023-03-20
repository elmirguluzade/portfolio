import React, { useState } from "react";
import "./Nav.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Nav = () => {
  const [hamOpened, setHamOpened] = useState(false);

  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <div className="links">
            <ul className={hamOpened ? "active" : "hide"}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Skills</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <div className="mob">
                <li>
                  <a href="https://github.com/elmirguluzade" target={"_blank"} rel={"noreferrer"}>
                    <AiFillGithub />
                    <p>Github</p>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <AiFillLinkedin />
                    <p>Linkedin</p>
                  </a>
                </li>
                <a href="/" className="contact">
                  Contact me
                </a>
              </div>
            </ul>
          </div>
          <div className="networks d-flex">
            <ul>
              <li>
                <a
                  href="https://github.com/elmirguluzade"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillLinkedin />
                </a>
              </li>
            </ul>
            <a href="/" className="contact">
              Contact me
            </a>
          </div>
          <div className="hammenu" onClick={() => setHamOpened(!hamOpened)}>
            {!hamOpened ? <RxHamburgerMenu /> : <RxCross1 />}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
