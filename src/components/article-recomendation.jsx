'use client'

import { useState } from "react";
import NewTag from "./filter-tag";

const tagFilter = ['Recent', 'Popular', 'General', 'Technology', 'Cybersecurity'];
const listData = [
    {
        id: 1,
        title: 'Just unknown link cause, not enough articles I create!',
        tag: ["Recent", "unknown"],
        link: '#',
    },
    {
        id: 1,
        title: 'Just unknown link cause, not enough articles I create!',
        date: '',
        tag: ["Recent", "unknown"],
        link: '#',
    },
    {
        id: 2,
        title: 'Just unknown link cause, not enough articles I create!',
        date: '',
        tag: ["Recent", "unknown"],
        link: '#',
    },
]
export default function RecomendationArticle() {
    const [tag, setTag] = useState("Recent");
    // const ref = useRef(null);
    const onSubmit = async (event) => {
        event.preventDefault();
    };

    const handleTagChange = (tag) => {
        setTag(tag);
    };

    const filteredProjects = listData.filter((project) =>
        project.tag.includes(tag)
    );
    return (
        <aside className="md:col-span-5 p-4">
            <h3 className="text-green-500 text-xl sm:text-2xl shadow font-bold mb-4">Filter Content</h3>
            <section className="flex flex-wrap justify-center gap-4 my-5">
                {tagFilter.map((currTag, index) => {
                    return (
                        <NewTag
                            onClick={handleTagChange}
                            key={index}
                            name={currTag}
                            isSelected={tag === currTag}
                            rounded={'full'}
                            fontSize={'small'}
                        />
                    )
                })}
            </section>
            <section>
                <ul className="space-y-2">
                    {filteredProjects != '' ? filteredProjects.map((data, index) => (
                        <li key={index}><a href={data.link} className="text-gray-200 hover:underline">{data.title}</a></li>
                    )) : <h1 className="text-red-400 text-lg sm:text-xl">There is no content about {tag}</h1>}
                </ul>

            </section>
        </aside>
    )
}