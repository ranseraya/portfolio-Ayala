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
import { FaExternalLinkAlt } from "react-icons/fa";
import { highlightCertifications } from "@/lib/data/certifications";

export default function CertificationsHighlight() {
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
    }, 15000);

    return () => clearInterval(interval);
  }, [api]);
  return (
    <div className="mx-auto w-full max-w-96 lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl">
      <Carousel opts={{ loop: true }} setApi={setApi} className="w-full">
        <CarouselContent>
          {highlightCertifications.map((cert, index) => (
            <CarouselItem
              key={cert.id}
              className="lg:basis-1/2 xl:basis-1/3 basis-1/1"
            >
              <Card className=" h-auto relative">
                <CardContent className="relative flex flex-col items-center justify-between px-6 h-auto">
                  <h1 className="h-15 flex items-center text-center text-lg sm:text-xl font-bold text-primary mb-1 mt-4">
                    {cert.title}
                  </h1>
                  <p className="text-sm text-muted-foreground text-center mb-2">
                    {cert.institution}
                  </p>
                  <div className="relative w-full h-48 bg-muted rounded-md overflow-hidden border border-border flex items-center justify-center">
                    <Image
                      src={cert.preview}
                      width={250}
                      height={150}
                      alt={cert.title + " preview"}
                      className="transition-transform duration-300 ease-in-out transform hover:scale-115 object-contain p-2"
                    />
                  </div>
                  {cert.description && (
                    <p className="text-xs sm:text-sm text-justify text-foreground my-4 indent-6">
                      {cert.description}
                    </p>
                  )}
                  <div className="w-full flex justify-between items-center mt-auto">
                    <span className="bg-secondary text-secondary-foreground text-[10px] sm:text-xs px-3 py-1 rounded-full">
                      {cert.date}
                    </span>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium hover:opacity-80 transition-opacity"
                    >
                      <FaExternalLinkAlt className="mr-1" /> View
                    </a>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex text-primary hover:text-primary-foreground hover:bg-primary" />
        <CarouselNext className="hidden md:flex text-primary hover:text-primary-foreground hover:bg-primary" />
      </Carousel>

      <div className="flex justify-center gap-2 mt-4">
        {highlightCertifications.map((_, index) => (
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
