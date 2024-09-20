import React from "react";
import { Typography, Button } from "antd"; // Ant Design Typography and Button
import "../css/Home.css"; // Custom CSS for further styling
import LogoSlider from "./LogoSlider"; // Your LogoSlider component
import ServiceNowHome from "./ServiceNowHome"; // Additional component
import ServiceSection from "./ServiceSection";
import ProductSection from "../pages/ProductSection";
import TeamComponent from "./TeamComponent";
import FAQSection from "./FAQSection";
import HireSection from "./HireSection";
import Footer from "./Footer";
import bannerImage from "../assets/img/ban.png"; // Importing banner image

const { Title, Text } = Typography;

function Home() {
  return (
    <div className="home">
      {/* Banner Section */}
      <section
        className="section banner banner-section"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="container banner-column">
          <div className="banner-inner">
            <Title level={1} className="heading-xl" style={{ color: "#fff" }}>
              BETTER SOLUTIONS FOR YOUR BUSINESS
            </Title>
            <Text className="paragraph" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
              Innovation lies at the heart of everything we do at DOTSITO. We are constantly pushing the boundaries to create groundbreaking solutions that drive value for our clients.
            </Text>
            <br />
            <Button type="primary" size="large" className="btn btn-darken">
              Our Products <i className="bx bx-right-arrow-alt"></i>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <LogoSlider />
      <ServiceNowHome />
      <ServiceSection />
      {/* <ProductSection /> */}
      <TeamComponent />
      <FAQSection />
      <HireSection />
      <Footer />
    </div>
  );
}

export default Home;
