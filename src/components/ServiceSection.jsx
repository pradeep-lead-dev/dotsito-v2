import React from "react";
import "../css/ServiceSection.css"; // Custom styles
import ser1 from "../assets/img/service.png";

const ServiceSection = () => {
  return (
    <div className="service-section">
      {/* Centered Title */}
      <h1 data-aos="fade-up">ServiceNow Technology for Your Enterprise</h1>

      {/* Grid layout for paragraph and image */}
      <div className="service-grid">
        <div className="service-content" data-aos="fade-up">
          <p>
            Leverage the power of ServiceNow to streamline workflows, enhance
            data management, and achieve operational efficiency. Our tools
            integrate seamlessly to meet your business needs with 100% accuracy
            and transparency.
          </p>
        </div>

        <div className="tool-image" data-aos="fade-right">

          <img src={ser1} alt="ServiceNow Workflow Tool" />
          <p>Automated Workflow Management</p>
        </div>
      </div>
      <div className="service-grid">
        <div className="tool-image" data-aos="fade-right">
          <img src={ser1} alt="ServiceNow Workflow Tool" />
          <p>Automated Workflow Management</p>
        </div>
        <div className="service-content" data-aos="fade-up">
          <p>
            Leverage the power of ServiceNow to streamline workflows, enhance
            data management, and achieve operational efficiency. Our tools
            integrate seamlessly to meet your business needs with 100% accuracy
            and transparency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
