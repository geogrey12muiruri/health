import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faBookMedical, faHospital, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const PillarsSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <HealthTipsCarousel />
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <EmergencyServices />
          </div>
          <div className="w-full md:w-1/3">
            <DoctorsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

const HealthTipsCarousel = () => {
  const healthTips = ["Health Tip 1", "Health Tip 2", "Health Tip 3", "Health Tip 4", "Health Tip 5"];
  const [numCarousels, setNumCarousels] = useState(1);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      setNumCarousels(2);
    } else {
      setNumCarousels(1);
    }
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {[...Array(numCarousels)].map((_, index) => (
        <div key={index} className="text-center mb-4">
          {/* Health tips carousel with fade effect */}
          <div className="flex justify-center items-center relative">
            {healthTips.map((tip, idx) => (
              <div
                key={idx}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                  idx === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="bg-gray-200 rounded-lg p-4">{tip}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const EmergencyServices = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">Services</h3>
      <div className="flex justify-between">
        <EmergencyServiceItem icon={faHospital} title="Emergency Services" />
        <EmergencyServiceItem icon={faUserMd} title="See a Doctor" />
        <EmergencyServiceItem icon={faBookMedical} title="Book Imaging and Labs" />
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEllipsisH} className="text-gray-600 text-lg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const EmergencyServiceItem = ({ icon, title }) => {
  return (
    <div className="flex-shrink-0 bg-gray-200 rounded-lg p-4 mr-4">
      <FontAwesomeIcon icon={icon} className="text-gray-600 text-lg" />
      <p className="text-gray-800">{title}</p>
    </div>
  );
};

const DoctorsSection = () => {
  const doctors = [
    { name: "Doctor 1", image: "doctor1.jpg", description: "Description of Doctor 1" },
    { name: "Doctor 2", image: "doctor2.jpg", description: "Description of Doctor 2" },
    { name: "Doctor 3", image: "doctor3.jpg", description: "Description of Doctor 3" }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">Our Doctors</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-gray-200 rounded-lg p-4">
            <img src={doctor.image} alt={doctor.name} className="w-full h-32 object-cover rounded-lg mb-2" />
            <p className="text-gray-800 font-semibold">{doctor.name}</p>
            <p className="text-gray-600">{doctor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PillarsSection;
