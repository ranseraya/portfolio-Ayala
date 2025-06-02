import TypingEffect from "@/components/typing-effect";
import ProjectSection from "@/components/projects-page/projects";
import { projectsPageHeaderData } from "@/lib/data/projects";

export const metadata = {
  title: "Portfolio Ayala Septama Rahanda",
  description:
    "Explore the collection of web development projects (Front-End, Backend, Full Stack) and cybersecurity solutions created by Ayala Septama Rahanda.",
};

export default function ProjectsPage() {
  const { mainTitle, typingWords, description } = projectsPageHeaderData;
  return (
    <main className="flex flex-col flex-1 gap-4 p-4 pt-0 max-h-[90vh]">
      <section
        aria-labelledby="projects-heading"
        className="bg-muted/50 aspect-auto rounded-xl px-4 md:px-10 flex flex-col items-start w-full overflow-auto h-[90vh]"
      >
        <div className="mt-10 flex flex-col items-center w-full box-content">
          <h1 className="text-2xl sm:text-4xl orbitron text-primary">{mainTitle}</h1>
          <span className="text-sm sm:text-xl text-foreground">
            <TypingEffect words={typingWords} />
          </span>
          <p className="text-xs sm:text-base text-muted-foreground mt-2 max-w-2xl mx-auto text-center">
            {description}
          </p>
        </div>

        <ProjectSection />
      </section>
    </main>
  );
}
