
import Image1 from "../../assets/about1.webp";
import Image2 from "../../assets/about2.webp";

import { motion } from "framer-motion";
import { SlideUp } from "../Utility/animation";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50 w-full"
    >
      <div className="w-full px-4 md:px-8">
        <motion.div
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text">
              Us
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide expert end-to-end logistics solutions with air, sea, and
            land transportation, ensuring faster and more efficient global
            deliveries with reliable support and secure cargo management.s
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 backdrop-blur-sm bg-white/50 p-8 rounded-2xl border border-white shadow-glass hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-primary/30 blur-xl"></div>
              <img
                src={Image1}
                alt="Global Trading"
                className="w-full h-64 object-cover rounded-xl relative"
              />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text">
              Global Trading
            </h3>
            <p className="text-gray-800">
              Our extensive network and deep understanding of international
              markets enable us to facilitate seamless trade operations across
              borders. We ensure compliance with international regulations while
              helping businesses manage documentation and customs processes
              efficiently.
            </p>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Export documentation & compliance support</li>
              <li>Customs clearance expertise</li>
              <li>Strong global trade network</li>
              <li> Reduced risk of delays and regulatory issues</li>
            </ul>
          </motion.div>

          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 backdrop-blur-sm bg-white/50 p-8 rounded-2xl border border-white shadow-glass hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-primary/30 blur-xl"></div>
              <img
                src={Image2}
                alt="Logistics Solutions"
                className="w-full h-64 object-cover rounded-xl relative"
              />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text">
              Logistics Solutions
            </h3>
            <p className="text-gray-800">
              With years of experience in global logistics, we provide end-to-end transportation solutions including air, sea, and land freight. Our services help businesses move goods efficiently with reliable coordination and cost-effective shipping solutions.
            </p>
             <ul className="text-gray-700 list-disc list-inside">
              <li>Multi-modal transport (Air, Sea & Land)</li>
              <li>Competitive and cost-efficient shipping rates</li>
              <li>Door-to-door logistics coordination</li>
              <li> Reliable cargo handling and delivery</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
