import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

const CourseCards = ({ title, description, path }) => {
  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
      >
        <Card className="bg-neutral-100 border-2">
          <CardHeader className="text-black text-xl text-center">
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="line-clamp-3 text-gray-600">
            <p>{description}</p>
          </CardContent>
          <CardFooter className="mt-6 justify-center text-center">
            <Link href={path}>
              <button className="px-1 py-1 w-full sm:w-fit  rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 ">
                <span className="block bg-transparent hover:bg-slate-800 rounded-full px-5 py-2 ">
                  Explore
                </span>
              </button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
};

export default CourseCards;
