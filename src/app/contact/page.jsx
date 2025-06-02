import React from "react";
import TypingEffect from "@/components/typing-effect";
import ContactTerminalForm from "@/components/contact-page/contact-terminal-form";
import ContactSocialInfo from "@/components/contact-page/contact-social-info";
import { contactPageHeaderData } from "@/lib/data/contact";

export const metadata = {
  title: "Contact or Connect with Ayala Septama Rahanda",
  description:
    "Contact Ayala Septama Rahanda for project collaboration opportunities, technical questions, or just to discuss web development and cybersecurity.",
};

export default function ContactPage() {
  const { mainTitle, typingWords, description } = contactPageHeaderData;
  return (
    <main className="flex flex-col flex-1 gap-4 p-4 pt-0 max-h-[90vh]">
      <section
        aria-labelledby="contact-heading"
        className="bg-muted/50 rounded-xl px-4 md:px-10 w-full overflow-auto h-[90vh]"
      >
        <div className="text-center mb-5 mt-10">
          <h1 className="text-2xl sm:text-4xl orbitron text-primary">{mainTitle}</h1>
          <span className="text-sm sm:text-xl text-foreground">
            <TypingEffect words={typingWords} />
          </span>
          <p className="text-xs sm:text-base text-muted-foreground mt-2 max-w-2xl mx-auto text-center">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="md:col-span-1">
            <ContactTerminalForm />
          </div>
          <div className="md:col-span-1">
            <ContactSocialInfo />
          </div>
        </div>
      </section>
    </main>
  );
}
