import React from 'react';
import { Form, Input, Button, Card, Row, Col, Typography, Space } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;
const ContactUs = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
    // Add your form submission logic here
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f2f5', marginTop: '60px' }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <Card style={{ borderRadius: '10px' }}>
            <Title level={2}>Contact Us</Title>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
                <Input placeholder="Your Name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>
              <Form.Item
                name="subject"
                label="Subject"
                rules={[{ required: true, message: 'Please enter the subject' }]}
              >
                <Input placeholder="Subject" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea rows={4} placeholder="Your Message" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card style={{ borderRadius: '10px' }}>
            <Title level={2}>Contact Info</Title>
            <Paragraph>
              <EnvironmentOutlined /> Patna, 800023
            </Paragraph>
            <Paragraph>
              <PhoneOutlined /> 7665500714
            </Paragraph>
            <Paragraph>
              <MailOutlined /> ankitbhardwaj2809@gmail.com
            </Paragraph>
            <Title level={3}>Follow Us</Title>
            <Space size="large">
              <a href="https://www.instagram.com/thepublicpoints?igsh=MmxpeHRtcGF2aGZ0">
                <InstagramOutlined />
                Instagram
              </a>
              <a href="https://www.facebook.com/share/9Zqa2kFkGrtE9o6h/?mibextid=qi2Omg">
                <FacebookOutlined />
                Facebook
              </a>
              <a href="https://youtube.com/@thepublicpoints?si=Dtlu4TkAflUK07nb">
                <YoutubeOutlined />
                YouTube
              </a>
              <a href="https://x.com/PublicProle?t=7qDqjUObd5bNCiJ-gvMJgg&s=08">
                <TwitterOutlined />X
              </a>
            </Space>
          </Card>
          <Card style={{ marginTop: '20px', borderRadius: '10px' }}>
            <Title level={3}>About</Title>
            <Row gutter={[16, 16]}>
              "The Public Points" is your go-to regional news channel dedicated to bringing you the latest daily
              interviews and public happenings. With a keen focus on community stories and voices, we capture the
              essence of local life and events that matter most to you. From in-depth interviews with influential
              figures to on-the-ground coverage of community events, "The Public Points" ensures you stay informed and
              connected with your region. Tune in daily for accurate, engaging, and insightful news that reflects the
              pulse of your community.
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
