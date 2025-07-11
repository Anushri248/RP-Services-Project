import React from 'react';
import ServiceCardImage from './CardComp';
import ServiceCardIcon from './ServiceCardIcon';
import Img1 from "../../assets/Uses/1.png";
import Img2 from "../../assets/Uses/2.png";
import Img3 from "../../assets/Uses/3.png";
import Img4 from "../../assets/Uses/license.png";
import Img5 from "../../assets/Uses/insurance-img.png";
import Icon1 from '../../assets/Icon1.png';
import Icon2 from '../../assets/Icon2.png';
import Icon3 from '../../assets/Icon3.png';
import contactImg from '../../assets/contact-us.png';
import BookServiceForm from '../BookServiceForm/BookServiceForm';

// import BookServiceForm from '../BookServiceForm/BookServiceForm'; // To be created
import {motion} from "framer-motion";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const coreServices = [
  {
    id: 'air-import-export',
    image: Img1,
    heading: 'Air Import & Export Door-to-Door Service',
    description: 'Fast and reliable air freight solutions for your import and export needs, including customs clearance and delivery.'
  },
  {
    id: 'sea-lcl-fcl',
    image: Img2,
    heading: 'SEA LCL/FCL Import & Export Door-to-Door Service',
    description: 'Comprehensive sea freight services for both LCL and FCL shipments, ensuring smooth global trade.'
  },
  {
    id: 'cha-activities',
    image: Img3,
    heading: 'CHA Activities (All custom-related work)',
    description: 'Expert handling of all customs-related activities and documentation for hassle-free logistics.'
  },
  {
    id: 'export-licenses',
    image: Img4,
    heading: 'Export Related All Licences Registration',
    description: 'Assistance with registration and management of all export-related licenses and compliance.'
  },
  {
    id: 'insurance',
    image: Img5,
    heading: 'General Insurance / Marine Insurance',
    description: 'Protect your shipments with our general and marine insurance solutions.'
  },
  // Book Service Now card placeholder (will be rendered separately)
];

const supportServices = [
  {
    id: 'support-new-exporters',
    image: Icon1,
    heading: 'Support for New Exporters and Importers',
    description: 'Guidance and support for businesses new to international trade.'
  },
  {
    id: 'merchant-support',
    image: Icon2,
    heading: 'Merchant Exporter and Importer support with Our IEC',
    description: 'Leverage our IEC for seamless merchant export and import operations.'
  },
  {
    id: 'logistics-training',
    image: Icon3,
    heading: 'Logistics Employee Training & Placement Service',
    description: 'Professional training and placement services for logistics employees.'
  },
];

const OurServices = ({ setShowBookServiceModal }) => {
  const scrollToSection = (sectionId) => {
    console.log('Scrolling to:', sectionId);
    const section = document.getElementById(sectionId);
    console.log('Found section:', section);

    if (section) {
      const offset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className='py-20 bg-white w-full'>
      <div className='w-full px-4 md:px-8 max-w-7xl mx-auto'>
        <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text mb-8 text-center w-full'>
          Core Import & Export Services
        </h1>
        <h2 className='text-2xl font-semibold mb-4'></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {coreServices.slice(0, 3).map((service, idx) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="block group focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl transition-shadow hover:shadow-2xl active:scale-[0.98]"
              tabIndex={0}
            >
              <ServiceCardImage {...service} animationDelay={0.1 * idx} />
            </Link>
          ))}
        </div>
        {/* Responsive: stacked on small, centered row on md+ */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:flex md:justify-center">
          {coreServices.slice(3).map((service, idx) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="w-full max-w-sm block group focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl transition-shadow hover:shadow-2xl active:scale-[0.98]"
              tabIndex={0}
            >
              <ServiceCardImage {...service} animationDelay={0.1 * (idx + 3)} />
            </Link>
          ))}
        </div>

        {/* Book Your Service Now Horizontal Card */}
        <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-[#667eea] to-[#764ba2] border border-white/20 shadow-2xl rounded-2xl p-8 mb-16 max-w-6xl mx-auto backdrop-blur-xl">
          <img src={contactImg} alt="Book Service" className="w-40 h-40 object-contain rounded-2xl mb-6 md:mb-0 md:mr-8" />
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Book Your Service Now</h3>
            <p className="text-white/90 mb-4">Ready to start your global trade journey? Book your service with us today!</p>
            <button
              onClick={() => setShowBookServiceModal && setShowBookServiceModal(true)}
              className="bg-white text-[#764ba2] px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-semibold hover:bg-gray-50"
            >
              Book Now
            </button>
          </div>
        </div>
        
        {/* Book Service Button */}
        {/* <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <button 
              onClick={() => {
                const formSection = document.querySelector('.my-12');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Book Your Service Now
                <span className="inline-block transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </button>
          </motion.div>
          <p className="text-gray-600 mt-4 text-sm">Ready to start your global trade journey? Let's make it happen!</p>
        </div> */}

        <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text mb-8 text-center w-full'>
          Support & Value-Added Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {supportServices.map((service, idx) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="block group focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl transition-shadow hover:shadow-2xl active:scale-[0.98]"
              tabIndex={0}
            >
              <ServiceCardIcon {...service} animationDelay={0.1 * idx} />
            </Link>
          ))}
        </div>
      
      </div>
    </section>
  );
};

OurServices.propTypes = {
  setShowBookServiceModal: PropTypes.func,
};

export default OurServices;