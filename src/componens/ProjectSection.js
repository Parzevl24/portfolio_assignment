import "./style.css";
import arrowImage from "./assets/arrow.png";
import projectImage_1 from "./assets/proj-1.png";
import projectImage_2 from "./assets/proj-2.png";
import projectImage_3 from "./assets/project-1.png";
function ProjectSection() {
  return (
    <div>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={projectImage_1}
                  alt="project"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project one
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (window.location.href = "https://github.com/Parzevl24/Colour-Picker-react-.git")
                  }
                >
                  github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (window.location.href = "https://colour-picker-react-wheat.vercel.app/")
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={projectImage_2}
                  alt="project"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Two
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (window.location.href = "https://github.com/Parzevl24/Calculator-react-.git")
                  }
                >
                  github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (window.location.href = "https://word-counter-react-s3dz.vercel.app/")
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={projectImage_3}
                  alt="project"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Three
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (window.location.href = "https://www.github.com")
                  }
                >
                  github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    (window.location.href = "https://www.github.com")
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrowImage}
          alt="Arrow icon "
          className="icon arrow"
          onClick={() => (window.location.href = "./#experience")}
        />
      </section>
    </div>
  );
}

export default ProjectSection;
