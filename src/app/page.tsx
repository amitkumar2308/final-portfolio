import Image from 'next/image';
import React from 'react';
import heroImage from '../assets/hero.png';
import logoImage from '../assets/logo.png';
import figma from '../assets/Figma.png';
import figma2 from '../assets/Figma-1.png';
import ellipse from '../assets/ellipse.png';

import Education from './edu';
import Project from './project';
import VideoResume from './vresume';
import Footer from './footer';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative md:min-h-screen flex items-center justify-center bg-gray-50">
        {/* Colorful Blurred Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-32 h-32 bg-blue-400 opacity-30 blur-3xl bottom-10 left-20 rounded-full"></div>
          <Image src={figma} alt="Logo" width={90} height={90} className="absolute w-56 h-56 top-80 md:w-96 md:h-96" />
          <Image src={figma2} alt="Logo" width={90} height={90} className="absolute w-56 h-56 md:w-56 md:h-56" />
          <Image src={ellipse} alt="Logo" width={90} height={90} className="absolute w-24 h-24 top-0 right-0 md:w-96 md:h-96" />
        </div>

        {/* Main Container */}
        <div className="relative z-10 max-w-6xl w-full min-h-[90vh] mx-auto backdrop-blur-2xl border border-white shadow-lg rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 overflow-hidden">
          {/* ✅ Logo & Text (Top Left) */}
          <div className="absolute top-5 left-5 flex items-center gap-3 p-4">
            <Image src={logoImage} alt="Logo" width={20} height={20} className="w-4 h-4" />
            <span className="text-sm font-bold text-gray-800">PORTFOLIO</span>
          </div>
          <div className="absolute top-5 right-5 flex items-center gap-3 p-4">
           
            <span className="text-sm font-light text-gray-800">Scroll down for Video Resume</span>
          </div>
          <div className="absolute w-40 h-40 bg-red-400 opacity-30 blur-3xl top-10 left-10 rounded-full"></div>

          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 overflow-hidden flex items-center">
              <Image src={heroImage} alt="Amit Kumar" layout="responsive" />
            </div>
          </div>

          {/* Left Content */}
          <div className="text-left flex-1 z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Hi, I'm <span className="text-purple-500">Amit Kumar</span>
            </h1>
            <p className="text-gray-600 mt-4 text-justify">
              A passionate frontend developer with a knack for creating seamless, interactive web experiences. Skilled in backend technologies and exploring the world of machine learning to build smarter applications. Let's turn ideas into reality!
            </p>
            <a
              href="/resume.pdf"
              download="Amit_Kumar_Resume.pdf"
              className="mt-6 inline-block px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Education Section (Now Below Hero) */}
      <Education />
      <Project/>
      <VideoResume/>
      <Footer/>
    </>
  );
};

export default Hero;
