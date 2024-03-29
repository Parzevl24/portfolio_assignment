import "./style.css";
import linkedinImage from "./assets/linkedin.png";
import githubImage from "./assets/github.png";
import data from "./data.json";
function ProfileSection() {
  return (
    <div>
      <section id="profile">
        <div class="section__pic-container">
          <img
            src={data.user.about.avatar.url}
            style={{ borderRadius: "50%" }}
            alt="profilepic"
          ></img>
        </div>
        <div class="section__text">
          <p class="section__text__p1">Hello I'm</p>
          <h1 class="title"> {data.user.about.name}</h1>
          <p class="section__text__p2"> {data.user.about.title}</p>
          <div class="btn-container">
            <button className="btn btn-color-2" onClick="#">
              Download cv
            </button>
            <button
              class="btn btn-color-1"
              onClick={() => (window.location.href = "./#contact")}
            >
              contact info{" "}
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedinImage}
              alt="my linkedin profile"
              class="icon"
            ></img>
            <img src={githubImage} alt="my github profile" class="icon"></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileSection;
