"use client";
import { useState } from "react";
import NewTag from "../filter-tag";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData, tagsList } from "@/lib/data/projects";

export default function ProjectSection() {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div className="w-full flex flex-col items-center py-5">
      <div className="flex flex-wrap justify-center gap-4 my-5">
        {tagsList.map((currTag, index) => {
          return (
            <NewTag
              onClick={handleTagChange}
              key={index}
              name={currTag.name}
              isSelected={tag === currTag.name}
              total={currTag.total}
              rounded={"full"}
              fontSize={"medium"}
            />
          );
        })}
      </div>

      <div className="w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-card rounded-xl relative cursor-auto group overflow-hidden
                                   border border-border shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div
              className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            ></div>
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition-colors duration-300"></div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-4 w-11/12 rounded-xl glassmorph flex flex-col items-start justify-between duration-500 group-hover:bottom-7 z-10">
              <h2 className="font-semibold text-base sm:text-lg text-primary mb-1 orbitron">
                {project.title}
              </h2>
              <p className="text-xs text-justify text-background dark:text-foreground mb-3">
                {project.description}
              </p>
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className="w-full flex justify-between gap-3 mt-auto">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium hover:opacity-80 transition-opacity"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live Demo
                  </a>
                )}
                {project.gitUrl && (
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium hover:bg-muted/80 transition-colors"
                  >
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
