import WelcomPage from "./components/WelcomSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ProjectSection from "./components/ProjectSection";
import Navigation from "./components/Navigation";
import React from "react";
import Particles from "react-tsparticles";
import { useCallback, useState, useEffect } from "react";


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
              
                zIndex: -1
              },
              particles: {
                number: {
                  value: 60,
                  limit: 90,
                  density: {
                    enable: true,
                    value_area: 500
                  }
                },
                links: {
                  color: "#000000",
                  distance: 140,
                  enable: true,
                  opacity: 1,
                  width: 1,
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
                  value: 5,
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
                  speed: 1,
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
              
              backgroundMask: {
                enable: true,
                cover: {
                  color: "#202020"
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

