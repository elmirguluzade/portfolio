import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.scss";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 570 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 570, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="skills">
      <div className="skills">
        <h2>Skills</h2>
        <p>
          I can make websites using ExpressJS for Back-End, ReactJS for Front-End and MongoDB for storing data.
        </p>
        <Carousel
          responsive={responsive}
          infinite={true}
          className="skills-slider"
        >
          <div className="item">
            <img src={meter1} alt="skill" />
            <h5>HTML/CSS/SCSS</h5>
          </div>
          <div className="item">
            <img src={meter3} alt="skill" />
            <h5>Javascript</h5>
          </div>
          <div className="item">
            <img src={meter3} alt="skill" />
            <h5>React</h5>
          </div>
          <div className="item">
            <img src={meter3} alt="skill" />
            <h5>Bootstrap / TailwindCSS</h5>
          </div>
          <div className="item">
            <img src={meter2} alt="skill" />
            <h5>Typescript</h5>
          </div>
          <div className="item">
            <img src={meter3} alt="skill" />
            <h5>NodeJS (ExpressJS)</h5>
          </div>
          <div className="item">
            <img src={meter3} alt="skill" />
            <h5>MongoDB</h5>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;
