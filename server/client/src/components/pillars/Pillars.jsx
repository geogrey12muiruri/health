import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { FaHome, FaEnvelope, FaSearch, FaCalendar, FaAmbulance, FaUserMd, FaFlask } from 'react-icons/fa';

const PillarsSection = () => {
  const [isSymptomCheckerVisible, setSymptomCheckerVisible] = useState(false);
  const [isEmergencyServicesVisible, setEmergencyServicesVisible] = useState(false);
  const [isDoctorsSectionVisible, setDoctorsSectionVisible] = useState(false);
  const controls = useAnimation();
  const symptomCheckerRef = useRef(null);
  const emergencyServicesRef = useRef(null);
  const doctorsSectionRef = useRef(null);

  useEffect(() => {
    const symptomCheckerObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setSymptomCheckerVisible(true);
        controls.start("visible");
      }
    });
    symptomCheckerObserver.observe(symptomCheckerRef.current);

    const emergencyServicesObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setEmergencyServicesVisible(true);
        controls.start("visible");
      }
    });
    emergencyServicesObserver.observe(emergencyServicesRef.current);

    const doctorsSectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setDoctorsSectionVisible(true);
        controls.start("visible");
      }
    });
    doctorsSectionObserver.observe(doctorsSectionRef.current);

    return () => {
      symptomCheckerObserver.unobserve(symptomCheckerRef.current);
      emergencyServicesObserver.unobserve(emergencyServicesRef.current);
      doctorsSectionObserver.unobserve(doctorsSectionRef.current);
    };
  }, [controls]);

  return (
    <section className="py-10 bg-blue-200">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-6">Health Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div ref={symptomCheckerRef}>
              {isSymptomCheckerVisible && <SymptomChecker />}
            </div>
            <div ref={emergencyServicesRef}>
              {isEmergencyServicesVisible && <EmergencyServices />}
            </div>
            <div ref={doctorsSectionRef}>
              {isDoctorsSectionVisible && <DoctorsSection />}
            </div>
          </div>
        </div>
      </div>
      <MobileNavbar />
    </section>
  );
};

const SymptomChecker = () => {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {/* Your Symptom Checker component content */}
    </motion.div>
  );
};

const EmergencyServices = () => {
  const variants = {
    visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5, type: "spring", stiffness: 100 } },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {/* Your Emergency Services component content */}
    </motion.div>
  );
};

const DoctorsSection = () => {
  const variants = {
    visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5, type: "spring", stiffness: 100 } },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {/* Your Doctors Section component content */}
    </motion.div>
  );
};

const MobileNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-around items-center md:hidden">
      <Link to="/home">
        <FaHome className="text-gray-600 text-lg cursor-pointer" />
      </Link>
      <Link to="/messages">
        <FaEnvelope className="text-gray-600 text-lg cursor-pointer" />
      </Link>
      <Link to="/search">
        <FaSearch className="text-gray-600 text-lg cursor-pointer" />
      </Link>
      <Link to="/bookings">
        <FaCalendar className="text-gray-600 text-lg cursor-pointer" />
      </Link>
    </div>
  );
};

export default PillarsSection;
