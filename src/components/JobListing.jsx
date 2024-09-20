// JobListing.js
import React from 'react';
import { Card, Button, Typography } from 'antd';

const { Text } = Typography;

const JobListing = ({ job, onViewDetails }) => {
  return (
    <Card title={job.title} bordered={false}>
      <Text>Location: {job.location}</Text><br />
      <Text>Posted: {job.posted}</Text><br />
      <Button type="primary" onClick={() => onViewDetails(job)}>
        View Salary & Details
      </Button>
    </Card>
  );
};

export default JobListing;
