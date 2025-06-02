import SkillSet from "@/components/skills-page/skill-set";
import Technologies from "@/components/skills-page/technologies";
import TypingEffect from "@/components/typing-effect";
import { skillsPageHeaderData } from "@/lib/data/skills";

export const metadata = {
  title: "Expertise Ayala Septama Rahanda",
  description:
    "A comprehensive list of technical skills, programming languages, frameworks, and tools mastered by Ayala Septama Rahanda for web development and cybersecurity analysis.",
};

export default function SkillsToolsPage() {
  const { mainTitle, typingWords, description } = skillsPageHeaderData;
  return (
    <main className="flex flex-col flex-1 gap-4 p-4 pt-0 max-h-[90vh]">
      <section
        aria-labelledby="skills-tools-heading"
        className="bg-muted/50 aspect-auto rounded-xl px-4 md:px-10 flex flex-col items-start w-full overflow-auto h-[90vh]"
      >
        <div className="mt-10 flex flex-col items-center w-full">
          <h1 className="text-2xl sm:text-4xl orbitron text-primary">{mainTitle}</h1>
          <span className="text-sm sm:text-xl text-foreground">
            <TypingEffect words={typingWords} />
          </span>
          <p className="text-xs sm:text-base text-muted-foreground mt-2 max-w-2xl mx-auto text-center">
            {description}
          </p>
        </div>

        <div className="w-full gap-10 my-10 flex flex-col justify-center">
          <SkillSet />
          <Technologies />
        </div>
      </section>
    </main>
  );
}
