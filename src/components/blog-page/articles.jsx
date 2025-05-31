import { FaArrowRight } from 'react-icons/fa'; 
import { blogArticlesData } from '@/lib/data/blog';

const BlogCard = ({ title, description, date, tags, url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full">
            <div className="bg-card rounded-xl p-5 border border-border shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-wrap gap-2 mb-3">
                    {tags && tags.map((tag, i) => (
                        <span key={i} className="bg-secondary text-secondary-foreground text-[10px] sm:text-xs px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-sm sm:text-xl font-semibold text-primary mb-2 line-clamp-2" title={title}>
                    {title}
                </h3>
                <p className="text-[10px] sm:text-sm text-muted-foreground mb-4 line-clamp-3">
                    {description}
                </p>
                <div className="flex justify-between items-center text-xs text-muted-foreground pt-3 border-t border-border mt-auto">
                    <span className='text-[10px] sm:text-xs text-foreground'>{date}</span>
                    <span className="inline-flex items-center text-primary hover:underline cursor-pointer">
                        Read More <FaArrowRight className="ml-1" />
                    </span>
                </div>
            </div>
        </a>
    );
};


export default function ArticleContainer() {
    return (
        <section className="md:col-span-7 space-y-5">
            <h2 className="hidden sm:bloxk text-2xl text-primary font-bold">Articles, Blogs, & Tutorials</h2>
            <div className="flex flex-col gap-5">
                {blogArticlesData.map((article, index) => {
                    return (
                        <BlogCard
                            key={index}
                            title={article.title}
                            description={article.description}
                            date={article.date}
                            tags={article.tags}
                            url={article.url}
                        />
                    );
                })}
            </div>
        </section>
    );
}