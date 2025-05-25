// Dashboard.jsx
import TypingEffect from "@/components/typing-effect";
import Image from "next/image";
import fotoProfile from "@/assets/1G.png";
import HighlightHome from "@/components/highlight-Home";
import { UserCircle2Icon, MailsIcon } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const metadata = {
  title: "About Ayala | Front-End Developer & Cybersecurity Enthusiast",
  description: "Profil Ayala Septama Rahanda, seorang pengembang front-end dan antusias di bidang keamanan siber.",
};

export default function Page() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <section className="grid auto-rows-min gap-4 md:grid-cols-2">
        <div className="relative min-h-70 bg-muted/80 aspect-auto rounded-xl p-4 flex flex-col items-start justify-around">
          <div className="z-1 pr-4 h-1/2 flex flex-col justify-start">
            <h1 className="text-3xl mb-5 orbitron text-primary">
              Hi, I'm Ayala <br />
              <TypingEffect
                words={[
                  "Front-End Developer",
                  "Cybersecurity Enthusiast"
                ]}
              />
            </h1>
            <p className="text-lg text-foreground text-justify">
              Passionate about building web apps and exploring cybersecurity principles through self-paced learning and real projects.
            </p>
          </div>
          <div className='flex flex-row mt-15 sm:mt-4 items-center gap-4'>
            <a href="#contact"
              className='px-5 py-2 border border-primary rounded-full bg-primary text-primary-foreground flex items-center gap-2 dark:bg-transparent dark:border-primary dark:text-primary'
            >Contact me</a>
            <a href="/sample-resume.pdf" download
              className='px-5 py-2 border rounded-full border-border flex items-center gap-2 bg-card text-card-foreground duration-500 hover:bg-primary hover:text-primary-foreground'
            >
              My resume</a>
          </div>
        </div>
        <div className="bg-muted/80 aspect-auto rounded-xl flex justify-between px-5">
          <div className="mt-2 sm:mt-10 flex flex-col justify-around">
            <div className="">
              <h2 className="text-xl sm:text-2xl orbitron text-primary">Ayala <span className="text-xl sm:text-2xl font-semibold hidden sm:inline text-foreground">Septama </span>Rahanda</h2>
              <p className="text-sm text-muted-foreground">Based in Indonesia</p>
              <p></p>
            </div>
            <ul className="text-xs sm:text-sm space-y-2 text-foreground">
              <li className="flex items-center gap-2 spaceGrotesk">
                <UserCircle2Icon className="size-5 text-primary" />UPN Veteran Jawa Timur
              </li>
              <li className="hover:text-primary"><a href="mailto:ayalarahanda0@gmail.com" className="flex items-center gap-2 spaceGrotesk">
                <MailsIcon className="size-5 text-primary" />ayalarahanda0@gmail.com
              </a></li>
              <li className="hover:text-primary"><a href="https://github.com/ranseraya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 spaceGrotesk">
                <FaGithub className="w-5 h-5 text-primary" />@ranseraya
              </a></li>
              <li className="hover:text-primary"><a href="https://linkedin.com/in/ranseraya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 spaceGrotesk"> 
                <FaLinkedin className="w-5 h-5 text-primary" />@ranseraya
              </a></li>
            </ul>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-auto h-11/12 rounded-full flex items-center overflow-hidden glassmorph-g">
              <Image src={fotoProfile} alt="foto-profile" className=" w-auto max-h-80" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/80 rounded-xl py-6 px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl mb-4 font-semibold spaceGrotesk text-foreground">My Expertise</h2>
          <a href="/projects" className="px-3 py-1.5 border rounded-full border-border flex items-center gap-2 bg-card text-card-foreground duration-500 hover:bg-primary hover:text-primary-foreground">See Portfolio →</a>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="h-44 rounded-xl glassmorph-g flex flex-col justify-center items-center text-foreground">
            <h1 className="text-xl mb-4 orbitron text-primary">Front-End</h1>
            <ul className="flex flex-col justify-baseline text-foreground">
              <li>⚡ Build responsive & modern UI</li>
              <li>⚡ Design accessible & SEO-friendly websites</li>
              <li>⚡ Integrate APIs & dynamic content</li>
              <li>⚡ Optimize performance & loading speed</li>
            </ul>
          </div>
          <div className="aspect-auto py-4 rounded-xl flex flex-col glassmorph-g justify-center items-center text-foreground">
            <h1 className="text-xl mb-4 orbitron text-primary">Cybersecurity Entry-level</h1>
            <ul className="flex flex-col justify-baseline text-foreground">
              <li>⚡ Build responsive & modern UI</li>
              <li>⚡ Design accessible & SEO-friendly websites</li>
              <li>⚡ Integrate APIs & dynamic content</li>
              <li>⚡ Cybercrime, Incident/Intrusion | Analyst</li>
            </ul>
          </div>
        </div>
        <HighlightHome />
      </section>
    </main>
  );
}