"use client";

import courseData from "@/components/constants.js";
import CourseCards from "@/components/CourseCards.jsx";

const Courses = () => {
  return (
    <div className="container mx-auto mt-[15rem]  px-12 py-4">
      <section id="courses" className="text-white">
        <h1 className="text-white text-center mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Courses
          </span>
        </h1>

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
        <div className="text-white ">
          <div className="rounded-xl grid md:grid-cols-3 auto-rows-[300px] gap-4 my-10 ">
            {courseData.map((item) => (
              <div key={item.id} className="my-4">
                <CourseCards
                  title={item.title}
                  description={item.description}
                  path={item.path}
                />
              </div>
            ))}
          </div>
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

export default Courses;
