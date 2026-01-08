"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Initialize engine once
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setReady(true);
      console.log("Particles engine ready");
    });
  }, []);

  const particlesOptions: ISourceOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1, // behind all content
    },
    background: {
      color: {
        value: "#000000", // black background
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          width: 800,
        },
      },
      color: {
        value: "#00f0ff", // neon blue
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: {
          min: 0.2,
          max: 0.6,
        },
      },
      size: {
        value: {
          min: 2,
          max: 5,
        },
      },
      move: {
        enable: true,
        speed: 1,
        random: true,
        outModes: {
          default: "out",
        },
      },
      links: {
        enable: true,
        distance: 120,
        color: "#00f0ff",
        opacity: 0.3,
        width: 1,
      },
    },
    detectRetina: true,
  };

  if (!ready) return null; // wait for engine to load

  return <Particles id="tsparticles" options={particlesOptions} />;
}
