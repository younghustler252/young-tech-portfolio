"use client";

import Particles from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: { events: { onHover: { enable: false }, onClick: { enable: false }, resize: true } },
        particles: {
          number: { value: 40, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.05, random: true },
          size: { value: 3, random: true },
          move: { enable: true, speed: 0.4, direction: "none", random: true, straight: false, outModes: { default: "out" } },
        },
        detectRetina: true,
      }}
    />
  );
}
