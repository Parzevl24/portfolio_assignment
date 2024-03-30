import "./style.css";
import "./mediaqueries.css";
import data from "./data.json";
function Nav() {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };
  return (
    <div>
      <nav id="desktop-nav">
        <div class="logo"> {data.user.about.name} </div>
        <div>
          <ul class="nav-links">
            <li>
              <a href="#about"> About </a>
            </li>
            <li>
              <a href="#services"> Services </a>
            </li>
            <li>
              <a href="#experience"> Experience</a>
            </li>
            <li>
              <a href="#projects"> Projects</a>
            </li>
            <li>
              <a href="#timeline"> Timeline</a>
            </li>
            <li>
              <a href="#testimonials"> Testimonials</a>
            </li>
            <li>
              <a href="#contact"> Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div class="logo"> {data.user.about.name}</div>
        <div class="hamburger-menu">
          <div class="hamburger-icon" onClick={() => toggleMenu()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu-links">
            <li>
              <a href="#about" onClick={() => toggleMenu()}>
                {" "}
                About{" "}
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => toggleMenu()}>
                {" "}
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => toggleMenu()}>
                {" "}
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => toggleMenu()}>
                {" "}
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
