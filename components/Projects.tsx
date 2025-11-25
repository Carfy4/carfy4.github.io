import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects" className="py-8">
      <h2 className="text-white font-semibold text-center text-5xl pt-[15px] mb-3">
        PAST WORK
      </h2>
      <p className="tracking-[0.4em] text-center text-transparent font-light pb-6 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-lg">
        
      </p>
      <div className="container mx-auto 2xl px-4">
        <div className="flex-col flex md:flex-row mt-8 gap-4">
          <Link
            href="https://www.youtube.com/watch?v=OYb8c9xCcYs"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:flex-1 transition-all duration-300 hover:translate-x-2"
          >
            <div className="flex flex-row mb-6 h-full bg-white/5 rounded-xl p-3 border border-white/10 hover:border-white/30 group">
              <div className="flex-shrink-0">
                <video 
                  width={180}
                  height={180}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover rounded-lg"
                >
                  <source src="/videos/project1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-3 flex-1 min-h-[140px] flex flex-col justify-between">
                <div>
                  <p className="text-white font-bold text-xl mb-2">Maze Generation</p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    A procedural maze generator, optimized using Parallel Luau for performance, bitflags for memory efficiency, and OOP for clean architecture.
                  </p>
                </div>

                <div className="mt-2 pt-2 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-purple-400 text-xs font-medium">View full video →</p>
                </div>
              </div>
            </div>
          </Link>
          
          {/* Project 2 */}
          <Link
            href="https://www.roblox.com/games/16553863693/Find-The-ODD-Logo-Quiz"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:flex-1 transition-all duration-300 hover:translate-x-2"
          >
            <div className="flex flex-row mb-6 h-full bg-white/5 rounded-xl p-3 border border-white/10 hover:border-white/30 group">
              <div className="flex-shrink-0">
                <img 
                  src="/Project2.png"
                  width={180}
                  height={180}
                  alt="Thumbnail"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="p-3 flex-1 min-h-[140px] flex flex-col justify-between">
                <div>
                  <p className="text-white font-bold text-xl mb-2">Find The Odd Logo | 5M+ Visits</p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                   Programmed the entire game.
                  </p>
                </div>

                <div className="mt-2 pt-2 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-purple-400 text-xs font-medium">View Game →</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="flex-col flex md:flex-row gap-4">
          {/* Project 3 */}
         <Link
            href="https://www.youtube.com/watch?v=EbSywxu0plw"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:flex-1 transition-all duration-300 hover:translate-x-2"
          >
            <div className="flex flex-row mb-6 h-full bg-white/5 rounded-xl p-3 border border-white/10 hover:border-white/30 group">
              <div className="flex-shrink-0">
                <video 
                  width={180}
                  height={180}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover rounded-lg"
                >
                  <source src="/videos/project3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-3 flex-1 min-h-[140px] flex flex-col justify-between">
                <div>
                  <p className="text-white font-bold text-xl mb-2">Voxelized Character</p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    
                  </p>
                </div>

                <div className="mt-2 pt-2 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-purple-400 text-xs font-medium">View full video →</p>
                </div>
              </div>
            </div>
          </Link>
          
          {/* Project 4 */}
         <Link
            href="https://www.youtube.com/watch?v=m9nVIsB1Khs"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] md:flex-1 transition-all duration-300 hover:translate-x-2"
          >
            <div className="flex flex-row mb-6 h-full bg-white/5 rounded-xl p-3 border border-white/10 hover:border-white/30 group">
              <div className="flex-shrink-0">
                <video 
                  width={180}
                  height={180}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover rounded-lg"
                >
                  <source src="/videos/project4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-3 flex-1 min-h-[140px] flex flex-col justify-between">
                <div>
                  <p className="text-white font-bold text-xl mb-2">ASCII Render</p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-purple-400 text-xs font-medium">View full video →</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
