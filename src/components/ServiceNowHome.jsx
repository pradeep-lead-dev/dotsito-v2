import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../css/ServiceNowHome.css"; // Import your custom CSS file

const ServiceNowHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="service-container">
      <h1 data-aos="fade-up" className="headline">Why ServiceNow for Your Enterprise Needs?</h1>
      <p className="subtitle" data-aos="fade-up" data-aos-delay="200">
        Discover the advantages of choosing ServiceNow's platform for optimizing your enterprise.
      </p>

      <div className="fruit-grid">
        <div className="fruit-item" data-aos="fade-up" data-aos-delay="300">
          <i className="fas fa-cogs"></i>
          <p>Enhanced Workflow Automation</p>
        </div>
        <div className="fruit-item" data-aos="fade-up" data-aos-delay="400">
          <i className="fas fa-chart-line"></i>
          <p>Personalized Dashboards for Tailored Insights</p>
        </div>
        <div className="fruit-item" data-aos="fade-up" data-aos-delay="500">
          <i className="fas fa-tools"></i>
          <p>Tailored Solutions for Unique Requirements</p>
        </div>
        <div className="fruit-item" data-aos="fade-up" data-aos-delay="600">
          <i className="fas fa-exclamation-triangle"></i>
          <p>Integrated Incident and Problem Management</p>
        </div>
        <div className="fruit-item" data-aos="fade-up" data-aos-delay="700">
          <i className="fas fa-database"></i>
          <p>Enrich and Centralize Existing Data</p>
        </div>
        <div className="fruit-item" data-aos="fade-up" data-aos-delay="800">
          <i className="fas fa-file-export"></i>
          <p>Seamless Data Export</p>
        </div>
      </div>

      <div className="cta-button">
        <button className="cta-btn">Learn More...</button>
      </div>
    </div>
  );
};

export default ServiceNowHome;
