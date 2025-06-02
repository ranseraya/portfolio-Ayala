
{/* DATA SKILLS AND TECHNOLOGIES PAGE */}
import React from "react";
import { NetworkIcon, FileEditIcon, ShieldAlertIcon } from "lucide-react";
import {
    SiHtml5, SiCss3, SiJavascript, SiPhp, SiTailwindcss, SiBootstrap, SiReact,
    SiNextdotjs, SiRedux, SiShadcnui, SiLaravel, SiNodedotjs, SiExpress,
    SiMysql, SiMongodb, SiLinux, SiGit, SiGooglecloud,
} from "react-icons/si";
import { FaShieldAlt, FaLaptopCode } from "react-icons/fa";

export const skillsPageHeaderData = {
    mainTitle: "Skillset & Tools",
    typingWords: [
        "Expertise in Modern Web Technologies",
        "Proficiency in Cybersecurity Tools",
        "Building Secure & Scalable Applications",
    ],
    description: "Skill set, Programming Languages, Technology, and Tools I used.",
};

export const getTechIcon = (name) => {
    switch (name.toLowerCase()) {
        case "html5":
            return <SiHtml5 className="w-8 h-8 text-orange-500" />;
        case "css3":
            return <SiCss3 className="w-8 h-8 text-blue-500" />;
        case "javascript es6+":
            return <SiJavascript className="w-8 h-8 text-yellow-400" />;
        case "php":
            return <SiPhp className="w-8 h-8 text-purple-500" />;
        case "tailwind":
            return <SiTailwindcss className="w-8 h-8 text-blue-400" />;
        case "bootstrap+":
            return <SiBootstrap className="w-8 h-8 text-purple-600" />;
        case "react":
            return <SiReact className="w-8 h-8 text-cyan-400" />;
        case "next js":
            return <SiNextdotjs className="w-8 h-8 text-foreground" />;
        case "redux":
            return <SiRedux className="w-8 h-8 text-purple-500" />;
        case "shadcn ui":
            return <SiShadcnui className="w-8 h-8 text-foreground" />;
        case "laravel":
            return <SiLaravel className="w-8 h-8 text-red-500" />;
        case "node.js":
            return <SiNodedotjs className="w-8 h-8 text-green-500" />;
        case "express.js":
            return <SiExpress className="w-8 h-8 text-foreground" />;
        case "mysql":
            return <SiMysql className="w-8 h-8 text-blue-600" />;
        case "mongodb":
            return <SiMongodb className="w-8 h-8 text-green-600" />;
        case "kali/parrot linux":
            return <SiLinux className="w-8 h-8 text-gray-400" />;
        case "git":
            return <SiGit className="w-8 h-8 text-orange-600" />;
        case "google cloud":
            return <SiGooglecloud className="w-8 h-8 text-blue-400" />;
        case "cyber crime analyst":
            return <FaShieldAlt className="w-8 h-8 text-primary" />;
        case "networking":
            return <FaLaptopCode className="w-8 h-8 text-primary" />;
        case "life":
            return (
                <span className="text-xl flex items-center justify-center text-primary">
                    ❤️
                </span>
            );
        default:
            return (
                <span className="text-primary flex items-center justify-center text-xl">
                    ⚙️
                </span>
            );
    }
};

export const skillSetList = [
    {
        title: "Fullstack Web Development",
        lucideIcon: <NetworkIcon className="w-10 h-10 text-primary" />,
        url: "#",
        description: "Providing complete solutions for website development, from front-end to backend, including database management and deployment strategies.",
    },
    {
        title: "Frontend Web Development",
        lucideIcon: <FileEditIcon className="w-10 h-10 text-primary" />,
        url: "#",
        description: "Specializing in creating responsive, modern, and user-friendly interfaces with a focus on performance optimization and accessibility.",
    },
    {
        title: "Information Security Analyst",
        lucideIcon: <ShieldAlertIcon className="w-10 h-10 text-primary" />,
        url: "#",
        description: "Providing best security for information, including vulnerability assessment, threat analysis, and incident response planning.",
    },
    {
        title: "Application Penetration Testing",
        lucideIcon: <ShieldAlertIcon className="w-10 h-10 text-primary" />,
        url: "#",
        description: "Conducting comprehensive penetration tests for web applications, APIs, and networks to identify and mitigate security weaknesses.",
    },
    {
        title: "Technical Content Writing",
        lucideIcon: <FileEditIcon className="w-10 h-10 text-primary" />,
        url: "#",
        description: "High-quality content writing services for articles, blogs, or websites, focusing on IT and cybersecurity domains with clear and engaging explanations.",
    },
];

// --- Data untuk List Teknologi (Grid) ---
export const listTechs = [
    {
        Title: "Frontend",
        Technologies: [
            { name: "HTML5", presentase: 95, exp: "3 Years", projects: "20+", logo: null },
            { name: "CSS3", presentase: 90, exp: "3 Years", projects: "20+", logo: null },
            { name: "Javascript ES6+", presentase: 90, exp: "3 Years", projects: "20+", logo: null },
            { name: "PHP", presentase: 60, exp: "2 Years", projects: "3+", logo: null },
            { name: "Tailwind", presentase: 90, exp: "2 Years", projects: "10+", logo: null },
            { name: "Bootstrap+", presentase: 40, exp: "6 Month", projects: "2", logo: null },
            { name: "React", presentase: 80, exp: "1.5 Years", projects: "5+", logo: null },
            { name: "Next JS", presentase: 80, exp: "1 Years", projects: "3", logo: null },
            { name: "Redux", presentase: 70, exp: "1 Years", projects: "2", logo: null },
            { name: "Shadcn UI", presentase: 60, exp: "6 Month", projects: "2", logo: null },
            { name: "Motion", presentase: 80, exp: "1.5 Years", projects: "6", logo: null },
            { name: "Laravel", presentase: 40, exp: "1 Years", projects: "2", logo: null },
        ],
    },
    {
        Title: "Backend",
        Technologies: [
            { name: "Node.Js", presentase: 90, exp: "2 Years", projects: "", logo: null },
            { name: "Express.Js", presentase: 40, exp: "3 Month", projects: "", logo: null },
            { name: "MySQL", presentase: 95, exp: "2 Years", projects: "", logo: null },
            { name: "MongoDB", presentase: 50, exp: "6 Month", projects: "", logo: null },
            { name: "REST API", presentase: 50, exp: "6 Month", projects: "", logo: null },
        ],
    },
    {
        Title: "More Tools",
        Technologies: [
            { name: "Kali/Parrot Linux", presentase: 90, exp: "4 Years", projects: "", logo: null },
            { name: "Git", presentase: 50, exp: "4 Years", projects: "", logo: null },
            { name: "Google Cloud", presentase: 40, exp: "3x GCP", projects: "", logo: null },
        ],
    },
    {
        Title: "Cybersecurity",
        Technologies: [
            { name: "Cyber Crime Analyst", presentase: 50, exp: "1 Years", projects: "", logo: null },
            { name: "Networking", presentase: 80, exp: "3 Years", projects: "", logo: null },
        ],
    },
    {
        Title: "Soft Skills",
        Technologies: [
            { name: "English Fluet", presentase: 70, exp: "Around 500 TOELF", projects: "", logo: null },
            { name: "Life", presentase: 100, exp: "20+ Years", projects: "", logo: null },
        ],
    },
];