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
    institution: "IBM (Coursera)",
    preview: "./certifications/IBM Cybersecurity Analyst.jpg",
    url: "#",
    date: "May 22, 2025",
    description: "Learn web vulnerabilities (XSS, SQLi), secure coding, and cyber defense strategies through a comprehensive learning path."
  },
  {
      id: 3,
      title: "Google Cybersecurity",
      institution: "Google (Coursera)",
      preview: "./certifications/Googe Cyberseucurity.jpg",
      url: "#",
      date: "Jun 23, 2025",
      description: "Fundamental cybersecurity skills in threat analysis, risk management, and incident response by completing a learning path."
  },
  {
      id: 4,
      title: "META Front-End Developer",
      institution: "Meta (Coursera)",
      preview: "./certifications/Meta Frontend Developer.jpg",
      url: "#",
      date: "Jun 21, 2025",
      description: "Completed an intensive learning path in Front-End web development, gaining proficiency in HTML, CSS, JavaScript, and modern frameworks."
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
    title: "Backend and Cloud Studyjam",
    institution: "GDCS",
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
    preview: "./certifications/JavaScript_Essentials_2.jpg",
    url: '#',
    date: 'March 2025',
    category: 'Frontend',
  },
  {
    id: 'fe-2',
    title: 'React Advance',
    institution: 'Coursera',
    preview: "./certifications/Advanced React.jpg",
    url: '#',
    date: 'May 2025',
    category: 'Frontend',
  },
  {
    id: 'fe-3',
    title: 'Build Portfolio with Next js',
    institution: 'Udemy',
    preview: "./certifications/Build Portfolio with NextJS.jpg",
    url: '#',
    date: 'March 2025',
    category: 'Frontend',
  },
  {
    id: 'be-1',
    title: 'Aplication Backend with Google Cloud',
    institution: 'Dicoding',
    preview: "./certifications/Aplication Backend with Google Cloud.jpg",
    url: '#',
    date: 'January 2024',
    category: 'Backend',
  },
  {
    id: 'be-2',
    title: 'Backend and Cloud Studyjam',
    institution: 'GDSC',
    preview: "./certifications/Backend and Cloud Studyjam.jpg",
    url: '#',
    date: 'Des 2024 - Jan 2024',
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
    preview: "./certifications/Introduction_to_Cybersecurity Cisco.jpg",
    url: '#',
    date: 'October 2024',
    category: 'Cybersecurity',
  },
  {
    id: 'cs-2',
    title: 'IBM Cybersecurity Analist',
    institution: 'IBM',
    preview: "./certifications/IBM Cybersecurity Analyst.jpg",
    url: '#',
    date: 'May 2025',
    category: 'Cybersecurity',
  },
  {
    id: 'cs-3',
    title: 'Google Cybersecurity',
    institution: 'Google',
    preview: "./certifications/Googe Cyberseucurity.jpg",
    url: '#',
    date: 'June 2025',
    category: 'Cybersecurity',
  },
  {
    id: 'cs-4',
    title: 'Ethical Hacking',
    institution: 'Cisco Academy',
    preview: "./certifications/Example Certification.png",
    url: '#',
    date: 'December 2023',
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