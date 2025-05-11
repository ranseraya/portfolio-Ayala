import TypingEffect from "@/components/typing-effect";
import Image from "next/image";
import fotoProfile from "@/assets/1G.png";
import HighlightHome from "@/components/highlight-Home";

export const metadata = {
  title: "About Ayala | Front-End Developer & Cybersecurity Enthusiast",
  description: "Profil Ayala Septama Rahanda, seorang pengembang front-end dan antusias di bidang keamanan siber.",
};

export default function Page() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <section className="grid auto-rows-min gap-4 md:grid-cols-2">
        <div className="bg-muted/50 aspect-auto rounded-xl p-4 flex flex-col items-start justify-around ">
          <div className="pr-4 h-1/2 flex flex-col justify-start">
            <h1 className="text-3xl mb-5">
              Hi, I'm Ayala <br />
              <TypingEffect
                words={[
                  "Front-End Developer",
                  "Cybersecurity Enthusiast"
                ]}
              />
            </h1>
            <p className="text-lg">
              Passionate about building web apps and exploring cybersecurity principles through self-paced learning and real projects.
            </p>
          </div>
            <div className='flex flex-row mt-15 sm:mt-4 items-center gap-4'>
              <a href="#contact"
                className='px-5 py-2 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
              >Contact me</a>
              <a href="/sample-resume.pdf" download
                className='px-5 py-2 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
              >
                My resume</a>
            </div>
        </div>
        <div className="bg-muted/50 aspect-auto rounded-xl flex justify-between px-5">
          <div className="mt-2 sm:mt-10 flex flex-col justify-around">
            <div className="">
              <h2 className="text-xl sm:text-2xl font-semibold">Ayala <span className="text-xl sm:text-2xl font-semibold hidden sm:inline">Septama </span>Rahanda</h2>
              <p className="text-sm text-gray-300">Based in Indonesia</p>
              <p></p>
            </div>
              <ul className="text-xs sm:text-sm space-y-2">
                <li><a href="" className="flex items-center gap-2">
                  <Image src={"/icons/user.svg"} alt="" height={20} width={20} />UPN Veteran Jawa Timur
                </a></li>
                <li><a href="" className="flex items-center gap-2">
                  <Image src={"/icons/mails.svg"} alt="" height={20} width={20} />ayalarahanda0@gmail.com
                </a></li>
                <li><a href="" className="flex items-center gap-2">
                  <Image src={"/icons/github.svg"} alt="" height={20} width={20} />@ranseraya
                </a></li>
                <li className="hover:text-blue-400"><a href="" className="flex items-center gap-2">
                  <Image src={"/icons/linkedin.svg"} alt="" height={20} width={20} />@ranseraya
                </a></li>
              </ul>
          </div>
          <div className="w-1/2 flex justify-end">
            <Image src={fotoProfile} alt="foto-profile" className="w-auto max-h-80" />
          </div>
        </div>
      </section>

      <section className="bg-muted/50 rounded-xl py-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">My Expertise</h2>
        <a href="/portfolio" className="text-blue-400 hover:underline">See Portfolio →</a>
      </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="h-44 rounded-xl bg-muted/50 flex flex-col justify-center items-center text-bold">
            <h1 className="text-xl mb-4 orbitron">Frond-End</h1>
            <ul className="flex flex-col justify-baseline">
              <li>⚡ Build responsive & modern UI</li>
              <li>⚡ Design accessible & SEO-friendly websites</li>
              <li>⚡ Integrate APIs & dynamic content</li>
              <li>⚡ Optimize performance & loading speed</li>
            </ul>
          </div>
          <div className="aspect-auto py-4 rounded-xl bg-muted/50 flex flex-col justify-center items-center text-bold">
            <h1 className="text-xl mb-4 orbitron">Cybersecurity Entry-level</h1>
            <ul className="flex flex-col justify-baseline">
              <li>⚡ Build responsive & modern UI</li>
              <li>⚡ Design accessible & SEO-friendly websites</li>
              <li>⚡ Integrate APIs & dynamic content</li>
              <li>⚡ Cybercrime, Incident/Intrution | Analyst</li>
            </ul>
          </div>
        </div>
        <HighlightHome />
      </section>
    </main>
  );
}
