import React from 'react';
import { Modal, Typography, Button } from 'antd';
import { useState } from 'react';
import ApplyForm from './ApplyForm'; // Import the new form component

const { Text } = Typography;

const JobModal = ({ job, isVisible, handleOk, handleCancel }) => {
  const [formVisible, setFormVisible] = useState(false);

  const showApplyForm = () => {
    setFormVisible(true); // Show the form modal when "Apply Now" is clicked
  };

  return (
    <>
      <Modal
        title={job?.title}
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p><strong>Company:</strong> {job?.company}</p>
        <p><strong>Location:</strong> {job?.location}</p>
        <p><strong>Posted:</strong> {job?.posted}</p>
        <p>{job?.description}</p>

        <div style={{ textAlign: 'right', marginTop: '20px' }}>
          <Button type="primary" onClick={showApplyForm}>
            Apply Now
          </Button>
        </div>
      </Modal>

      {/* Form Modal */}
      <ApplyForm formVisible={formVisible} setFormVisible={setFormVisible} />
    </>
  );
};

export default JobModal;
