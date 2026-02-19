import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Rocket } from 'lucide-react';

const skillLevels = [
    {
        title: 'Dominio Fuerte',
        subtitle: 'Manejo con seguridad y autonomía',
        icon: Shield,
        color: 'from-emerald-500 to-green-600',
        borderColor: 'border-emerald-500/30',
        bgColor: 'bg-emerald-500/10',
        skills: ['HTML5', 'CSS3', 'Git', 'GitHub'],
        description: 'Desarrollo frontend completo de forma autónoma. Estructuro proyectos, resuelvo problemas sin supervisión y aplico buenas prácticas de versionamiento en equipos.'
    },
    {
        title: 'Dominio Intermedio-Alto',
        subtitle: 'Buen nivel práctico para proyectos reales',
        icon: TrendingUp,
        color: 'from-blue-500 to-indigo-600',
        borderColor: 'border-blue-500/30',
        bgColor: 'bg-blue-500/10',
        skills: ['JavaScript (ES6+)', 'Python', 'SQL / Bases de Datos'],
        description: 'Desarrollo scripts, consumo y construyo APIs, automatizo tareas. Diseño esquemas relacionales, escribo consultas complejas con joins y optimizo queries.'
    },
    {
        title: 'Dominio Intermedio-Bajo',
        subtitle: 'Uso activo en proyectos académicos y personales',
        icon: Rocket,
        color: 'from-amber-500 to-orange-600',
        borderColor: 'border-amber-500/30',
        bgColor: 'bg-amber-500/10',
        skills: ['React', 'Node.js', 'C#', 'Tailwind CSS', 'Bootstrap', 'CI/CD', 'Deploy & Hosting', 'Integración de IA'],
        description: 'Construyo interfaces con React, configuro pipelines básicos, despliego aplicaciones e integro APIs de IA. En crecimiento constante con cada proyecto.'
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-brand-dark relative">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Habilidades <span className="text-brand-secondary">Técnicas</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Stack técnico organizado por nivel de dominio real.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {skillLevels.map((level, index) => {
                        const IconComponent = level.icon;
                        return (
                            <motion.div
                                key={level.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className={`relative p-6 rounded-xl border ${level.borderColor} ${level.bgColor} hover:bg-slate-800/50 transition-all`}
                            >
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${level.color} flex items-center justify-center mb-4`}>
                                    <IconComponent size={24} className="text-white" />
                                </div>

                                <h3 className="font-bold text-xl text-white mb-1">{level.title}</h3>
                                <p className="text-sm text-slate-500 mb-5">{level.subtitle}</p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {level.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-sm bg-slate-800 text-slate-200 px-3 py-1.5 rounded-lg border border-white/10"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {level.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
