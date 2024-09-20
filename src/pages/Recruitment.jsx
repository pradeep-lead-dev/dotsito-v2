import React from 'react';
import { Typography, Button, Card } from 'antd'; // Import Ant Design components
import '../css/Recruitment.css';  // CSS for styling
import recruitmentImage from '../assets/img/rec.png'; // Import the uploaded image for the banner
import cardImage1 from '../assets/img/rec.png'; // Replace with actual card image
import cardImage2 from '../assets/img/rec2.png'; // Replace with actual card image
import profileCardImage from '../assets/img/boss.png'; // Replace with actual card image
import profileCardImage2 from '../assets/img/pc2.png'; // Replace with actual card image
import flowDiagram from '../assets/img/flow1.png'; // Import the flow diagram
import RecruitmentFAQ from '../components/RecruitmentFAQ';
import Footer from '../components/Footer';
import video from "../img/rec.mp4"; 
const { Title, Text } = Typography;  // Destructure Typography components

const Recruitment = () => {
  return (
    <div>
      {/* Recruitment Banner Section */}
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


      {/* Targeted Recruitment Section with Cards */}
      <section className="targeted-recruitment">
        <Title level={2} className="section-title">Targeted recruitment demands targeted solutions</Title>
        <div className="card-container">
          <Card className="recruitment-card" hoverable>
            <img src={cardImage1} alt="For Staffing Agencies" className="card-image"/>
            <div className="card-content">
              <Title level={3}>For Staffing Agencies</Title>
              <Text>Source top quality candidates for your clients quickly with Do-Cruit.</Text>
            </div>
            <Button type="#" className="learn-more-button">Learn More</Button>

          </Card>
          <Card className="recruitment-card" hoverable>
            <img src={cardImage2} alt="For Internal HR Teams" className="card-image"/>
            <div className="card-content">
              <Title level={3}>For Internal HR Teams</Title>
              <Text>Recruit the best talent and build an unbeatable workforce using Do-Cruit.</Text>
            </div>
            <Button type="#" className="learn-more-button">Learn More</Button>

          </Card>
        </div>
      </section>

      {/* HR Automation Portal Flow Section */}
      <section className="flow-diagram-section">
        <div className="flow-content">
          <div className="flow-text">
            <Title level={2}>Manage your recruitment process effortlessly with <br /> Dot-Cruit</Title>
            <Text>
              At Dotsito Technologies, the trend toward automating recruitment processes is crucial. Whether managing multiple candidate profiles or automating workflows,<br /> Do-Cruit ensures efficiency at every step of the hiring process. Our automation tool integrates seamlessly with your current system to make managing your recruitment process a breeze.
            </Text><br />
            <Button type="primary" className="try-dot-cruit-button mt-4">TRY DOT-CRUIT</Button>
          </div>
          <div className="flow-image">
            <img src={flowDiagram} alt="HR Automation Flow Diagram" />
          </div>
        </div>
      </section>

      {/* New Sections for Profile Cards */}
      <section className="profile-card-section container">
        <div className="profile-text">
          <Title level={2}>Create a candidate experience that can't be overlooked</Title>
          <Text>
            Post your jobs on 75+ job boards with a single click and share the listings instantly across all your social platforms.
          </Text>
          <Button type="link" className="learn-more-button">Learn More</Button>
        </div>
        <div className="profile-card-image">
          <img src={profileCardImage} alt="Profile Card" />
        </div>
      </section>

      <section className="profile-card-section container">
      <div className="profile-card-image">
          <img src={profileCardImage2} alt="Profile Card" />
        </div>
        <div className="profile-text">
          <Title level={2}>Build relationships right from recruitment and make the right hire every time</Title>
          <Text>
            Track where your candidates are at every stage of the hiring process and optimize your recruitment with advanced analytics from Do-Cruit.
          </Text>
          <Button type="link" className="learn-more-button">Learn More</Button>
        </div>
       
      </section>
      <RecruitmentFAQ/>
      <Footer/>
    </div>
  );
};

export default Recruitment;