import "./App.css"
import Nav from "./componens/Nav";
import ProfileSection from "./componens/ProfileSection";
import AboutSection from "./componens/AboutSection";
import ExperienceSection from "./componens/ExperienceSection";
import ProjectSection from "./componens/ProjectSection";
import ContactSection from "./componens/ContactSection";
import Footer from "./componens/Footer";
import EducationSection from "./componens/EducationSection";
function App() {
  return (
    <div className="App">
      <Nav />
      <ProfileSection />
      <AboutSection/>
      <ExperienceSection/>
      <ProjectSection />
      <EducationSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
