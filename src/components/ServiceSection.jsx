import React from "react";
import "../css/ServiceSection.css"; // Custom styles
import ser1 from "../assets/img/hitam.png";
import ser2 from "../assets/img/hitom.png";

const ServiceSection = () => {
  return (
    <div className="service-section">
      {/* Centered Title */}
      <h1 data-aos="fade-up">ServiceNow Solutions for Your Enterprise</h1>

      {/* Grid layout for paragraph and image */}
      <div className="service-grid">
        <div className="service-content" data-aos="fade-up">
        <p>IT Service Management (ITSM)</p>

          <p>
            Unlock the full potential of your enterprise with ServiceNow's
            powerful platform. Our customized ServiceNow solutions help automate
            IT operations, streamline service delivery, and transform your
            digital workflows, providing a unified experience across your
            organization. Gain real-time insights, enhance collaboration, and
            ensure end-to-end transparency with our ServiceNow expertise.
          </p>
        </div>

        <div className="tool-image" data-aos="fade-right">
          <img src={ser1} alt="ServiceNow IT Service Management" />
        </div>
      </div>
      <div className="service-grid">
        <div className="tool-image" data-aos="fade-right">
          <img src={ser2} alt="ServiceNow IT Operations Management" />
        </div>
        <div className="service-content" data-aos="fade-up">
        <p>IT Operations Management (ITOM)</p>

          <p>
            Streamline IT infrastructure and proactively manage your operations
            with ServiceNow's ITOM capabilities. Monitor performance, automate
            repetitive tasks, and optimize your IT environment to minimize
            downtime. With real-time visibility into your infrastructure,
            ServiceNow empowers your teams to resolve issues faster and ensure
            smooth IT operations across your enterprise.
          </p>
        </div>
      </div>
      
      
    </div>
  );
};

export default ServiceSection;
