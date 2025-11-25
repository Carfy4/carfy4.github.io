import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
          WHAT I&apos;M EXPERIENCED IN
        </h2>
        <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
          
        </p>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 pt-5 leading-8 text-center">
            DataStore / ProfileService<br />
            Full Games<br />
            UI Scripting (daily rewards, playtime rewards, egg & pet systems)<br />
            Simulators, Tycoons, Obbies and more<br />
            Trading, Inventory & Round Systems<br />
            Round Systems, Map Voting
            Weapon Systems (melee, guns)<br />
            Clean, structured, and modular code (OOP, maintainable)<br />
            <br />
            And much more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
