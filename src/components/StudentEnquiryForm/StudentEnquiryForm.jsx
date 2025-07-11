import React, { useState } from 'react';
import ContactImage from '../../assets/contact-us.png';
import Swal from 'sweetalert2';
import './StudentEnquiryForm.css';
import {motion} from "framer-motion";
import { SlideRight } from '../Utility/animation';
import { SlideUp } from '../Utility/animation';

const StudentEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "d0c8a8c2-7c76-4cb7-8682-2b6f3353648c");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            // Show success message
            Swal.fire({
                title: "Thank you!",
                text: "Your Form has been submitted successfully",
                icon: "success"
            });
            
            // Clear the form
            event.target.reset();
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }
    } catch (error) {
        console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="enquiry" className='relative bg-gradient-primary overflow-hidden py-20 w-full'>
      <div className='absolute inset-0 bg-[url("/grid.svg")] opacity-10'></div>
      <div className='w-full px-4 md:px-8'>
        <div className="text-center mb-12">
          <motion.h2 
            variants={SlideUp(0.4)} 
            whileInView="animate" 
            initial="initial" 
            className='text-4xl md:text-5xl font-bold text-white mb-4'
          >
            Student Enquiry Form
          </motion.h2>
          <motion.p 
            variants={SlideUp(0.6)} 
            whileInView="animate" 
            initial="initial" 
            className='text-gray-200 max-w-2xl mx-auto'
          >
            Have questions about our services? We're here to help. Contact us today 
            and our team will get back to you shortly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Illustration Section */}
          <motion.div 
            variants={SlideRight(0.4)} 
            whileInView="animate" 
            initial="initial" 
            className="hidden md:block relative"
          >
            <div className='absolute inset-0 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-2xl blur-3xl'></div>
            <img 
              src={ContactImage} 
              alt="Contact Us Illustration" 
              className='relative w-full max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-500'
            />
          </motion.div>

          {/* Form Section */}
          <motion.div 
            variants={SlideRight(0.6)} 
            whileInView="animate" 
            initial="initial" 
            className="flex flex-col items-center md:items-start"
          >
            <form 
              onSubmit={handleSubmit} 
              className="w-full max-w-md space-y-6 backdrop-blur-xl bg-white/10 p-6 md:p-8 rounded-3xl border border-white/20 shadow-2xl hover:shadow-white/10 transition-all duration-500"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-white/90 text-sm font-medium pl-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 md:px-6 py-3 rounded-xl bg-white/5 border border-white/10 
                    text-white placeholder-white/30 focus:outline-none focus:border-white/30 
                    focus:bg-white/10 transition-all duration-300 hover:border-white/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-white/90 text-sm font-medium pl-1">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 md:px-6 py-3 rounded-xl bg-white/5 border border-white/10 
                    text-white placeholder-white/30 focus:outline-none focus:border-white/30 
                    focus:bg-white/10 transition-all duration-300 hover:border-white/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white/90 text-sm font-medium pl-1">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full px-4 md:px-6 py-3 rounded-xl bg-white/5 border border-white/10 
                    text-white placeholder-white/30 focus:outline-none focus:border-white/30 
                    focus:bg-white/10 transition-all duration-300 hover:border-white/20 resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-white mt-4 text-primary font-semibold px-6 py-3 rounded-xl
                  transform hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 
                  active:translate-y-0 transition-all duration-300"
              >
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StudentEnquiryForm