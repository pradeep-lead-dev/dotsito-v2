import React from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';
import '../css/form.css';
const { Option } = Select;

const ApplyForm = ({ formVisible, setFormVisible }) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    setFormVisible(false);
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log('Form Data:', values);
    handleCancel(); // Close the modal on successful submission
  };

  return (
    <Modal
      title="Apply for this Position"
      visible={formVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please input your first name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please input your last name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please enter your phone number!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Experience" name="experience" rules={[{ required: true, message: 'Please select your experience!' }]}>
          <Select>
            <Option value="fresher">Fresher</Option>
            <Option value="1-2 years">1-2 years</Option>
            <Option value="3+ years">3+ years</Option>
          </Select>
        </Form.Item>
        <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please input your city!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Role" name="role" rules={[{ required: true, message: 'Please select your role!' }]}>
          <Select>
            <Option value="developer">Developer</Option>
            <Option value="designer">Designer</Option>
            <Option value="manager">Manager</Option>
          </Select>
        </Form.Item>
        <h3>Please email your detailed resume to operation@dotsito.com. We will be in touch soon!</h3>

        <div style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ApplyForm;
