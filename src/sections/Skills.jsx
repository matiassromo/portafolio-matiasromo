import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React Ecosystem', level: 'Avanzado', color: 'bg-blue-500' },
    { name: 'JavaScript / ES6+', level: 'Avanzado', color: 'bg-yellow-400' },
    { name: 'Tailwind CSS', level: 'Avanzado', color: 'bg-cyan-400' },
    { name: 'Integración IA', level: 'Intermedio', color: 'bg-purple-500' },
    { name: 'Automatización / Scripts', level: 'Intermedio', color: 'bg-green-500' },
    { name: 'Git & GitHub', level: 'Avanzado', color: 'bg-orange-500' },
    { name: 'Node.js Basics', level: 'En aprendizaje', color: 'bg-green-600' },
    { name: 'SQL / Bases de Datos', level: 'Intermedio', color: 'bg-indigo-500' },
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
                    <h2 className="text-4xl font-bold mb-4">Mis <span className="text-brand-secondary">Habilidades</span></h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Herramientas y tecnologías que utilizo para dar vida a mis ideas.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-800/50 p-6 rounded-xl border border-white/5 hover:border-white/20 hover:bg-slate-800 transition-all group"
                        >
                            <div className={`w-12 h-1 rounded-full ${skill.color} mb-4 opacity-70 group-hover:opacity-100 transition-opacity`}></div>
                            <h4 className="font-bold text-lg text-white mb-1">{skill.name}</h4>
                            <span className="text-xs text-slate-500 uppercase tracking-wider">{skill.level}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
