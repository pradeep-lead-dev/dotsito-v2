import React from 'react';
import { Collapse, Button, Typography } from 'antd';
import plusIcon from '../assets/img/plus.png'; // Your custom plus icon
import minusIcon from '../assets/img/minus.png'; // Your custom minus icon
import '../css/RecruitmentFAQ.css'; // Add specific CSS for this FAQ section

const { Panel } = Collapse;
const { Title } = Typography;

const RecruitmentFAQ = () => {
  return (
    <div className="faq">
      <div className="faq-section">
        <div className="faq-left">
          <Title level={2} className="faq-title">Recruitment FAQs</Title>
          <p>Have questions about our recruitment platform? We're here to help!</p>
          <Button type="primary" className="faq-btn">Contact Support</Button>
          <Button type="link" className="faq-link">View All FAQs</Button>
        </div>

        <div className="faq-right">
          <Collapse
            accordion
            expandIcon={({ isActive }) => (
              <img 
                src={isActive ? minusIcon : plusIcon} 
                alt={isActive ? 'collapse' : 'expand'} 
                style={{ width: '20px', height: '20px' }} 
              />
            )}
          >
            <Panel header="What is Do-Cruit?" key="1">
              <p>Do-Cruit is Dotsito Technologies' automated recruitment platform, designed to streamline the entire hiring process.</p>
            </Panel>
            <Panel header="How does Do-Cruit help with candidate management?" key="2">
              <p>Do-Cruit offers tools for tracking applicants, automating workflows, and integrating with various job boards, all in one platform.</p>
            </Panel>
            <Panel header="Can I customize the recruitment process using Do-Cruit?" key="3">
              <p>Yes, Do-Cruit is highly customizable to meet your organization's specific recruitment needs and workflows.</p>
            </Panel>
            <Panel header="How can Do-Cruit improve my hiring speed?" key="4">
              <p>With automation and integration features, Do-Cruit helps reduce manual tasks and speeds up the candidate screening and onboarding processes.</p>
            </Panel>
            <Panel header="Is Do-Cruit suitable for both staffing agencies and internal HR teams?" key="5">
              <p>Yes, Do-Cruit is designed for flexibility, making it suitable for staffing agencies as well as internal HR teams looking to optimize their hiring processes.</p>
            </Panel>
            <Panel header="What kind of analytics does Do-Cruit provide?" key="6">
              <p>Do-Cruit provides real-time analytics on recruitment metrics such as time-to-hire, candidate pipeline status, and job board performance, helping you make data-driven decisions.</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentFAQ;