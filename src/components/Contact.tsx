'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-900/20 -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            {t.contact.title.split(' ')[0]} <br />
                            <span className="text-gradient">{t.contact.title.split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-md">
                            {t.contact.desc}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                    <Mail className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{t.contact.email}</p>
                                    <a href="mailto:christianbarillasyt@gmail.com" className="hover:text-white transition-colors">
                                        christianbarillasyt@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                    <MapPin className="text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{t.contact.location}</p>
                                    <p>El Salvador</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-8"
                    >
                        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
                            <MessageCircle className="w-10 h-10 text-green-500" />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
                            <p className="text-gray-400 max-w-xs mx-auto">
                                {t.contact.whatsapp === 'Chat on WhatsApp'
                                    ? 'The fastest way to reach me. Available for quick chats and inquiries.'
                                    : 'La forma más rápida de contactarme. Disponible para charlas rápidas y consultas.'}
                            </p>
                        </div>

                        <a
                            href="https://wa.me/529614484773"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2 transform hover:scale-105"
                        >
                            <MessageCircle size={24} />
                            {t.contact.whatsapp}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
