import React from 'react';
import { motion } from 'framer-motion';
import { Layers, GitMerge, Bot, FileCode } from 'lucide-react';

const highlights = [
    {
        icon: Layers,
        title: 'Arquitectura & Diseño',
        description: 'Estructuro soluciones pensando en mantenibilidad y escalabilidad desde el inicio.',
        color: 'text-brand-accent'
    },
    {
        icon: GitMerge,
        title: 'Ciclo Completo',
        description: 'Comprensión del flujo desde desarrollo hasta despliegue en producción.',
        color: 'text-brand-secondary'
    },
    {
        icon: Bot,
        title: 'IA & Automatización',
        description: 'Integración de APIs de IA y desarrollo de scripts para optimizar procesos.',
        color: 'text-emerald-400'
    },
    {
        icon: FileCode,
        title: 'Buenas Prácticas',
        description: 'Código limpio, versionamiento estructurado y documentación técnica.',
        color: 'text-amber-400'
    }
];

const About = () => {
    return (
        <section id="about" className="py-20 bg-brand-dark/50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="text-brand-accent">Sobre</span> Mí
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Texto principal */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-brand-accent to-brand-secondary rounded-xl opacity-10 blur-lg"></div>
                            <div className="relative bg-slate-800/80 p-8 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-4">Perfil Profesional</h3>

                                <div className="space-y-4 text-slate-300 leading-relaxed">
                                    <p>
                                        <strong className="text-white">Ingeniero de Software</strong> con formación sólida en desarrollo web y backend. Mi enfoque va más allá de escribir código: analizo requerimientos, diseño soluciones coherentes y documento técnicamente cada decisión.
                                    </p>

                                    <p>
                                        Trabajo con visión de <strong className="text-white">arquitectura desde el inicio</strong>. Estructuro proyectos considerando mantenibilidad, separación de responsabilidades y facilidad de escalamiento futuro.
                                    </p>

                                    <p>
                                        Comprendo el <strong className="text-white">ciclo completo de desarrollo</strong>: desde el diseño de la solución hasta la configuración de pipelines CI/CD y el despliegue en producción. Esto me permite tomar decisiones técnicas con contexto real.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {highlights.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="p-5 bg-slate-800/50 rounded-xl border border-white/5 hover:border-white/20 transition-all group"
                                >
                                    <IconComponent className={`${item.color} mb-3 group-hover:scale-110 transition-transform`} size={28} />
                                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Línea de cierre */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-slate-500 text-sm">
                        Preparado para asumir responsabilidades técnicas y aportar valor desde el primer día.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
