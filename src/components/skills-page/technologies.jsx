import React from "react";
import CircularProgress from "./circular-progress";
import { listTechs, getTechIcon } from "@/lib/data/skills";

export default function Technologies() {
  return (
    <div className="w-full">
      {listTechs.map((category, index) => {
        return (
          <div key={index} className="mb-10">
            <h1 className="text-xl sm:text-3xl font-bold text-primary mt-10 mb-3 text-center">
              {category.Title}
            </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {category.Technologies.map((tech, techIndex) => {
                return (
                  <li
                    key={techIndex}
                    className="h-full flex flex-col justify-between glassmorph-g rounded-xl p-2 sm:p-4 border border-border"
                  >
                    <div className="flex flex-row items-center gap-3 mb-0 sm:mb-3 scale-[0.8] sm:scale-100">
                      <CircularProgress
                        percentage={tech.presentase}
                        color={tech.color || "var(--color-primary)"}
                        logo={tech.logo}
                        icon={getTechIcon(tech.name)}
                      />
                      <h2 className="text-md sm:text-lg font-bold text-foreground">
                        {tech.name}
                        <span className="text-primary">
                          {" "}
                          ({tech.presentase}%)
                        </span>
                      </h2>
                    </div>
                    <div className="my-0 sm:my-1 flex justify-between mt-auto pt-2 border-t border-border">
                      {tech.exp && (
                        <p className="text-xs text-foreground">
                          {tech.exp} exp
                        </p>
                      )}
                      {tech.projects && (
                        <p className="text-xs text-foreground">
                          {tech.projects} Projects
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      {listTechs.every((cat) => cat.Technologies.length === 0) && (
        <div className="bg-card rounded-xl p-6 flex flex-col items-center justify-center border border-border shadow-md col-span-full mt-10">
          <h3 className="text-foreground">
            Technologies list is under construction. Stay tuned!
          </h3>
        </div>
      )}
    </div>
  );
}
