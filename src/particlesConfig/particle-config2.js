const options2 = {   
   
          background: {
            color: {
              value: "trsansparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: 'grab',
              },
            },
            modes: {
              push: {
                distance: 100,
                duration: 1,
              },
              grab: {
                distance: 70,
              },
            },
          },
          particles: {
            color: {
              value: "#FFFFFF",
              
            },
            // important prop
            links: {
              color: "#000000",
              distance: 9,
              enable: true,
              opacity: 0.8,
              width: 1.8,
            },
            move: {
              direction: "reverse",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 1390,
            },
            opacity: {
              value: 1.0,
            },
            shape: {
              type: "trangle",
            },
            size: {
              value: { min: 8, max: 20 },
            },
          },
          detectRetina: true,
      
}

export default options2;