import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// This is for image-based cards (core services)
const ServiceCardImage = ({ id, image, heading, description, animationDelay = 0 }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { delay: animationDelay } },
      }}
      whileInView="animate"
      initial="initial"
      viewport={{ once: true, amount: 0.3 }}
      className="group p-6 rounded-2xl hover:bg-gradient-to-r hover:from-secondary/5 hover:to-primary/5 transition-all duration-300 backdrop-blur-sm bg-white/50 border border-white shadow-glass"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <div className='absolute inset-0 bg-gradient-to-r from-secondary/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        <img src={image} alt={heading} className='w-full h-64 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300'/>
      </div>
      <div className="p-4 flex flex-col items-center">
        <h3 className='mt-4 text-xl font-bold bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text'>
          {heading}
        </h3>
        <p className='text-gray-600 mt-2 mb-4 text-center'>{description}</p>
        <button
          onClick={() => navigate(`/services/${id}`)}
          className='bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 mt-auto'
        >
          Explore More
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCardImage;