"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Attending this music school has been a transformative experience for me. The instructors are incredibly talented and supportive, and the sense of community here is amazing.",
    name: "Emma Johnson",
    title: "Piano Student",
  },
  {
    quote:
      "I've been a student at this music school for several years now, and I continue to be impressed by the level of professionalism and dedication of the staff. It's truly a top-notch music education institution.",
    name: "Michael Lee",
    title: "Guitarist",
  },
  {
    quote:
      "As a working professional, I appreciate the flexibility of the music school's scheduling options. The online courses allow me to pursue my passion for music on my own time.",
    name: "Sarah Adams",
    title: "Working Professional",
  },
  {
    quote:
      "The instructors at this music school are not only talented musicians but also excellent teachers. They are patient, encouraging, and always willing to go the extra mile to help students succeed.",
    name: "John Smith",
    title: "Parent",
  },
  {
    quote:
      "I've had the privilege of studying with some of the best musicians in the industry at this music school. Their guidance and mentorship have been invaluable to my growth as a musician.",
    name: "Alexandra Brown",
    title: "Aspiring Artist",
  },
  {
    quote:
      "The music school's emphasis on performance opportunities has helped me gain confidence as a musician. I've had the chance to showcase my skills in recitals and concerts, which has been incredibly rewarding.",
    name: "David Wilson",
    title: "Singer-Songwriter",
  },
  {
    quote:
      "I've always wanted to learn how to play an instrument, and this music school has made that dream a reality for me. The instructors make learning fun and accessible for students of all ages.",
    name: "Sophie Miller",
    title: "Adult Learner",
  },
  {
    quote:
      "The music school's supportive and inclusive environment makes it a joy to learn and grow as a musician. I've made lifelong friends and memories here that I will always cherish.",
    name: "Liam Thompson",
    title: "Music Enthusiast",
  },
  {
    quote:
      "I'm amazed by the progress I've made since joining this music school. The personalized instruction and feedback from my teachers have helped me reach new heights in my musical journey.",
    name: "Emily Davis",
    title: "Violinist",
  },
  {
    quote:
      "I highly recommend this music school to anyone looking to deepen their understanding and appreciation of music. The quality of instruction and the passion of the staff are second to none.",
    name: "Daniel Carter",
    title: "Music Educator",
  },
];

const TestimonialCards: React.FC = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.07] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white">
        Hear our Harmony: Voice of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
