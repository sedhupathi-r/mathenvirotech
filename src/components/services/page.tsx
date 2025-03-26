import Link from "next/link";
import SectionTitle from ".././Common/SectionTitle";

import Image from "next/image";

const serviceData: any = [
  {
    id: 1,
    title: "Sewage Treatment Plant ",
    paragraph:
      "MBR is an indigenous technology developed to meet stringent treated water quality for sewage and industrial effluent",
    image: "/images/stp.jpg",
  },
  {
    id: 2,
    title: "Water Treatment Plant",
    paragraph:
      "Water utilities pipe water from its source to a water treatment plant, which cleans water to make it safe to drink.",
    image: "/images/water_tp.jpg",
  },
  {
    id: 3,
    title: "RO Plant",
    paragraph:
      "A reverse osmosis plant is a manufacturing plant where the process of reverse osmosis takes place.",
    image: "/images/reverse_ro.jpg",
  },
];

const Services = () => {
  return (
    <section
      id="service"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Services"
          paragraph="It is our Endeavour to preserve the environment by not only treating the effluent and rendering it environment-friendly but also reusing waste-water"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {serviceData.map((blog) => (
            <div key={blog.id} className="w-full">
              <div className="group relative overflow-hidden rounded-xl bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
                <Link href="" className="relative block aspect-[37/22] w-full">
                  <Image src={blog.image} alt="image" fill />
                </Link>
                <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                  <h3>
                    <Link
                      href=""
                      className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                    >
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="mb-4 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                    {blog.paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
