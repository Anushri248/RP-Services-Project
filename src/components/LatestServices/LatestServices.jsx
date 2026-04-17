import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SlideRight } from "../Utility/animation";

import HeroImage2 from "../../assets/services-images/air2.webp";
import HeroImage3 from "../../assets/services-images/secondhand1.webp";
import HeroImage4 from "../../assets/services-images/img4.jpg";
import UsImage1 from "../../assets/project_img/us/img1.webp";
import UsImage2 from "../../assets/project_img/us/img2.webp";
import UsImage3 from "../../assets/project_img/us/img3.webp";
import UsImage4 from "../../assets/project_img/us/img4.webp";

const latestServices = [
  {
    id: 1,
    images: [UsImage1, UsImage2, UsImage3, UsImage4],
    title: "Recently Shipped Breakbulk Cargo to USA from India",
    description:
      "Successfully delivered 85 MT Cargo multi container load like Break Bulk , Flat Track  & High cube containers of Heavy Machineries from Pune  to South Carolina, USA . The shipment included Tower type melting furnace(3.0 ton/Hr.) NG with KROMSCHROEDER Combustion system  (Tilt type melting furnace)  valued at $4,60,000. Our team handled all customs clearance, documentation, and door-to-door delivery within the promised timeline.",
    category: "Sea Freight",
    destination: "Pune,India → South Carolina,USA",
  },
  {
    id: 2,
    images: [HeroImage2],
    title: "International Air Freight Services",
    description:
"We provide expedited air freight services for automotive, engineering, pharmaceutical, and hazardous cargo from India to global destinations, and from China, the USA, Europe, and the Gulf to India. Our team ensures fast, reliable, and time-bound delivery for a wide range of shipments with proper handling and compliance support.",
    category: "Air Freight",
  },
  {
    id: 3,
    images: [HeroImage3],
    title: "Specialize In Secondhand Machinery Import & Custom Clearance.",
    description:
      "Coordinated LCL (Less than Container Load) shipment of electronics and consumer goods from Chennai to Sydney. Successfully consolidated multiple small shipments into a single container, optimizing costs for our clients. The shipment included smartphones, laptops, and electronic accessories.",

    category: "Secondhand Machinery Import",
  },
];

const LatestServices = () => {
  const [currentImages, setCurrentImages] = useState(
    latestServices.map(() => 0),
  );

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [activeTouchIndex, setActiveTouchIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((current, index) => {
          const totalImages = latestServices[index].images.length;
          return (current + 1) % totalImages;
        }),
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = (serviceIndex) => {
    setCurrentImages((prev) =>
      prev.map((imgIndex, i) =>
        i === serviceIndex
          ? (imgIndex + 1) % latestServices[serviceIndex].images.length
          : imgIndex,
      ),
    );
  };

  const prevImage = (serviceIndex) => {
    setCurrentImages((prev) =>
      prev.map((imgIndex, i) =>
        i === serviceIndex
          ? (imgIndex - 1 + latestServices[serviceIndex].images.length) %
            latestServices[serviceIndex].images.length
          : imgIndex,
      ),
    );
  };

  const goToImage = (serviceIndex, imageIndex) => {
    setCurrentImages((prev) =>
      prev.map((imgIndex, i) => (i === serviceIndex ? imageIndex : imgIndex)),
    );
  };

  const handleTouchStart = (e, serviceIndex) => {
    setTouchStartX(e.touches[0].clientX);
    setActiveTouchIndex(serviceIndex);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (
      touchStartX !== null &&
      touchEndX !== null &&
      activeTouchIndex !== null
    ) {
      const distance = touchStartX - touchEndX;

      if (distance > 50) {
        nextImage(activeTouchIndex);
      } else if (distance < -50) {
        prevImage(activeTouchIndex);
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
    setActiveTouchIndex(null);
  };

  return (
    <section id="achievements" className="pb-10 bg-gray-50">
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
            Discover our recent successful shipments and logistics solutions
            that have helped businesses expand globally.
          </p>
        </motion.div>

        <div className="space-y-12">
          {latestServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={SlideRight(0.2 + index * 0.1)}
              whileInView="animate"
              initial="initial"
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
            >
              {/* Image Carousel Section */}
              <div className="w-full lg:w-1/2">
                <div
                  className="relative group overflow-hidden rounded-2xl shadow-lg bg-white/10 backdrop-blur-sm"
                  onTouchStart={(e) => handleTouchStart(e, index)}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={service.images[currentImages[index]]}
                      alt={`${service.title} ${currentImages[index] + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>

                  {/* Navigation Buttons */}
                  {service.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(index)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 hover:bg-white/30 transition-all duration-300 z-20"
                      >
                        <span className="text-white text-xl">‹</span>
                      </button>

                      <button
                        onClick={() => nextImage(index)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 hover:bg-white/30 transition-all duration-300 z-20"
                      >
                        <span className="text-white text-xl">›</span>
                      </button>
                    </>
                  )}

                  {/* Dots Indicator */}
                  {service.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                      {service.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => goToImage(index, imgIndex)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            imgIndex === currentImages[index]
                              ? "bg-white w-6"
                              : "bg-white/50 w-2"
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-primary/80 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
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
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Completed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
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
