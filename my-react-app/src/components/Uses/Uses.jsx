import React from 'react';
import Img1 from "../../assests/Uses/1.png";
import Img2 from "../../assests/Uses/2.png";
import Img3 from "../../assests/Uses/3.png";
import {motion} from "framer-motion";

import { SlideLeft } from '../Utility/animation';
const Uses = () => {
  return (
    <section className='py-10 bg-gradient-to-b from-white to-gray-50'>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 
            xl:grid-cols-4 gap-8">
                
                <motion.div  variants={SlideLeft(0.2)} 
                  whileInView="animate" 
                  initial="initial" className="space-y-6 backdrop-blur-sm bg-white/50 p-8 rounded-2xl shadow-glass hover:bg-gradient-to-r hover:from-secondary/5 hover:to-primary/5 transition-all duration-300">
                    <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text'>
                        Our Services
                    </h1>
                    <p className='text-gray-600'>
                        We provide comprehensive solutions for global trade with expertise in logistics, 
                        compliance, and market access.
                    </p>
                    <p className='text-sm text-gray-500'>
                        Learn more about our specialized services and how we can help your business grow globally.
                        <a href="#contact" className="text-primary hover:text-secondary transition-colors ml-1">
                            Contact us today
                        </a>
                    </p>
                    <button className='bg-gradient-to-r from-secondary to-primary text-white px-6 
                    py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300'>
                        Get in Touch
                    </button>
                </motion.div>

                <motion.div 
                  variants={SlideLeft(0.4)} 
                  whileInView="animate" 
                  initial="initial"
                  viewport={{ once: true, amount: 0.3 }}
                  className="group p-6 rounded-2xl
                  hover:bg-gradient-to-r hover:from-secondary/5 hover:to-primary/5 transition-all duration-300"
                >
                    <div className="relative overflow-hidden rounded-2xl">
                        <div className='absolute inset-0 bg-gradient-to-r from-secondary/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        <img src={Img1} alt="Air Freight Services" className='w-full h-64 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300'/>
                    </div>
                    <div className="p-4">
                        <h3 className='mt-4 text-xl font-bold bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text'>
                            Air Freight Services
                        </h3>
                        <p className='text-gray-600 mt-2'>
                            Fast and reliable air freight solutions for time-sensitive cargo
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                  variants={SlideLeft(0.6)} 
                  whileInView="animate" initial="initial"  viewport={{ once: true, amount: 0.3 }}
                  className="group backdrop-blur-sm bg-white/50 p-6 rounded-2xl border border-white shadow-glass 
                  hover:bg-gradient-to-r hover:from-secondary/5 hover:to-primary/5 transition-all duration-300"
                >
                    <div className="relative overflow-hidden rounded-2xl">
                        <img src={Img2} alt="Global Trade & Logistics" className='w-full h-64 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300'/>
                    </div>
                    <div className="p-4">
                        <h3 className='mt-4 text-xl font-bold bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text'>
                            Global Trade & Logistics
                        </h3>
                        <p className='text-gray-600 mt-2'>
                            Comprehensive international trade and logistics management
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                  variants={SlideLeft(0.8)} 
                  whileInView="animate" 
                  initial="initial"
                  viewport={{ once: true, amount: 0.3 }}
                  className="group backdrop-blur-sm bg-white/50 p-6 rounded-2xl border border-white shadow-glass 
                  hover:bg-gradient-to-r hover:from-secondary/5 hover:to-primary/5 transition-all duration-300"
                >
                    <div className="relative overflow-hidden rounded-2xl">
                        <div className='absolute inset-0 bg-gradient-to-r from-secondary/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        <img src={Img3} alt="Customs & Compliance" className='w-full h-64 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300'/>
                    </div>
                    <div className="p-4">
                        <h3 className='mt-4 text-xl font-bold bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text'>
                            Customs & Compliance
                        </h3>
                        <p className='text-gray-600 mt-2'>
                            Expert customs clearance and regulatory compliance services
                        </p>
                    </div>
                </motion.div>
             
            </div>
        </div>
    </section>
  )
}

export default Uses