import React, { useState, useEffect } from 'react';
// Import service images
import HeroImage1 from "../../assets/services-images/img1.jpg";
import HeroImage2 from "../../assets/services-images/furnece.jpg";
import HeroImage3 from "../../assets/services-images/img3.jpg";
import HeroImage4 from "../../assets/services-images/img4.jpg";
import HeroImage5 from "../../assets/services-images/img5.jpg";
import HeroImage6 from "../../assets/services-images/img6.jpg";

import { SlideUp } from '../Utility/animation';
import {motion} from "framer-motion";

const serviceCarousel = [
  {
    image: HeroImage1,
    title: "Air Freight Services",
    description: "Fast and reliable air import-export solutions with door-to-door delivery and customs clearance."
  },
  {
    image: HeroImage2,
    title: "Sea Freight Solutions",
    description: "Comprehensive LCL/FCL shipping services for cost-effective global trade operations."
  },
  {
    image: HeroImage3,
    title: "Customs & Compliance",
    description: "Expert CHA services handling all customs documentation and regulatory compliance."
  },
  {
    image: HeroImage4,
    title: "Logistics Training",
    description: "Professional training and placement services for logistics and supply chain professionals."
  },
  {
    image: HeroImage5,
    title: "Logistics Training",
    description: "Professional training and placement services for logistics and supply chain professionals."
  },
  {
    image: HeroImage6,
    title: "Logistics Training",
    description: "Professional training and placement services for logistics and supply chain professionals."
  }
];

const MainPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % serviceCarousel.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % serviceCarousel.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + serviceCarousel.length) % serviceCarousel.length);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('book-service-modal');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const openBookServiceModal = () => {
    window.dispatchEvent(new Event('openBookServiceModal'));
  };

  return (
    <section className='relative bg-gradient-primary overflow-hidden w-full'>
      <div className='absolute inset-0 bg-[url("/grid.svg")] opacity-10'></div>
      <div className='w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[650px] py-20 relative'>
        {/* Text Section */}
        <div className='flex flex-col justify-center'>
          <div className='space-y-8 text-center md:text-left'>
            <div className='space-y-4'>
              <motion.span  variants={SlideUp(0.2)} 
              whileInView="animate" 
              initial="initial" className='text-sm md:text-base text-gray-200 bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm md:ml-16'>
                Global Import Export Solutions
              </motion.span>
              <motion.h1  variants={SlideUp(0.4)} 
              whileInView="animate" 
              initial="initial" className='text-4xl md:text-6xl font-bold text-white leading-tight md:ml-16'>
                Connecting <span className='text-brandWhite'>Global Markets</span> Through Excellence
              </motion.h1>
            </div>
            <motion.p  variants={SlideUp(0.6)} 
              whileInView="animate" 
              initial="initial" className='text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed md:ml-16'>
              Your trusted partner in international trade. We provide comprehensive import-export 
              solutions with expertise in logistics, compliance, and global market access.
            </motion.p>
            <motion.div  variants={SlideUp(0.8)} 
              whileInView="animate" 
              initial="initial" className='flex flex-wrap gap-4 justify-center md:justify-start md:ml-16'>
              <button 
                onClick={openBookServiceModal}
                className="bg-white text-primary px-8 
                py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 group">
                Book Service
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
              <button 
                onClick={scrollToContact}
                className="bg-white/10 backdrop-blur-sm text-white px-8 
                py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/10">
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>

        {/* Image Carousel Section */}
        <motion.div initial={{opacity:0, scale:0.5}} whileInView={{opacity:1, scale:1}} className="flex items-center justify-center p-4">
          <div className='relative w-full max-w-2xl'>
            {/* Carousel Container */}
            <div className='relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl'>
              {/* Image */}
              <div className='relative h-96 overflow-hidden'>
                <img 
                  src={serviceCarousel[currentImage].image} 
                  alt={serviceCarousel[currentImage].title}
                  className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                />
                {/* Overlay for better text readability */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
              </div>
              
              {/* Service Description */}
              <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                <h3 className='text-xl font-bold mb-2'>{serviceCarousel[currentImage].title}</h3>
                <p className='text-sm text-gray-200'>{serviceCarousel[currentImage].description}</p>
              </div>

              {/* Navigation Buttons */}
              <button 
                onClick={prevImage}
                className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all duration-300'
              >
                <span className='text-white text-xl'>‹</span>
              </button>
              <button 
                onClick={nextImage}
                className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all duration-300'
              >
                <span className='text-white text-xl'>›</span>
              </button>

              {/* Dots Indicator */}
              <div className='absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2'>
                {serviceCarousel.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImage ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MainPage