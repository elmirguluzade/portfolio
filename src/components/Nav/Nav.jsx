import React from "react";
import './Nav.scss'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Nav = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Skills</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
            </ul>
          </div>
          <div class="networks d-flex">
            <ul>
              <li>
                <a href="/"><AiFillGithub /></a>
              </li>
              <li>
                <a href="/"><AiFillLinkedin /></a>
              </li>
            </ul>
            <button>Contact me</button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
