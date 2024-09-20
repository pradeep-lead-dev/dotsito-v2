import React, { useEffect, useRef } from "react";
import '../css/LogoSlider.css'; // Import the CSS for the slider
import Lead from '../assets/img/lead.png';
import Company from '../assets/img/buliding.png';
import Aim from '../assets/img/accu.png';
import company1 from '../assets/img/company1.png'; // Correctly import your company logos
import company2 from '../assets/img/company2.png'; // Example for additional company logo
import company3 from '../assets/img/company3.png'; // Example for additional company logo
import company4 from '../assets/img/company4.png'; // Example for additional company logo

const Home = () => {
  const sliderRef = useRef(null);
  const statsRef = useRef(null); // Reference for the stats section

  // Effect to dynamically adjust the logo scrolling
  useEffect(() => {
    const updateVariableDuration = () => {
      if (sliderRef.current) {
        const sliderElement = sliderRef.current;
        const windowWidth = window.innerWidth;
        const normalized = Math.min(1, Math.max(0, ((windowWidth - 320) / (1920 - 320)).toFixed(2)));
        const duration = Math.max(10, 15 * normalized); // Adjust duration based on window size
        sliderElement.style.setProperty("--variable-duration", `${duration}s`);

        sliderElement.firstElementChild.style.animation = 'none';
        setTimeout(() => {
          sliderElement.firstElementChild.style.animation = "";
        }, 500);
      }
    };

    updateVariableDuration(); // Initial call
    window.addEventListener("resize", updateVariableDuration); // Update on resize

    return () => {
      window.removeEventListener("resize", updateVariableDuration); // Cleanup on unmount
    };
  }, []);

  // Function to start counting
  const startCounting = (element, start, end, duration) => {
    let current = start;
    const increment = Math.ceil((end - start) / (duration / 16)); // Increment for 60fps

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        element.innerText = `${end}+`; // Final value with plus sign
        clearInterval(timer);
      } else {
        element.innerText = `${current}+`; // Update the element
      }
    }, 16); // 60fps
  };

  // Use Intersection Observer to detect when the stats section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll(".count-up");
            startCounting(stats[0], 0, 6000, 3000); // Leads Generated
            startCounting(stats[1], 0, 1000, 3000); // Businesses Served
            startCounting(stats[2], 0, 4, 3000); // Revenue Generated
            observer.unobserve(entry.target); // Stop observing once started
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current); // Observe the stats section
    }
  }, []);

  return (
    <div className="home">
      {/* New Section Content */}
      <section className="data-section" ref={statsRef}>
        <h2 className="data-heading">We provide data that converts</h2>
        <div className="data-stats">
          <div className="stat-item">
            <img src={Lead} alt="Icon 1" />
            <h3 className="count-up">0+</h3>
            <p>Leads Generated</p>
          </div>
          <div className="stat-item">
            <img src={Company} alt="Icon 2" />
            <h3 className="count-up">0+</h3>
            <p>Businesses Served</p>
          </div>
          <div className="stat-item">
            <img src={Aim} alt="Icon 3" />
            <h3 className="count-up">0x</h3>
            <p>Revenue Generated</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
