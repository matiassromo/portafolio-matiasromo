import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-brand-dark">
            <div className="container-custom max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="text-brand-accent font-mono mb-4 block">¿Qué sigue?</span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Pongámonos en Contacto</h2>
                    <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                        Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta o simplemente quieras saludar, ¡mi bandeja de entrada siempre está abierta!
                    </p>

                    <a href="mailto:matiasromo10@hotmail.com" className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4">
                        <Mail />
                        Decir Hola
                    </a>

                    <div className="grid md:grid-cols-3 gap-8 mt-20 text-left">
                        <div className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-brand-accent/30 transition-colors">
                            <Mail className="text-brand-accent mb-4" size={32} />
                            <h4 className="font-bold text-white text-lg">Email & Teléfono</h4>
                            <a href="mailto:matiasromo10@hotmail.com" className="text-slate-400 hover:text-white transition-colors block mt-2">
                                matiasromo10@hotmail.com
                            </a>
                            <span className="text-slate-400 block mt-1">+593 99 547 5299</span>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-brand-accent/30 transition-colors">
                            <Linkedin className="text-brand-secondary mb-4" size={32} />
                            <h4 className="font-bold text-white text-lg">LinkedIn</h4>
                            <a href="https://linkedin.com/in/matias-romo" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors mt-2 inline-flex items-center gap-1">
                                Ver Perfil <ArrowUpRight size={14} />
                            </a>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-brand-accent/30 transition-colors">
                            <MapPin className="text-green-500 mb-4" size={32} />
                            <h4 className="font-bold text-white text-lg">Ubicación</h4>
                            <p className="text-slate-400 mt-2">
                                Quito, Ecuador
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
