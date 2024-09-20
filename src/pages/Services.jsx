import React, { useEffect, useState } from "react";
import "../css/Services.css"; // Custom CSS
import { Typography } from 'antd'; // Import Title and Text from Ant Design
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from "../components/Modal"; // Custom modal component

// Import images
import erp from "../assets/img/enterprice-card.jpg";
import dev from "../assets/img/dev.png";
import fG from "../assets/img/5G.png";
import gov from "../assets/img/Governance-Risk-and-Compliance-card.jpg";
import itam from "../assets/img/itam.png";
import qa from "../assets/img/qa-card.jpeg";
import servi from "../assets/img/servicenow-card.jpg";
import jira from "../assets/img/jira-card.png";
import gen from "../assets/img/genai-card.png";
import conf from "../assets/img/conf.png";
import obj from "../assets/img/obj.png";
import video from "../img/services.mp4"; // Assuming you have the video here
import FAQSection from "../components/FAQSectionservice";

// Destructure Typography components
const { Title, Text } = Typography;

const Services = () => {
  // State for handling the modal visibility and current service details
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  const serviceData = [
    { 
        title: "Enterprise Service Management", 
        description: "Enterprise Service Management (ESM) helps organizations streamline and optimize service delivery across departments. From automating routine tasks to improving customer and employee satisfaction, ESM ensures that resources are managed efficiently and effectively.", 
        image: erp 
    },
    { 
        title: "DevOps and Infra Automation", 
        description: "DevOps and Infrastructure Automation enable organizations to rapidly develop, test, and deploy software solutions. By automating infrastructure processes, companies can reduce operational overhead, minimize human error, and accelerate product delivery.", 
        image: dev 
    },
    { 
        title: "IT Security Services", 
        description: "With the increasing sophistication of cyber threats, IT Security Services provide robust protection against unauthorized access, data breaches, and cyber-attacks. This service ensures that your organization’s digital infrastructure is safe, compliant, and resilient.", 
        image: fG 
    },
    { 
        title: "Governance, Risk, and Compliance (GRC)", 
        description: "Governance, Risk, and Compliance (GRC) services help organizations align their objectives with regulatory requirements and manage potential risks. These services provide businesses with frameworks to ensure that they meet industry regulations while minimizing risks and operational disruptions.", 
        image: gov 
    },
    { 
        title: "IT Asset Management", 
        description: "IT Asset Management (ITAM) enables organizations to track and manage IT assets throughout their lifecycle. From procurement to disposal, ITAM ensures that organizations maximize the value of their IT investments and maintain compliance with licensing agreements.", 
        image: itam 
    },
    { 
        title: "QA and Testing", 
        description: "Quality Assurance (QA) and Testing services ensure that products meet customer expectations and comply with standards. This service reduces the risk of product failures and bugs, ensuring a seamless user experience.", 
        image: qa 
    },
    { 
        title: "ServiceNow Managed Services", 
        description: "ServiceNow Managed Services provides comprehensive support for organizations using the ServiceNow platform. From platform management to optimizing workflows, these services ensure that ServiceNow is utilized to its full potential, driving efficiency across the organization.", 
        image: servi 
    },
    { 
        title: "Jira Implementation Support", 
        description: "Jira Implementation Support helps organizations set up, configure, and optimize Jira for project management. This service ensures that teams can track tasks, manage workflows, and collaborate effectively using Jira.", 
        image: jira 
    },
    { 
        title: "Confluence Integration and Support", 
        description: "Confluence Integration and Support enables organizations to create, share, and manage documentation and collaboration projects. This service ensures that teams can work together efficiently and have access to important information in a centralized location.", 
        image: conf 
    },
    { 
        title: "GenAI Dynamics", 
        description: "GenAI Dynamics leverages cutting-edge Generative AI technology to provide innovative solutions for business operations. From content generation to predictive analytics, GenAI Dynamics enables businesses to stay ahead in the AI-driven world.", 
        image: gen 
    },
    { 
        title: "Next-Gen Object Detection and Categorization Suite", 
        description: "The Next-Gen Object Detection and Categorization Suite offers advanced machine learning models for real-time object detection. This suite can be applied to a wide range of industries, providing critical insights for security, retail, and more.", 
        image: obj 
    }
];


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing type
    });
  }, []);

  // Function to handle Expand button click and open modal
  const handleExpandClick = (service) => {
    setCurrentService(service);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentService(null);
  };

  return (
    <div className="services-container">
      {/* Leadership Banner with Video */}
      <section className="service-banner">
        <video autoPlay muted loop playsInline className="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-content">
          <Title level={1} className="banner-title">Transforming Businesses Through Technology</Title>
          <Text className="banner-text">Empowering enterprises with cutting-edge technology solutions and innovations.</Text>
          <div className="mt-2">
            <a href="#contact" className="banner-button">Let's Talk <span>→</span></a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-content text-center my-5 container">
        <div className="row">
          {serviceData.map((service, index) => (
            <div
              className="col-6 col-md-4 col-lg-3 mb-4"
              key={index}
              data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
            >
              <div className="custom-card">
                <div
                  className={`card-bg card-bg-${index}`}
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="card-overlay d-flex flex-column justify-content-center">
                    <h4 className="service-title">{service.title}</h4>
                  </div>
                  <div className="card-full-description">
                    <p className="expand-btn" onClick={() => handleExpandClick(service)}>
                      Expand &gt;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal to display service details */}
      {isModalOpen && currentService && (
        <Modal onClose={handleCloseModal} image={currentService.image} title={currentService.title}>
          <p>{currentService.description}</p>
        </Modal>
      )}
      <FAQSection/>
    </div>
  );
};

export default Services;
