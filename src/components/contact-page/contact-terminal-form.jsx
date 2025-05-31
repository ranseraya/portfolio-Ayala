'use client';
import { useState } from "react";
import { FaUser, FaEnvelope, FaTag, FaTerminal, FaPaperPlane } from 'react-icons/fa';

export default function ContactTerminalForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult(">>> Processing...");
        const formData = new FormData(event.target);
        const accessKey = process.env.NEXT_PUBLIC_EMAIL_KEY;

        if (!accessKey) {
            setResult(">>> ERROR: Email access key is not configured.");
            console.error("NEXT_PUBLIC_EMAIL_KEY is not defined in .env");
            return;
        }

        formData.append("access_key", accessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult(">>> Message transmitted successfully!");
                event.target.reset();
            } else {
                console.error("Error", data);
                setResult(`>>> ERROR: ${data.message || "Failed to send message."}`);
            }
        } catch (error) {
            console.error("Network error:", error);
            setResult(">>> NETWORK ERROR: Check connection.");
        }
    };

    return (
        <div className="bg-card rounded-xl p-6 border border-primary shadow-lg font-mono text-foreground relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-80 blur-sm pointer-events-none" style={{ backgroundImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,255,0,0.1) 50%, transparent 100%)', backgroundSize: '100% 2px', animation: 'scanline 5s infinite linear' }}></div>
            <div className="flex items-center text-primary mb-4 relative z-10">
                <FaTerminal className="mr-2" />
                <h2 className="text-base sm:text-xl font-bold">Ayala@SecureConsole:~#</h2>
            </div>
            <form onSubmit={onSubmit} className="space-y-4 relative z-10">
                <div>
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <div className="flex items-center bg-secondary border border-border rounded-md focus-within:ring-2 focus-within:ring-primary transition-all duration-300">
                        <span className="px-3 text-primary"><FaUser /></span>
                        <input
                            type="text"
                            id="name"
                            placeholder="Type your username..."
                            required
                            className="flex-1 w-full py-2 px-2 bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none"
                            name="name"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Your Email</label>
                    <div className="flex items-center bg-secondary border border-border rounded-md focus-within:ring-2 focus-within:ring-primary transition-all duration-300">
                        <span className="px-3 text-primary"><FaEnvelope /></span>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter contact email..."
                            required
                            className="flex-1 w-full py-2 px-2 bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none"
                            name="email"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="sr-only">Subject</label>
                    <div className="flex items-center bg-secondary border border-border rounded-md focus-within:ring-2 focus-within:ring-primary transition-all duration-300">
                        <span className="px-3 text-primary"><FaTag /></span>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Subject of message..."
                            className="flex-1 w-full py-2 px-2 bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none"
                            name="subject"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">Your Message</label>
                    <textarea
                        id="message"
                        rows={6}
                        placeholder="Type your secure message here..."
                        required
                        className="resize-none w-full p-3 bg-secondary border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                        name="message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full cursor-pointer px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-80 transition-opacity duration-300 flex items-center justify-center gap-2"
                >
                    <FaPaperPlane /> Transmit Message
                </button>
                <p className="mt-4 text-center text-primary text-sm whitespace-pre-wrap">{result}</p>
            </form>
        </div>
    );
}