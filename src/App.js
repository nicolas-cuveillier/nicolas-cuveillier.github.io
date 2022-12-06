import WelcomPage from "./components/WelcomSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ProjectSection from "./components/ProjectSection";
import Navigation from "./components/Navigation";
import React from "react";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <WelcomPage/>
      <EducationSection/>
      <SkillsSection/>
      <ProjectSection/>
    </div>
  );
}
export default App;

