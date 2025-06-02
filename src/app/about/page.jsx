import CareerGoals from "@/components/about-page/career-goals";
import EducationSection from "@/components/about-page/education";
import ExperienceSection from "@/components/about-page/experience";
import PersonalInterest from "@/components/about-page/personal-interest";
import TypingEffect from "@/components/typing-effect";
import Image from "next/image";
import React from "react";

import { aboutPageData } from "@/lib/data/about";

export const metadata = {
  title: "About Ayala | Front-End Developer & Cybersecurity Enthusiast",
  description:
    "Profil Ayala Septama Rahanda, seorang pengembang front-end dan antusias di bidang keamanan siber.",
};

export default function Page() {
  const { mainTitle, taglineWords, introSummary, socialLinks, personalIntro } = aboutPageData;

  return (
    <main className="flex flex-col flex-1 gap-4 p-4 pt-0 max-h-[90vh]">
      <section
        aria-labelledby="about-heading"
        className="h-[90vh] bg-muted/50 aspect-auto rounded-xl px-4 md:px-10 flex flex-col items-start w-full overflow-auto"
      >
        <div className="mt-10 flex flex-col items-center w-full">
          <h1 className="text-2xl sm:text-4xl orbitron text-primary">{mainTitle}</h1>
          <span className="text-sm sm:text-xl text-foreground">
            <TypingEffect words={taglineWords} />
          </span>
          <p className="text-xs sm:text-base text-muted-foreground mt-2 max-w-2xl mx-auto text-center">
            {introSummary}
          </p>
          <ul className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 text-xs sm:text-lg space-y-2 mt-4">
            {socialLinks.map((link, index) => (
              <li key={index} className="flex items-center gap-2 spaceGrotesk hover:text-primary">
                <link.icon className="size-4 sm:size-5 text-primary" />
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full space-y-5 text-left pt-10">
          <div>
            <h2 className="text-xl sm:text-3xl font-semibold text-primary">
              Personal Introduction
            </h2>
            <div className="flex lg:flex-row flex-col w-full justify-center items-center mt-5 gap-10">
              <div className="relative bg-card h-75 w-2/3 lg:w-1/2 xl:w-1/4 rounded-xl overflow-hidden glassmorph-g">
                <Image
                  src={personalIntro.imageSrc}
                  alt="foto-about"
                  fill
                  className="object-cover z-0"
                />
              </div>
              <div className="w-full sm:w-9/12">
                <p className="text-foreground mt-1 text-md sm:text-lg text-justify indent-6">
                  {personalIntro.paragraph1}
                </p>
                <p className="text-foreground mt-1 text-md sm:text-lg text-justify indent-6">
                  {personalIntro.paragraph2}
                </p>
              </div>
            </div>
          </div>
          <CareerGoals />
          <ExperienceSection />
          <EducationSection />
          <PersonalInterest />
        </div>
      </section>
    </main>
  );
}
