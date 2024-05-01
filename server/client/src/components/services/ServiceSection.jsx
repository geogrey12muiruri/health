import React from "react";
import { Link } from "react-router-dom";
import { AcademicCapIcon, ChatAltIcon, ClipboardListIcon, UsersIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <ClipboardListIcon className="h-12 w-12 mx-auto text-blue-500" />,
      title: "Find My Doctor",
      description: "Connects patients with experienced medical professionals for physical consultations and plans for secure virtual consultations in the future.",
    },
    {
      icon: <ChatAltIcon className="h-12 w-12 mx-auto text-blue-500" />,
      title: "Medic-to-Patient Connectivity",
      description: "Provides a transparent and efficient communication channel between medics and patients for answering queries and ongoing support.",
    },
    {
      icon: <UsersIcon className="h-12 w-12 mx-auto text-blue-500" />,
      title: "Medic-to-Medic Networking",
      description: "Acts as a hub for medical professionals to connect, collaborate, and share knowledge, enhancing overall healthcare quality.",
    },
    {
      icon: <AcademicCapIcon className="h-12 w-12 mx-auto text-blue-500" />,
      title: "Student Library",
      description: "Gives students access to a comprehensive library of professionally written articles on medical topics, fostering continuous learning.",
    },
  ];

  return (
    <section className="bg-blue-200  py-12 font-mono">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.3,
              },
            },
            visible: {
              opacity: 1,
            },
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={{
                  hidden: {
                    y: 10,
                    opacity: 0,
                  },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.3 * index,
                    },
                  },
                }}
              >
                <ServiceCard icon={service.icon} title={service.title} description={service.description} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:bg-blue-100">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
      <div className="mt-4 text-center">
        <Link to="/" className="text-blue-500 hover:underline">Learn More</Link>
      </div>
    </div>
  );
};

export default ServicesSection
