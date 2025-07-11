import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServiceCardIcon = ({ id, image, heading, description, animationDelay = 0 }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { delay: animationDelay } },
      }}
      whileInView="animate"
      initial="initial"
      viewport={{ once: true, amount: 0.3 }}
      className="group p-8 backdrop-blur-sm bg-white/50 rounded-2xl border border-white shadow-glass hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
    >
      <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:from-secondary/20 group-hover:to-primary/20 transition-all duration-300">
        <img src={image} alt={heading} className="w-10 h-10 object-contain" />
      </div>
      <h4 className='mb-4 text-xl font-bold bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text text-center'>{heading}</h4>
      <p className='text-gray-600 text-sm leading-relaxed text-center mb-4'>{description}</p>
      <button
        onClick={() => navigate(`/services/${id}`)}
        className='bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 mt-auto'
      >
        Explore More
      </button>
    </motion.div>
  );
};

export default ServiceCardIcon; 