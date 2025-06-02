{/* DATA CERTIFICATIONS PAGE */}
import { Trophy, Award, Star } from "lucide-react"; 

export const certificationsPageHeaderData = {
  mainTitle: "My Certifications",
  typingWords: ["Recognized Expertise", "Continuous Learning Journey"],
  description: "A showcase of my earned certifications and accomplishments.",
};

export const highlightCertifications = [
  {
    id: 1,
    title: "JavaScript Essential",
    institution: "Cisco Networking Academy",
    preview: "./certifications/Example Certification.png",
    url: "#",
    date: "Oct 01, 2024",
    description: "This course provided foundational knowledge in JavaScript, covering syntax, data structures, and basic programming concepts.",
  },
  {
    id: 2,
    title: "IBM Cybersecurity Analyst",
    institution: "IBM",
    preview: "./certifications/Example Certification.png",
    url: "#",
    date: "Nov 15, 2023",
    description: "Learned about common web vulnerabilities (XSS, SQLi), secure coding practices, and defensive techniques.",
  },
  {
    id: 3,
    title: "Build Portoflio with Next js",
    institution: "Udemy",
    preview: "./certifications/Example Certification.png",
    url: "#",
    date: "Mar 01, 2023",
    description: "Demonstrates core cybersecurity skills needed for an IT security career.",
  },
  {
    id: 4,
    title: "Backend and Cloud Studyjam",
    institution: "GDCS",
    preview: "./certifications/Example Certification.png",
    url: "#",
    date: "Jun 30, 2022",
    description: "Completed an intensive Nanodegree program focused on PHP development, covering backend programming, database management, and deployment.",
  },
  {
    id: 5,
    title: "PHP Development Nanodegree",
    institution: "Udacity",
    preview: "./certifications/Example Certification.png",
    url: "#",
    date: "Jun 30, 2022",
    description: "Completed an intensive Nanodegree program focused on PHP development, covering backend programming, database management, and deployment.",
  },
  {
    id: 6,
    title: "PHP Development Nanodegree",
    institution: "Udacity",
    preview: "./certifications/Example Certification.png",
    url: "#",
    date: "Jun 30, 2022",
    description: "Completed an intensive Nanodegree program focused on PHP development, covering backend programming, database management, and deployment.",
  },
];

export const allCertificationsData = [
  // --- Frontend Certifications ---
  {
    id: 'fe-1',
    title: 'JavaScript Essential',
    institution: 'Cisco Academy',
    preview: "./certifications/Example Certification.png",
    url: '#',
    date: 'June 2023',
    category: 'Frontend',
  },
  {
    id: 'fe-2',
    title: 'React Advance',
    institution: 'Coursera',
    preview: "./certifications/Example Certification.png",
    url: '#',
    date: 'August 2023',
    category: 'Frontend',
  },
  {
    id: 'fe-3',
    title: 'Build Portfolio with Next js',
    institution: 'Udemy',
    preview: "./certifications/Example Certification.png",
    url: '#',
    date: 'March 2022',
    category: 'Frontend',
  },
  {
    id: 'be-1',
    title: 'Aplication Backend with Google Cloud',
    institution: 'Dicoding',
    preview: "./certifications/Example Certification.png",
    url: '#',
    date: 'October 2023',
    category: 'Backend',
  },
  {
    id: 'be-2',
    title: 'Backend and Cloud Studyjam',
    institution: 'GDSC',
    preview: "./certifications/Example Certification.png",
    url: '#',
    date: 'November 2023',
    category: 'Backend',
  },
  {
    id: 'be-3',
    title: 'Cloud Functions & Firestore',
    institution: 'Udemy',
    preview: "./certifications/Example Certification.png",
    url: '#',
    date: 'January 2024',
    category: 'Backend',
  },
  {
    id: 'cs-1',
    title: 'Introduction to Cybersecurity',
    institution: 'Cisco Academy',
    preview: "./certifications/Example Certification.png",
    url: '#',
    date: 'July 2023',
    category: 'Cybersecurity',
  },
  {
    id: 'cs-2',
    title: 'Ethical Hacking',
    institution: 'Cisco Academy',
    preview: "./certifications/Example Certification.png",
    url: '#',
    date: 'December 2023',
    category: 'Cybersecurity',
  },
  {
    id: 'cs-3',
    title: 'IBM Cybersecurity Analist',
    institution: 'IBM',
    preview: "./certifications/Example Certification.png",
    url: '#',
    date: 'February 2024',
    category: 'Cybersecurity',
  },
];


export const achievementsList = [
  {
    id: 1,
    title: "Top 10 CTF Player",
    description: "Achieved top 10 ranking in Family Capture The Flag competition 2024.",
    icon: <Trophy className="w-10 h-10 text-primary" />,
  },
  {
    id: 2,
    title: "Open Source Contributor",
    description: "Successfully contributed significant features to a popular open-source web framework.",
    icon: <Star className="w-10 h-10 text-primary" />,
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "Achievement #1 is on its way. Check back later for updates!",
    icon: <Award className="w-10 h-10 text-primary" />,
  },
];