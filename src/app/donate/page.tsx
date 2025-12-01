'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FaHandHoldingHeart,
    FaCoffee,
    FaServer,
    FaCode,
    FaGift,
    FaLightbulb,
    FaUsers
} from 'react-icons/fa';

import { useLanguage } from '@/context/LanguageContext';

export default function DonationsPage() {
    const { t } = useLanguage();

    const donationOptions = [
        {
            title: t.donate_page.coffee_title,
            amount: "$5.00",
            description: t.donate_page.coffee_desc,
            icon: FaCoffee,
            stripe_link: "https://donate.stripe.com/aFadRafsz2qF7q39JW0Fi00"
        },
        {
            title: t.donate_page.server_title,
            amount: "$15.00",
            description: t.donate_page.server_desc,
            icon: FaServer,
            isRecommended: true,
            stripe_link: "https://donate.stripe.com/5kQ00kdkrghvaCfbS40Fi01"
        },
        {
            title: t.donate_page.feature_title,
            amount: "$50.00",
            description: t.donate_page.feature_desc,
            icon: FaCode,
            stripe_link: "https://donate.stripe.com/4gM28sbcjaXbfWzbS40Fi02"
        },
        {
            title: t.donate_page.custom_title,
            amount: "$?",
            description: t.donate_page.custom_desc,
            icon: FaGift,
            stripe_link: "https://donate.stripe.com/00w7sM4NV5CR39N9JW0Fi03"
        }
    ];

    return (
        <div className="min-h-screen pt-20 bg-black text-white selection:bg-orange-500/30">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black -z-10" />
            <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse -z-10" />

            {/* --- Hero Section --- */}
            <section className="py-20 md:py-32 relative overflow-hidden">
                <div className="container mx-auto max-w-7xl px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center p-4 rounded-full bg-orange-500/10 mb-8 ring-1 ring-orange-500/20">
                            <FaHandHoldingHeart className="w-12 h-12 text-orange-500" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                            {t.donate_page.hero_title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">{t.donate_page.hero_subtitle}</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            {t.donate_page.hero_desc}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- Donation Cards --- */}
            <section className="py-16">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">{t.donate_page.options_title}</h2>
                        <p className="text-gray-400">{t.donate_page.options_desc}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {donationOptions.map((option, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative group p-1 rounded-3xl ${option.isRecommended ? 'lg:-mt-8 lg:mb-8' : ''}`}
                            >
                                {/* Card Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent rounded-3xl blur-xl transition-opacity duration-500 ${option.isRecommended ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                                <div className={`relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 ${option.isRecommended ? 'bg-white/10 border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.2)]' : ''}`}>

                                    {option.isRecommended && (
                                        <div className="absolute -top-4 px-4 py-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                            Recommended
                                        </div>
                                    )}

                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <option.icon className="w-8 h-8 text-orange-400" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
                                        {option.amount}
                                    </div>
                                    <p className="text-sm text-gray-400 mb-8 flex-grow">
                                        {option.description}
                                    </p>

                                    <Link
                                        href={option.stripe_link}
                                        target="_blank"
                                        className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${option.isRecommended
                                            ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg hover:shadow-orange-500/25 hover:scale-105'
                                            : 'bg-white/10 hover:bg-white text-white hover:text-black'
                                            }`}
                                    >
                                        {t.donate_page.donate_btn}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Impact Section --- */}
            <section className="py-20 relative">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="glass-panel rounded-3xl p-12 border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <FaLightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                                <h3 className="text-lg font-bold mb-2">Innovation</h3>
                                <p className="text-gray-400 text-sm">Fueling R&D for next-gen AI tools.</p>
                            </div>
                            <div className="text-center">
                                <FaServer className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                                <h3 className="text-lg font-bold mb-2">Infrastructure</h3>
                                <p className="text-gray-400 text-sm">Keeping mtexports.app fast and reliable.</p>
                            </div>
                            <div className="text-center">
                                <FaUsers className="w-12 h-12 text-green-400 mx-auto mb-6" />
                                <h3 className="text-lg font-bold mb-2">Community</h3>
                                <p className="text-gray-400 text-sm">Building a stronger tech ecosystem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
