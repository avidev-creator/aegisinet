import React from "react";
import Curriculum from "@/components/Curriculum";

const ReactPage = () => {
  const content = [
    {
      title: "Week One",
      dataSet: [
        "Setting Up Node Js/ Bun Js",
        "Creating React Project",
        "Understanding File Structure of React",
        "Using Third Party Libraries in React",
      ],
    },
    {
      title: "Week Two",
      dataSet: [
        "Understanding useState",
        "Understanding Components and Props",
        "Understanding how to update UI elements",
        "How to use APIs in React",
      ],
    },
    {
      title: "Week Three",
      dataSet: [
        "Component Reusability",
        "React Router Course",
        "Prop Drilling and Context API",
      ],
    },
    {
      title: "Week Four",
      dataSet: ["Redux Toolkit", "Projects in React"],
    },
  ];

  return (
    <div className="container mx-auto min-h-screen mt-[10rem] px-12 py-4">
      <section id="courses" className="text-white">
        <h1 className="text-white text-center mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            React
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
            Want to start building your own portfolio or want to enter the
            industry as a frontend developer? Join us to learn React from our
            experienced teachers and grab that oportunity.
          </p>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Check what you will get and than decide if you want to join the
            course or not. Here in this course you will get the knowledge of
            react from the very basics to the advance level that will make you
            Industry ready.
          </p>
        </div>
        <div className="mt-[10rem]">
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

export default ReactPage;
