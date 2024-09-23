import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../css/Contact.css'; // Make sure you create this CSS file
import Footer from '../components/Footer'; // Your Footer component
import officeImage1 from '../assets/img/5G.png'; // Replace with actual paths for images
import officeImage2 from '../assets/img/5G.png'; // Replace with actual paths for images
import officeImage3 from '../assets/img/5G.png'; // Replace with actual paths for images
import contactHeaderImage from '../assets/img/5G.png'; // Add your header image path here
import video from "../img/contact.mp4"; 
const { Title, Text } = Typography;

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // JSON Data for Our Presence
  const locationsData = {
    locations: [
      {  
        country: "USA",
        flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
        company: "Dotsito Technology Inc.",
      },
      {
        country: " UK",
        flag: "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg",
        company: "Dotsito Technology Ltd.",
       
      },
     
      
    ],
    officeImages: [
      {
        src: officeImage1,
        alt: "Office 1"
      },
      {
        src: officeImage2,
        alt: "Office 2"
      },
      {
        src: officeImage3,
        alt: "Office 3"
      }
    ]
  };

  return (
    <>
 <div>
 <section className="service-banner">
        <video autoPlay muted loop playsInline className="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-content">
          <Title level={1} className="banner-title">Transforming Businesses Through Technology</Title>
          
        </div>
      </section>
 
      <div className="contact-section">
        {/* Left Section: Contact Information */}
        <div className="contact-info mainc" data-aos="fade-right">
          <Title level={3} className="contact-title">
            Connect With Our Experts to Achieve Your Digital Vision
          </Title>
          <Text className="contact-description">Call Us -</Text>
          <Text className="contact-phone">+1 609 632 0350</Text> <br />
          <Text className="contact-description">Email Us -</Text>
          <Text className="contact-email">operations@dotsito.com</Text>

          {/* Google Map Iframe */}
          <div className="map-container" data-aos="zoom-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3882332031985!2d77.56384557509169!3d10.994256389168129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba99900755c1513%3A0x6fb5de480a85caca!2sDotsito%20Technologies!5e1!3m2!1sen!2sin!4v1726568117015!5m2!1sen!2sin"
              width="100%" 
              height="350" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="contact-form" data-aos="fade-left">
          <Title level={3}>Talk to an Expert</Title>
          <Form
            name="contact"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
            <div className="form-row">
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: 'Please input your first name!' }]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: 'Please input your last name!' }]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
            </div>

            <div className="form-row">
              <Form.Item
                name="company"
                label="Company"
                rules={[{ required: true, message: 'Please input your company name!' }]}
              >
                <Input placeholder="Company" />
              </Form.Item>
              <Form.Item
                name="jobTitle"
                label="Job Title"
                rules={[{ required: true, message: 'Please input your job title!' }]}
              >
                <Input placeholder="Job Title" />
              </Form.Item>
            </div>

            <Form.Item
              name="email"
              label="Email Address"
              rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
            >
              <Input placeholder="Email Address" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input placeholder="Phone" />
            </Form.Item>

            <Form.Item
              name="message"
              label="How can we help you?"
              rules={[{ required: true, message: 'Please input your message!' }]}
            >
              <Input.TextArea placeholder="How can we help you?" rows={4} />
            </Form.Item>

            <Form.Item name="subscribe" valuePropName="checked">
              <Checkbox>Subscribe to receive the latest insights and information</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="submit-button">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      {/* Our Presence Section */}
      <div className="our-presence">
        <Title level={2} className="presence-title" data-aos="fade-up">Our Presence</Title>
        <Text className="presence-description" data-aos="fade-up">
          A focus on both mature and emerging markets combined with our dedicated local presence in select geographies ensures seamless collaboration and communication.
        </Text>

        {/* Dynamic Locations from JSON */}
        <div className="presence-locations">
          {locationsData.locations.map((location, index) => (
            <div className="location" key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <img src={location.flag} alt={`${location.country}Flag`} className="flag-icon" />
              <Title level={4}>{location.company}</Title>
              <Text className="location-text">
                <strong>{location.country}</strong><br />
                {location.address}<br />
                {location.phone && (
                  <>
                    Phone: {location.phone}<br />
                  </>
                )}
              </Text>
            </div>
          ))}
        </div>

        {/* Office Images from JSON */}
       
      </div>

      <Footer />
      </div>
    </>
  );
};

export default Contact;