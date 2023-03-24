import React from "react";
import "./Projects.scss";
import project1 from "../../assets/img/blog.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
  const responsive = {
    allScreen: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>
        I make websites for improving myself. You can check more on{" "}
        <a href="https://github.com/elmirguluzade">GitHub</a>.
      </p>
      <Carousel infinite={true} responsive={responsive}>
        <div className="project">
          <div className="project-photo">
            <img src={project1} alt="project1" />
          </div>
          <div>
            <p>
              This is the blog app which allows user to create and edit blog.
              For creating blog user needs to sign up. Then user can create blog
              and edit created blogs. If user forgets his/her password, then
              user can recover his/her password via email used when registering.
            </p>
            <p>
              Check source code:{" "}
              <a
                href="https://github.com/elmirguluzade/blog-mern-project"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
            </p>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Projects;
