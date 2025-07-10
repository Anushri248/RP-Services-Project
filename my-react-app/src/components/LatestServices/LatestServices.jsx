import React from 'react';
import { motion } from "framer-motion";
import { SlideRight } from '../Utility/animation';
import HeroImage1 from "../../assests/services-images/img1.jpg";
import HeroImage2 from "../../assests/services-images/furnece.jpg";
import HeroImage3 from "../../assests/services-images/img3.jpg";
import HeroImage4 from "../../assests/services-images/img4.jpg";

const latestServices = [
  {
    id: 1,
    image: HeroImage1,
    title: "Recently Shipped Cargo to USA from India",
    description: "Successfully delivered a full container load of textiles and garments from Mumbai to New York. The shipment included premium cotton fabrics, ready-made garments, and traditional Indian textiles valued at $150,000. Our team handled all customs clearance, documentation, and door-to-door delivery within the promised timeline.",
    date: "April 2025",
    category: "Sea Freight",
    destination: "Mumbai → New York"
  },
  {
    id: 2,
    image: HeroImage2,
    title: "Air Freight Delivery to Benglore",
    description: "Expedited air freight service for automotive parts from Pune to Benglore. Delivered critical components for a German automotive manufacturer within 48 hours. The shipment included precision-engineered parts, electronic components, and specialized machinery parts worth €200,000.",
    date: "November 2024",
    category: "Air Freight",
    destination: "Pune → Benglore"
  },
  {
    id: 3,
    image: HeroImage3,
    title: "LCL Shipment to Australia",
    description: "Coordinated LCL (Less than Container Load) shipment of electronics and consumer goods from Chennai to Sydney. Successfully consolidated multiple small shipments into a single container, optimizing costs for our clients. The shipment included smartphones, laptops, and electronic accessories.",
    date: "October 2024",
    category: "LCL Freight",
    destination: "Chennai → Sydney"
  },
  {
    id: 4,
    image: HeroImage4,
    title: "Express Delivery to Kashmir",
    description: "Handled urgent delivery of pharmaceutical products from Mumbai to Kashmir. Ensured temperature-controlled transportation and compliance with all pharmaceutical regulations. The shipment included vaccines, medicines, and medical equipment with a total value of £300,000.",
    date: "September 2024",
    category: "Express Freight",
    destination: "Mumbai → Kashmir"
  }
];

const LatestServices = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div 
          variants={SlideRight(0.2)} 
          whileInView="animate" 
          initial="initial"
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text mb-4">
            Our Achievements
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our recent successful shipments and logistics solutions that have helped businesses expand globally.
          </p>
        </motion.div>

        <div className="space-y-12">
          {latestServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={SlideRight(0.2 + index * 0.1)}
              whileInView="animate"
              initial="initial"
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-primary/80 px-3 py-1 rounded-full">{service.category}</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full">{service.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {service.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>{service.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium">
                    {service.destination}
                  </p>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Completed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Successfully Delivered</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestServices; 