"use client";

import React from "react";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const musicFeaturedWebinars = [
  {
    title: "Mastering Jazz Guitar",
    description:
      "Join renowned jazz guitarist Mark Johnson as he shares advanced techniques and improvisational strategies for mastering the jazz guitar.",
    slug: "mastering-jazz-guitar",
    isFeatured: true,
  },
  {
    title: "Introduction to Music Production",
    description:
      "Learn the basics of music production from recording to mixing with industry expert Emily Davis. Perfect for beginners and aspiring producers.",
    slug: "introduction-to-music-production",
    isFeatured: true,
  },
  {
    title: "Songwriting Workshop: Crafting Memorable Hooks",
    description:
      "Unlock the secrets to writing catchy and memorable hooks with award-winning songwriter Alexandra Lee. Perfect for songwriters of all levels.",
    slug: "crafting-memorable-hooks",
    isFeatured: true,
  },
  {
    title: "Piano Masterclass with Emily Davis",
    description:
      "Join pianist Emily Davis for an in-depth masterclass covering technique, repertoire, and performance tips for pianists of all levels.",
    slug: "piano-masterclass",
    isFeatured: true,
  },
  {
    title: "Exploring World Music: A Global Perspective",
    description:
      "Embark on a musical journey around the world as we explore the rich diversity of global music traditions with ethnomusicologist Sarah Adams.",
    slug: "exploring-world-music",
    isFeatured: true,
  },
  {
    title: "Effective Practice Strategies for Musicians",
    description:
      "Discover proven practice techniques and strategies for maximizing your musical progress with renowned music educator John Smith.",
    slug: "practice-strategies",
    isFeatured: true,
  },
  {
    title: "The Art of Vocal Performance",
    description:
      "Join vocal coach Sarah Anderson for a comprehensive workshop on vocal technique, stage presence, and performance strategies.",
    slug: "vocal-performance",
    isFeatured: true,
  },
  {
    title: "Music Theory Fundamentals: Understanding Harmony",
    description:
      "Deepen your understanding of music theory and harmony with this insightful webinar led by music theorist Michael Johnson.",
    slug: "music-theory-harmony",
    isFeatured: true,
  },
  {
    title: "Creative Drumming Techniques",
    description:
      "Explore innovative drumming techniques and rhythms with percussionist Maxwell Jones in this hands-on webinar for drummers.",
    slug: "creative-drumming-techniques",
    isFeatured: true,
  },
];

const UpcomingWebinars: React.FC = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={musicFeaturedWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/webinars"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
