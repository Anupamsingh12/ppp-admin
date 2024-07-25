import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination, Button } from 'antd';
import BlogCard from '../../components/cards/BlogCard';
import { PaginationStyle } from '../styled';

const { getArticles } = require('../../utility/services/headlines');
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
const Course = () => {
  const [allData, setAllData] = useState([]);
  const [start, setStart] = useState(0);

  const getAllRoomList = async () => {
    getArticles({ start })
      .then((res) => {
        if (res) {
          setAllData([...allData, ...res?.data?.data]);
          console.log(allData);
        }
      })
      .catch((err) => console.log('err', err));
  };

  const fetchNext = () => {
    setStart(start + 10);
  };

  useEffect(() => {
    getAllRoomList();
  }, [start]);

  return (
    <>
      <main className="mt-1 min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
        <Row gutter={[16, 16]} className="mt-sm-10" style={{ marginTop: '70px' }}>
          {allData.length > 0 &&
            allData?.map((value, index) => (
              <Col xs={24} sm={12} md={12} lg={8} key={value._id}>
                <BlogCard
                  key={index}
                  item={{
                    url: value?.media?.filesData[0]?.link,
                    title: value?.title,
                    content: value?.description1?.slice(0, 200) + '... Read More',
                    author: value?.createrName,
                    link: '/articles/' + value._id,
                    name: value?.category,
                    publishedAt: value?.created_at?.slice(0, 10),
                  }}
                  theme="style-3"
                />
              </Col>
            ))}
          <Col xs={24}>
            <>
              <Button onClick={fetchNext}>Load More</Button>
              {/* {allData.length ? (
                <PaginationStyle>
                  <div className="ant-pagination-custom-style text-end">
                    <Pagination onChange={() => {}} showSizeChanger pageSize={10} defaultCurrent={1} total={40} />
                  </div>
                </PaginationStyle>
              ) : null} */}
            </>
          </Col>
        </Row>
      </main>
    </>
  );
};

export default Course;
