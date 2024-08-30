import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Typography, Image } from 'antd';
import { UilShareAlt } from '@iconscout/react-unicons';
import { UilWhatsapp } from '@iconscout/react-unicons';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart-sign';
import UilFile from '@iconscout/react-unicons/icons/uil-file-alt';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;
const link = window.location.href;
const { getArticleById, getRelativeTime } = require('../../utility/services/headlines');
const BlogDetails = ({ blog }) => {
  const { title, category, createdBy, created_at, description1, description2, media } = blog;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <Helmet>
        <meta property="og:title" content={title} />
        {/* <meta property="og:description" content={content} /> */}
        <meta property="og:image" content={media?.filesData[0]?.link} />
        <meta property="og:url" content={link} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Card style={{ marginTop: '60px' }}>
        <Title level={4}>{title}</Title>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Text strong>Category: </Text>
            <Text>{category}</Text>
          </Col>
          <Col span={12}>
            <Text strong>Written By: </Text>
            <Text>{createdBy}</Text>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Text type="secondary">{'Published : ' + getRelativeTime(new Date(created_at))}</Text>
          </Col>
          <Col span={12}>
            <div className="relative ml-2">
              <button
                className="flex items-center leading-none gap-x-1 text-light dark:text-white60 text-15"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <UilShareAlt className="w-4 h-4 text-light dark:text-white60" />
                <span className="text-light dark:text-white60 text-15">Share</span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-white10 rounded shadow-lg z-10">
                  <ul>
                    <li
                      className="flex items-center gap-x-2 px-4 py-2 text-sm text-light dark:text-white60 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText(link);
                        alert('Link copied to clipboard!');
                        setDropdownOpen(false);
                      }}
                    >
                      <UilShareAlt className="w-4 h-4 text-light dark:text-white60" />
                      Copy Link
                    </li>
                    <li
                      className="flex items-center gap-x-2 px-4 py-2 text-sm text-light dark:text-white60 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                      onClick={() => {
                        const url = `https://wa.me/?text=${encodeURIComponent(link)}`;
                        window.open(url, '_blank');
                        setDropdownOpen(false);
                      }}
                    >
                      <UilWhatsapp className="w-4 h-4 text-green-500" />
                      Share on WhatsApp
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </Col>
        </Row>

        <Image src={media?.filesData[0]?.link} alt="Blog Image 1" style={{ marginTop: '20px', maxHeight: '600px' }} />
        <div className="flex justify-end items-center">
          {/* <ul className="flex items-between -m-2"> */}
          {/* <div className="m-2">
          <span className="flex items-center leading-none gap-x-1 text-light dark:text-white60 text-13">
          <UilHeart className="w-3 h-3 text-light dark:text-white60" />
          <span className="text-light dark:text-white60 text-15">70</span>
          </span>
          </div>
          <div className="m-2">
          <span className="flex items-center leading-none gap-x-1 text-light dark:text-white60 text-13">
          <UilFile className="w-3 h-3 text-light dark:text-white60" />
          <span className="text-light dark:text-white60 text-15">120</span>
          </span>
          </div> */}
          <div className="relative m-2">
            <button
              className="flex items-center leading-none gap-x-1 text-light dark:text-white60 text-15"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <UilShareAlt className="w-4 h-4 text-light dark:text-white60" />
              <span className="text-light dark:text-white60 text-15">Share</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-white10 rounded shadow-lg z-10">
                <ul>
                  <li
                    className="flex items-center gap-x-2 px-4 py-2 text-sm text-light dark:text-white60 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.origin + link);
                      alert('Link copied to clipboard!');
                      setDropdownOpen(false);
                    }}
                  >
                    <UilShareAlt className="w-4 h-4 text-light dark:text-white60" />
                    Copy Link
                  </li>
                  <li
                    className="flex items-center gap-x-2 px-4 py-2 text-sm text-light dark:text-white60 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      const url = `https://wa.me/?text=${encodeURIComponent(window.location.origin + link)}`;
                      window.open(url, '_blank');
                      setDropdownOpen(false);
                    }}
                  >
                    <UilWhatsapp className="w-4 h-4 text-green-500" />
                    Share on WhatsApp
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* </ul> */}
        </div>
        <Paragraph style={{ marginTop: '20px' }}>
          <div dangerouslySetInnerHTML={{ __html: description1 }} />
        </Paragraph>
        <Image src={media?.filesData[1]?.link} style={{ marginTop: '20px' }} />
        <Paragraph style={{ marginTop: '20px' }}>
          <div dangerouslySetInnerHTML={{ __html: description2 }} />
        </Paragraph>
      </Card>
    </>
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
