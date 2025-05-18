import { CardArticle } from "./ui/card";

const listArticle = [
    {
        title: "Membuat Autentikasi dengan Firebase",
        description: "Steps to use Firebase Authentication to login with email and Google OAuth.",
        date: "01, Mei 2025",
        tags: ["Firebase", "Auth"],
        url: "#",
    }, 
]

export default function ArticleContainer() {
    return (
        <div className="md:col-span-7 space-y-10">
            {listArticle.map((article, index) => {
                return (
                    <CardArticle key={index} title={article.title} description={article.description} date={article.date} tags={article.tags} url={article.url}/>
                )
            })}
        </div>
    )
}