'use client'

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { NetworkIcon, FileEditIcon, ShieldAlertIcon } from 'lucide-react'

export default function SkillSet() {
    const [api, setApi] = useState()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    //Auto next card 
    useEffect(() => {
        if (!api) return

        const interval = setInterval(() => {
            api.scrollNext()
        }, 10000)

        return () => clearInterval(interval)
    }, [api])

    // const scrollNext = () => {
    //     if (!api) return
    //     const newIndex = api.selectedScrollSnap() + 3
    //     api.scrollTo(newIndex >= count ? 0 : newIndex)
    //   }

    //   const scrollPrev = () => {
    //     if (!api) return
    //     const newIndex = api.selectedScrollSnap() - 3
    //     api.scrollTo(newIndex < 0 ? count - 1 : newIndex)
    //   }
    const certList = [
        {
            title: 'Fullstack Web Dev',
            logo: '/icons/network.svg',
            url: '/JavaScript_Essentials_1_Badge.jpg',
            description: 'Providing complete solutions for website development, from front-end to backend...',
        },
        {
            title: 'Frontend Web Dev',
            logo: '/icons/network.svg',
            url: '/JavaScript_Essentials_1_Badge.jpg',
            description: 'Providing complete solutions for website development, from front-end to backend...',
        },
        {
            title: 'Information Security',
            logo: '/icons/shield-check.svg',
            url: '/JavaScript_Essentials_1_Badge.jpg',
            description: 'Provide best security for information...',
        },
        {
            title: 'Penetration Testing (Application)',
            logo: '/icons/shield-check.svg',
            url: '/JavaScript_Essentials_1_Badge.jpg',
            description: 'Pentest application, website, api, and networking',
        },
        {
            title: 'Content Writing',
            logo: '/icons/file-pen.svg',
            url: '/JavaScript_Essentials_1_Badge.jpg',
            description: 'High-quality content writing services for articles, blogs, or websites (Note: IT domain)',
        },
    ]
    return (
        <div className="mx-auto w-full max-w-6xl flex flex-col items-center justify-center">
            <h1 className="text-xl sm:text-4xl text-bold my-5">My Skill Set</h1>
            <Carousel opts={{ loop: true }} setApi={setApi} className="w-full">
                <CarouselContent>
                    {certList.map((skillSet, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 basis-1/1">
                            <Card className="glassmorph">
                                <CardContent className="flex flex-col aspect-video items-start justify-baseline px-6 gap-4">
                                    <div className="bg-neutral-900 border-6 border-neutral-600 p-3 rounded-full">
                                        <Image src={skillSet.logo} width={30} height={30} alt={skillSet.title} />
                                    </div>
                                    <h1 className="text-center text-xl sm:text-2xl text-bold">{skillSet.title}</h1>
                                    <p className="text-xs sm:text-sm text-justify text-muted-foreground">{skillSet.description}</p>
                                    <a href={skillSet.url}>Read More</a>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className={"-left-9"}/>
                <CarouselNext className={"-right-9"}/>
            </Carousel>
            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        onClick={() => api && api.scrollTo(index)}
                        className={`h-1 rounded-full transition-all duration-300 ${index === current - 1 ? "w-8 bg-green-500" : "w-4 bg-gray-600"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
