import React from 'react'

export default function Page() {
    return (
        <main className="flex flex-col flex-1 gap-4 p-4 pt-0">
            <section
                aria-labelledby="about-heading"
                className="grid grid-cols-1 h-full">
                <div className="bg-muted/50 aspect-auto rounded-xl p-4 flex flex-col items-start justify-around">
                    <h1 id="about-heading" className="sr-only">About Me</h1>
                    {/* Konten di sini */}
                    
                </div>
            </section>
        </main>
    )
}
