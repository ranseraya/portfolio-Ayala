import SkillSet from '@/components/skill-set';
import Technologies from '@/components/technologies';
import TypingEffect from '@/components/typing-effect';
import Image from 'next/image';
import React from 'react'

export const metadata = {
    title: "About Ayala | Front-End Developer & Cybersecurity Enthusiast",
    description: "Profil Ayala Septama Rahanda, seorang pengembang front-end dan antusias di bidang keamanan siber.",
};

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

                    <div className='w-full gap-10 my-5 flex flex-col justify-center'>
                        <SkillSet />
                        <Technologies />
                    </div>
                    
                </div>
            </section>
        </main >
    )
}