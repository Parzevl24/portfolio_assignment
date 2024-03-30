import "./style.css";

function Footer() {
  return (
    <div>
      <footer>
        <nav className="nav-links-container" style={{marginTop: "50px"}}>
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
        </nav>
        <p>Made by Priyansu Kumar</p>
      </footer>
    </div>
  );
}

export default Footer;
