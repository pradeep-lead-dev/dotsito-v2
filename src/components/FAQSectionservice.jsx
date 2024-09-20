import React from 'react';
import { Collapse, Button, Typography } from 'antd';
import plusIcon from '../assets/img/plus.png'; // Custom plus icon
import minusIcon from '../assets/img/minus.png'; // Custom minus icon
import '../css/FAQServices.css'; // Custom CSS for FAQ section

const { Panel } = Collapse;
const { Title } = Typography;

const FAQSection = () => {
  return (
    <div className="faq-container">
      <div className="faq-section">
        <div className="faq-left">
          <Title level={2} className="faq-title">Frequently Asked Questions</Title>
          <p>Have Questions? Talk to Sales</p>
          <Button type="primary" className="faq-btn">Get in touch</Button>
          <Button type="link" className="faq-link">View all FAQ</Button>
        </div>

        <div className="faq-right">
          <Collapse
            accordion
            expandIcon={({ isActive }) => (
              <img 
                src={isActive ? minusIcon : plusIcon} 
                alt={isActive ? 'collapse' : 'expand'} 
                style={{ width: '20px', height: '20px' }} // Adjusting icon size
              />
            )}
          >
            <Panel header="What is Enterprise Service Management?" key="1">
              <p>Enterprise Service Management (ESM) helps organizations streamline and optimize service delivery across departments, ensuring that resources are managed efficiently.</p>
            </Panel>
            <Panel header="What is DevOps and Infra Automation?" key="2">
              <p>DevOps and Infrastructure Automation enable organizations to automate software development, testing, and deployment processes.</p>
            </Panel>
            <Panel header="How does IT Security Services protect our business?" key="3">
              <p>IT Security Services safeguard digital infrastructure by providing protection against unauthorized access and cyber threats.</p>
            </Panel>
            <Panel header="What is Governance, Risk, and Compliance (GRC)?" key="4">
              <p>GRC services help organizations align objectives with regulatory requirements, ensuring compliance while minimizing risks.</p>
            </Panel>
            <Panel header="What is IT Asset Management (ITAM)?" key="5">
              <p>IT Asset Management helps organizations track and manage IT assets throughout their lifecycle, optimizing asset value and compliance.</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
