'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGraduationCap } from 'react-icons/fa';
import Link from 'next/link';

export default function CertificationsCard({ cert }) {
    const [preview, setPreview] = useState(false);
    const [zoom, setZoom] = useState(false);
    const handleZoom = () => setZoom(!zoom);
    return (
        <div className="flex flex-col justify-between relative bg-card rounded-xl overflow-hidden border border-border shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group p-0">
            <div className='flex flex-col-reverse sm:flex-row justify-between px-3 py-3'>
                <p className="text-xs text-primary text-center mt-1 line-clamp-1" title={cert.institution}>{cert.institution}</p>
                <p className="text-xs text-muted-foreground text-center mt-0.5 border px-2 py-0.5 rounded-full">{cert.date}</p>
            </div>
            <div className="p-2 pt-3 flex flex-col items-end justify-between w-full flex-grow">
                <h3 className="text-sm sm:text-base text-center font-semibold text-card-foreground w-full line-clamp-2 leading-tight" title={cert.title}>
                    {cert.title}
                </h3>
                <div className="w-full mt-3 flex justify-between">
                    <span onMouseEnter={() => setPreview(true)} onMouseLeave={() => setPreview(false)} onClick={() => handleZoom()} className="opacity-100 sm:opacity-0 cursor-zoom-in inline-flex items-center px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium group-hover:opacity-100 transition-opacity duration-300">
                        <FaExternalLinkAlt className="mr-1" /> Preview
                    </span>
                    <Link href={cert.url} target="_blank" rel="noopener noreferrer" className="opacity-100 inline-flex items-center px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FaExternalLinkAlt className="mr-1" /> View
                    </Link>
                </div>
            </div>
            <div className={`absolute w-full h-25 bg-muted items-center justify-center p-2 rounded-xl overflow-hidden ${preview ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'} transition-opacity duration-300`}>
                {cert.preview ? (
                    <Image
                        src={cert.preview}
                        alt={cert.title + " preview"}
                        fill
                        className={`transition-transform duration-300 ${zoom ? 'scale-150' : ''}`}
                    />
                ) : (
                    <FaGraduationCap className="w-16 h-16 text-primary" />
                )}
            </div>
        </div>
    );
}