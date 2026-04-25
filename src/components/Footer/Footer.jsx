import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }}
      className="bg-gradient-primary relative overflow-hidden"
    >
      <div className="container px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          {/* Column 1 - Logo */}
          <div className="flex flex-col items-center space-y-4 lg:px-10">
            <img
              src={logo}
              alt="RP Services Logo"
              className="h-auto w-auto "
            />

        
          </div>

          {/* Column 2 - Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">RP Services</h2>

            <p className="text-gray-200 text-sm leading-relaxed">
              Your trusted partner in global trade and logistics solutions. We
              connect businesses worldwide with reliable import-export services,
              customs clearance, and comprehensive logistics support.
            </p>
          </div>

          {/* Column 3 - Navigation Links */}
          <div className="space-y-4 ">
            <h3 className="text-lg font-semibold text-white mb-4 lg:pl-20">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-3 ">
              <li className=" lg:pl-20">
                <HashLink
                  to="/#home" smooth
                  className="text-gray-200 hover:text-white hover:underline transition-colors"
                >
                  Home
                </HashLink>
              </li>
              <li className=" lg:pl-20">
                <HashLink
                  to="/#services" smooth
                  className="text-gray-200 hover:text-white hover:underline transition-colors"
                >
                  Our Services
                </HashLink>
              </li>
              <li className=" lg:pl-20">
                <HashLink
                  to="/#achievements" smooth
                  className="text-gray-200 hover:text-white hover:underline transition-colors"
                >
                  Our Achievements
                </HashLink>
              </li>
              <li className=" lg:pl-20">
                <HashLink
                  to="/#about" smooth
                  className="text-gray-200 hover:text-white hover:underline transition-colors"
                >
                  About Us
                </HashLink>
              </li>
              <li className=" lg:pl-20">
                <HashLink
                  to="/#contact" smooth
                  className="text-gray-200 hover:text-white hover:underline transition-colors"
                >
                  Contact Us
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-200 text-sm font-medium">Address:</p>
                <p className="text-gray-200 text-sm">
                  Office No. 38,39 & 40, 3rd floor,Mangal Archade,
                </p>
                <p className="text-gray-200 text-sm">
                  Mohan Nagar, Chichwad, Pune - 411019.{" "}
                </p>
              </div>
              <div>
                <p className="text-gray-200 text-sm font-medium">Phone:</p>
                <p className="text-gray-200 text-sm">+91 9607000108</p>
              </div>
              <div>
                <p className="text-gray-200 text-sm font-medium">Email:</p>
                <p className="text-gray-200 text-sm">
                  ravi@rpservice.in, rpservices.ins@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t mt-8 border-white/10 pt-8">
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
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Privacy Policy
                </h2>
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="prose prose-sm">
                <h3 className="text-lg font-semibold mb-2">
                  1. Information We Collect
                </h3>
                <p className="mb-4">
                  We collect information you provide directly to us when inquiring about our logistics, customs clearance, and global trade services. This includes your name, company details, email address, phone number, and shipment-specific information necessary to provide accurate quotes and logistics solutions.
                </p>

                <h3 className="text-lg font-semibold mb-2">
                  2. How We Use Your Information
                </h3>
                <p className="mb-4">
                  The information we collect is strictly used to process your logistics inquiries, facilitate freight forwarding, manage customs documentation, and communicate updates regarding your shipments. We may also use this information to improve our services and comply with international trade regulations.
                </p>

                <h3 className="text-lg font-semibold mb-2">
                  3. Information Sharing
                </h3>
                <p className="mb-4">
                  As a global logistics provider, we may share necessary shipment and contact information with trusted third-party partners, including shipping lines, airlines, customs authorities, and local transport operators solely for the purpose of executing your freight forwarding and clearance requests. We do not sell or rent your personal data to third parties.
                </p>

                <h3 className="text-lg font-semibold mb-2">4. Data Security</h3>
                <p className="mb-4">
                  We implement robust technical and organizational security measures to protect your sensitive trade documents and personal information against unauthorized access, loss, or disclosure.
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
                <h2 className="text-2xl font-bold text-gray-900">
                  Terms of Service
                </h2>
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="prose prose-sm">
                <h3 className="text-lg font-semibold mb-2">
                  1. Acceptance of Terms
                </h3>
                <p className="mb-4">
                  By accessing the RP Services website and engaging with our logistics, customs clearance, and freight forwarding services, you agree to be bound by these Terms of Service and all applicable international trade laws and regulations.
                </p>

                <h3 className="text-lg font-semibold mb-2">
                  2. Service Provision & Liability
                </h3>
                <p className="mb-4">
                  RP Services acts as a logistics facilitator and customs clearing agent. While we strive to ensure timely delivery and seamless clearance of goods (including air freight, sea freight, and secondhand machinery), we are not liable for delays caused by extreme weather, port congestion, customs inspections, or other circumstances beyond our reasonable control (Force Majeure).
                </p>

                <h3 className="text-lg font-semibold mb-2">
                  3. Client Responsibilities
                </h3>
                <p className="mb-4">
                  Clients are solely responsible for providing accurate, legal, and complete documentation for all shipments. Any penalties, storage charges, or legal actions arising from incorrect declarations, prohibited goods, or missing paperwork will be the strict liability of the client.
                </p>

                <h3 className="text-lg font-semibold mb-2">
                  4. Quotations and Pricing
                </h3>
                <p className="mb-4">
                  All service quotations provided by RP Services are subject to change based on fluctuating freight rates, carrier surcharges, and customs duty revisions. Final charges will be invoiced based on the actual weight, volume, and regulatory fees applied at the time of shipment processing.
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
  );
};

export default Footer;
