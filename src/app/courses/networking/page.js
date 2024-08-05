import React from "react";
import Curriculum from "@/components/Curriculum";

const Networking = () => {
  const content = [
    {
      title: "Week One",
      dataSet: [
        "Foundation of Hardware",
        "​Configure &Troubleshoot Networks",
        "Windows 10 (MD-100)",
        "​CCNA 200-301",
      ],
    },
    {
      title: "Week Two",
      dataSet: [
        "Amazon Web Services SAA-C02",
        "Concepts of 5G Technology",
        "​Concepts of Blockchain Technology",
        "​Understanding AI & ML Concepts",
      ],
    },
    {
      title: "Week Three",
      dataSet: [
        "​Edge Computing concepts", 
        "​Understanding Cyber Security", 
        "Check Point Firewall (R-80)",
      ],
    },
    {
      title: "Week Four",
      dataSet: [
        "​Citrix Application Deployment Controller ADC(CNS-223)",
        "​Understanding Storage Technologies",
        "​Modernized Data Centre",
        "​Cyber Security (EH-V11)",
      ],
    },
    {
      title: "Week Five",
      dataSet: [
        "​Understanding Robotic Process Automation",
        "​Concepts of Quantum Computing",
        "​Understanding Virtual Reality & Augmented Reality",
        "​Concepts of IoT Technology",
      ],
    },
  ];

  return (
    <div className="container mx-auto min-h-screen mt-[10rem] px-12 py-4">
      <section id="courses" className="text-white">
        <h1 className="text-white text-center mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Networking
          </span>
        </h1>
        <section>
          <div className="text-white py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="hidden md:hidden lg:flex sm:border-[#33353F] sm:border sm:rounded-md sm:py-8 sm:px-16 sm:flex sm:flex-row sm:items-center sm:justify-between">
              <HighLightedItems title="Beginner Friendly Classes" />
              <div className="lg:h-[35px] lg:w-[2px] lg:bg-white" />
              <HighLightedItems title="Monday-Saturday" />
              <div className="lg:h-[35px] lg:w-[2px] lg:bg-white" />
              <HighLightedItems title="1.5 Months Course" />
            </div>
          </div>
        </section>
        <div className="col-span-7 mt-[5rem] place-self-center text-center sm:text-left">
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          New technologies such as cloud computing, ethical hacking, the Internet of Things (IoT), and automation all depend a lot on computer networks. Learn the core networking from the best.
          </p>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Check what you will get and than decide if you want to join the
            course or not. Here in this course you will get the knowledge of
            Networking from the very basics to the advance level that will make
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

export default Networking;
