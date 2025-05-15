import ProjectTags from '@/components/project/projects-container'
import TypingEffect from '@/components/typing-effect'
import Image from 'next/image'
import React from 'react'

export default function ProjectsPage() {
    return (
        <main className="flex flex-col flex-1 gap-4 p-4 pt-0">
            <section
                aria-labelledby="about-heading"
                className="grid grid-cols-1 h-full">
                <div className="bg-muted/50 aspect-auto rounded-xl px-10 flex flex-col items-start h-[90vh] w-full overflow-auto">
                    <div className='mt-10 flex flex-col items-center w-full box-content'>
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

                    {/* <div className=''> */}
                        <ProjectTags/>
                    {/* </div> */}
                </div>
            </section>
        </main>
    )
}