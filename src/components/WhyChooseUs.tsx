"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Welcome to Our Music School",
    description:
      "Discover a world of musical opportunities at our renowned music school. Whether you're a beginner or an experienced musician, we have something for everyone.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Welcome to Our Music School
      </div>
    ),
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to inspire and empower individuals to express themselves through music. We strive to provide high-quality education and foster a supportive community for all.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Our Mission
      </div>
    ),
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from our team of experienced and passionate instructors who are dedicated to helping you achieve your musical goals. They bring a wealth of knowledge and expertise to every lesson.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Expert Instructors
      </div>
    ),
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Our curriculum covers a wide range of musical topics including instrument technique, music theory, performance skills, and music production. We offer courses for all ages and skill levels.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Comprehensive Curriculum
      </div>
    ),
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
};

export default WhyChooseUs;
