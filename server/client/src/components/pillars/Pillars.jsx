import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faBookMedical, faHospital } from "@fortawesome/free-solid-svg-icons";

const PillarsSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-6">Health Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HealthServiceCard
              icon={faBookMedical}
              title="Health Tips"
              description="Receive valuable health tips to maintain a healthy lifestyle."
            />
            <HealthServiceCard
              icon={faHospital}
              title="Emergency Services"
              description="Access emergency medical assistance at any time."
            />
            <HealthServiceCard
              icon={faUserMd}
              title="Our Doctors"
              description="Meet our team of experienced and caring doctors."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const HealthServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-center mb-4 text-4xl text-gray-600">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default PillarsSection;
