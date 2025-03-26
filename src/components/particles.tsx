"use client";
import { useEffect, useMemo, useState } from "react";
import Particles from "react-particles";
import { ISourceOptions } from "tsparticles-engine";
import { loadBubblesPreset } from "tsparticles-preset-bubbles";
import { loadFountainPreset } from "tsparticles-preset-fountain";
export default function ParticleContainer() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    setInit(true);
  }, []);
  let particlesOptions = {
    preset: "bubbles",
  };

  let particlesInit = async (engine) => {
    await loadFountainPreset(engine);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="absolute bottom-0 top-0 h-full w-full bg-transparent"
        options={particlesOptions}
        init={particlesInit}
      />
    );
  }

  return <></>;
}
