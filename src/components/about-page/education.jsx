import Image from "next/image";
import React from "react";
import { educationData } from "@/lib/data/about";

const EducationSection = () => {
  return (
    <section className="pt-5 px-0 sm:px-5 flex flex-col items-center w-full">
      <h2 className="text-xl sm:text-3xl font-bold mb-10 text-primary">
        Education
      </h2>
      <div className="ml-6 space-y-10">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-0 sm:gap-6"
          >
            <div className="relative flex">
              <div className="absolute w-1 h-96 sm:h-55 bg-border "></div>
              <div className="absolute -left-6.5 -top-8.5 sm:top-0 sm:-left-9.5 w-15 sm:w-20 h-15 sm:h-20 bg-card border-4 border-primary rounded-full flex overflow-hidden justify-center items-center">
                <Image
                  src={edu.logo}
                  width={80}
                  height={80}
                  alt="logo"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="ml-0 sm:ml-15 bg-card text-foreground p-5 rounded-xl w-full shadow-md border border-border">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center mb-2">
                <h3 className="text-sm sm:text-lg font-bold">
                  {edu.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-primary">
                    {edu.title.split(" ").slice(-1)}
                  </span>
                </h3>
                <span className="bg-secondary text-secondary-foreground text-[10px] sm:text-xs px-3 py-1 rounded-full">
                  {edu.date}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-justify text-muted-foreground mb-2">
                <span className="text-primary font-semibold">
                  <span className="text-foreground linier sm:hidden">
                    Institution{" "}
                  </span>
                  {edu.institution}
                </span>
                <br />
                {edu.desc}
              </p>
              {edu.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {edu.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="w-50 h-auto bg-card border-4 border-border flex justify-center items-center rounded-e-lg">
          <h1>Coming soon</h1>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
