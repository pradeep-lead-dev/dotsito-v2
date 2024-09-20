import React from "react";
import { Typography } from "antd"; // Importing Typography from Ant Design
import '../css/OurLeadership.css'; // Import your custom CSS

// Leadership images
import kirthika from "../img/kirthika.png";
import Aswathaman from "../img/Aswathaman.png";
import Badrinath from "../img/Badrinath.png";
import suji from "../img/sujithra.png";
import siva from "../img/siva.png";
import lavanya from "../img/lavanya.png";
import vedio from "../img/leader.mp4";
import Footer from '../components/Footer';

const { Title, Text } = Typography;

const OurLeadership = () => {
  const leadershipData = [
    {
      id: 1,
      name: "Kiruthika Sekar",
      role: "Chief Executive Officer & Chief Financial Officer",
      image: kirthika,
      description:
        "Kiruthika sets and evolves the strategic direction for the company and its portfolio of offerings...",
      email: "kiruthika@example.com",
      linkedIn: "https://www.linkedin.com/in/kiruthika-sekar",
    },
    {
      id: 2,
      name: "Aswathaman Rangasamy",
      role: "Chief Technology Officer",
      image: Aswathaman,
      description:
        "Aswathaman demonstrates effective management acumen across a wide range of technical projects...",
      email: "aswathaman@example.com",
      linkedIn: "https://www.linkedin.com/in/aswathaman-rangasamy",
    },
    {
      id: 3,
      name: "Badrinath",
      role: "Chief Operations Officer",
      image: Badrinath,
      description:
        "Badrinath focuses on ensuring seamless operations across all company departments...",
      email: "badrinath@example.com",
      linkedIn: "https://www.linkedin.com/in/badrinath",
    },
    {
      id: 4,
      name: "Sujithra Govindasamy",
      role: "Chief Marketing Officer",
      image: suji,
      description:
        "Sujithra excels in driving the company's marketing strategy and public relations...",
      email: "sujithra@example.com",
      linkedIn: "https://www.linkedin.com/in/sujithra-govindasamy",
    },
    {
      id: 5,
      name: "Sivasubramaniam Vajraval",
      role: "Chief Information Officer",
      image: siva,
      description:
        "Sivasubramaniam oversees the company’s technology infrastructure and innovations...",
      email: "siva@example.com",
      linkedIn: "https://www.linkedin.com/in/sivasubramaniam-vajraval",
    },
    {
      id: 6,
      name: "Lavanya",
      role: "Chief People Officer",
      image: lavanya,
      description: "Lavanya manages the talent acquisition and employee engagement initiatives...",
      email: "lavanya@example.com",
      linkedIn: "https://www.linkedin.com/in/lavanya",
    },
  ];

  return (
    <div className="leadership">
      {/* Banner Section with Video Background */}
      <section className="leadership-banner">
        <video autoPlay muted loop playsInline className="background-video">
          <source src={vedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-content">
          <Title level={1} className="banner-title">Our Leadership</Title>
          <Text className="banner-text">The way to get started is to quit talking and begin doing.</Text>
        </div>
      </section>
      <section className="leadership-belief-section">
        <div className="belief-container">
          <div className="left-content">
            <h1>We believe pioneers and innovators are at home in the unknown</h1>
            <p>We make a difference beyond our own business and those of our clients, ensuring our actions and what we do together, empower people and communities to achieve more and live better lives.</p>
          </div>
         
        </div>
      </section>
      {/* Leadership Grid Section with alternating card layout */}
      <div className="leadership-grid container mt-5 mb-4">
        {leadershipData.map((member) => (
          <div
            className={`leadership-card ${member.id % 2 === 0 ? 'even-card' : 'odd-card'}`}
            key={member.id}
          >
            <div className="card-image-wrapper">
              <img className="leader-image" src={member.image} alt={member.name} />
            </div>
            <div className="card-details">
              <h3 className="leader-name">{member.name}</h3>
              <p className="leader-role">{member.role}</p>
              <p className="leader-description">{member.description}</p>
              <div className="contact-info">
                <a href={`mailto:${member.email}`} className="contact-email" title="Email">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href={member.linkedIn} className="contact-linkedin" title="LinkedIn" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default OurLeadership;
