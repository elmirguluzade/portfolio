/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import "./Nav.scss";

const Nav = () => {
  const header = useRef();
  const [hamOpened, setHamOpened] = useState(false);
  const menu = useRef();

  const changeNavbarColor = () => {
    window.scrollY > 0
      ? header.current.classList.add("fixed")
      : header.current.classList.remove("fixed");
  };
  window.addEventListener("scroll", changeNavbarColor);

  useEffect(() => {
    const burgerClick = (e) => {
      setTimeout(() => {
        if (menu.current.className === "active" && e.target.tagName !== "svg" && e.target.tagName !== "path") {
          menu.current.classList.add("hide");
          setHamOpened(false);
        }
      }, 300);
    };
    window.addEventListener("click", burgerClick);
  }, [menu]);

  return (
    <div>
      <header ref={header}>
        <nav>
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <div className="links">
            <ul className={hamOpened ? "active" : "hide"} ref={menu}>
              <li>
                <AnchorLink href="#about">About</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#skills">Skills</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#projects">Projects</AnchorLink>
              </li>
              <div className="mob">
                <li>
                  <a
                    href="https://github.com/elmirguluzade"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
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
                <AnchorLink href="#contact" className="contact">
                  Contact me
                </AnchorLink>
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
            <AnchorLink href="#contact" className="contact">
              Contact me
            </AnchorLink>
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
