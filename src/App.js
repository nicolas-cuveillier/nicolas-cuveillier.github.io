import WelcomPage from "./components/WelcomSection";
import EducationSection from "./components/EducationSection";
import ProjectSection from "./components/ProjectSection";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <WelcomPage/>
      <EducationSection/>
      <ProjectSection/>
    </div>
  );
}
export default App;

