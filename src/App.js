import WelcomPage from "./components/WelcomSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ProjectSection from "./components/ProjectSection";
import Navigation from "./components/Navigation";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";


function App() {
  const particlesInit = useCallback(async (engine) => {
    //console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
      //console.log(container);
  }, []);

  return (
    <div className="App">
      <Particles id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                width: "100%",
                height: "100px",
                position: "absolute",
                top: "0",
                left: "0"
            }}
            options={{
              fullScreen: {
                enable: true,
                zIndex: -1
              },
              particles: {
                number: {
                  value: 100,
                  limit: 200,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#0030ff"
                },
                shape: {
                  type: "circle"
                },
                opacity: {
                  value: 0.5,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.5,
                    sync: false
                  }
                },
                size: {
                  value: 10,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    size_min: 5,
                    sync: false
                  }
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: false,
                  straight: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onClick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                }
              },
              backgroundMask: {
                enable: true,
                cover: {
                  color: {
                    value: {
                      r: 26,
                      g: 25,
                      b: 26
                    }
                  }
                }
              }
            }}
        />

      <Navigation/>
      <WelcomPage/>

      <EducationSection/>
      <SkillsSection/>
      <ProjectSection/>
    </div>
  );
}
export default App;

