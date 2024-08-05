import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Learn From The
              </span>
              <br />
              Best
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              We don&apos;t simply give students lectures, we also provide them
              with real-life experiments, projects and a rich experience
              thoughtout the journey!
            </p>
            <Link href="/courses">
              <button className="px-1 py-1 w-full sm:w-fit  rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 ">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                  Courses
                </span>
              </button>
            </Link>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative  ">
              <Image
                src="/images/heroimage.png"
                width={350}
                height={350}
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
          </div>
        </div>
        <div className="text-white py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div className="hidden md:hidden lg:flex sm:border-[#33353F] sm:border sm:rounded-md sm:py-8 sm:px-16 sm:flex sm:flex-row sm:items-center sm:justify-between">
            <HighLightedItems title="Web Development" />
            <div className="lg:h-[35px] lg:w-[2px] lg:bg-white" />
            <HighLightedItems title="Mobile Development" />
            <div className="lg:h-[35px] lg:w-[2px] lg:bg-white" />
            <HighLightedItems title="Networking" />
            <div className="lg:h-[35px] lg:w-[2px] lg:bg-white" />
            <HighLightedItems title="Devops" />
          </div>
        </div>
      </section>
    </>
  );
};

const HighLightedItems = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-2xl">{title}</span>
    </div>
  );
};

export default HeroSection;
