import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import particalsconfig from "./particlesConfig/particle-config";
import options2 from "./particlesConfig/particle-config2";
import { Button } from "reactstrap";

function ParticleBackground() {
  const containerRef = useRef(null),
    [init, setInit] = useState(false);
  const [options, setOptions] = useState(particalsconfig);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  const particlesLoaded = useCallback(
    (container) => {
      containerRef.current = container;

      window.particlesContainer = container;
    },
    [containerRef]
  );

  const handleClick = () => {
    setOptions(options2);
  };

  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options2}
        />
      )}
    </div>
  );
}

export default ParticleBackground;
