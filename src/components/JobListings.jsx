// JobListings.js
import React from 'react';
import { Row, Col } from 'antd';

const JobListings = ({ jobs, onViewDetails }) => {
  return (
    <Row gutter={[16, 16]}>
      {jobs.map((job, index) => (
        <Col key={index} xs={24} sm={12} md={8}>
          <JobListing job={job} onViewDetails={onViewDetails} />
        </Col>
      ))}
    </Row>
  );
};

export default JobListings;
