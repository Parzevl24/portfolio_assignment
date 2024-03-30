import arrowImage from "./assets/arrow.png";
import "./style.css";
import data from "./data.json";

function EducationSection() {
  return (
    <div>
      <section id="timeline">
        <p className="section__text__p1"> Get to Know More</p>
        <h1 className="title" style={{ marginBottom: "150px" }}>
          {" "}
          Timeline{" "}
        </h1>
        <div className="section-container">
          <div className="about-details-container" >
            <div className="about-containers" >
              <div className="details-container">
                <h1>
                  <b>Education</b>
                </h1>
                {data.user.timeline
                  .filter((tl) => tl.forEducation === true)
                  .map((tl, index) => (
                    <>
                      <p>
                        {" "}
                        <h2>{tl.jobTitle}</h2>
                      </p>
                      <p> {tl.bulletPoints}</p>
                    </>
                  ))}
              </div>
            </div>
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <h1>
                  <b>Experience</b>
                </h1>
                {data.user.timeline
                  .filter((tl) => tl.forEducation === false)
                  .map((tl, index) => (
                    <>
                      <p>
                        {" "}
                        <h2>{tl.jobTitle}</h2>
                      </p>
                      <p> {tl.bulletPoints}</p>
                    </>
                  ))}
              </div>
            </div>
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

export default EducationSection;
