import ExperienceImage from './assets/experience.png'
import educationImage from './assets/education.png'
import arrowImage from './assets/arrow.png'
import './style.css'
import data from "./data.json";
function AboutSection(){
    return(
        <div>
            <section id="about">
                <p className="section__text__p1"> Get to Know More</p>
                <h1 className="title"> About Me  </h1>
                <div className="section-container">
                    <div className="section__pic-container">
                        <img src={data.user.about.alternateAvatars.url} alt="profile pic" className="about-pic"></img>
                    </div>
                    <div className="about-details-container">
                        <div className="about-containers">
                            <div className="details-container">
                                <img src={ExperienceImage} alt="Experience icon" className="icon"></img>
                                <h3>Experience</h3>
                                <p>5 years of experience in mern stack</p>
                            </div>
                            <div className="details-container">
                                <img src={educationImage} alt="education icon" className="icon"></img>
                                <h3>Quote</h3>
                                <p> {data.user.about.quote}</p>
                            </div>
                        </div>
                        <div className="text-container">
                        <p>{data.user.about.description}</p>
                        </div>
                    </div>
                </div>
                <img src={arrowImage} alt="Arrow icon " className="icon arrow" onClick={() =>window.location.href='./#services'}  />
            </section>
        </div>
    )
}

export default AboutSection;