import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Github } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-brand-secondary/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-brand-accent font-mono text-lg mb-4 block">Hola, soy</span>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Matías Romo.
                            <br />
                            <span className="text-slate-400">Ingeniero de Software.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
                    >
                        Enfocado en el desarrollo Frontend y la integración de soluciones tecnológicas emergentes. Transformo ideas en interfaces funcionales y exploro el potencial de la IA y la automatización.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <a href="#projects" className="btn-primary flex items-center justify-center gap-2 group">
                            Ver Proyectos
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/resume.pdf" target="_blank" className="btn-secondary flex items-center justify-center gap-2">
                            <Download size={20} />
                            Descargar CV
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-12 flex gap-6 justify-center md:justify-start"
                    >
                        <a href="https://github.com/matiassromo" target="_blank" className="text-slate-400 hover:text-brand-accent transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/matias-romo" target="_blank" className="text-slate-400 hover:text-brand-accent transition-colors">
                            <Linkedin size={24} />
                        </a>
                    </motion.div>
                </div>

                {/* Hero Image / Abstract */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent to-brand-secondary rounded-full opacity-20 blur-3xl animate-pulse"></div>
                        <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl group">
                            {/* Placeholder for user image - instructions to replace */}
                            <img
                                src="/profile.jpg"
                                alt="Matías Romo"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://ui-avatars.com/api/?name=Matias+Romo&background=0f172a&color=3b82f6&size=512";
                                }}
                            />
                            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
