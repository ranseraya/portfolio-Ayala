// ProjectTags.jsx
'use client'

import Image from "next/image";
import React, { useRef, useState } from "react";
import NewTag from "./filter-tag";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
    {
        id: 1,
        title: 'Cyber Dashboard',
        tag: ["All", "Full Stack", "Cybersecurity"],
        description: 'Real-time security analytics dashboard for network monitoring.',
        technologies: ["React.js", "Python", "Flask", "Elasticsearch"], 
        bgImage: '/work-1.png', 
        gitUrl: '#',
        liveDemoUrl: '#',
    },
    {
        id: 2,
        title: 'E-commerce Platform',
        tag: ["All", "Frontend", "Full Stack"],
        description: 'Modern e-commerce platform with secure payment integration and user authentication.',
        technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
        bgImage: '/work-2.png',
        gitUrl: '#',
        liveDemoUrl: '#',
    },
    {
        id: 3,
        title: 'API Gateway Security',
        tag: ["All", "Backend", "Cybersecurity", "Tools"],
        description: 'Robust API gateway with JWT authentication and rate limiting for microservices.',
        technologies: ["Go", "Kubernetes", "Redis"],
        bgImage: '/work-3.png',
        gitUrl: '#',
        liveDemoUrl: null,
    },
    {
        id: 4,
        title: 'Threat Intelligence Tool',
        tag: ["All", "Backend", "Cybersecurity", "Tools"],
        description: 'Automated tool to collect and analyze threat intelligence feeds.',
        technologies: ["Python", "Pandas", "Scikit-learn"],
        bgImage: '/work-4.png',
        gitUrl: '#',
        liveDemoUrl: null,
    },
    {
        id: 5,
        title: 'Portfolio Website',
        tag: ["All", "Frontend", "Full Stack"],
        description: 'My personal portfolio showcasing various projects and skills.',
        technologies: ["Next.js", "TailwindCSS", "ShadcnUI"],
        bgImage: '/work-3.png',
        gitUrl: '#',
        liveDemoUrl: '#',
    },
    {
        id: 6,
        title: 'Decentralized Chat App',
        tag: ["All", "Frontend", "Backend"],
        description: 'Blockchain-based chat application with end-to-end encryption.',
        technologies: ["React", "Solidity", "Web3.js"],
        bgImage: '/work-2.png',
        gitUrl: '#',
        liveDemoUrl: null,
    },
    {
        id: 7,
        title: 'Network Scanner',
        tag: ["All", "Tools", "Cybersecurity"],
        description: 'A custom network scanning tool for identifying vulnerabilities.',
        technologies: ["C++", "Sockets"],
        bgImage: '/work-1.png',
        gitUrl: '#',
        liveDemoUrl: null,
    },
];

const tagsList = [
    { name: "All", total: 7 }, 
    { name: "Full Stack", total: 3 },
    { name: "Frontend", total: 3 },
    { name: "Backend", total: 3 },
    { name: "Cybersecurity", total: 4 },
    { name: "Tools", total: 3 },
];

export default function ProjectTags() {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const onSubmit = async (event) => {
        event.preventDefault();
    };

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = { 
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

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
                            rounded={'full'}
                            fontSize={'medium'}
                        />
                    )
                })}
            </div>

            <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-5"> 
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className="aspect-square bg-card rounded-xl relative cursor-pointer group overflow-hidden
                                   border border-border shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div
                            className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                            style={{ backgroundImage: `url(${project.bgImage})` }}
                        ></div>
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition-colors duration-300"></div>
                        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-4 w-11/12 rounded-xl glassmorph flex flex-col items-start justify-between duration-500 group-hover:bottom-7 z-10"> {/* Gunakan glassmorph yang sudah ada */}
                            <h2 className="font-semibold text-xl text-primary mb-1 orbitron">{project.title}</h2> 
                            <p className="text-sm text-foreground mb-3">{project.description}</p> 
                            {project.technologies && project.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <div className="flex gap-3 mt-auto"> 
                                {project.liveDemoUrl && (
                                    <a
                                        href={project.liveDemoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
                                    >
                                        <FaExternalLinkAlt className="mr-1" /> Live Demo
                                    </a>
                                )}
                                {project.gitUrl && (
                                    <a
                                        href={project.gitUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-muted/80 transition-colors"
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
    )
}