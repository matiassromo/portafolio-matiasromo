
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'Zero Stress Pool Management System',
        description: 'Sistema integral administrativo para digitalizar procesos de ventas, control de inventario y gestión operativa. Reemplazó procesos manuales por una solución centralizada y eficiente.',
        tech: ['React', 'System Design', 'Business Logic', 'Admin Dashboard'],
        github: 'https://github.com/matiassromo', // Placeholder until user provides specific repo
        link: null
    },
    {
        title: 'Piscina Zero Stress (Sitio Web)',
        description: 'Página web informativa y comercial. Diseño moderno enfocado en la conversión de clientes, con horarios en tiempo real y catálogo de servicios interactivo.',
        tech: ['React', 'Vite', 'Tailwind', 'UX/UI'],
        github: 'https://github.com/matiassromo/web-pzs',
        link: 'https://piscinazerostress.com'
    },
    {
        title: 'PoC: IA & Automatización',
        description: 'Investigación técnica y desarrollo de pruebas de concepto (PoC) para evaluar la integración de agentes inteligentes en flujos de trabajo automatizados.',
        tech: ['Python', 'AI Agents', 'Automation', 'PoC'],
        github: '#',
        link: null
    },
    {
        title: 'Proyectos Académicos & Pasantías',
        description: 'Desarrollo de interfaces funcionales, documentación técnica estructurada y análisis de herramientas tecnológicas. Experiencia en ciclos completos de desarrollo e integración de soluciones.',
        tech: ['Frontend', 'Research', 'Technical Writing', 'Integration'],
        github: '#',
        link: null
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-brand-dark/50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">Mis <span className="text-brand-accent">Proyectos</span></h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Una selección de cosas que he construido.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
