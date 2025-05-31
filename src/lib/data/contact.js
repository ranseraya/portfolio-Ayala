
{/* DATA CONTACT PAGE */}
import React from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

export const contactPageHeaderData = {
  mainTitle: "Initiate Secure Connection",
  typingWords: [
    "Encrypting Your Message",
    "Transmitting Data Securely",
    "Awaiting Your Input",
  ],
  description:
    "Fill *console* below to send me encrypted message, just two us will know the message.",
};

export const contactInfoList = [
  {
    title: "WhatsApp",
    desc: "+62 857 3017 xxxx",
    icon: <FaWhatsapp className="w-6 h-6 text-primary" />,
    url: "https://wa.me/628573017xxxx",
  },
  {
    title: "Email",
    desc: "ayalarahanda0@gmail.com",
    icon: <FaEnvelope className="w-6 h-6 text-primary" />,
    url: "mailto:ayalarahanda0@gmail.com",
  },
  {
    title: "LinkedIn",
    desc: "@ranseraya",
    icon: <FaLinkedinIn className="w-6 h-6 text-primary" />,
    url: "https://linkedin.com/in/ranseraya",
  },
  {
    title: "Instagram",
    desc: "@ranseraya",
    icon: <FaInstagram className="w-6 h-6 text-primary" />,
    url: "https://instagram.com/ranseraya",
  },
  {
    title: "Github",
    desc: "@ranseraya",
    icon: <FaGithub className="w-6 h-6 text-primary" />,
    url: "https://github.com/ranseraya",
  },
  {
    title: "YouTube",
    desc: "@ranseraya",
    icon: <FaYoutube className="w-6 h-6 text-primary" />,
    url: "https://youtube.com/ranseraya",
  },
];