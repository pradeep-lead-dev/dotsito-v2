import React from "react";
import { Typography } from "antd";
import "../css/Careers.css"; // Add relevant styling in this file

const { Title, Text } = Typography;

const GraduateCareersSection = () => {
  return (
    <section className="graduate-careers mb-4">
      <div className="container">
        <div className="video-section">
          <div className="text-content">
            <Title level={2}>Graduate Careers at Dotsito</Title>
            <Text>
              Meet our recent campus joiners and see how they are embracing
              change to drive innovative solutions for our clients and
              communities. They share their candid experiences of working at the
              heart of change, getting all the scope to take their careers to
              the next level.
            </Text>
            <div className="transcript-link">
              <a href="#">View Transcript</a>
            </div>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yYFZVwqS590?si=0Us2CX5tn9KynEeH"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>{" "}
        </div>
      </div>
    </section>
  );
};

export default GraduateCareersSection;
