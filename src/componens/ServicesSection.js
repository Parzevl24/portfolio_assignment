import React from "react";
import data from "./data.json";
import arrowImage from "./assets/arrow.png";
import "./style.css";

function ServiceSection() {
  return (
    <div>
      <section id="services">
        <p className="section__text__p1">Browse My </p>
        <h1 className="title">Services</h1>
        <div></div>
        <div className="projects-container">
          <div className="project-items">
            {data.user.services.map((service, index) => (
              <div key={index} className="project-item">
                <div className="details-container color-container">
                  <div className="article-container">
                    <img
                      src={service.image.url}
                      alt="project"
                      className="project-img"
                      style={{
                        height: 200,
                        width: 200
                      }}
                    />
                  </div>
                  <h3 className="experience-sub-title project-title">
                    {service.name}
                  </h3>
                  <div className="btn-container">
                    <button
                      className="btn btn-color-2 project-btn"
                      onClick="#"
                    >
                      {service.charge}
                    </button>
                    <div>
                        <p className="service-desc">{service.desc}</p>
                    </div>
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
          onClick={() => (window.location.href = "./#experience")}
        />
      </section>
    </div>
  );
}

export default ServiceSection;
