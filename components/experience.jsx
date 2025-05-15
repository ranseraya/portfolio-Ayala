import Image from 'next/image';
import React from 'react'

const ExperienceSection = () => {
    const experiences = [
        {
            logo: "/images.jpg",
            title: "Netwoking Internship",
            institution: "PT Laxo Akses Global",
            date: "July 2020 ➡ October 2020",
            desc: "Earned a Bachelor's degree in Computer Science, focusing on algorithms, data structures, software engineering, and web development. Gained hands-on experience through various programming projects and boot camps.",
            tech: [],
        },
        {
            logo: "/images.jpg",
            title: "PHP Development Nanodegree",
            institution: "Udacity",
            date: "Jan 2027 ➡ Jun 2027",
            desc: "Completed an intensive Nanodegree program focused on PHP development, covering backend programming, database management, and deployment.",
            tech: ["PHP 8+", "Laravel", "MongoDB"],
        },
        {
            logo: "/images.jpg",
            title: "PHP Development Nanodegree",
            institution: "Udacity",
            date: "Jan 2027 ➡ Jun 2027",
            desc: "Completed an intensive Nanodegree program focused on PHP development, covering backend programming, database management, and deployment.",
            tech: ["PHP 8+", "Laravel", "MongoDB"],
        },
        {
            logo: "/images.jpg",
            title: "PHP Development Nanodegree",
            institution: "Udacity",
            date: "Jan 2027 ➡ Jun 2027",
            desc: "Completed an intensive Nanodegree program focused on PHP development, covering backend programming, database management, and deployment.",
            tech: ["PHP 8+", "Laravel", "MongoDB"],
        },
    ];

    return (
        <section className="py-10 px-0 sm:px-5 flex flex-col items-center w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-green-400">Experience</h2>
            <div className="ml-6 space-y-10">
                {experiences.map((exp, index) => (
                    <div key={index} className="flex items-start justify-between gap-0 sm:gap-6">
                        <div className='relative flex'>
                            <div className='absolute w-1 h-70 sm:h-50 bg-gray-800 '></div>
                            <div className="absolute -left-6.5 -top-8.5 sm:top-0 sm:-left-9.5 w-15 sm:w-20 h-15 sm:h-20 bg-black border-4 border-green-500 rounded-full flex overflow-hidden justify-center items-center">
                                <Image src={exp.logo} width={80} height={80} alt="logo" className="object-contain" />
                            </div>
                        </div>
                        <div className="ml-0 sm:ml-15 bg-zinc-900 text-white p-5 rounded-xl w-full shadow-md">
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center mb-2">
                                <h3 className="text-sm sm:text-lg font-bold">
                                    {exp.title.split(" ").slice(0, -1).join(" ")}{" "}
                                    <span className="text-green-400">{exp.title.split(" ").slice(-1)}</span>
                                </h3>
                                <span className="bg-zinc-800  text-[10px] sm:text-xs px-3 py-1 rounded-full">
                                    {exp.date}
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-justify text-gray-300 mb-2">
                                <span className="text-green-400 font-semibold">
                                    <span className='text-white linier sm:hidden'>Institution </span>
                                    {exp.institution}
                                    </span><br />
                                {exp.desc}
                            </p>
                            {exp.tech.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {exp.tech.map((item, i) => (
                                        <span key={i} className="text-xs bg-zinc-700 px-2 py-1 rounded-full">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                <div className="w-50 h-auto bg-black border-4 border-gray-800 flex justify-center items-center">
                    {/* <Image src={'/a.png'} width={0} height={0} alt="logo" className="w-6 h-6 object-contain" /> */}
                    <h1>Comming soon</h1>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
