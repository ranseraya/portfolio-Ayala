// Project.jsx
import ProjectTags from '@/components/projects-container'
import TypingEffect from '@/components/typing-effect'
import Image from 'next/image'
import React from 'react'

export const metadata = { // Tambahkan metadata untuk SEO
    title: "My Projects | Front-End Developer & Cybersecurity Enthusiast",
    description: "Koleksi proyek-proyek saya di bidang pengembangan web dan keamanan siber.",
};

export default function ProjectsPage() {
    return (
        <main className="flex flex-col flex-1 gap-4 p-4 pt-0">
            {/* Mengubah bg-muted/50 ke section, dan menghilangkan div wrapper di dalamnya */}
            <section
                aria-labelledby="projects-heading"
                className="bg-muted/50 aspect-auto rounded-xl px-4 md:px-10 flex flex-col items-start w-full overflow-auto h-[90vh]" // h-[90vh] mungkin perlu disesuaikan jika konten lebih panjang
            >
                <div className='mt-10 flex flex-col items-center w-full box-content'>
                    {/* Judul utama menggunakan text-primary */}
                    <h1 className="text-4xl orbitron text-primary">
                        My Works & Projects {/* Mengubah dari "Hi, I'm Ayala" ke judul yang lebih relevan untuk halaman proyek */}
                    </h1>
                    {/* TypingEffect menggunakan text-primary untuk konsistensi aksen */}
                    <span className='text-xl text-primary'>
                        <TypingEffect
                            words={[
                                "Front-End Development",
                                "Cybersecurity Solutions"
                            ]}
                        />
                    </span>
                    {/* Deskripsi utama menggunakan text-foreground */}
                    <p className='text-xl text-foreground text-center mt-2'>
                        A collection of real-world applications and experiments that highlight my front-end and back-end development skills.
                    </p>
                </div>

                <ProjectTags/>
            </section>
        </main>
    )
}