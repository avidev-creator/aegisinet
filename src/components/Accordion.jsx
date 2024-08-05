"use client";

import React, { useState } from "react";
import Image from "next/image";
import approve from "../../public/images/check.png";

const Accordion = ({ title, content }) => {
  const [accordOpen, setAccordOpen] = useState(false);
  const data = Array.from(content);
  return (
    <div className="py-2">
      <button
        onClick={() => setAccordOpen(!accordOpen)}
        className="flex justify-between w-full"
      >
        <span className="text-2xl">{title}</span>
        <svg
          className="fill-white shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all  duration-300 text-white text-start px-4 ${
          accordOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {data.map((item) => (
            <li
              key={item}
              className="flex w-full gap-4 justify-start flex-wrap text-white text-start sm:tracking-tighter p-1 lg:text-center"
            >
              <Image
                src={approve}
                width={28}
                height={10}
                className="hidden md:flex"
                alt="list-image"
              />
              {item}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
