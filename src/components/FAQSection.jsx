import React from 'react';
import { Collapse, Button, Typography } from 'antd';
import plusIcon from '../assets/img/plus.png'; // Your custom plus icon
import minusIcon from '../assets/img/minus.png'; // Your custom minus icon
import '../css/FAQSection.css';

const { Panel } = Collapse;
const { Title } = Typography;
const FAQSection = () => {
  return (
    <div className="faq">
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
                style={{ width: '20px', height: '20px' }} // You can adjust the size here
              />
            )}
          >
            <Panel header="What is ServiceNow?" key="1">
              <p>ServiceNow is a cloud-based platform that provides IT service management and helps automate various business processes, enhancing operational efficiency.</p>
            </Panel>
            <Panel header="How does the Snow Tool Team use ServiceNow?" key="2">
              <p>The Snow Tool Team integrates ServiceNow to manage and monitor software assets, ensuring compliance and streamlining business processes.</p>
            </Panel>
            <Panel header="Can ServiceNow be customized for specific business needs?" key="3">
              <p>Yes, ServiceNow offers a flexible platform that can be tailored to meet the unique requirements of any business.</p>
            </Panel>
            <Panel header="How does ServiceNow improve workflow automation?" key="4">
              <p>ServiceNow automates various workflows such as ticketing, incident management, and employee onboarding, ensuring smoother and faster processes.</p>
            </Panel>
            <Panel header="What is the role of ServiceNow in managing IT infrastructure?" key="5">
              <p>ServiceNow helps manage and monitor IT infrastructure by offering a unified platform for IT services, operations, and asset management.</p>
            </Panel>
            <Panel header="How does Snow Tool help with software asset management?" key="6">
              <p>Snow Tool ensures businesses remain compliant with software licenses and provides insights into software usage, helping optimize licensing costs.</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
