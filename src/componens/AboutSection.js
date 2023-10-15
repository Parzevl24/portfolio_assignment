import ExperienceImage from './assets/experience.png'
import educationImage from './assets/education.png'
import arrowImage from './assets/arrow.png'
import './style.css'
import pfpImg2 from './assets/pfp11.jpg'
function AboutSection(){
    return(
        <div>
            <section id="about">
                <p className="section__text__p1"> Get to Know More</p>
                <h1 className="title"> About Me  </h1>
                <div className="section-container">
                    <div className="section__pic-container">
                        <img src={pfpImg2} alt="profile pic" className="about-pic"></img>
                    </div>
                    <div className="about-details-container">
                        <div className="about-containers">
                            <div className="details-container">
                                <img src={ExperienceImage} alt="Experience icon" className="icon"></img>
                                <h3>Experience</h3>
                                <p>2 months of experience in mern stack</p>
                            </div>
                            <div className="details-container">
                                <img src={educationImage} alt="education icon" className="icon"></img>
                                <h3>Education</h3>
                                <p> B.tech in Computer Science</p>
                            </div>
                        </div>
                        <div className="text-container">
                            <p>I'm a third-year student at Vellore Institute of Technology majoring in computer science. I'm a skilled graphic designer, and full stack developer with a passion for creating visually stunning designs that engage and resonate with my audience.I am constantly striving to expand my knowledge and expertise in the field of Tech. I'm good at programming in java and DSA and I'm a 4 star coder at hackerrank in java.</p>
                        </div>
                    </div>
                </div>
                <img src={arrowImage} alt="Arrow icon " className="icon arrow" onClick={() =>window.location.href='./#experience'}  />
            </section>
        </div>
    )
}

export default AboutSection;