import React from "react";
import Curriculum from "@/components/Curriculum";

const Python = () => {
  const content = [
    {
      title: "Week One",
      dataSet: [
        "Python inner working",
        "Data types",
        "List, Dictionary, Tuples",
      ],
    },
    {
      title: "Week Two",
      dataSet: [
        "Conditional Operators",
        "Loops",
        "Functions and scopes",
        "Events",
      ],
    },
    {
      title: "Week Three",
      dataSet: ["Basics of OOPS", "Decorators", "Handling APIs"],
    },
    {
      title: "Week Four",
      dataSet: [
        "Setting Up Django",
        "Setting up URL",
        "Path Convertors",
        "Returning HTML and Dynamic Views",
      ],
    },
    {
      title: "Week Five",
      dataSet: [
        "Adding and registering templates",
        "Filters",
        "Error Pages",
        "Static URL",
      ],
    },
    {
      title: "Week Six",
      dataSet: ["Django Models", "CRUD", "Cross model queries", "Admin Pannel"],
    },
  ];

  return (
    <div className="container mx-auto min-h-screen mt-[10rem] px-12 py-4">
      <section id="courses" className="text-white">
        <h1 className="text-white text-center mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Python And Django
          </span>
        </h1>
        <section>
          <div className="text-white py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="hidden md:hidden lg:flex sm:border-[#33353F] sm:border sm:rounded-md sm:py-8 sm:px-16 sm:flex sm:flex-row sm:items-center sm:justify-between">
              <HighLightedItems title="Beginner Friendly Classes" />
              <div className="lg:h-[35px] lg:w-[2px] lg:bg-white" />
              <HighLightedItems title="Monday-Saturday" />
              <div className="lg:h-[35px] lg:w-[2px] lg:bg-white" />
              <HighLightedItems title="2 Months Course" />
            </div>
          </div>
        </section>
        <div className="col-span-7 mt-[5rem] place-self-center text-center sm:text-left">
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Python is one of the best and fastest language for fast API and
            Backend Development. Join our course to learn python and django from
            the very basics to the advance level.
          </p>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Check what you will get and than decide if you want to join the
            course or not. Here in this course you will get the knowledge of
            javascript from the very basics to the advance level that will make
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

export default Python;
