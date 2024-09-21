import React, { useState } from 'react';
import { Typography, Button, Card, Row, Col, Radio, Input, Slider, Pagination } from 'antd';
import '../css/Careers.css'; // Ensure correct CSS path
import JobModal from "../components/JobModal";
import HireSection from "../components/HireSection"; // Reusable component
import GraduateCareersSection from '../components/GraduateCareersSection';
import Footer from '../components/Footer';
import video from "../img/career.mp4";
const { Title, Text } = Typography;
const { Search } = Input;

const Careers = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filters, setFilters] = useState({
    location: 'all',
    company: 'all',
    search: '',
    salaryRange: [0, 100000],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of jobs to show per page

  const showModal = (job) => {
    setSelectedJob(job);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSelectedJob(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedJob(null);
  };

  const jobData = [
    {
      title: "Chartered Accountant",
      company: "Futures and Careers",
      location: "Erode",
      posted: "16 hours ago",
      description: "Full job description goes here for Chartered Accountant...",
      salary: 60000,
    },
    {
      title: "Web Developer",
      company: "Tech Solutions",
      location: "Bangalore",
      posted: "3 days ago",
      description: "Looking for a skilled Web Developer with 2+ years of experience...",
      salary: 80000,
    },
    {
      title: "React JS Developer",
      company: "Innovatech",
      location: "Remote",
      posted: "1 week ago",
      description: "React JS Developer needed with 3+ years of experience...",
      salary: 95000,
    },
    {
      title: "ServiceNow Developer",
      company: "CloudWorks",
      location: "Hyderabad",
      posted: "2 weeks ago",
      description: "Experienced ServiceNow Developer proficient in SNOW tools...",
      salary: 75000,
    },
    {
      title: "Software Engineer",
      company: "Tech Park",
      location: "Chennai",
      posted: "5 days ago",
      description: "Looking for a Software Engineer skilled in Java and Spring Boot...",
      salary: 90000,
    },
    {
      title: "Backend Developer",
      company: "CodeWorks",
      location: "Delhi",
      posted: "10 days ago",
      description: "Backend Developer required with experience in Node.js...",
      salary: 85000,
    },
    // Add more job data here...
  ];

  // Handle filter change
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  // Pagination change handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Filter the job listings based on selected filters and search input
  const filteredJobs = jobData.filter((job) => {
    const isMatchingSearch =
      job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.location.toLowerCase().includes(filters.search.toLowerCase());

    const isMatchingLocation = filters.location === 'all' || job.location === filters.location;
    const isMatchingCompany = filters.company === 'all' || job.company === filters.company;
    const isMatchingSalary = job.salary >= filters.salaryRange[0] && job.salary <= filters.salaryRange[1];

    return isMatchingSearch && isMatchingLocation && isMatchingCompany && isMatchingSalary;
  });

  // Get jobs for the current page
  const paginatedJobs = filteredJobs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="careers-page">
      {/* Header Section with Search */}
      <section className="service-banner">
  <video autoPlay muted loop playsInline className="background-video">
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="banner-content">
    <Title level={1} className="banner-title">
      Find your Best Careers
    </Title>
   
    <br />
    <div className="search-bar">
  <form onSubmit={(e) => { e.preventDefault(); handleFilterChange('search', e.target.search.value); }}>
    <input
      type="text"
      name="search"
      className="search-input"
      placeholder="Search for jobs by role or city..."
    />
    <button type="submit" className="search-button">Search</button>
  </form>
</div>


  </div>
</section>


      {/* Job Listings Section */}
      <section className="job-listings container">
        <Row gutter={[16, 16]}>
          {/* Filter Section */}
          <Col xs={24} sm={6}>
            <Card title="Filter Jobs">
              <div className="filter-section">
                <Title level={4}>Location</Title>
                <Radio.Group
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  value={filters.location}
                >
                  <Radio value="all">All Locations</Radio>
                  <Radio value="Erode">Erode</Radio>
                  <Radio value="Bangalore">Bangalore</Radio>
                  <Radio value="Remote">Remote</Radio>
                  <Radio value="Hyderabad">Hyderabad</Radio>
                </Radio.Group>

                <Title level={4} style={{ marginTop: '20px' }}>Company</Title>
                <Radio.Group
                  onChange={(e) => handleFilterChange('company', e.target.value)}
                  value={filters.company}
                >
                  <Radio value="all">All Companies</Radio>
                  <Radio value="Futures and Careers">Futures and Careers</Radio>
                  <Radio value="Tech Solutions">Tech Solutions</Radio>
                  <Radio value="Innovatech">Innovatech</Radio>
                  <Radio value="CloudWorks">CloudWorks</Radio>
                </Radio.Group>

                <Title level={4} style={{ marginTop: '20px' }}>Salary Range</Title>
                <Slider
                  range
                  min={0}
                  max={100000}
                  step={5000}
                  defaultValue={filters.salaryRange}
                  onChange={(value) => handleFilterChange('salaryRange', value)}
                  marks={{
                    0: '0',
                    50000: '50K',
                    100000: '100K',
                  }}
                />
              </div>
            </Card>
          </Col>

          {/* Job Listings */}
          <Col xs={24} sm={18}>
            <div className="job-list">
              {paginatedJobs.map((job, index) => (
                <Card
                  key={index}
                  hoverable
                  className="job-list-item"
                  title={job.title}
                  extra={<Button type="primary" onClick={() => showModal(job)}>View</Button>}
                >
                  <Text>Company: {job.company}</Text><br />
                  <Text>Location: {job.location}</Text><br />
                  <Text>Posted: {job.posted}</Text><br />
                  <Text>Salary: ₹{job.salary.toLocaleString()}</Text>
                  <div className="job-description">
                    {job.description}
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={filteredJobs.length}
              onChange={handlePageChange}
              style={{ marginTop: '20px', textAlign: 'center' }}
            />
          </Col>
        </Row>
      </section>

      {/* Job Modal */}
      <JobModal
        job={selectedJob}
        isVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />   

      <GraduateCareersSection/>
      <HireSection />
      <Footer />
    </div>
  );
};

export default Careers;
