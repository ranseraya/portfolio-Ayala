import RecomendationArticle from "@/components/article-recomendation";
import ArticleContainer from "@/components/articles";
import TypingEffect from "@/components/typing-effect";

export default function Page() {
    return (
        <main className="flex flex-col flex-1 gap-4 p-4 pt-0">
            <section
                aria-labelledby="about-heading"
                className="grid grid-cols-1 h-full">
                <div className="bg-muted/50 aspect-auto rounded-xl px-10 flex flex-col items-start h-[90vh] w-full overflow-auto">
                    <div className='mt-10 flex flex-col items-center w-full'>
                        <h1 className="text-4xl orbitron">
                            Hi, I'm Ayala
                        </h1>
                        <span className='text-xl'>
                            <TypingEffect
                                words={[
                                    "Front-End Developer",
                                    "Cybersecurity Enthusiast"
                                ]}
                            />
                        </span>
                    </div>

                    <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-12 gap-12">
                        <ArticleContainer />
                        <RecomendationArticle />
                    </div>
                </div>
            </section>
        </main>
    )
}