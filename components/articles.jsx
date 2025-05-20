import { CardArticle } from "./ui/card";

const listArticle = [
    {
        title: "Peran Digital Forensik dalam Menjaga Data dan Stabilitas Informasi sebagai Wujud Nasionalisme di Era Digital",
        description: "Steps to use Firebase Authentication to login with email and Google OAuth.",
        date: "20, December 2024",
        tags: ["Technology", "Cybersecurity"],
        url: "https://www.kompasiana.com/ranseraya/676555c8c925c475fa7777c2/peran-digital-forensik-dalam-menjaga-data-dan-stabilitas-informasi-sebagai-wujud-nasionalisme-di-era-digital",
    },
    {
        title: 'Gerakan Peduli Lingkungan dalam Perspektif Sustainable Development Goals (Mahasiswa UPN "Veteran" Jawa Timur)',
        description: "Steps to use Firebase Authentication to login with email and Google OAuth.",
        date: "23 December 2024",
        tags: ["Firebase", "Auth"],
        url: "https://www.kompasiana.com/ranseraya/676869bb34777c310e4c94f2/gerakan-peduli-lingkungan-dalam-perspektif-sustainable-development-goals",
    },
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
        <section className="md:col-span-7 space-y-10">
            <h2 className="text-xl sm:text-2xl text-blue-500">Articles, Blogs, and Tutorials</h2>
            <div className="flex flex-col gap-5">
                {listArticle.map((article, index) => {
                    return (
                        <CardArticle key={index} title={article.title} description={article.description} date={article.date} tags={article.tags} url={article.url} />
                    )
                })}
            </div>
        </section>
    )
}