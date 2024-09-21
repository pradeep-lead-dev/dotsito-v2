import React, { useState, useEffect, act } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import '../css/ProductSection.css'; // Importing custom CSS for styling
import Footer from '../components/Footer'; // Your Footer component

// Importing images
import dotspotImage from '../img/dotspot.png'; 
import stackImage1 from '../assets/img1/about1.jpg'; 
import dotcruit from "../img/dotcruit.jpg"
import stackImage2 from '../assets/img1/about1.jpg';


import consultancyImage from '../assets/img1/about1.jpg';
import stackImage3 from '../assets/img1/about1.jpg';

import dotspot1 from "../assets/img1/dotspot-1.png";
import dotspot2 from "../assets/img1/dotspot-2.png";
import dotspot3 from "../assets/img1/dotspot-3.jpg";
import dotspot4 from "../assets/img1/dotspot-4.jpg";
import dotspot5 from "../assets/img1/dotspot-5.jpg";
import dotspot6 from "../assets/img1/dotspot-6.jpg";
import dotspot7 from "../assets/img1/dotspot-7.jpg";
import dotspot8 from "../assets/img1/dotspot-8.jpg";
import dotspot9 from "../assets/img1/dotspot-9.jpg";
import dotspot10 from "../assets/img1/dotspot-10.jpg";
import dotspot11 from "../assets/img1/dotspot-11.jpg";

import dotcruit1 from "../assets/img1/dotcruit-1.jpg";
import dotcruit2 from "../assets/img1/dotcruit-2.jpg";
import dotcruit3 from "../assets/img1/dotcruit-3.jpg";
import dotcruit4 from "../assets/img1/dotcruit-4.jpg";
import dotcruit5 from "../assets/img1/dotcruit-5.jpg";
import dotcruit6 from "../assets/img1/dotcruit-6.jpg";
import dotcruit7 from "../assets/img1/dotcruit-7.jpg";
import dotcruit8 from "../assets/img1/dotcruit-8.jpg";
import dotcruit9 from "../assets/img1/dotcuit-9.jpg";

import consultacy1 from "../assets/img1/consultancy-1.jpg";
import consultacy2 from "../assets/img1/consultancy-2.jpg";
import consultacy3 from "../assets/img1/consultancy-3.jpg";
import consultacy4 from "../assets/img1/consultancy-4.jpg";
import consultacy5 from "../assets/img1/consultancy-5.jpg";
import consultacy6 from "../assets/img1/consultancy-6.jpg";
import consultacy7 from "../assets/img1/consultancy-7.jpg";
import consultacy8 from "../assets/img1/consultancy-8.jpg";
import consultacy9 from "../assets/img1/consultancy-9.jpg";
import video from "../img/product.mp4"; 


const ProductSection = () => {
  // Complete product data with content structure and images
  const productData = [
    {
      id: 1,
      name: "Dotspot",
      product_gist: "Dotspot is a powerful, flexible, and scalable object detection suite designed to help businesses harness the power of real-time data and advanced AI-driven insights.",
      nameImage: dotspotImage, // Imported image for product name
      stack: "Built on AI and Machine Learning Technologies",
      stackImage: stackImage1, // Imported stack image
      content: {
        technicalDetails: `
          Dotspot is an innovative IT product designed to revolutionize object detection and categorization across industries. By utilizing advanced AI and machine learning algorithms, Dotspot brings unparalleled accuracy, real-time analytics, and scalability to object detection systems, helping businesses optimize operations, improve security, and enable better decision-making.
        `,
        videoUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"  ,// Imported technical details image
        sections: [
          {
            header: "High-Precision Object Identification",
            content: "In today's fast-paced environments, precision is paramount. Dotspot’s High-Precision Object Identification feature ensures that every object detected by the system is accurately identified, significantly reducing the chances of error. With its robust algorithms, Dotspot can differentiate between objects in crowded scenes, track moving items, and categorize them based on specific criteria tailored to user needs.",
            image: dotspot1,
          },
          {
            header: "Real-Time Analysis and Reporting",
            content: "In modern operations, real-time data is crucial. Dotspot offers Real-Time Analysis and Reporting, which allows organizations to monitor object detection in real-time, immediately assessing what is happening across multiple camera feeds.",
            image: dotspot2,
          },
          {
            header: "Seamless Integration with Existing Systems",
            content: "Dotspot is designed to integrate seamlessly with your existing infrastructure, whether you're using traditional surveillance systems or modern IoT-based environments. The ability to plug into current systems reduces the cost and time associated with overhauling or replacing existing solutions.",
            image: dotspot3,
          },
          {
            header: "Scalable Detection Solutions",
            content: "Whether your organization starts with a small number of cameras or manages a large-scale multi-site operation, Dotspot offers Scalable Detection Solutions. As your operational needs grow, Dotspot can easily scale to accommodate additional feeds, higher data volumes, and more complex requirements.",
            image: dotspot4,
          },
          {
            header: "Robust Data Processing and Storage",
            content: "Managing vast amounts of data generated by object detection systems can be challenging, but Dotspot handles this effortlessly with its Robust Data Processing and Storage capabilities.",
            image: dotspot5,
          }
        ],
        whyOrganizationsNeed: [
          {
            header: "Why Choose Dotspot?",
            content: "Dotspot is designed to meet the evolving needs of organizations across a wide range of industries. With its advanced capabilities in object detection and categorization, Dotspot provides critical insights that can drive efficiency, improve security, and enable smarter decision-making. Here’s why Dotspot is the ideal solution for organizations looking to modernize and optimize their operations:",
            image: dotspot6,
          },
          {
            header: "Improve Operational Efficiency",
            content: "Organizations that deal with high volumes of objects, such as those in retail, logistics, manufacturing, and healthcare, can significantly streamline their processes using Dotspot’s high-precision object identification. By automating the detection, tracking, and categorization of objects, businesses can eliminate manual monitoring and reduce human error, improving overall efficiency.",
            image: dotspot7,
          },
          {
            header: "Enable Real-Time Insights",
            content: "With Dotspot, organizations can gain real-time insights and make informed decisions quickly. The instant analysis and reporting features allow businesses to respond swiftly to changing conditions.",
            image: dotspot8,
          },
          {
            header: "Seamless Integration",
            content: "For organizations that already have established IT infrastructures, Dotspot offers a non-disruptive way to upgrade object detection capabilities. Its seamless integration means businesses can continue using their current systems while enhancing functionality with advanced machine learning algorithms. This reduces downtime and avoids costly infrastructure overhauls.",
            image: dotspot9,
          },
          {
            header: "Scalability for Growing Needs",
            content: "As organizations grow, they need solutions that can scale with them. Dotspot’s flexible architecture allows businesses to start small and expand as needed. Whether an organization is adding more camera feeds, monitoring additional locations, or increasing its detection requirements, Dotspot scales effortlessly without compromising performance. This makes it a cost-effective investment for organizations of any size..",
            image: dotspot10,
          },
          {
            header: "Ensure Data Security",
            content: "For organizations that prioritize safety and security, Dotspot offers a robust solution for real-time monitoring. Whether it's tracking suspicious objects or enhancing surveillance capabilities, Dotspot provides immediate, actionable insights that allow security teams to respond swiftly and accurately.",
            image: dotspot11,
          }
        ]
      }
    },
    
    {
      id: 2,
      name: "Dotcruit",
      product_gist: "Dotcruit is a modern recruitment portal designed to streamline the hiring process for businesses and connect them with the best talent. Powered by cutting-edge technology.",
      nameImage: dotcruit, // Imported image for product name
      stack: "Built on Web Technologies and AI for Recruitment Optimization",
      stackImage: stackImage2, // Imported stack image
      content: {
        technicalDetails: `
          Dotcruit leverages modern web development technologies along with AI-powered recruitment optimization. 
          It ensures seamless filtering, candidate matching, and real-time updates for efficient recruitment processes.
        `,
        videoUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"  ,// Imported technical details image

        sections: [
          {
            header: "Advanced Candidate Filtering and Matching",
            content: "At the core of Dotcruit is its Advanced Candidate Filtering and Matching system. Using AI and machine learning algorithms, Dotcruit filters through resumes and applications to match candidates with jobs that best suit their skills and experience. This feature saves HR teams significant time by reducing manual review and ensuring only qualified candidates are shortlisted.",
            image: dotcruit1,
           
          },
          {
            header: "Real-Time Application Tracking and Reporting",
            content: "Dotcruit provides Real-Time Application Tracking, allowing employers to monitor the progress of job postings and applications as they occur. Employers receive instant notifications when new candidates apply, along with updates about the status of interviews and job offers.",
            image: dotcruit2,

          },
          {
            header: "Seamless Integration with HR Systems",
            content: "Dotcruit is designed to integrate seamlessly with existing HR systems and workflows. It supports easy connectivity with applicant tracking systems (ATS), human resource management systems (HRMS), and other HR software to provide a unified recruitment experience.",
            image: dotcruit3,

          },
          {
            header: "Scalable Recruitment Solutions",
            content: "Whether hiring for a single role or filling multiple positions across departments, Dotcruit offers Scalable Recruitment Solutions to fit any company’s needs. Dotcruit can handle high volumes of applications without compromising performance or slowing down processes, making it an ideal choice for companies of all sizes.",
            image: dotcruit4,

          },
          {
            header: "Robust Data Security and Compliance",
            content: "With sensitive candidate data being handled daily, Dotcruit places a high priority on Data Security and Compliance. The platform uses advanced encryption techniques to secure personal information, ensuring that both employers and job seekers can trust the system.",
            image: dotcruit5,

          }
        ],
        whyOrganizationsNeed: [
          {
            header: "Why Organizations Should Choose Dotcruit",
            content: "Dotcruit is a powerful recruitment solution for organizations looking to streamline their hiring processes, enhance the candidate experience, and improve overall recruitment efficiency. From advanced filtering to real-time tracking, Dotcruit offers everything businesses need to build the workforce of tomorrow.",
            image: dotcruit6,

          },
          {
            header: "Enhance Candidate Experience",
            content: "In a competitive job market, the candidate experience matters. Dotcruit ensures a smooth and transparent process for job seekers by offering real-time updates, intuitive application forms, and personalized job suggestions. This creates a positive experience that enhances the company’s reputation as an employer.",
            image: dotcruit7,

          },
          {
            header: "Reduce Hiring Costs",
            content: "By optimizing the recruitment process, Dotcruit helps organizations reduce hiring costs. Faster time-to-hire means that companies can avoid the costs associated with extended job postings, overtime for staff covering vacant roles, or outsourcing recruitment to third parties.",
            image: dotcruit8,

          },
          {
            header: "Stay Ahead of the Competition",
            content: "In a competitive job market, finding the right talent quickly is essential. Dotcruit ensures businesses can stay ahead of their competition by providing them with the tools to attract, engage, and hire top candidates faster. With real-time insights and AI-driven recommendations, businesses can refine their recruitment strategies and secure talent before competitors do.",
            image: dotcruit9,

          },
        ]
      }
    }
    ,
    {
      id: 3,
      name: "Consultancy",
      product_gist: "Consultancy is the perfect solution for businesses looking to manage their vehicle operations, improve sales efficiency, and deliver better customer service.",
      nameImage: consultancyImage, // Imported image for product name
      stack: "Built on Enterprise Resource Management (ERM) Systems and Data Analytics",
      stackImage: stackImage3, // Imported stack image
      content: {
        technicalDetails: `
          Consultancy is built on robust ERM systems that support comprehensive vehicle management, customer engagement, and sales tracking. 
          The platform provides real-time data analytics and performance insights for fleet management and vehicle sales operations.
        `,
        videoUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"  ,// Imported technical details image
        sections: [
          {
            header: "Total Vehicle Management",
            content: "Oversee every aspect of vehicle operations, including fleet tracking, performance monitoring, and maintenance scheduling.",
            image: consultacy1,
           
          },
          {
            header: "Serviced Vehicle Management",
            content: "Track the service history of vehicles to ensure proper maintenance and repairs.",
            image: consultacy2,

          },
          {
            header: "Sales Management",
            content: "Manage the entire sales process, including lead management, inventory tracking, and customer interactions.",
            image: consultacy3,

          },
          {
            header: "Customer Details and Engagement",
            content: "Maintain detailed customer profiles and track service reminders to enhance customer relationships.",
            image: consultacy4,

          },
          {
            header: "Real-Time Reporting and Analytics",
            content: "Provides real-time insights on vehicle performance, sales trends, and customer behavior for informed decision-making.",
            image: consultacy5,

          }
        ],
        whyOrganizationsNeed: [
          {
            header: "Why Organizations Should Choose Consultancy?",
            content: "Consultancy provides a comprehensive solution for organizations managing fleets or vehicle sales. It addresses key challenges and offers several advantages Ensure comprehensive vehicle management, from tracking to performance monitoring. Manage vehicle services and repairs with detailed service history tracking. Optimize the sales process with integrated sales management tools.",
            image: consultacy6,

          },
          {
            header: "Improve Operational Efficiency",
            content: "By automating maintenance schedules, sales tasks, and customer interactions, Consultancy helps businesses save time and reduce operational costs. This efficiency translates into better vehicle uptime, smoother sales processes, and improved customer service.",
            image: consultacy7,

          },
          {
            header: "Scalability for Growing Operations",
            content: "As businesses grow, Consultancy scales seamlessly to accommodate more vehicles, more customers, and expanded operations. Whether you manage a small fleet or run a large dealership, Consultancy adapts to your needs, ensuring it remains a valuable asset as your business evolves.",
            image: consultacy8,

          },
          {
            header: "Data-Driven Decision Making",
            content: "With real-time reporting and analytics, businesses can make informed decisions about vehicle performance, sales strategies, and customer engagement. These insights lead to better operational strategies, more targeted sales efforts, and higher customer satisfaction.",
            image: consultacy9,

          },
          
        ]
      }
    }
  ];

  const [activeProduct, setActiveProduct] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Navigate to the next or previous product
  const navigateProduct = (direction) => {
    if (!activeProduct) return;

    const currentIndex = productData.findIndex((product) => product.id === activeProduct.id);
    const newIndex = (currentIndex + direction + productData.length) % productData.length;
    setActiveProduct(productData[newIndex]);
  };

  return (
    <div className="solution-container">
      
      <section className="service-banner">
        <video autoPlay muted loop playsInline className="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-content">
  <h1 className="banner-title">Empowering Your Business with Innovative Products</h1>
  <p className="banner-text">
    Discover our cutting-edge solutions designed to optimize your operations, enhance efficiency, and drive success across industries.
  </p>
 
</div>

      </section>
      <div className="grid-container">
        {productData.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => setActiveProduct(product)}
             // AOS animation on product cards
          >
            <h3>{product.name}</h3><br></br>
            <p className="productpara">{product.product_gist}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>

      {/* New Section to Display Full Content */}
      {activeProduct && (
        <div className="full-content-section" id="product-section">
          {/* Display product name and image */}
          <h2>{activeProduct.name}</h2> <br></br>
          <img src={activeProduct.nameImage} alt={`${activeProduct.name} image`} className="name-image" />
          <br></br>
          {/* Display stack and stack image */}
          <h3>Technical Stack</h3>
          <br></br>
          <p className="bullet-point-paragraph productpara">{activeProduct.stack}</p>
          <br></br>
          {/* Display technical overview and image */}
          <h3>Overview</h3>
          <br></br>
          <div className="technical-details">
          <div className="technical-details__content">
            <p>{activeProduct.content.technicalDetails}</p>
            <br></br>
          </div>
          <div className="technical-details__video">
            <iframe
              width="100%"
              height="100%"
              src={activeProduct.content.videoUrl}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <br></br>
        </div>

          {/* Loop through sections and display images */}
          <section className="dotspot-features">
          <h2 className="features__title">{activeProduct.name} Features</h2>
          <br></br>

          <div className="features__grid">
            {activeProduct.content.sections.map((section, index) => (
              <div className="feature-card" key={index}>
                <img src={section.image} alt={section.header} className="feature-card__img" />
                <br></br>
                <div className="feature-card__title-container">
                  <h3 className="feature-card__title">{section.header}</h3>
                  <br></br>
                </div>
                <div className="feature-card__overlay">
                  <p className="feature-card__details">{section.content}</p>
                  <br></br>
                </div>
              </div>
            ))}
          </div>
        </section>

          {/* Display why organizations need */}
          <section className="why-organizations-choose">
            <h2 className="why-title">Why Organizations Choose  {activeProduct.name}</h2>
            <div className="why-grid">
              {activeProduct.content.whyOrganizationsNeed.map((item, index) => (
                <div key={index} className="why-card">
                  <img src={item.image} alt={item.header} className="why-card__img" />
                  <br></br>
                  <h3 className="why-card__header">{item.header}</h3>
                  <br></br>
                  <p className="why-card__content">{item.content}</p>
                  <br></br>
                </div>
              ))}
            </div>
          </section>

          <div className="navigation-buttons">
            <button onClick={() => navigateProduct(-1)}>Previous</button>
            <button onClick={() => navigateProduct(1)}>Next</button>
          </div>
          <br></br>
        </div>
      )}
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
};


export default ProductSection;