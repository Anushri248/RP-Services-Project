import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';

const WEB3FORMS_ACCESS_KEY = 'd0c8a8c2-7c76-4cb7-8682-2b6f3353648c';

const SERVICES = [
  'Air Import & Export Door-to-Door Service',
  'SEA LCL/FCL Import & Export Door-to-Door Service',
  'Specialized Breakbulk & Hazardous Cargo Services',
  'Export Related All Licences Registration',
  'General Insurance / Marine Insurance',
  'Support for New Exporters and Importers',
  'Merchant Exporter and Importer support with Our IEC',
  'Logistics Employee Training & Placement Service',
];

const nameRegex = /^[A-Za-z ]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10,15}$/;

const BookServiceForm = ({ setShowBookServiceModal }) => {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isClosing, setIsClosing] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (!nameRegex.test(form.name.trim())) {
      newErrors.name = 'Name should only contain alphabets and spaces.';
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(form.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits).';
    }
    if (!form.service) {
      newErrors.service = 'Please select a service.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const object = { ...form, access_key: WEB3FORMS_ACCESS_KEY };
    if (!object.message || object.message.trim() === '') {
      object.message = "None";
    }
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: json
      });

      const result = await response.json();

      if (result.success) {
        // Show success message with SweetAlert2
        Swal.fire({
          title: "Thank you!",
          text: "Your service request has been submitted successfully",
          icon: "success",
          confirmButtonColor: "#667eea",
          confirmButtonText: "OK"
        });
        
        // Clear the form
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
        setErrors({});
        setStatus('idle');
        
        // Close the modal after successful submission
        handleClose();
      } else {
        setStatus('error');
        console.error("Web3Forms Error:", result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowBookServiceModal(false);
    }, 300); // 300ms matches the CSS transition
  };

  return (
    <AnimatePresence>
      <motion.div
        id="book-service-modal"
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="w-11/12 max-w-sm sm:max-w-md md:max-w-xl relative"
          initial={{ y: -100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -100, opacity: 0, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            damping: 25, 
            stiffness: 300,
            duration: 0.5 
          }}
        >
          <div className="w-full flex justify-center px-2">
          <form
            onSubmit={handleSubmit}
            className="relative w-full backdrop-blur-2xl bg-white/10 p-6 sm:p-8 rounded-3xl border-2 border-gray-400/20 shadow-2xl hover:shadow-gray-400/10 transition-all duration-500 overflow-hidden"
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
            noValidate
          >
            {/* Close Button (top-right, circular, black/grey theme, flush to margin) */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-0.5 right-3 w-8 mb-5 aspect-square flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 hover:text-black shadow-md transition-all duration-200 z-10 border border-gray-300 p-0"
              style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              &times;
            </button>

            <motion.h2 
              className="text-2xl md:text-4xl sm:text-2xl font-bold mb-6 text-center text-white drop-shadow-lg flex items-center justify-center gap-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Book a Service
            </motion.h2>
        {status === 'success' ? (
          <motion.div 
            className="text-green-500 text-center font-semibold py-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Thank you! Your enquiry has been submitted.
          </motion.div>
        ) : (
          <motion.div 
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium pl-1">
                  Name<span className="text-red-400">*</span>
                </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className={`w-full px-4 py-3 rounded-xl bg-white/20 border ${errors.name ? 'border-red-400' : 'border-purple-300/30'} text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:bg-white/30 transition-all duration-300 hover:border-purple-400/60`}
              />
              {errors.name && <div className="text-red-400 text-sm mt-1">{errors.name}</div>}
            </div>

            <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium pl-1">
                  Email<span className="text-red-400">*</span>
                </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-xl bg-white/20 border ${errors.email ? 'border-red-400' : 'border-purple-300/30'} text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:bg-white/30 transition-all duration-300 hover:border-purple-400/60`}
              />
              {errors.email && <div className="text-red-400 text-sm mt-1">{errors.email}</div>}
            </div>

            <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium pl-1">
                  Phone<span className="text-red-400">*</span>
                </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className={`w-full px-4 py-3 rounded-xl bg-white/20 border ${errors.phone ? 'border-red-400' : 'border-purple-300/30'} text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:bg-white/30 transition-all duration-300 hover:border-purple-400/60`}
              />
              {errors.phone && <div className="text-red-400 text-sm mt-1">{errors.phone}</div>}
            </div>

            <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium pl-1">
                  Service of Interest<span className="text-red-400">*</span>
                </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-xl bg-white/20 border ${errors.service ? 'border-red-400' : 'border-purple-300/30'} text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:bg-white/30 transition-all duration-300 hover:border-purple-400/60`}
              >
                <option value="">Select a service</option>
                {SERVICES.map((service, idx) => (
                    <option className="text-black" key={idx} value={service}>
                      {service}
                    </option>
                ))}
              </select>
              {errors.service && <div className="text-red-400 text-sm mt-1">{errors.service}</div>}
            </div>

            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium pl-1">Message (optional)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="3"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-purple-300/30 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:bg-white/30 transition-all duration-300 hover:border-purple-400/60 resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-700 mt-4 text-white font-semibold px-6 py-3 rounded-xl transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-400/30 active:translate-y-0 transition-all duration-300 shadow-md hover:bg-white hover:text-black"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'submitting' ? 'Submitting...' : 'Send Request'}
            </motion.button>

              {status === 'error' && (
                <motion.div 
                  className="text-red-500 text-center font-semibold py-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}
          </motion.div>
        )}
      </form>
      </div>
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
};

export default BookServiceForm;
