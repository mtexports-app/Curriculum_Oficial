'use client';

import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Briefcase, Code } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const icons = [Code, GraduationCap, Briefcase, Code];

export default function Timeline() {
    const { t } = useLanguage();

    return (
        <section id="story" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.story.title.split(' ')[0]} <span className="text-gradient">{t.story.title.split(' ').slice(1).join(' ')}</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t.story.subtitle}
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0" />

                    <div className="space-y-12">
                        {t.story.items.map((item, index) => {
                            const Icon = icons[index % icons.length];
                            return (
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
                                        <Icon size={20} className="text-blue-400" />
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
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
