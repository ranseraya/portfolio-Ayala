import Achievements from "@/components/certifications-page/achievements";
import CertificationsSection from "@/components/certifications-page/certifications";
import Certifications from "@/components/certifications-page/certification-highlight";
import TypingEffect from "@/components/typing-effect";
import React from "react";
import { certificationsPageHeaderData } from "@/lib/data/certifications";

export const metadata = {
  title: "Certifications & Achievements | Ayala's Portfolio",
  description:
    "Koleksi sertifikasi dan pencapaian profesional Ayala di bidang pengembangan web dan keamanan siber.",
};

export default function CertsAchievementsPage() {
  const { mainTitle, typingWords, description } = certificationsPageHeaderData;
  return (
    <main className="flex flex-col flex-1 gap-4 p-4 pt-0 max-h-[90vh]">
      <section
        aria-labelledby="certifications-achievements-heading"
        className="bg-muted/50 aspect-auto rounded-xl px-4 md:px-10 flex flex-col items-start w-full overflow-auto h-[90vh]"
      >
        <div className="mt-10 flex flex-col items-center w-full">
          <h1 className="text-2xl sm:text-4xl orbitron text-primary">{mainTitle}</h1>
          <span className="text-sm sm:text-xl text-foreground">
            <TypingEffect words={typingWords} />
          </span>
          <p className="text-xs sm:text-base text-muted-foreground mt-2 max-w-2xl mx-auto text-center">
            {description}
          </p>
        </div>
        <div className="w-full gap-10 my-5 flex flex-col justify-center">
          <Certifications />
          <Achievements />
          <CertificationsSection />
        </div>
      </section>
    </main>
  );
}
