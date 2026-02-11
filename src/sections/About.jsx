import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Server, Globe } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-brand-dark/50">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Image / Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-brand-accent to-brand-secondary rounded-xl opacity-20 group-hover:opacity-40 transition-opacity blur-lg"></div>
                            <div className="relative bg-slate-800 p-8 rounded-xl border border-white/10">
                                <h3 className="text-2xl font-bold mb-4 text-white">Mi Perfil Profesional</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    Soy <strong>Ingeniero de Software</strong> recientemente graduado, con una base sólida en frontend y en proceso activo de formación hacia <strong>Full Stack</strong>.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    Me apasiona la <strong>automatización de procesos</strong> y la integración práctica de IA en soluciones reales. Mi enfoque no es solo escribir código, sino analizar problemas, diseñar sistemas coherentes y documentar técnicamente cada paso.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold mb-6 text-white"><span className="text-brand-accent">Sobre</span> Mí</h2>
                            <p className="text-slate-300 text-lg mb-8">
                                Mi experiencia se basa en proyectos académicos, profesionales y Pruebas de Concepto (PoC). Me especializo en crear interfaces bien estructuradas e investigar herramientas emergentes.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-brand-accent/30 transition-colors">
                                    <Globe className="text-brand-accent mb-2" size={28} />
                                    <h4 className="font-bold text-white">Frontend</h4>
                                    <p className="text-slate-500 text-sm">Interfaces funcionales y limpias</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-brand-accent/30 transition-colors">
                                    <Bot className="text-brand-secondary mb-2" size={28} />
                                    <h4 className="font-bold text-white">IA & Automatización</h4>
                                    <p className="text-slate-500 text-sm">Integración de herramientas y PoCs</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-brand-accent/30 transition-colors">
                                    <Server className="text-green-400 mb-2" size={28} />
                                    <h4 className="font-bold text-white">Documentación</h4>
                                    <p className="text-slate-500 text-sm">Técnica y Estructurada</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
