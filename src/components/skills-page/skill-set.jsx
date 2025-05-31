"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
// import { NetworkIcon, FileEditIcon, ShieldAlertIcon } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { skillSetList } from "@/lib/data/skills";

export default function SkillSet() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  //Auto next card
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="mx-auto w-full max-w-6xl flex flex-col items-center justify-center">
      <h1 className="text-xl sm:text-3xl font-bold text-primary my-5">
        My Skill Set
      </h1>
      <Carousel opts={{ loop: true }} setApi={setApi} className="w-full">
        <CarouselContent>
          {skillSetList.map((skillSet, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 basis-1/1"
            >
              <Card className="glassmorph-g h-full relative">
                <CardContent className="flex flex-col aspect-auto items-center justify-center px-6 gap-4 h-full">
                  <div className="bg-secondary border-4 border-primary p-3 rounded-full flex items-center justify-center">
                    {skillSet.lucideIcon ? (
                      skillSet.lucideIcon
                    ) : (
                      <Image
                        src={skillSet.logo}
                        width={30}
                        height={30}
                        alt={skillSet.title}
                        className="object-contain"
                      />
                    )}
                  </div>
                  <h2
                    className="text-center text-base sm:text-2xl font-bold text-foreground"
                    title={skillSet.title}
                  >
                    {skillSet.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-justify text-foreground">
                    {skillSet.description}
                  </p>
                  {skillSet.url && (
                    <a
                      href={skillSet.url}
                      className="inline-flex items-center text-primary hover:underline mt-2"
                    >
                      See Detail <FaArrowRight className="ml-1" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex text-primary hover:text-primary-foreground hover:bg-primary" />
        <CarouselNext className="hidden sm:flex text-primary hover:text-primary-foreground hover:bg-primary" />
      </Carousel>
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            onClick={() => api && api.scrollTo(index)}
            className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
              index === current - 1
                ? "w-8 bg-primary"
                : "w-4 bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
