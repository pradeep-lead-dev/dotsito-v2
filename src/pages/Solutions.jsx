import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Solution.css";  // Correct import path

// Import images from the assets/img folder
// import enterpriseCard from "../img/devops-card.jpg";
// import devopsCard from "../img/devops-card.jpg";
// import securityCard from "../img/itsecurity-card.jpg";
// import grcCard from "../img/Governance-Risk-and-Compliance-card.jpg";
// import itamCard from "../img/asset-card.jpeg";
// import qaCard from "../img/qa-card.jpeg";
// import servicenowCard from "../img/servicenoe-card.jpg";
// import jiraCard from "../img/jira-card.png";
// import confluenceCard from "../img/confluence-card.png";
// import generativeAICard from "../img/genai-card.png";
// import objectDetectionCard from "../img/object-card.jpg";

const Solutions = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="cards-wrapper">
        <div className="card-grid-space card-background" data-aos="fade-left" style={{ backgroundImage: `url(${enterpriseCard})` }}>
          <a className="card" href="#">
            <div>
              <h3>Enterprise Service</h3>
              <p>Manage enterprise-level services efficiently.</p>
              <div className="date">01</div>
              <div className="tags">
                <div className="tag">SERVICES</div>
              </div>
            </div>
          </a>
        </div>

        <div className="card-grid-space card-background" data-aos="zoom-out" style={{ backgroundImage: `url(${devopsCard})` }}>
          <a className="card" href="#">
            <div>
              <h3>DevOps and Infra</h3>
              <p>Automate infrastructure management.</p>
              <div className="date">02</div>
              <div className="tags">
                <div className="tag">DevOps</div>
              </div>
            </div>
          </a>
        </div>

        <div className="card-grid-space card-background" data-aos="fade-right" style={{ backgroundImage: `url(${securityCard})` }}>
          <a className="card" href="#">
            <div>
              <h3>IT Security Service</h3>
              <p>Protect and secure your IT infrastructure.</p>
              <div className="date">03</div>
              <div className="tags">
                <div className="tag">Security</div>
              </div>
            </div>
          </a>
        </div>

        <div className="card-grid-space card-background" data-aos="fade-left" style={{ backgroundImage: `url(${grcCard})` }}>
          <a className="card" href="#">
            <div>
              <h3>Governance, Risk and Compliance (GRC)</h3>
              <p>Ensure governance and compliance across operations.</p>
              <div className="date">04</div>
              <div className="tags">
                <div className="tag">Compliance</div>
              </div>
            </div>
          </a>
        </div>

        <div className="card-grid-space card-background" data-aos="zoom-out" style={{ backgroundImage: `url(${itamCard})` }}>
          <a className="card" href="#">
            <div>
              <h3>IT Asset Management (ITAM)</h3>
              <p>Track and manage IT assets.</p>
              <div className="date">05</div>
              <div className="tags">
                <div className="tag">ITAM</div>
              </div>
            </div>
          </a>
        </div>

        <div className="card-grid-space card-background" data-aos="fade-right" style={{ backgroundImage: `url(${qaCard})` }}>
          <a className="card" href="#">
            <div>
              <h3>QA & Testing</h3>
              <p>Ensure quality with comprehensive testing.</p>
              <div className="date">06</div>
              <div className="tags">
                <div className="tag">QA</div>
              </div>
            </div>
          </a>
        </div>

        <div className="card-grid-space card-background" data-aos="fade-left" style={{ backgroundImage: `url(${servicenowCard})` }}>
          <a className="card" href="#">
            <div>
              <h3>ServiceNow Managed Services</h3>
              <p>Optimize your IT services.</p>
              <div className="date">07</div>
              <div className="tags">
                <div className="tag">Cloud</div>
              </div>
            </div>
          </a>
        </div>

        <div className="card-grid-space card-background" data-aos="zoom-out" style={{ backgroundImage: `url(${jiraCard})` }}>
          <a className="card" href="#">
            <div>
              <h3>JIRA Implementation Support</h3>
              <p>Streamline your JIRA setup.</p>
              <div className="date">08</div>
              <div className="tags">
                <div className="tag">JIRA</div>
              </div>
            </div>
          </a>
        </div>

        <div className="card-grid-space card-background" data-aos="fade-right" style={{ backgroundImage: `url(${confluenceCard})` }}>
          <a className="card" href="#">
            <div>
              <h3>Confluence Integration and Support</h3>
              <p>Collaborate seamlessly with Confluence.</p>
              <div className="date">09</div>
              <div className="tags">
                <div className="tag">CIS</div>
              </div>
            </div>
          </a>
        </div>

        <div className="card-grid-space card-background" data-aos="fade-left" style={{ backgroundImage: `url(${generativeAICard})` }}>
          <a className="card" href="#">
            <div>
              <h3>Generative AI Dynamics</h3>
              <p>Explore the power of AI.</p>
              <div className="date">10</div>
              <div className="tags">
                <div className="tag">GEN AI</div>
              </div>
            </div>
          </a>
        </div>

        <div className="card-grid-space card-background" data-aos="zoom-out" style={{ backgroundImage: `url(${objectDetectionCard})`}}>
          <a className="card" href="#">
            <div>
              <h3>Next-Gen Object Detection and Categorization Suite</h3>
              <p>Advanced object detection capabilities.</p>
              <div className="date">11</div>
              <div className="tags">
                <div className="tag">NGDGS</div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Solutions;
