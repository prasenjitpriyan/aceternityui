"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

interface MusicInstructors {
  id: number;
  name: string;
  designation: string;
  imageUrl: string;
}

const musicInstructors: MusicInstructors[] = [
  {
    id: 1,
    name: "Emily Davis",
    designation: "Piano Instructor",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Mark Johnson",
    designation: "Guitar Instructor",
    imageUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 3,
    name: "Sarah Anderson",
    designation: "Vocal Coach",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Michael Johnson",
    designation: "Music Theory Instructor",
    imageUrl:
      "https://images.unsplash.com/photo-1585066039575-3f1582c42703?q=80&w=3244&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Instructors: React.FC = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip
            items={musicInstructors.map((instructor) => ({
              id: instructor.id,
              name: instructor.name,
              designation: instructor.designation,
              image: instructor.imageUrl,
            }))}
          />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;
