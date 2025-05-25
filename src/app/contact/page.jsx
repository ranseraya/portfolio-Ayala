import Contact from "@/components/contact-email";
import Contacts from "@/components/contacts";
import TypingEffect from "@/components/typing-effect";

export default function Page() {
    return (
        <main className="flex flex-col flex-1 gap-4 p-4 pt-0">
            <section
                aria-labelledby="about-heading"
                className="grid grid-cols-1 h-full">
                <div className="bg-muted/50 aspect-auto rounded-xl px-10 flex flex-col items-start h-[90vh] w-full overflow-auto">
                    <div className='mt-10 flex flex-col items-center w-full'>
                        <h1 className="text-4xl orbitron text-blue-600 dark:text-blue-400 ">
                            Contact Me
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

                    <div className="w-full flex flex-col justify-center">
                        <Contact />
                        <Contacts />
                    </div>
                </div>
            </section>
        </main>
    )
}