import React, { useState } from 'react';

const WEB3FORMS_ACCESS_KEY = 'd0c8a8c2-7c76-4cb7-8682-2b6f3353648c';

const SERVICES = [
  'Air Import & Export Door-to-Door Service',
  'SEA LCL/FCL Import & Export Door-to-Door Service',
  'CHA Activities (All custom-related work)',
  'Export Related All Licences Registration',
  'General Insurance / Marine Insurance',
  'Support for New Exporters and Importers',
  'Merchant Exporter and Importer support with Our IEC',
  'Logistics Employee Training & Placement Service',
];

const nameRegex = /^[A-Za-z ]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10,15}$/;

const BookServiceForm = () => {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

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
    setStatus('submitting');
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
      setErrors({});
    } else {
      setStatus('error');
    }
  };

  // Add close handler
  const handleClose = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event('closeBookServiceModal'));
  };

  return (
    <div className="w-full flex justify-center items-center min-h-[20vh] p-2">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md md:max-w-xl backdrop-blur-xl bg-white/10 p-2 md:p-4 rounded-3xl border border-white/20 shadow-2xl hover:shadow-white/10 transition-all duration-500"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
        noValidate
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute  right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-gray-700 hover:bg-white hover:text-primary shadow focus:outline-none"
        >
          &times;
        </button>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white bg-clip-text drop-shadow-lg">
          Book a Service
        </h2>
        {status === 'success' ? (
          <div className="text-green-600 text-center font-semibold py-4">Thank you! Your enquiry has been submitted.</div>
        ) : (
          <div className="space-y-3">
            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium pl-1">Name<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/10'} text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/20 transition-all duration-300 hover:border-white/20`}
              />
              {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
            </div>
            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium pl-1">Email<span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/10'} text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/20 transition-all duration-300 hover:border-white/20`}
              />
              {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>
            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium pl-1">Phone<span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-white/10'} text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/20 transition-all duration-300 hover:border-white/20`}
              />
              {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
            </div>
            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium pl-1">Service of Interest<span className="text-red-500">*</span></label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${errors.service ? 'border-red-500' : 'border-white/10'} text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/20 transition-all duration-300 hover:border-white/20`}
              >
                <option value="">Select a service</option>
                {SERVICES.map((service, idx) => (
                  <option className='text-black' key={idx} value={service}>{service}</option>
                ))}
              </select>
              {errors.service && <div className="text-red-500 text-sm mt-1">{errors.service}</div>}
            </div>
            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium pl-1">Message (optional)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="3"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/20 transition-all duration-300 hover:border-white/20 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-white mt-4 text-primary font-semibold px-6 py-3 rounded-xl transform hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 active:translate-y-0 transition-all duration-300"
            >
              {status === 'submitting' ? 'Submitting...' : 'Send Request'}
            </button>
            {status === 'error' && <div className="text-red-600 text-center font-semibold py-2">Something went wrong. Please try again.</div>}
          </div>
        )}
      </form>
    </div>
  );
};

export default BookServiceForm;