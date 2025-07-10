import React from "react";    
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import OurServices from "./components/OurServices/OurServices";
import LatestServices from "./components/LatestServices/LatestServices";
import BookServiceForm from "./components/BookServiceForm/BookServiceForm";
import Uses from "./components/Uses/Uses.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import StudentEnquiryForm from "./components/StudentEnquiryForm/StudentEnquiryForm.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Routes, Route } from 'react-router-dom';
import ServiceDetail from "./components/OurServices/ServiceDetail";
import { motion } from 'framer-motion';

const App = () => {
  const [showBookServiceModal, setShowBookServiceModal] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setShowBookServiceModal(true);
    window.addEventListener('openBookServiceModal', handler);
    return () => window.removeEventListener('openBookServiceModal', handler);
  }, []);
  return (
    <main className="min-h-screen relative">
      <Navbar />
      {showBookServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300" onClick={() => setShowBookServiceModal(false)}></div>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
            className="relative z-10 max-w-xl w-full mx-4"
          >
            <BookServiceForm />
          </motion.div>
        </div>
      )}
      <Routes>
        <Route path="/" element={
          <>
            <section id="home" className="w-full">
              <MainPage />
            </section>
            <section id="services" className="w-full">
              <OurServices setShowBookServiceModal={setShowBookServiceModal} />
            </section>
            <section id="latest-services" className="w-full">
              <LatestServices />
            </section>
            
            <section id="contact" className="w-full">
              <ContactUs />
            </section>
           
            <section id="about" className="w-full">
              <AboutUs />
            </section>
          </>
        } />
        <Route path="/services" element={<OurServices />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App; 