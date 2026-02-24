
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'Piscina Zero Stress (Sitio Web)',
        description: 'Sitio web comercial para un complejo recreativo. Incluye estado de apertura calculado dinámicamente, contador de visitas en vivo, galería de 9 servicios con modal de detalle, menú del bar, CTA directo a WhatsApp y slideshow animado con Framer Motion. Desplegado en Netlify.',
        tech: ['React', 'Vite', 'Tailwind', 'UX/UI'],
        github: 'https://github.com/matiassromo/web-pzs',
        link: 'https://piscinazerostress.com'
    },
    {
        title: 'ZS System — Pool Management Platform',
        description: 'Plataforma de gestión empresarial con arquitectura multi-servicio. Digitaliza los procesos de ventas y operaciones que antes se manejaban en cuadernos. Incluye dashboard administrativo, API REST, bot de análisis con IA (Gemini) y conector de Telegram. Actualmente en producción y mejora continua.',
        tech: ['Next.js', '.NET', 'Python', 'Node.js', 'Telegram Bot'],
        repos: [
            { label: 'frontend', url: 'https://github.com/matiassromo/zsx-frontend' },
            { label: 'backend', url: 'https://github.com/matiassromo/zsx-backend' },
            { label: 'analyst-bot', url: 'https://github.com/matiassromo/analyst-bot-service' },
            { label: 'bot-connector', url: 'https://github.com/matiassromo/bot-messaging-connector' },
        ],
        link: 'https://zsx-frontend-k1wm.onrender.com/dashboard',
        apiLink: 'https://zsx-backend.onrender.com/swagger/index.html',
        demo: { username: 'demo', password: 'demo123' }
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
