import { Code2, Rocket, ShieldIcon, GitPullRequest, GraduationCap, BrainCircuit, MusicIcon, Globe } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

{/* Data About Page */}
export const aboutPageData = {
  mainTitle: "About Me",
  taglineWords: ["Front-End Developer", "Cybersecurity Enthusiast"],
  introSummary: "Get to know more about my journey as a web developer and cybersecurity enthusiast.",
  socialLinks: [
    {
      icon: FaEnvelope,
      text: "ayalarahanda0@gmail.com",
      href: "mailto:ayalarahanda0@gmail.com",
    },
    {
      icon: FaGithub,
      text: "@ranseraya",
      href: "https://github.com/ranseraya",
    },
    {
      icon: FaLinkedinIn,
      text: "@ranseraya",
      href: "https://linkedin.com/in/ranseraya",
    },
    {
      icon: FaInstagram,
      text: "@ranseraya",
      href: "https://instagram.com/ranseraya",
    },
  ],
  personalIntro: {
    imageSrc: "/about.jpeg",
    paragraph1: "I am Ayala Septama Rahanda, currently an IT student. My focus is Front-End developer and cybersecurity field. I am very enthusiastic about building clean and user-friendly web interfaces, while actively exploring the world of cybersecurity.",
    paragraph2: "I really enjoy working in a collaborative environment, where I can continue to learn and grow through real projects. The combination of development skills and cybersecurity understanding is key for me to create comprehensive, innovative and threat-protected digital solutions.",
  },
};

export const careerGoalsData = [
  {
    title: "Expert Web Developer",
    desc: "Achieve mastery in modern web development frameworks and best practices to build robust, scalable, and innovative web applications.",
    icon: <Code2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Expert in General Cybersecurity",
    desc: "Develop deep expertise across various cybersecurity domains, including penetration testing, incident response, and security architecture.",
    icon: <ShieldIcon className="w-6 h-6 text-primary" />,
  },
  {
    title: "Contribute to Open Source",
    desc: "Actively participate in open-source projects, contributing significant code, documentation, or community support to meaningful initiatives.",
    icon: <GitPullRequest className="w-6 h-6 text-primary" />,
  },
  {
    title: "Obtain Ph.D. in IT Field",
    desc: "Pursue a doctoral degree in Information Technology, focusing on advanced research in cybersecurity or web development.",
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
  },
    {
    title: "AI/ML in Cybersecurity Research",
    desc: "Conduct advanced research in applying Artificial Intelligence and Machine Learning techniques to enhance cybersecurity defenses.",
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
  },
];

export const educationData = [
  {
    logo: "/images.jpg",
    title: "Computer and Networking Engineering",
    institution: "Vocational School",
    date: "Jun 2020 ➡ May 2023",
    desc: "Studying computer science includes hardware, software, and computer networks, with a focus on practical applications and technical problem solving. ...",
    tech: [],
  },
  {
    logo: "/images.jpg",
    title: "Bachelor of Informatics",
    institution: "UPN Veteran East Java",
    date: "Jul 2023 ➡ Now",
    desc: "Bachelor of Informatics — GPA 3.83 Actively participated in all academic activities and made significant contributions to team projects in every course with excellent performance. Consistently maintained a high GPA with impressive results.",
    tech: ["Front-End", "Cybersecurity", "Networking"],
  },
];

export const experienceData = [
  {
    logo: "/images.jpg",
    title: "Networking Internship",
    institution: "PT Laxo Akses Global",
    date: "July 2020 ➡ October 2020",
    desc: "Managed and troubleshooted network infrastructure, gaining practical experience in network protocols and hardware configuration. Assisted senior engineers in maintaining system stability and security.",
    tech: ["Networking Basics", "Cisco CLI", "Windows Server"],
  },
  {
    logo: "/images.jpg",
    title: "Web Development Freelancer",
    institution: "Self-Employed",
    date: "Jul 2024 ➡ Present",
    desc: "Developed and maintained custom web applications for various clients, focusing on responsive design, API integration, and user experience. Managed projects from conception to deployment.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js"],
  },
];

export const personalInterestData = [
  {
    title: "Badminton",
    desc: "Engaging in competitive and recreational badminton matches.",
    icon: <Rocket className="w-6 h-6 text-primary" />,
  },
  {
    title: "Chess",
    desc: "Wanna play chess with me?",
    icon: <ShieldIcon className="w-6 h-6 text-primary" />,
  },
  {
    title: "CTF (Capture The Flag)",
    desc: "Participating in cybersecurity challenges to enhance penetration testing and defensive skills.",
    icon: <Code2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Open Source Contributions",
    desc: "Collaborating with developer communities on open-source projects.",
    icon: <GitPullRequest className="w-6 h-6 text-primary" />,
  },
  {
    title: "Language Enthusiast",
    desc: "Exploring new languages for communication and development.",
    icon: <Globe className="w-6 h-6 text-primary" />,
  },
  {
    title: "Geoinformatics",
    desc: "Interest in geographical data analysis and mapping technologies.",
    icon: <Globe className="w-6 h-6 text-primary" />,
  },
  {
    title: "Music Exploration",
    desc: "Listening and exploring various music genres, from classical to electronic.",
    icon: <MusicIcon className="w-6 h-6 text-primary" />,
  },
];