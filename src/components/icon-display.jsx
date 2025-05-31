import { Code2, Rocket, ShieldIcon, GitPullRequest, MusicIcon, Globe } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa"; 

const lucideIconComponents = {
  Code2: Code2,
  Rocket: Rocket,
  ShieldIcon: ShieldIcon,
  GitPullRequest: GitPullRequest,
  MusicIcon: MusicIcon,
  Globe: Globe,

};

const faIconComponents = {
  FaGithub: FaGithub,
  FaLinkedinIn: FaLinkedinIn,
  FaInstagram: FaInstagram,
  FaEnvelope: FaEnvelope,

};

const allIconComponents = {
  ...lucideIconComponents,
  ...faIconComponents,
};

export default function IconDisplay({ iconName, className }) {
  const IconComponent = allIconComponents[iconName];
  if (!IconComponent) {
    console.warn(`Icon component for "${iconName}" not found.`);
    return null;
  }
  return <IconComponent className={className} />;
}