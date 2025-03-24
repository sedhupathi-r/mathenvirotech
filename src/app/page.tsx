import About from "@/components/about/page";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";

import Hero from "@/components/Hero";
import Products from "@/components/products/page";
import Services from "@/components/services/page";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <About />
      <Services />
      <Products />
      <Video />
      {/* <Brands /> */}
      <Contact />
    </>
  );
}
