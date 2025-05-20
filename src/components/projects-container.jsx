'use client'

import Image from "next/image";
import React, { useRef, useState } from "react";
import { SendIcon} from 'lucide-react'
import NewTag from "./filter-tag";
const projectsData = [
    {
        id: 1,
        title: 'Fullstack',
        tag: ["All", "Full Stack"],
        description: 'Lorem ipsum consectetur.',
        bgImage: '/work-1.png',
        gitUrl: '',
        link: '',
    },
    {
        id: 2,
        title: 'Frontend',
        tag: ["All", "Frontend"],
        description: 'Lorem ipsum consectetur.',
        bgImage: '/work-2.png',
        gitUrl: '',
        link: '',
    },
    {
        id: 3,
        title: 'Backend',
        tag: ["All", "Frontend", "Backend", "Fullstack"],
        description: 'Lorem ipsum consectetur.',
        bgImage: '/work-3.png',
        gitUrl: '',
        link: '',
    },
    {
        id: 4,
        title: 'Backend',
        tag: ["All", "Backend"],
        description: 'Lorem ipsum consectetur.',
        bgImage: '/work-4.png',
        gitUrl: '',
        link: '',
    },
    {
        id: 5,
        title: 'Frontend',
        tag: ["All", "Frontend"],
        description: 'Lorem ipsum consectetur.',
        bgImage: '/work-3.png',
        gitUrl: '',
        link: '',
    },
    {
        id: 6,
        title: 'Frontend',
        tag: ["All", "Frontend", "Backend", "Fullstack"],
        description: 'Lorem ipsum consectetur.',
        bgImage: '/work-2.png',
        gitUrl: '',
        link: '',
    },
    {
        id: 7,
        title: 'Networking',
        tag: ["All", "Tools"],
        description: 'Lorem ipsum consectetur.',
        bgImage: '/work-1.png',
        gitUrl: '',
        link: '',
    },
];

const tagsList = [
    {
        name: "All",
        total: 10,
    },
    {
        name: "Fullstack",
        total: 2,
    },
    {
        name: "Frontend",
        total: 4,
    },
    {
        name: "Backend",
        total: 3,
    },
    {
        name: "Tools",
        total: 1,
    },
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
        <div className="w-full flex flex-col items-center">
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
            <div 
            className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-5 dark:text-black">
                {filteredProjects.map((project, index) => (
                    <div 
                    key={index} 
                    className="aspect-square bg-green-800 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                    style={{backgroundImage: `url(${project.bgImage})`}}>
                        <div className="glassmorph w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-2 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div className="p-2 rounded-lg group-hover:bg-white/60 transition">
                                <h2 className="font-semibold">{project.title}</h2>
                                <p className="text-sm text-black font-semibold">{project.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <SendIcon width={20} height={20} />
                            </div>
                        </div>
                    </div>
                ))}
                </div>
        </div>
    )
}