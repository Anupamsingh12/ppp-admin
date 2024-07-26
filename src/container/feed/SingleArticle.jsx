import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Typography, Image } from 'antd';
import { useParams } from 'react-router-dom';
const { Title, Text, Paragraph } = Typography;
const { getArticleById, getRelativeTime } = require('../../utility/services/headlines');
const BlogDetails = ({ blog }) => {
  const { title, category, createdBy, created_at, description1, description2, media } = blog;

  return (
    <Card style={{ marginTop: '60px' }}>
      <Title level={2}>{title}</Title>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Text strong>Category: </Text>
          <Text>{category}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Written By: </Text>
          <Text>{createdBy}</Text>
        </Col>
        <Col span={24}>
          <Text type="secondary">{'Published : ' + getRelativeTime(new Date(created_at))}</Text>
        </Col>
      </Row>
      <Image src={media?.filesData[0]?.link} alt="Blog Image 1" style={{ marginTop: '20px' }} />
      <Paragraph style={{ marginTop: '20px' }}>
        <div dangerouslySetInnerHTML={{ __html: description1 }} />
      </Paragraph>
      <Image
        src={media?.filesData[0]?.link || media?.filesData[0]?.link}
        alt="Blog Image 2"
        style={{ marginTop: '20px' }}
      />
      <Paragraph style={{ marginTop: '20px' }}>
        <div dangerouslySetInnerHTML={{ __html: description1 }} />
      </Paragraph>
    </Card>
  );
};

// Sample blog data
const sampleBlog = {
  title: 'Sample Blog Title',
  authorName: 'Author Name',
  createdBy: 'Creator Name',
  createdTime: '2023-07-25T10:00:00Z',
  description1: 'This is the first description of the blog.',
  description2: 'This is the second description of the blog.',
  image1: 'https://via.placeholder.com/400x200',
  image2: 'https://via.placeholder.com/400x200',
};

const BlogPage = () => {
  const { id } = useParams();
  const [allData, setAllData] = useState({});
  useEffect(() => {
    getArticleById({ id })
      .then((res) => {
        if (res) {
          setAllData(res?.data);
          console.log(allData);
        }
      })
      .catch((err) => console.log('err', err));
  }, []);
  return (
    <div style={{ padding: '20px' }}>
      <BlogDetails blog={allData} />
    </div>
  );
};

export default BlogPage;
