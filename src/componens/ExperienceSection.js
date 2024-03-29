import arrowImage from "./assets/arrow.png";
import "./style.css";
import data from "./data.json";
function ExperienceSection() {
  return (
    <div>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <div className="article-container">
                <article>
                  <div>
                    {data.user.skills.map((skill, index) => (
                      <img
                        src={skill.image.url}
                        width="50px"
                        height={50}
                        alt="Skill Icon"
                        className="skill-icon"
                      />
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrowImage}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "./#projects")}
        />
      </section>
    </div>
  );
}

export default ExperienceSection;
