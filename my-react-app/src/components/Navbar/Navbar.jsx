import React, { useState } from 'react'; 
import { motion } from "framer-motion";
import { SlideDown } from '../Utility/animation';
import logo from '../../assests/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 80;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    const handleBookServiceClick = () => {
        window.dispatchEvent(new Event('openBookServiceModal'));
    };

    return (
        <motion.header 
            variants={SlideDown(0.2)} 
            initial="initial" 
            whileInView="animate" 
            className='sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/10 w-full'
        >
            <div className="w-full max-w-7xl mx-auto  md:px-8 flex items-center justify-between">
                <div className="flex ">
                    <a href="#home" onClick={() => scrollToSection('home')} className="cursor-pointer">
                        <img 
                            src={logo} 
                            alt="RP Services Logo" 
                            className="h-16 md:h-20 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl drop-shadow-lg py-2" 
                        />
                    </a>
                </div>
                
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                        <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
                        <li><a href="#achievements" className="hover:text-primary transition-colors">Our Achievements</a></li>
                        <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>

                        <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
                    </ul>
                    <button 
                        onClick={handleBookServiceClick}
                        className='bg-gradient-to-r from-secondary to-primary text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300'
                    >
                        Book Service
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 w-full"
                >
                    <ul className="w-full max-w-7xl mx-auto py-4 px-4 flex flex-col gap-4">
                        <li>
                            <a href="#home" onClick={() => scrollToSection('home')} className="block py-2 hover:text-primary transition-colors">Home</a>
                        </li>
                        <li>
                            <a href="#services" onClick={() => scrollToSection('services')} className="block py-2 hover:text-primary transition-colors">Our Services</a>
                        </li>
                        <li>
                            <a href="#services" onClick={() => scrollToSection('achievements')} className="block py-2 hover:text-primary transition-colors">Our Achivements</a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => scrollToSection('about')} className="block py-2 hover:text-primary transition-colors">About Us</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => scrollToSection('contact')} className="block py-2 hover:text-primary transition-colors">Contact Us</a>
                        </li>
                        <li className="pt-2">
                            <button 
                                onClick={handleBookServiceClick}
                                className='w-full bg-gradient-to-r from-secondary to-primary text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300'
                            >
                                Book Service
                            </button>
                        </li>
                    </ul>
                </motion.div>
            )}
        </motion.header>
    )
}

export default Navbar;
