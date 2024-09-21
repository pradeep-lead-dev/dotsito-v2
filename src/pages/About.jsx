import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/About.css";
import bannerImage from "../assets/img1/about4.jpg"; // Imported banner image
import Footer from "../components/Footer";
import innovationImg from "../assets/img1/about1.jpg"; // Import images
import integrityImg from "../assets/img1/about2.jpg";
import collaborationImg from "../assets/img1/about3.jpg";
import customerImg from "../assets/img1/about4.jpg";
import excellenceImg from "../assets/img1/about1.jpg";
import video from "../img/abut.mp4";
const About = () => {
  // JSON data for Vision, Mission, and Story sections
  const missionData = [
    {
      title: "Our Vision",
      description:
        "To lead the industry with innovation, sustainability, and a focus on delivering quality and satisfaction to our customers, one step at a time.",
    },
    {
      title: "Our Mission",
      description:
        "We strive to create a world of opportunities through cutting-edge IT solutions, delivering efficiency and innovation in everything we do.",
    },
    {
      title: "Our Story",
      description:
        "From our humble beginnings to becoming a driving force in the tech world, our story is about growth, perseverance, and a commitment to excellence.",
    },
  ];

  // Core values section data
  const values = [
    {
      title: "Innovation",
      content:
        "We continuously explore new ways to provide better solutions and stay ahead in the industry.",
      image: innovationImg,
    },
    {
      title: "Integrity",
      content:
        "We believe in transparency, honesty, and accountability in all our actions and decisions.",
      image: integrityImg,
    },
    {
      title: "Collaboration",
      content:
        "We foster teamwork and create a collaborative environment for better outcomes and mutual respect.",
      image: collaborationImg,
    },
    {
      title: "Customer-Centric",
      content:
        "Our customers are at the heart of everything we do. We strive to deliver exceptional experiences.",
      image: customerImg,
    },
    {
      title: "Excellence",
      content:
        "We pursue excellence in every project, service, and solution, ensuring high-quality results.",
      image: excellenceImg,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations

    const items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    return () => {
      window.removeEventListener("load", callbackFunc);
      window.removeEventListener("resize", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []);

  return (
    <>
      {/* Banner Section */}
      <section className="service-banner">
        <video autoPlay muted loop playsInline className="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-content">
          <h1 className="banner-title">
            Empowering Your Business with Dotsito Technology
          </h1>
          <p className="banner-text">
            Discover Dotsito's cutting-edge solutions designed to optimize your
            operations, enhance efficiency, and drive success across industries.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        {missionData.map((mission, index) => (
          <div
            className="mission-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <div className="mission-card-content">
              <h2>{mission.title}</h2>
              <p>{mission.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <h2 className="core-values-title" data-aos="fade-up">
          Our Core Values
        </h2>
        <div className="core-values-grid">
          {values.map((value, index) => (
            <div
              className={`core-value ${
                index % 2 === 0 ? "left-image" : "right-image"
              }`}
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <div className="core-value-image">
                <img src={value.image} alt={value.title} />
              </div>
              <div className="core-value-content">
                <h3 className="core-value-title">{value.title}</h3>
                <p>{value.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      {/* <div className="blockquote-wrapper" data-aos="flip-left">
        <div className="blockquote">
          <h3>
            Intuitive design happens when <span style={{ color: '#ffffff' }}>“Empowering ruler talents </span> is about inspiring leaders to unlock the potential within themselves and others, <span style={{ color: '#ffffff' }}> creating a legacy of greatness.”</span>
          </h3>
          <h4>
            &mdash; DOTSITO
          </h4>
        </div>
      </div> */}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
