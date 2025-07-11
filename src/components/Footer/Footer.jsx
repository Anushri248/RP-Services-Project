import React, { useState } from 'react';

import { motion } from "framer-motion";

const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-gradient-primary relative overflow-hidden">
      <div className="container px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Column 1 - Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">RP Services</h2>

            <p className="text-gray-200 text-sm">
              Your trusted partner in global trade and logistics solutions. We connect businesses worldwide with reliable import-export services.
            </p>
          </div>

          {/* Column 2 - Navigation Links */}
          <div className='mr-0'>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="flex flex-col space-y-2">
              <li><a href="#home" className="text-gray-200 hover:text-white hover:underline transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-200 hover:text-white hover:underline transition-colors">Our Services</a></li>
              <li><a href="#about" className="text-gray-200 hover:text-white hover:underline transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-200 hover:text-white hover:underline transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 - Services (now two columns) */}
          <div className="space-y-4 mr-4 ml-0">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="flex flex-col space-y-2">
                <li><a href="#services" className="text-gray-200 hover:text-white hover:underline transition-colors">Air Import & Export Door-to-Door Service</a></li>
                <li><a href="#services" className="text-gray-200 hover:text-white hover:underline transition-colors">SEA LCL/FCL Import & Export Door-to-Door Service</a></li>
                <li><a href="#services" className="text-gray-200 hover:text-white hover:underline transition-colors">CHA Activities (All custom-related work)</a></li>
                <li><a href="#services" className="text-gray-200 hover:text-white hover:underline transition-colors">Export Related All Licences Registration</a></li>
                <li><a href="#services" className="text-gray-200 hover:text-white hover:underline transition-colors">General Insurance / Marine Insurance</a></li>
              </ul>
              <ul className="flex flex-col space-y-2">
                <li><a href="#services" className="text-gray-200 hover:text-white hover:underline transition-colors">Support for New Exporters and Importers</a></li>
                <li><a href="#services" className="text-gray-200 hover:text-white hover:underline transition-colors">Merchant Exporter and Importer support with Our IEC</a></li>
                <li><a href="#services" className="text-gray-200 hover:text-white hover:underline transition-colors">Logistics Employee Training & Placement Service</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-gray-200 text-sm">123 Business Avenue</p>
              <p className="text-gray-200 text-sm">New York, NY 10001</p>
              <p className="text-gray-200 text-sm">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-200 text-sm">Email: info@rpservices.com</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t mt-4 border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-200 text-sm">
              © {new Date().getFullYear()} RP Services. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="text-gray-200 hover:text-white hover:underline transition-colors text-sm"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setShowTermsModal(true)}
                className="text-gray-200 hover:text-white hover:underline transition-colors text-sm"
              >
                Terms of Services
              </button>            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="prose prose-sm">
                <h3 className="text-lg font-semibold mb-2">1. Information We Collect</h3>
                <p className="mb-4">
                  We collect information that you provide directly to us, including when you create an account,
                  make a purchase, or contact us for support.
                </p>

                <h3 className="text-lg font-semibold mb-2">2. How We Use Your Information</h3>
                <p className="mb-4">
                  We use the information we collect to provide, maintain, and improve our services,
                  to process your transactions, and to communicate with you.
                </p>

                <h3 className="text-lg font-semibold mb-2">3. Information Sharing</h3>
                <p className="mb-4">
                  We do not sell or share your personal information with third parties except as
                  described in this privacy policy.
                </p>

                <h3 className="text-lg font-semibold mb-2">4. Data Security</h3>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your
                  personal information against unauthorized access or disclosure.
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="bg-gradient-to-r from-secondary to-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="prose prose-sm">
                <h3 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h3>
                <p className="mb-4">
                  By accessing and using our services, you agree to be bound by these Terms of Service
                  and all applicable laws and regulations.
                </p>

                <h3 className="text-lg font-semibold mb-2">2. Use of Services</h3>
                <p className="mb-4">
                  Our services are provided for your personal and commercial use subject to these terms.
                  You agree not to misuse our services or help anyone else do so.
                </p>

                <h3 className="text-lg font-semibold mb-2">3. User Responsibilities</h3>
                <p className="mb-4">
                  You are responsible for maintaining the confidentiality of your account
                  and for all activities that occur under your account.
                </p>

                <h3 className="text-lg font-semibold mb-2">4. Service Modifications</h3>
                <p className="mb-4">
                  We reserve the right to modify or discontinue our services at any time
                  without prior notice.
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="bg-gradient-to-r from-secondary to-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.footer>

  )
}

export default Footer