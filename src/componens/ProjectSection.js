import React from "react";
import data from "./data.json";
import arrowImage from "./assets/arrow.png";
import "./style.css";

function ProjectSection() {
  return (
    <div>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div></div>
        <div className="projects-container">
          <div className="project-items">
            {data.user.projects.map((project, index) => (
              <div key={index} className="project-item">
                <div className="details-container color-container">
                  <div className="article-container">
                    <img
                      src={project.image.url}
                      alt="project"
                      className="project-img"
                    />
                  </div>
                  <h2 className="experience-sub-title project-title">
                    {project.title}
                  </h2>
                  <div className="btn-container">
                    <button
                      className="btn btn-color-2 project-btn"
                      onClick={() => (window.location.href = project.github)}
                    >
                      github
                    </button>
                    <button
                      className="btn btn-color-2 project-btn"
                      onClick={() => (window.location.href = project.liveurl)}
                    >
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={arrowImage}
          alt="Arrow icon "
          className="icon arrow"
          onClick={() => (window.location.href = "./#contact")}
        />
      </section>
    </div>
  );
}

export default ProjectSection;
