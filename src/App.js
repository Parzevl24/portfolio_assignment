import "./App.css"
import Nav from "./componens/Nav";
import ProfileSection from "./componens/ProfileSection";
import AboutSection from "./componens/AboutSection";
import ExperienceSection from "./componens/ExperienceSection";
import ProjectSection from "./componens/ProjectSection";
import ContactSection from "./componens/ContactSection";
import Footer from "./componens/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <ProfileSection />
      <AboutSection/>
      <ExperienceSection/>
      <ProjectSection />
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
