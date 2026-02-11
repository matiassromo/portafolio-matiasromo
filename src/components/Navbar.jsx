import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#home' },
        { name: 'Sobre Mí', href: '#about' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
            <div className="container-custom flex justify-between items-center">
                <a href="#" className="font-display font-bold text-2xl text-white tracking-tight flex items-center gap-2 group">
                    <span className="text-brand-accent">{'<'}</span>
                    Matías Romo
                    <span className="text-brand-accent group-hover:translate-x-1 transition-transform">{'/>'}</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-white hover:text-brand-accent transition-colors text-sm font-medium relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a href="https://github.com/matiassromo" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href="https://linkedin.com/in/matias-romo" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-dark border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4 items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white text-lg font-medium py-2 hover:text-brand-accent transition-colors w-full text-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-6 mt-4 pt-4 border-t border-white/10 w-full justify-center">
                                <a href="https://github.com/matiassromo" target="_blank" className="text-slate-400 hover:text-white"><Github size={24} /></a>
                                <a href="https://linkedin.com/in/matias-romo" target="_blank" className="text-slate-400 hover:text-white"><Linkedin size={24} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
