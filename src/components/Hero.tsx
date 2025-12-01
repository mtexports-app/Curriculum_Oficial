'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-50"
                >
                    <source src="/assets/video/animacion.mp4" type="video/mp4" />
                </video>
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 via-black/80 to-black" />
            </div>

            {/* Background Effects (kept for additional depth) */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-400 mb-6 backdrop-blur-sm">
                            {t.hero.role}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            {t.hero.title_prefix} <br />
                            <span className="text-gradient">{t.hero.title_gradient}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            {t.hero.description}
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <Link
                                href="#projects"
                                className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
                            >
                                {t.hero.view_work} <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="#contact"
                                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
                            >
                                {t.hero.contact_me}
                            </Link>
                        </div>
                    </motion.div>

                    {/* Featured Project Highlight */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-20"
                    >
                        <div className="glass-panel p-1 rounded-2xl max-w-3xl mx-auto relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative bg-black/80 rounded-xl p-8 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <Sparkles className="text-yellow-400 animate-pulse" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-2">{t.hero.featured_label}</h3>
                                    <h2 className="text-3xl font-bold text-white mb-4">mtexports.app</h2>
                                    <p className="text-gray-400 mb-6">
                                        {t.hero.featured_desc}
                                    </p>
                                    <a
                                        href="https://mtexports.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition-colors group-hover:translate-x-2 duration-300"
                                    >
                                        {t.hero.visit_platform} <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
