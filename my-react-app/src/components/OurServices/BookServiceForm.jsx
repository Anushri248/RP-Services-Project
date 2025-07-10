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

  return (
    <div id="bookServiceForm" className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text">Book a Service</h2>
      {status === 'success' ? (
        <div className="text-green-600 text-center font-semibold py-4">Thank you! Your enquiry has been submitted.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-700" noValidate>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Name<span className="text-red-500">*</span></label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary`} />
            {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email<span className="text-red-500">*</span></label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary`} />
            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Phone<span className="text-red-500">*</span></label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary`} />
            {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
          </div>
          <div className='text-gray-700'>
            <label className="block text-gray-700 mb-1 font-medium">Service of Interest<span className="text-red-500">*</span></label>
            <select  name="service" value={form.service} onChange={handleChange} required className={`w-full border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary`}>
              <option value="">Select a service</option>
              {SERVICES.map((service, idx) => (
                <option key={idx} value={service}>{service}</option>
              ))}
            </select>
            {errors.service && <div className="text-red-500 text-sm mt-1">{errors.service}</div>}
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Message (optional)</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows="3" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
          </div>
          <button type="submit" disabled={status === 'submitting'} className="w-full bg-gradient-to-r from-secondary to-primary text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300">
            {status === 'submitting' ? 'Submitting...' : 'Send Request'}
          </button>
          {status === 'error' && <div className="text-red-600 text-center font-semibold py-2">Something went wrong. Please try again.</div>}
        </form>
      )}
    </div>
  );
};

export default BookServiceForm; 