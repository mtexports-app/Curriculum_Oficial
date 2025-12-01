'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
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
                            Let's work <br />
                            <span className="text-gradient">together.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-md">
                            I'm always open to discussing product design work or partnership opportunities.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                    <Mail className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <a href="mailto:contact@christianbarillas.com" className="hover:text-white transition-colors">
                                        christianbarillas@example.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                    <MapPin className="text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p>El Salvador</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-3xl space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:opacity-90 transition-opacity"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
