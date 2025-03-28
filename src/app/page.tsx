import ScrollUp from "@/components/Common/ScrollUp";

import Hero from "@/components/Hero";
import Products from "@/components/products/page";
import Services from "@/components/services/page";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Math Enviro Tech",
  description:
    "We are leading one stop solution provider for waste water problem",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <About /> */}
      <Services />
      <Products />

      {/* <Contact /> */}
    </>
  );
}
