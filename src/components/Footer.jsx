import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-dark border-t border-white/5 py-12">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="font-display font-bold text-xl text-white mb-2">Matías Romo</h3>
                    <p className="text-slate-400 text-sm">Desarrollador Web Profesional</p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/matiassromo" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-accent transition-colors hover:scale-110 transform duration-200">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/matias-romo" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-accent transition-colors hover:scale-110 transform duration-200">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:matiasromo10@hotmail.com" className="text-slate-400 hover:text-brand-accent transition-colors hover:scale-110 transform duration-200">
                        <Mail size={24} />
                    </a>
                </div>

                <div className="text-center md:text-right text-slate-500 text-sm">
                    <p>&copy; {currentYear} Matías Romo. All rights reserved.</p>
                    <p className="flex items-center justify-center md:justify-end gap-1 mt-1">
                        Made with <Heart size={12} className="text-red-500 fill-red-500" /> using React + Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
