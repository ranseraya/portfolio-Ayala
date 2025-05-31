"use client";

import { useState } from "react";
import NewTag from "../filter-tag";
import { recommendedArticleTags, recommendedArticlesData } from "@/lib/data/blog";

export default function RecomendationArticle() {
  const [tag, setTag] = useState("Recent");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredArticles = recommendedArticlesData.filter((article) =>
    article.tag.includes(tag)
  );

  return (
    <aside className="md:col-span-5 bg-card rounded-xl p-5 h-120 border border-border shadow-md">
      <h3 className="text-primary text-xl sm:text-2xl font-bold mb-4">
        Filter Content
      </h3>
      <section className="flex flex-wrap gap-2 mb-6">
        {recommendedArticleTags.map((currTag, index) => {
          return (
            <NewTag
              onClick={handleTagChange}
              key={index}
              name={currTag}
              isSelected={tag === currTag}
              rounded={"full"}
              fontSize={"small"}
            />
          );
        })}
      </section>
      <section>
        <h3 className="text-xl sm:text-2xl text-primary font-bold mb-4">
          Recommended Articles
        </h3>
        <ul className="space-y-3">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((data, index) => (
              <li key={index}>
                <a
                  href={data.link}
                  className="text-foreground hover:underline block text-base line-clamp-2"
                  title={data.title}
                >
                  {data.title}
                </a>
                {data.date && (
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {data.date}
                  </p>
                )}
              </li>
            ))
          ) : (
            <p className="text-red-400 text-base">
              There is no content about {tag}.
            </p>
          )}
        </ul>
      </section>
    </aside>
  );
}
