import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py0">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              Hi! I'm a full-stack developer specializing in building
              high-quality, user-focused applications with modern frameworks
              like Next.js and TypeScript. I have experience developing web
              applications for healthcare management, where I manage complex
              forms, patient and appointment data, and automated SMS
              notifications. My tech stack includes Prisma, MongoDB, and
              TailwindCSS, and I'm always excited to learn and apply new tools
              that enhance performance and user experience.<br/> <br/>
               When I'm not coding,
              I’m exploring ways to make data handling more efficient and aim to
              deepen my expertise in backend development. Let's build something
              amazing together!
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImg}
          alt=""
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
