'use client';

import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Briefcase, Code } from 'lucide-react';

const timelineData = [
    {
        year: '2023 - Present',
        title: 'Full Stack Developer',
        subtitle: 'Freelance & Personal Projects',
        description: 'Developing high-end web applications using Next.js, React, and AI technologies. Focused on creating premium user experiences.',
        icon: Code,
    },
    {
        year: '2018 - 2022',
        title: 'University Student',
        subtitle: 'Universidad Evangélica de El Salvador',
        description: 'Bachelor in Translation and Interpretation in English. Discovered passion for programming and started self-learning.',
        icon: GraduationCap,
    },
    {
        year: '2020 - 2022',
        title: 'Customer Service',
        subtitle: 'Teleperformance',
        description: 'Worked in a fast-paced environment, honing communication and problem-solving skills.',
        icon: Briefcase,
    },
    {
        year: '2019',
        title: 'Kodigo Academy',
        subtitle: 'Full Stack Training',
        description: 'Intensive training in front-end and back-end technologies, laying the foundation for my dev career.',
        icon: Code,
    },
];

export default function Timeline() {
    return (
        <section id="story" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Story</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A journey from translation to code, driven by curiosity and a passion for building things.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0" />

                    <div className="space-y-12">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                    }`}
                            >
                                <div className="w-5/12" />

                                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    <item.icon size={20} className="text-blue-400" />
                                </div>

                                <div className="w-5/12 glass-panel p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                    <span className="text-sm font-mono text-blue-400 mb-2 block">{item.year}</span>
                                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                    <h4 className="text-sm text-gray-400 mb-3">{item.subtitle}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
