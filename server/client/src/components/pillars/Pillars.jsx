import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faUserGraduate, faIndustry } from "@fortawesome/free-solid-svg-icons";

const PillarsSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Book </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PillarCard
            icon={faTools}
            title="Practical Approach"
            description="Our curriculum emphasizes hands-on experience and practical learning, ensuring our students are well-prepared for real-world challenges."
          />
          <PillarCard
            icon={faUserGraduate}
            title="Professional Trainers"
            description="Our trainers are industry experts with years of experience in their respective fields. They provide personalized guidance and mentorship to our students."
          />
          <PillarCard
            icon={faIndustry}
            title="Industry Perspective"
            description="We collaborate closely with industry partners to ensure our curriculum remains relevant and up-to-date. This industry insight prepares our students for successful careers."
          />
        </div>
      </div>
    </section>
  );
};

const PillarCard = ({ icon, title, description }) => {
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
