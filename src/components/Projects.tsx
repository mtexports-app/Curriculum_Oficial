'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: 'mtexports.app',
        category: 'E-Commerce',
        image: '/assets/img/b.jpeg', // Placeholder, using existing asset
        description: 'Innovative e-commerce platform for El Salvador with AI integration.',
        link: 'https://mtexports.app',
        github: null,
        featured: true,
    },
    {
        title: 'Crypto Price App',
        category: 'Finance',
        image: '/assets/img/b.jpeg',
        description: 'Real-time cryptocurrency tracking application.',
        link: 'https://christianbarillas.github.io/Crypto-Price-App/',
        github: 'https://github.com/ChristianBarillas/Crypto-Price-App',
    },
    {
        title: 'Weather API',
        category: 'Utility',
        image: '/assets/img/b.jpeg',
        description: 'Weather forecasting app using external APIs.',
        link: 'https://christianbarillas.github.io/Weather_App_API/',
        github: 'https://github.com/ChristianBarillas/Weather_App_API',
    },
    {
        title: 'TurismoSV',
        category: 'Tourism',
        image: '/assets/img/b.jpeg',
        description: 'Promoting tourism in El Salvador.',
        link: 'https://turismosv.tech/',
        github: null,
    },
    {
        title: 'Pokemon Search',
        category: 'Entertainment',
        image: '/assets/img/b.jpeg',
        description: 'Search and view Pokemon stats.',
        link: 'https://christianbarillas.github.io/Pokemon_Search/',
        github: 'https://github.com/ChristianBarillas/Pokemon_Search',
    },
];

export default function Projects() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ['1%', '-50%']);

    return (
        <section id="projects" ref={targetRef} className="min-h-[300vh] bg-black relative">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 left-10 z-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
                        Selected <span className="text-gradient">Works</span>
                    </h2>
                    <p className="text-gray-400">Swipe to explore</p>
                </div>

                <motion.div style={{ x }} className="flex gap-10 pl-10 md:pl-20">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`relative h-[60vh] w-[80vw] md:w-[40vw] flex-shrink-0 rounded-3xl overflow-hidden group border border-white/10 ${project.featured ? 'shadow-[0_0_50px_rgba(59,130,246,0.3)]' : ''
                                }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

                            {/* Placeholder for image - in real app would use next/image with actual screenshots */}
                            <div className="absolute inset-0 bg-gray-900 group-hover:scale-110 transition-transform duration-700">
                                {/* <Image src={project.image} alt={project.title} fill className="object-cover opacity-50" /> */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                <span className="text-blue-400 text-sm font-bold tracking-wider uppercase mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                                <p className="text-gray-300 mb-6 line-clamp-2">{project.description}</p>

                                <div className="flex gap-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
                                    >
                                        Visit <ExternalLink size={16} />
                                    </a>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-2 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors backdrop-blur-sm flex items-center gap-2"
                                        >
                                            Code <Github size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
