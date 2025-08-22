import TypingEffect from "@/components/typing-effect";
import Image from "next/image";
import HighlightHome from "@/components/dashboard-page/highlight-Home";
import { UserCircle2Icon, MailsIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { introData, contactInfo, expertiseAreas } from '@/lib/data/dashboard'
import Link from "next/link";

export const metadata = {
  title: "Dashboard Portfolio Ayala",
  description:
    "Welcome to Ayala Septama Rahanda's portfolio. Explore modern web development projects and cybersecurity insights. Ready to collaborate for innovative solutions.",
};

export default function Page() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 pt-0 max-h-[90vh] overflow-y-scroll">
      <section className="grid auto-rows-min gap-4 lg:grid-cols-2">
        <div className="relative min-h-50 sm:min-h-80 bg-muted/80 aspect-auto rounded-xl p-4 flex flex-col items-start justify-around">
          <div className="z-1 pr-4 h-1/2 flex flex-col justify-start">
            <h1 className="text-lg lg:text-2xl xl:text-3xl mb-5 orbitron text-primary">
              Hi, I'm {introData.firstname} <br />
              <TypingEffect
                words={["Front-End Developer", "Cybersecurity Enthusiast"]}
              />
            </h1>
            <p className="text-sm md:text-base xl:text-lg text-foreground text-justify">
              {introData.description}
            </p>
          </div>
          <div className="flex flex-row mt-10 sm:mt-4 items-center gap-4">
            <Link
              href="/contact"
              className="text-xs sm:text-base px-5 py-2 border border-primary rounded-full bg-primary text-primary-foreground flex items-center gap-2 dark:bg-transparent dark:border-primary dark:text-primary"
            >
              Contact me
            </Link>
            <a
              href={introData.resumeLink}
              download
              className="text-xs sm:text-base px-5 py-2 border rounded-full border-border flex items-center gap-2 bg-card text-card-foreground duration-500 hover:bg-primary hover:text-primary-foreground"
            >
              My resume
            </a>
          </div>
        </div>
        <div className="bg-muted/80 aspect-auto rounded-xl flex justify-between gap-2 px-5 py-5 sm:py-0">
          <div className="mt-2 sm:mt-10 flex flex-col justify-around">
            <div className="">
              <h2 className="text-xl sm:text-2xl orbitron text-primary">
               {introData.firstname}{" "}
                <span className="text-xl sm:text-2xl font-semibold hidden sm:inline text-foreground">
                  {!introData.midname ? introData.midname : ''}{" "}
                </span>
                {introData.lastname}
              </h2>
              <p className="text-sm text-muted-foreground">
                {introData.location}
              </p>
              <p></p>
            </div>
            <ul className="text-xs sm:text-sm space-y-2 text-foreground">
              <li className="flex items-center gap-2 spaceGrotesk">
                <UserCircle2Icon className="size-4 sm:size-5 text-primary" />
                {contactInfo.university}
              </li>
              <li className="hover:text-primary">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 spaceGrotesk"
                >
                  <MailsIcon className="size-4 sm:size-5 text-primary" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="hover:text-primary">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 spaceGrotesk"
                >
                  <FaGithub className="size-4 sm:size-5 text-primary" />
                  @ranseraya
                </a>
              </li>
              <li className="hover:text-primary">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 spaceGrotesk"
                >
                  <FaLinkedin className="size-4 sm:size-5 text-primary" />
                  @ranseraya
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-auto max-h-11/12 h-auto rounded-full flex items-center overflow-hidden glassmorph-g">
              <Image
                src={introData.profilePic}
                width={300}
                height={400}
                alt="foto-profile"
                className=" w-auto max-h-50 sm:max-h-80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/80 rounded-xl py-6 px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-3xl font-semibold spaceGrotesk text-foreground">
            My Expertise
          </h2>
          <Link
            href="/projects"
            className="text-xs sm:text-base px-3 py-1.5 border rounded-full border-border flex items-center gap-2 bg-card text-card-foreground duration-500 hover:bg-primary hover:text-primary-foreground"
          >
            See Portfolio <span className="hidden sm:block">→</span>
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 text-sm sm:text-base">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="h-44 rounded-xl glassmorph-g flex flex-col justify-center items-center text-foreground">
              <h1 className="texl-base sm:text-xl mb-4 md:mb-2 xl:mb-4 orbitron text-primary">{area.title}</h1>
              <ul className="flex flex-col justify-baseline text-foreground px-5 md:px-3 xl:px-5">
                {area.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-baseline">- <p className="text-xs lg:text-sm xl:text-base">{point}</p></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <HighlightHome />
      </section>
    </main>
  );
}
