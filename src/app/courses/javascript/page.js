import React from "react";
import Curriculum from "@/components/Curriculum";

const Javascript = () => {
  const content = [
    {
      title: "Week One",
      dataSet: [
        "Variables and datatypes ",
        "Objects and arrays",
        "Basics of functions",
        "Control Flow",
      ],
    },
    {
      title: "Week Two",
      dataSet: [
        "Basics of DOM",
        "Parent and child relation",
        "Working with DOM nodes",
        "Events",
      ],
    },
    {
      title: "Week Three",
      dataSet: ["Asynchronous Theory", "Basics of Promises", "Fetch methods"],
    },
    {
      title: "Week Four",
      dataSet: [
        "Advance Javascript Concepts",
        "Classes in javascript",
        "Prototypes and Closure",
        "Projects with javascript",
      ],
    },
  ];

  return (
    <div className="container mx-auto min-h-screen mt-[10rem] px-12 py-4">
      <section id="courses" className="text-white">
        <h1 className="text-white text-center mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Javascript
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
            Want to learn web development?. Start today by joining our
            Javascript course which will prepare you to enter the biggest eco
            system of web development.
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

export default Javascript;
