import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";

import BookServiceForm from "../BookServiceForm/BookServiceForm";
import Icon1 from "../../assets/Icon1.png";
import Icon2 from "../../assets/Icon2.png";
import Icon3 from "../../assets/Icon3.png";
import contactImg from "../../assets/contact-us.png";
import air1 from "../../assets/air1.webp";
import air2 from "../../assets/air2.webp";
import air3 from "../../assets/air3.webp";
import air4 from "../../assets/air4.webp";
import sea1 from "../../assets/sea1.webp";
import sea2 from "../../assets/sea2.webp";
import sea3 from "../../assets/sea3.webp";
import support1 from "../../assets/support1.webp";
import support2 from "../../assets/support2.webp";
import support3 from "../../assets/support3.webp";
import insuranceImg from "../../assets/general_insurance.webp";
import Breakbulk1 from "../../assets/project_img/breakbulk/img1.webp";
import Breakbulk2 from "../../assets/project_img/breakbulk/img2.webp";
import Breakbulk3 from "../../assets/project_img/breakbulk/img3.webp";
import Breakbulk4 from "../../assets/project_img/breakbulk/img4.webp";
import Breakbulk5 from "../../assets/project_img/breakbulk/img5.webp";
import Breakbulk6 from "../../assets/project_img/breakbulk/img6.webp";
import licenseRegister from "../../assets/license_registration.webp";
import traningImg from "../../assets/traning.webp";
// Add more images for demonstration (replace with real ones as needed)
const placeholderImages = [Icon1, Icon2, Icon3, contactImg];

const serviceDetails = {
  "air-import-export": {
    heading: "Air Import & Export Door-to-Door Service",
    images: [air1, air2, air3, air4],
    description:
      "Our air freight services provide fast, secure, and reliable transportation for your import and export needs. With a strong logistics network, we ensure smooth cargo movement across major global destinations.",

    details:
      "Air freight is the quickest and safest way to ship time-sensitive or high-value goods worldwide. We offer complete door-to-door solutions, including pickup, customs clearance, air transportation, and final delivery.",

    details2:
      "Our experienced team ensures your cargo moves smoothly across borders while meeting all compliance requirements, providing a seamless and stress-free shipping experience.",
  },
  "sea-lcl-fcl": {
    heading: "SEA LCL/FCL Import & Export Door-to-Door Service",
    images: [sea1, sea2, sea3],
    description:
      "Our sea freight services offer a reliable and cost-effective solution for transporting goods across international markets. With a strong global network, we ensure smooth cargo movement between major ports worldwide.",
    details:
      "We handle both FCL and LCL shipments, providing flexible options based on your cargo size and shipping requirements. Our team manages the shipping process with careful planning and coordination.",
    details2:
      "From shipment booking to documentation and customs support, we ensure your cargo is handled professionally, delivering efficient and dependable ocean freight solutions for your import and export needs.",
  },
  "cha-activities": {
    heading: "Specialized Breakbulk & Hazardous Cargo Services",
    images: [
      Breakbulk1,
      Breakbulk2,
      Breakbulk3,
      Breakbulk4,
      Breakbulk5,
      Breakbulk6,
    ],
    description:
      "We specialize in handling breakbulk and hazardous cargo, ensuring safe and efficient transportation of goods that require special care. Our team manages complex shipments that cannot be transported in standard containers, providing reliable solutions for oversized, heavy, or sensitive cargo.",
    details:
      "With strong industry expertise, we ensure that hazardous materials are handled according to safety regulations and international shipping standards. From documentation to coordination with carriers and ports, we make sure every shipment is managed with precision and responsibility.",
    details2:
      "Our specialized services are designed to meet the unique needs of breakbulk and hazardous cargo, ensuring that your cargo reaches its destination safely and efficiently.",
  },
  "export-licenses": {
    heading: "Export Related All Licences Registration",
    images: [licenseRegister],
    description:
      "Starting an export business requires proper registrations and approvals. We assist businesses in obtaining the necessary export licenses and documentation to ensure smooth and compliant international trade operations.",
    details:
      "Our team helps with essential registrations such as the Import Export Code (IEC) issued by DGFT, which is mandatory for exporters, along with Authorized Dealer (AD) Code registration with customs and ICEGATE registration for filing shipping bills and managing export documentation.",
    details2:
      "Depending on the type of goods, additional certifications may be required, such as FSSAI for food products, Phytosanitary Certificate for agricultural goods, Drug License for pharmaceutical products, WPC Approval for telecom equipment, Textile Committee Certificate, SCOMET License, and Certificate of Origin issued by Chambers of Commerce. We guide you through the entire process to ensure hassle-free export compliance.",
  },
  insurance: {
    heading: "General Insurance / Marine Insurance",
    images: [insuranceImg],
    description:
      "We provide reliable Marine Insurance services to protect your cargo and shipments during transportation. Our solutions are designed for importers, exporters, and logistics businesses to safeguard goods against risks that may occur during transit.",
    details:
      "Our services include Marine Cargo Insurance for goods in transit and Marine Hull Insurance for vessels, along with flexible policy options such as Single Transit Policies and Open Policies for multiple shipments. These policies cover risks like damage, loss, fire, collision, theft, and natural disasters.",
    details2:
      "With our support, businesses can ensure secure shipments, reduced financial risk, and smooth international trade operations. We help you choose the right insurance coverage so your cargo remains protected throughout the entire transportation process.",
  },
  "support-new-exporters": {
    heading: "Support for New Exporters and Importers",
    images: [support1, support3],
    description:
      "Guidance and support for businesses new to international trade.",
    details:
      "We provide step-by-step support for new exporters and importers, helping you navigate regulations and logistics.",
  },
  "merchant-support": {
    heading: "Merchant Exporter and Importer support with Our IEC",
    images: [support2],
    description:
      "Leverage our IEC for seamless merchant export and import operations.",
    details:
      "Our IEC support helps you expand your business globally with ease.",
  },
  "logistics-training": {
    heading: "Logistics Employee Training & Placement Service",
    images: [traningImg],
    description:
      "Professional training and placement services for logistics employees.",
    details:
      "We offer training programs and placement services to build a skilled logistics workforce.",
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];
  const images = service?.images?.length > 0 ? service.images : [placeholderImages[0]];
  const [current, setCurrent] = useState(0);

  const carouselRef = useRef(null);

  const handleScroll = (e) => {
    if (!carouselRef.current) return;
    const scrollPosition = e.target.scrollLeft;
    const width = e.target.clientWidth;
    const newCurrent = Math.round(scrollPosition / width);
    if (newCurrent !== current) {
      setCurrent(newCurrent);
    }
  };

  const [showBookServiceModal, setShowBookServiceModal] = useState(false);

  if (!service) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <Link to="/services" className="text-primary underline">
          Back to Services
        </Link>
      </div>
    );
  }

  const nextImage = () => {
    if (carouselRef.current) {
      const newIndex = (current + 1) % images.length;
      carouselRef.current.scrollTo({
        left: newIndex * carouselRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const prevImage = () => {
    if (carouselRef.current) {
      const newIndex = (current - 1 + images.length) % images.length;
      carouselRef.current.scrollTo({
        left: newIndex * carouselRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const goToImage = (idx) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: idx * carouselRef.current.clientWidth,
        behavior: 'smooth'
      });
    } else {
      setCurrent(idx);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <Link
        to="/#services"
        onClick={() => {
          setTimeout(() => {
            const el = document.getElementById("services");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }}
        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm text-primary hover:bg-primary hover:text-white transition-all duration-300 inline-flex mb-8 group w-fit"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="font-semibold">Back to Services</span>
      </Link>
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        {/* Image Carousel */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-full aspect-[4/3] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
            <div 
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${service.heading} - ${idx + 1}`}
                  className="object-cover min-w-full h-full snap-center"
                  loading="eager"
                />
              ))}
            </div>
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute z-20 left-3 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white hover:scale-110 transition-all text-gray-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute z-20 right-3 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white hover:scale-110 transition-all text-gray-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </>
            )}
          </div>
          {images.length > 1 && (
            <div className="flex gap-3 mt-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => goToImage(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === idx ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>
          )}
        </div>
        {/* Description */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-50">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-secondary via-primary to-primary inline-block text-transparent bg-clip-text leading-tight">
              {service.heading}
            </h1>
            
            <div className="prose prose-lg text-gray-600">
              <p className="text-xl font-medium text-gray-800 mb-5 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-4">
                {service.details && (
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-secondary"></div>
                    <p className="leading-relaxed">{service.details}</p>
                  </div>
                )}
                
                {service.details2 && (
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary"></div>
                    <p className="leading-relaxed">{service.details2}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100 flex justify-start">
              <button
                onClick={() => setShowBookServiceModal(true)}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-secondary to-primary rounded-full hover:shadow-[0_8px_25px_-8px_rgba(var(--color-primary),0.5)] hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative flex items-center gap-2">
                  Book Service Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {showBookServiceModal && (
        <BookServiceForm setShowBookServiceModal={setShowBookServiceModal} />
      )}
    </div>
  );
};

export default ServiceDetail;
