import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p>
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <div className="flex flex-col space-y-4">
            <Link
              href={"/"}
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href={"/courses"}
              className="hover:text-white transition-colors duration-300"
            >
              Courses
            </Link>
            <Link
              href={"/contact"}
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col space-y-4">
            <Link
              href={"/facebook"}
              className="hover:text-white transition-colors duration-300"
            >
              FaceBook
            </Link>
            <Link
              href={"/twitter"}
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </Link>
            <Link
              href={"/instagram"}
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>
            New Delhi, India, Delhi 100001, Email:info@musicschool.com, phone:
            (123) 456-789
          </p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        Copyright &copy; 2024 Music School, All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
