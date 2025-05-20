'use client';
import Image from "next/image";
import React, { useState } from "react";
import { ArrowRightIcon, SignatureIcon, MailIcon } from "lucide-react";

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.EMAIL_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id="contact" className='w-full'>

            <p
                className="text-center max-w-2xl mx-auto mt-5">
                I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
            </p>

            <form
                onSubmit={onSubmit} className="w-full sm:w-2/3 mx-auto">
                <div className="flex flex-col sm:flex-row justify-between gap-6 mt-5 mb-8 text-sm sm:text-base">
                    <div className="flex-1 py-0.5 pr-0.5 flex items-center rounded-md bg-zinc-400 group focus-within:bg-green-300 transition-colors">
                        <div className="flex px-4 items-center h-full rounded-s-md dark:bg-darkHover/30 group-focus-within:bg-green-300 transition-colors">
                            <SignatureIcon height={30} width={30} className="text-white group-focus-within:text-black transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            required
                            className="flex-1 w-full py-4.5 px-3 rounded-e-md outline-none bg-zinc-900 text-gray-300 focus:text-green-300"
                            name="name"
                        />
                    </div>


                    <div className="flex-1 py-0.5 pr-0.5 flex items-center rounded-md bg-zinc-400 group focus-within:bg-green-300 transition-colors ">
                        <div className="flex px-4 items-center h-full rounded-s-md dark:bg-darkHover/30 group-focus-within:bg-green-300 transition-colors">
                            <MailIcon height={30} width={30} className="text-white group-focus-within:text-black transition-colors"/>
                        </div>
                        <input
                            type="email" placeholder="Enter your email" required
                            className="flex-1 w-full py-4.5 px-3 rounded-e-md outline-none bg-zinc-900 text-gray-300 focus:text-green-300"
                            name="email"
                        />

                    </div>


                </div>
                <div className="p-0.5 flex items-center rounded-md bg-zinc-500 focus-within:bg-green-300 transition-transform">
                    <textarea
                        rows={6} placeholder="Enter your message" required
                        className="resize-none w-full p-3 m-0 rounded-md outline-none bg-zinc-900 text-gray-300 focus:text-green-300"
                        name="message"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="cursor-pointer py-3 px-8 mt-5 w-max- flex items-center justify-between gap-2 bg-zinc-900 text-white rounded-full mx-auto duration-500 dark:border-[0.5px] dark:hover:bg-darkHover hover:bg-green-500 hover:text-zinc-900"
                >Submit now <ArrowRightIcon height={30} width={30} /></button>

                <p className="mt-4">{result}</p>
            </form>
        </div>
    )
}


export default Contact;