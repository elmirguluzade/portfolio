/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import headerImg from "../../assets/img/header-img.svg";
import "./About.scss";

const About = () => {
  const nav = useRef()
  const rotate = ["Front-End Developer", "Back-End Developer"];
  const [text, setText] = useState("");
  const [rotateNum, setRotateNum] = useState(true);
  const [count, setCount] = useState(0);
  const [isExceed, setIsExceed] = useState(false);

  useEffect(() => {
    const tick = setInterval(() => {
      ticker();
    }, 100);
    return () => clearInterval(tick);
  }, [text]);

  const ticker = () => {
    if (count === rotate[rotateNum ? 0 : 1].length - 1) setIsExceed(true);
    if (count === 0) setIsExceed(false);
    if (isExceed && count !== 0) {
      setText(text.slice(0, -1));
      setCount(count - 1);
      if (count === 1) setRotateNum(!rotateNum);
    } else {
      setText(text + rotate[rotateNum ? 0 : 1][count]);
      setCount(count + 1);
    }
  };

  return (
    <section id="about" ref={nav}>
      <div className="about-content">
        <h1>Hi, I'm Elmir <br /> <span style={{color: "transparent", fontSize: "1px"}}>-</span>{text}</h1>
        <p>
          Are you looking for perfect website? Then you are in the right place.
          Get the results you are looking for and your work will be done in time
          with your requirements. I'm just a MERN Developer
          who wants to make useful products for people's daily life.
        </p>
      </div>
      <div className="about-image">
        <img src={headerImg} alt="header"/>
      </div>
    </section>
  );
};

export default About;
