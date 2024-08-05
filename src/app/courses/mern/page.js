import React from "react";
import Curriculum from "@/components/Curriculum";

const Mern = () => {
  const content = [
    {
      title: "Week One",
      dataSet: [
        "Understanding Backend",
        "What is MERN Stack",
        "Connecting Backend to Frontend",
        "Creating Models",
      ],
    },
    {
      title: "Week Two",
      dataSet: [
        "Data Modelling with mongoose",
        "Setting up Prettier and backend configurations",
        "Custom API responses",
        "Error Handling",
      ],
    },
    {
      title: "Week Three",
      dataSet: [
        "Jason Web Token", 
        "Custom Hooks", 
        "Upload Files with Multer"
      ],
    },
    {
      title: "Week Four",
      dataSet: [
        "HTTP Crash Course",
        "Router and Controllers",
        "Registers and middlewares",
        "MongoDb Aggregation pipelines",
      ],
    },
  ];

  return (
    <div className="container mx-auto min-h-screen mt-[10rem] px-12 py-4">
      <section id="courses" className="text-white">
        <h1 className="text-white text-center mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            M.E.R.N Stack
          </span>
        </h1>
        <section>
          <div className="text-white py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="hidden md:hidden lg:flex sm:border-[#33353F] sm:border sm:rounded-md sm:py-8 sm:px-16 sm:flex sm:flex-row sm:items-center sm:justify-between">
              <HighLightedItems title="Beginner Friendly Classes" />
              <div className="lg:h-[35px] lg:w-[2px] lg:bg-white" />
              <HighLightedItems title="Monday-Saturday" />
              <div className="lg:h-[35px] lg:w-[2px] lg:bg-white" />
              <HighLightedItems title="4 Weeks Course" />
            </div>
          </div>
        </section>
        <div className="col-span-7 mt-[5rem] place-self-center text-center sm:text-left">
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Feeling confident with Frontend? Join us to enter the world of Backend and get industry ready on MERN Stack.Here you will learn Mongod DB, Express, React and Node to code your best and the fastest backend in the industry.
          </p>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Check what you will get and than decide if you want to join the
            course or not. Here in this course you will get the knowledge of
            MERN stack from the very basics to the advance level that will make
            you Industry ready.
          </p>
        </div>
        <div className="mt-[5rem]">
          <section className="flex flex-col gap-[2.5rem] sm:text-wrap">
            {content.map((item) => (
              <Curriculum
                key={item}
                title={item.title}
                content={item.dataSet}
              />
            ))}
          </section>
        </div>
      </section>
    </div>
  );
};

const HighLightedItems = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-2xl">{title}</span>
    </div>
  );
};

export default Mern;
