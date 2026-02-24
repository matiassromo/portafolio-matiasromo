import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Server } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800 rounded-xl overflow-hidden border border-white/10 hover:border-brand-accent/50 transition-all group hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-accent/10"
        >
            <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <Folder size={40} className="text-brand-accent" />
                    <div className="flex gap-3">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub">
                                <Github size={20} />
                            </a>
                        )}
                        {project.apiLink && (
                            <a href={project.apiLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-secondary transition-colors" title="API Docs">
                                <Server size={20} />
                            </a>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                        <span key={tech} className="text-xs font-mono text-brand-secondary bg-brand-secondary/10 px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>

                {project.demo && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-1.5">Demo</p>
                        <div className="flex gap-4 text-xs text-slate-400">
                            <span>user: <span className="font-mono text-slate-200">{project.demo.username}</span></span>
                            <span>pass: <span className="font-mono text-slate-200">{project.demo.password}</span></span>
                        </div>
                    </div>
                )}

                {project.repos && (
                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10">
                        {project.repos.map((repo) => (
                            <a
                                key={repo.label}
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-xs text-slate-500 hover:text-brand-accent transition-colors"
                            >
                                <Github size={12} />
                                {repo.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
