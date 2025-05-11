import CareerGoals from '@/components/career-goals';
import EducationSection from '@/components/education';
import ExperienceSection from '@/components/experience';
import PersonalInterest from '@/components/personal-interest';
import TypingEffect from '@/components/typing-effect'
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
                        <ul className="flex gap-4 text-xs sm:text-lg space-y-2">
                            <li><a href="" className="flex items-center gap-2">
                                <Image src={"/icons/mails.svg"} alt="" height={20} width={20} />ayalarahanda0@gmail.com
                            </a></li>
                            <li><a href="" className="flex items-center gap-2">
                                <Image src={"/icons/github.svg"} alt="" height={20} width={20} />@ranseraya
                            </a></li>
                            <li className="hover:text-blue-400"><a href="" className="flex items-center gap-2">
                                <Image src={"/icons/linkedin.svg"} alt="" height={20} width={20} />@ranseraya
                            </a></li>
                            <li className="hover:text-blue-400"><a href="" className="flex items-center gap-2">
                                <Image src={"/icons/instagram.svg"} alt="" height={20} width={20} />@ranseraya
                            </a></li>
                        </ul>
                    </div>

                    <div className="w-full space-y-6 text-left pt-10">
                        <div>
                            <h2 className="text-2xl font-semibold">Personal Introduction</h2>
                            <div className='flex mt-5 gap-10'>
                                <Image src={'/foto-about.png'} alt='foto-about' height={0} width={200} className='h-auto'/>
                                <div>
                                    <p className="text-muted-foreground mt-1 text-lg">
                                        I'm Ayala Septama Rahanda, passionate about building clean and user-friendly web interfaces, while actively exploring the world of cybersecurity. I love working in collaborative environments and continuously growing through hands-on projects.
                                    </p>
                                    <p className="text-muted-foreground mt-1 text-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus dolor repudiandae voluptate atque quidem aliquam rem ratione earum quia dolore expedita blanditiis, nihil accusamus.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <ExperienceSection />
                        </div>

                        <div>
                            <EducationSection />
                        </div>

                        <div>
                            <CareerGoals />
                        </div>
                        <div>
                            <PersonalInterest />
                        </div>
                    </div>

            </div>
        </section>
        </main >
    )
}
