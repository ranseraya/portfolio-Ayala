import RecomendationArticle from "@/components/blog-page/article-recomendation";
import ArticleContainer from "@/components/blog-page/articles";
import TypingEffect from "@/components/typing-effect";
import React from "react";
import { blogPageHeaderData } from "@/lib/data/blog";

export const metadata = {
  title: "Blog | Ayala's Cybersecurity Insights",
  description:
    "Artikel dan wawasan terbaru tentang pengembangan web, keamanan siber, dan teknologi.",
};

export default function BlogPage() {
  const { mainTitle, typingWords, description } = blogPageHeaderData;
  return (
    <main className="flex flex-col flex-1 gap-4 p-4 pt-0 max-h-[90vh]">
      <section
        aria-labelledby="blog-heading"
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
        <div className="mt-5 sm:mt-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
          <ArticleContainer />
          <RecomendationArticle />
        </div>
      </section>
    </main>
  );
}
