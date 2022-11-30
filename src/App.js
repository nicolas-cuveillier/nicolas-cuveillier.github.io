
import SocialMedia from "./components/SocialMedia";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="App">

      <div className="welcom_page">
        <div className="pict_component">
          <div className="principal_pict"></div>
          <div className="socialmedia_component">
            <SocialMedia/>
          </div>
        </div>
      </div>


      <div className="education_page">
        <Timeline/>
        
      </div>
      <div className="projects_page">
        
      </div>
    </div>
  );
}

export default App;
