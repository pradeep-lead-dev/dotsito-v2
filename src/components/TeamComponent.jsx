import React from 'react';
import { Row, Col, Typography } from 'antd';
import '../css/team-section.css';
import ser1 from '../assets/img/service.png'; // Example image import

const { Title, Text } = Typography;

const TeamSection = () => {
  return (
    <div className="teamem-section ">
      <Row gutter={[16, 24]} justify="center" className="teamem-grid">
        {/* Left Side with Text and Icons */}
        <Col xs={24} sm={24} md={12}>
          <Title level={2} className="teamem-title">
            Data for Your Entire Team
          </Title>
          <Text className="teamem-intro">
            Whether you're managing a startup, a multi-million-dollar
            enterprise, or working as a sales rep, marketer, or recruiter, our
            team helps you reach your goals. Each team plays a crucial role in
            ensuring smooth operations and delivering quality solutions.
          </Text>

          <div className="teamem-features-container">
            <div className="teamem-feature-item">
              <i className="fas fa-user-tie teamem-feature-icon"></i>
              <div>
                <Title level={4} className="teamem-feature-title">HR Team</Title>
                <Text className="teamem-feature-text">Manages recruitment and employee relations.</Text>
              </div>
            </div>

            <div className="teamem-feature-item">
              <i className="fas fa-code teamem-feature-icon"></i>
              <div>
                <Title level={4} className="teamem-feature-title">Developer Team</Title>
                <Text className="teamem-feature-text">Builds and maintains our technical solutions.</Text>
              </div>
            </div>

            <div className="teamem-feature-item">
              <i className="fas fa-user-shield teamem-feature-icon"></i>
              <div>
                <Title level={4} className="teamem-feature-title">ServiceNow Developer</Title>
                <Text className="teamem-feature-text">Optimizes and supports our ServiceNow platform.</Text>
              </div>
            </div>

            <div className="teamem-feature-item">
              <i className="fas fa-tools teamem-feature-icon"></i>
              <div>
                <Title level={4} className="teamem-feature-title">Snow Tool Team</Title>
                <Text className="teamem-feature-text">Leverages advanced tools to ensure compliance and support.</Text>
              </div>
            </div>
          </div>
        </Col>

        {/* Right Side with Image */}
        <Col xs={24} sm={24} md={12} className="teamem-image-container">
          <img src={ser1} alt="Team" className="teamem-image" />
        </Col>
      </Row>
    </div>
  );
};

export default TeamSection;
