import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          
        </p>
        <p className="text-gray-300 text-center ">

          Hey! I&apos;m a Experienced Programmer with 3+ years of experience that can work in both backend and frontend.
          I&apos;m comfortable working on both quick tasks and complex long-term projects.
        </p>
      </div>
    </section>
  );
};

export default About;