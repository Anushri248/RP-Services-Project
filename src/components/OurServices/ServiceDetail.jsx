import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BookServiceForm from '../BookServiceForm/BookServiceForm';
import Icon1 from '../../assets/Icon1.png';
import Icon2 from '../../assets/Icon2.png';
import Icon3 from '../../assets/Icon3.png';
import contactImg from '../../assets/contact-us.png';

// Add more images for demonstration (replace with real ones as needed)
const placeholderImages = [Icon1, Icon2, Icon3, contactImg];

const serviceDetails = {
  'air-import-export': {
    heading: 'Air Import & Export Door-to-Door Service',
    images: [Icon1, Icon2, contactImg],
    description: 'Fast and reliable air freight solutions for your import and export needs, including customs clearance and delivery.',
    details: 'We offer comprehensive air freight services, including pickup, customs clearance, and last-mile delivery. Our team ensures your goods move quickly and safely across borders.'
  },
  'sea-lcl-fcl': {
    heading: 'SEA LCL/FCL Import & Export Door-to-Door Service',
    images: [Icon2, Icon1, contactImg],
    description: 'Comprehensive sea freight services for both LCL and FCL shipments, ensuring smooth global trade.',
    details: 'Our sea freight solutions cover both Less than Container Load (LCL) and Full Container Load (FCL) shipments. We manage documentation, customs, and delivery.'
  },
  'cha-activities': {
    heading: 'CHA Activities (All custom-related work)',
    images: [Icon3, Icon1, contactImg],
    description: 'Expert handling of all customs-related activities and documentation for hassle-free logistics.',
    details: 'Our CHA team handles all customs clearance, documentation, and compliance, ensuring your shipments move without delay.'
  },
  'export-licenses': {
    heading: 'Export Related All Licences Registration',
    images: [contactImg, Icon1, Icon2],
    description: 'Assistance with registration and management of all export-related licenses and compliance.',
    details: 'We help you register and manage all necessary export licenses, keeping you compliant with regulations.'
  },
  'insurance': {
    heading: 'General Insurance / Marine Insurance',
    images: [contactImg, Icon2, Icon3],
    description: 'Protect your shipments with our general and marine insurance solutions.',
    details: 'Our insurance services cover your goods against loss or damage during transit, giving you peace of mind.'
  },
  'support-new-exporters': {
    heading: 'Support for New Exporters and Importers',
    images: [Icon1, contactImg, Icon3],
    description: 'Guidance and support for businesses new to international trade.',
    details: 'We provide step-by-step support for new exporters and importers, helping you navigate regulations and logistics.'
  },
  'merchant-support': {
    heading: 'Merchant Exporter and Importer support with Our IEC',
    images: [Icon2, contactImg, Icon1],
    description: 'Leverage our IEC for seamless merchant export and import operations.',
    details: 'Our IEC support helps you expand your business globally with ease.'
  },
  'logistics-training': {
    heading: 'Logistics Employee Training & Placement Service',
    images: [Icon3, contactImg, Icon2],
    description: 'Professional training and placement services for logistics employees.',
    details: 'We offer training programs and placement services to build a skilled logistics workforce.'
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];
  const [current, setCurrent] = useState(0);

  if (!service) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <Link to="/services" className="text-primary underline">Back to Services</Link>
      </div>
    );
  }

  const images = service.images && service.images.length > 0 ? service.images : [placeholderImages[0]];

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <Link to="/services" className="text-primary underline mb-6 inline-block">&larr; Back to Services</Link>
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        {/* Image Carousel */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
            <img src={images[current]} alt={service.heading} className="object-contain w-full h-full" />
            {images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"><span className="text-xl">&#8592;</span></button>
                <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"><span className="text-xl">&#8594;</span></button>
              </>
            )}
          </div>
          {images.length > 1 && (
            <div className="flex gap-2 mt-2">
              {images.map((img, idx) => (
                <button key={idx} onClick={() => setCurrent(idx)} className={`w-3 h-3 rounded-full ${current === idx ? 'bg-primary' : 'bg-gray-300'}`}></button>
              ))}
            </div>
          )}
        </div>
        {/* Description */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text">{service.heading}</h1>
          <p className="text-gray-600 text-lg mb-4">{service.description}</p>
          <div className="text-gray-700 mb-4">{service.details}</div>
        </div>
      </div>
      {/* BookServiceForm below */}
      <BookServiceForm />
    </div>
  );
};

export default ServiceDetail; 