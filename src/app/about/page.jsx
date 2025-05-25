// About.jsx
import CareerGoals from '@/components/career-goals';
import EducationSection from '@/components/education';
import ExperienceSection from '@/components/experience';
import PersonalInterest from '@/components/personal-interest';
import TypingEffect from '@/components/typing-effect'
import Image from 'next/image';
import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa'; 

export const metadata = {
    title: "About Ayala | Front-End Developer & Cybersecurity Enthusiast",
    description: "Profil Ayala Septama Rahanda, seorang pengembang front-end dan antusias di bidang keamanan siber.",
};

export default function Page() {
    return (
        <main className="flex flex-col flex-1 gap-4 p-4 pt-0">
            <section
                aria-labelledby="about-heading"
                className="h-[90vh] bg-muted/50 aspect-auto rounded-xl px-4 md:px-10 flex flex-col items-start w-full overflow-auto"
            >
                <div className='mt-10 flex flex-col items-center w-full'>
                    <h1 className="text-4xl orbitron text-primary">
                        My Works & Projects
                    </h1>
                    <span className='text-xl text-foreground'>
                        <TypingEffect
                            words={[
                                "Front-End Developer",
                                "Cybersecurity Enthusiast"
                            ]}
                        />
                    </span>
                    <span className="text-xl text-foreground text-center mt-2">
                        A collection of real-world applications and experiments that highlight my front-end and back-end development skills
                    </span>
                    <ul className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 text-xs sm:text-lg space-y-2 mt-4">
                        <li className="flex items-center gap-2 spaceGrotesk hover:text-primary">
                            <FaEnvelope className="w-5 h-5 text-primary" /> 
                            <a href="mailto:ayalarahanda0@gmail.com">ayalarahanda0@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-2 spaceGrotesk hover:text-primary">
                            <FaGithub className="w-5 h-5 text-primary" />
                            <a href="https://github.com/ranseraya" target="_blank" rel="noopener noreferrer">@ranseraya</a>
                        </li>
                        <li className="flex items-center gap-2 spaceGrotesk hover:text-primary">
                            <FaLinkedinIn className="w-5 h-5 text-primary" /> 
                            <a href="https://linkedin.com/in/ranseraya" target="_blank" rel="noopener noreferrer">@ranseraya</a>
                        </li>
                        <li className="flex items-center gap-2 spaceGrotesk hover:text-primary">
                            <FaInstagram className="w-5 h-5 text-primary" />
                            <a href="https://instagram.com/ranseraya" target="_blank" rel="noopener noreferrer">@ranseraya</a>
                        </li>
                    </ul>
                </div>

                <div className="w-full space-y-10 text-left pt-10">
                    <div>
                        <h2 className="text-2xl font-semibold text-primary">Personal Introduction</h2>
                        <div className='flex sm:flex-row flex-col w-full justify-center items-center mt-5 gap-10'>
                            <div className='relative bg-card h-75 w-2/3 sm:w-1/4 rounded-xl overflow-hidden glassmorph-g'>
                                <Image src={'/about.jpeg'} alt='foto-about' fill className='object-cover' />
                            </div>
                            <div className='w-full sm:w-9/12'>
                                <p className="text-foreground mt-1 text-md sm:text-lg text-justify indent-6">
                                    I'm Ayala Septama Rahanda, passionate about building clean and user-friendly web interfaces, while actively exploring the world of cybersecurity. I love working in collaborative environments and continuously growing through hands-on projects.
                                </p>
                                <p className="text-foreground mt-1 text-md sm:text-lg text-justify indent-6">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus dolor repudiandae voluptate atque quidem aliquam rem ratione earum quia dolore expedita blanditiis, nihil accusamus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <CareerGoals />
                    <ExperienceSection />
                    <EducationSection />
                    <PersonalInterest />
                </div>
            </section>
        </main >
    )
}