import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const About = () => {
  return (
    <>
      <section id="about" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Link
                  href=""
                  className="inline-block rounded-xl bg-black p-2 px-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  <Image
                    src="/images/about_bg.jpg"
                    alt="about image"
                    fill
                    className="p-3 drop-shadow-three dark:hidden dark:drop-shadow-none"
                  />
                  <Image
                    src="/images/about_bg.jpg"
                    alt="about image"
                    fill
                    className="hidden rounded-xl    drop-shadow-three dark:block  dark:drop-shadow-none"
                  />
                </Link>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-full">
                <div className="mb-9">
                  <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                    About Us
                  </h2>
                  {/* <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Bug free code
                    </h3> */}
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    MATH ENVIRO TECH specializes in the design, construction and
                    installation of complete Waste Water Treatment Plants & RO,
                    for a wide range of industry sectors from beverage and food
                    to sewage and waste water.
                  </p>
                </div>
                <div className="mb-6">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We can give you the Complete Solution in development of
                    Existing Process and to develop a New Process. We handle
                    Complete Project from Basic Engineering Design to Testing,
                    Commissioning of Plant & have Specialization in Biological
                    Treatment. We also accept responsibility for Total Plant
                    Erection.
                  </p>
                </div>
                <div className="mb-6">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We can Design, Build, and if required operate & maintain
                    under contract, turnkey Effluent Treatment Plants (ETP),
                    Sewage Treatment Plants (STP), Water Treatment Plants (WTP)
                    & Reverse Osmosis Plants (RO).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
