import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination } from 'antd';
import courseData from '../../demoData/course.json';
import BlogCard from '../../components/cards/BlogCard';
import { PaginationStyle } from '../styled';
const { getHeadlines } = require('../../utility/services/headlines');

const PageRoutes = [
  {
    path: 'index',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'feed',
    breadcrumbName: 'Feed',
  },
];
function Course() {
  const [state, setState] = useState({
    courses: courseData,
    current: 0,
    pageSize: 0,
  });
  const { courses } = state;
  const [allData, setAllData] = useState([]);

  const getAllRoomList = () => {
    getHeadlines({})
      .then((res) => {
        if (res) {
          setAllData(res?.data?.articles);
        }
      })
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    getAllRoomList();
  }, []);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };
  return (
    <>
      <main className="mt-1 min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={[16, 16]} className="mt-sm-10">
          {allData.map((value, index) => (
            <Col xs={24} sm={12} md={12} lg={8} key={value._id}>
              <BlogCard
                key={index}
                item={{
                  url: value.urlToImage,
                  title: value.title,
                  content: value.content,
                  author: value.author,
                  link: value.url,
                  name: value?.source[0]?.name,
                  publishedAt: value?.publishedAt,
                }}
                theme="style-3"
              />
            </Col>
          ))}

          <Col xs={24}>
            <>
              {/* {courseData.length ? (
                <PaginationStyle>
                  <div className="ant-pagination-custom-style text-end">
                    <Pagination
                      onChange={onHandleChange}
                      showSizeChanger
                      onShowSizeChange={onShowSizeChange}
                      pageSize={10}
                      defaultCurrent={1}
                      total={40}
                    />
                  </div>
                </PaginationStyle>
              ) : null} */}
            </>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default Course;
