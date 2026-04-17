import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import BookServiceForm from "../BookServiceForm/BookServiceForm";
import Icon1 from "../../assets/Icon1.png";
import Icon2 from "../../assets/Icon2.png";
import Icon3 from "../../assets/Icon3.png";
import contactImg from "../../assets/contact-us.png";
import air1 from "../../assets/air1.webp";
import air2 from "../../assets/air2.webp";
import air3 from "../../assets/air3.webp";
import air4 from "../../assets/air4.webp";
import sea1 from "../../assets/sea1.webp";
import sea2 from "../../assets/sea2.webp";
import sea3 from "../../assets/sea3.webp";
import support1 from "../../assets/support1.webp";
import support2 from "../../assets/support2.webp";
import support3 from "../../assets/support3.webp";
import insuranceImg from "../../assets/general_insurance.webp";
import Breakbulk1 from "../../assets/project_img/breakbulk/img1.webp";
import Breakbulk2 from "../../assets/project_img/breakbulk/img2.webp";
import Breakbulk3 from "../../assets/project_img/breakbulk/img3.webp";
import Breakbulk4 from "../../assets/project_img/breakbulk/img4.webp";
import Breakbulk5 from "../../assets/project_img/breakbulk/img5.webp";
import Breakbulk6 from "../../assets/project_img/breakbulk/img6.webp";
import licenseRegister from "../../assets/license_registration.webp";
import traningImg from "../../assets/traning.webp";
// Add more images for demonstration (replace with real ones as needed)
const placeholderImages = [Icon1, Icon2, Icon3, contactImg];

const serviceDetails = {
  "air-import-export": {
    heading: "Air Import & Export Door-to-Door Service",
    images: [air1,air2,air3,air4],
  description:
"Our air freight services provide fast, secure, and reliable transportation for your import and export needs. With a strong logistics network, we ensure smooth cargo movement across major global destinations.",

details:
"Air freight is the quickest and safest way to ship time-sensitive or high-value goods worldwide. We offer complete door-to-door solutions, including pickup, customs clearance, air transportation, and final delivery.",

details2:
"Our experienced team ensures your cargo moves smoothly across borders while meeting all compliance requirements, providing a seamless and stress-free shipping experience.",
  },
  "sea-lcl-fcl": {
    heading: "SEA LCL/FCL Import & Export Door-to-Door Service",
    images: [sea1,sea2,sea3],
    description:
      "Our sea freight services offer a reliable and cost-effective solution for transporting goods across international markets. With a strong global network, we ensure smooth cargo movement between major ports worldwide.",
    details:
    "We handle both FCL and LCL shipments, providing flexible options based on your cargo size and shipping requirements. Our team manages the shipping process with careful planning and coordination.",
    details2: 
    "From shipment booking to documentation and customs support, we ensure your cargo is handled professionally, delivering efficient and dependable ocean freight solutions for your import and export needs."
  },
  "cha-activities": {
    heading: "Specialized Breakbulk & Hazardous Cargo Services",
    images: [Breakbulk1,Breakbulk2,Breakbulk3,Breakbulk4,Breakbulk5,Breakbulk6],
    description:
    "We specialize in handling breakbulk and hazardous cargo, ensuring safe and efficient transportation of goods that require special care. Our team manages complex shipments that cannot be transported in standard containers, providing reliable solutions for oversized, heavy, or sensitive cargo.",
    details:
    "With strong industry expertise, we ensure that hazardous materials are handled according to safety regulations and international shipping standards. From documentation to coordination with carriers and ports, we make sure every shipment is managed with precision and responsibility.",
    details2:
    "Our specialized services are designed to meet the unique needs of breakbulk and hazardous cargo, ensuring that your cargo reaches its destination safely and efficiently."
  },
  "export-licenses": {
    heading: "Export Related All Licences Registration",
    images: [licenseRegister],
    description:
      "Starting an export business requires proper registrations and approvals. We assist businesses in obtaining the necessary export licenses and documentation to ensure smooth and compliant international trade operations.",
    details:
    "Our team helps with essential registrations such as the Import Export Code (IEC) issued by DGFT, which is mandatory for exporters, along with Authorized Dealer (AD) Code registration with customs and ICEGATE registration for filing shipping bills and managing export documentation.",
    details2:
    "Depending on the type of goods, additional certifications may be required, such as FSSAI for food products, Phytosanitary Certificate for agricultural goods, Drug License for pharmaceutical products, WPC Approval for telecom equipment, Textile Committee Certificate, SCOMET License, and Certificate of Origin issued by Chambers of Commerce. We guide you through the entire process to ensure hassle-free export compliance."
  },
  insurance: {
    heading: "General Insurance / Marine Insurance",
    images: [insuranceImg],
    description:
    "We provide reliable Marine Insurance services to protect your cargo and shipments during transportation. Our solutions are designed for importers, exporters, and logistics businesses to safeguard goods against risks that may occur during transit.",
      details:
    "Our services include Marine Cargo Insurance for goods in transit and Marine Hull Insurance for vessels, along with flexible policy options such as Single Transit Policies and Open Policies for multiple shipments. These policies cover risks like damage, loss, fire, collision, theft, and natural disasters.",
    details2:
      "With our support, businesses can ensure secure shipments, reduced financial risk, and smooth international trade operations. We help you choose the right insurance coverage so your cargo remains protected throughout the entire transportation process."
      },
  "support-new-exporters": {
    heading: "Support for New Exporters and Importers",
    images: [support1, support3],
    description:
      "Guidance and support for businesses new to international trade.",
    details:
      "We provide step-by-step support for new exporters and importers, helping you navigate regulations and logistics.",
  },
  "merchant-support": {
    heading: "Merchant Exporter and Importer support with Our IEC",
    images: [support2],
    description:
      "Leverage our IEC for seamless merchant export and import operations.",
    details:
      "Our IEC support helps you expand your business globally with ease.",
  },
  "logistics-training": {
    heading: "Logistics Employee Training & Placement Service",
    images: [traningImg],
    description:
      "Professional training and placement services for logistics employees.",
    details:
      "We offer training programs and placement services to build a skilled logistics workforce.",
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];
  const [current, setCurrent] = useState(0);
  const [showBookServiceModal, setShowBookServiceModal] = useState(false);

  if (!service) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <Link to="/services" className="text-primary underline">
          Back to Services
        </Link>
      </div>
    );
  }

  const images =
    service.images && service.images.length > 0
      ? service.images
      : [placeholderImages[0]];

  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () =>
    setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <Link
        to="/#services"   onClick={() => {
    setTimeout(() => {
      const el = document.getElementById("services");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}
        className="text-5xl px-6 rounded-full text-center  bg-gray-200 text-primary hover:-translate-x-1 transition-transform duration-200 inline-block mb-6"
      > <p className="mb-3 font-extrabold ">←</p>
      </Link>
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        {/* Image Carousel */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={images[current]}
              alt={service.heading}
              className="object-contain w-full h-full"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
                >
                  <span className="text-xl">&lt;</span>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
                >
                  <span className="text-xl">&gt;</span>
                </button>
              </>
            )}
          </div>
          {images.length > 1 && (
            <div className="flex gap-2 mt-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full ${
                    current === idx ? "bg-primary" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          )}
        </div>
        {/* Description */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-secondary to-primary inline-block text-transparent bg-clip-text">
            {service.heading}
          </h1>
          <p className="text-gray-600 text-lg mb-4">{service.description}</p>
          <div className="text-gray-700 mb-4">{service.details}</div>
                    <div className="text-gray-700 mb-4">{service.details2}</div>
           <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowBookServiceModal(true)}
                        className='bg-gradient-to-r from-secondary to-primary text-white px-9 py-4 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300'
        >
          Book Service
        </button>
      </div>
        </div>
      </div>
 
      {showBookServiceModal && (
        <BookServiceForm setShowBookServiceModal={setShowBookServiceModal} />
      )}
    </div>
  );
};

export default ServiceDetail;
