"use client";
import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { type Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
export default function ParticleContainer() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    setInit(true);
  }, []);
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const particlesOptions: any = {
    particles: {
      number: { value: 100, density: { enable: true, area: 600 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.4 },
      size: { value: 2, random: true },
      move: {
        enable: true,
        speed: 3,
        direction: "bottom",
        straight: true,
      },
    },
    background: {
      color: "transparent",
    },
    fullScreen: { enable: true },
  };

  if (init) {
    return (
      <Particles
        id="rainParticles"
        className="absolute bottom-0 top-0 h-full w-full bg-transparent"
        init={particlesInit}
        options={particlesOptions}
      />
    );
  }

  return <></>;
}
