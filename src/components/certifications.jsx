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

export default function Cerfifications() {
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
            title: 'Javascript Essential',
            preview: '/JavaScript_Essentials_1_Badge.jpg',
            url: '/JavaScript_Essentials_1_Badge.jpg',
            date: '01/10/2024',
            description: 'Javascript course from cisco Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
        }
    ]
    return (
        <div className="mx-auto w-full max-w-6xl">
            <Carousel opts={{loop: true}} setApi={setApi} className="w-full">
                <CarouselContent>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 basis-1/1">
                            <Card className="glassmorph">
                                <CardContent className="relative flex flex-col aspect-video items-center justify-center p-6">
                                    <h3 className="absolute -top-2 right-10 bg-indigo-500 px-2 py-0/5 rounded-2xl">{certList[0].date}</h3>
                                    <h1 className="text-center text-xl sm:text-3xl text-bold ">{certList[0].title}</h1>
                                    <Image src={certList[0].preview} width={200} height={200} className="my-5 transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-md shadow-md" alt="cert-previwe" />
                                    <p className="text-xs sm:text-sm text-justify indent-6">{certList[0].description}</p>
                                    <a href={certList[0].url} className="absolute -bottom-2 right-10 bg-indigo-500 px-2 py-0/5 rounded-2xl">View</a>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
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
