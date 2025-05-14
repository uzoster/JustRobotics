  import { useCallback } from "react";
  import Particles from "react-tsparticles";
  import { loadSlim } from "tsparticles-slim";

  const AnimatedBack = () => {
    const particlesInit = useCallback(async (engine) => {
      await loadSlim(engine);
    }, []);

    return (
      <Particles
        id="tsparticless"
        init={particlesInit}
        options={{
          
          background: {
            color: {
              value: "transparent",
            },
          },
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          particles: {
            number: { value: 300 },
            color: { value: "#F8EB92" },
            shape: { type: "circle" },
            // opacity: { value: 0.10 },
            size: { value: { min: 1, max: 6 } },
            move: { enable: true, speed: 3 },
            links: {
              enable: true,
              color: "#D2BB20",
              distance: 150,
              // opacity: 0.3,
            },
          },
        }}
      />
    );
  };

  export default AnimatedBack;
