import React, { useEffect, useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Row, Col, Button, Table, Modal, Space, Popconfirm, message, Select, Input, Avatar } from 'antd';
import AddUsers from './AddUsers';
import Calculator from './Calculator';
import { GlobalUtilityStyle } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { getAllOrg, download } from '../../utility/services/invoices';
import { getAllOrg as fetchAllStores } from '../../utility/services/stores';

const { Search } = Input;

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [allRoles, setAllRoles] = useState([]);
  const [isAddUsers, setIsAddUsers] = useState(false);
  const [calculatorVisible, setCalculatorVisible] = useState(false);
  const [isEditUsers, setIsEditUsers] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [statusChange, setStatusChange] = useState('');
  const PageRoutes = [
    {
      path: '/',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '/invoices',
      breadcrumbName: 'Bill',
    },
  ];

  const getAllUsers = () => {
    getAllOrg({ search: searchValue, store_id: statusChange })
      .then((res) => {
        if (res) {
          setAllUsers(res?.data?.rows);
        }
      })
      .catch((err) => console.log('err', err));
  };

  const fetchRolesForFilter = () => {
    fetchAllStores({})
      .then((res) => {
        const data = res?.data?.rows;
        let dd = [{ value: '', label: 'All' }];
        data.map((obj) => {
          dd.push({
            value: obj.id,
            label: obj.name,
          });
        });
        setAllRoles(dd);
      })
      .catch((error) => {
        message.error('Error fetching room suggestions');
      });
  };

  useEffect(() => {
    fetchRolesForFilter();
  }, []);

  useEffect(() => {
    getAllUsers();
  }, [searchValue, statusChange]);
  const columns = [
    {
      title: '#Id',
      dataIndex: 'id',
      key: 'id',
      width: 150,
    },
    {
      title: 'Customer Name',
      dataIndex: 'customer_name',
      key: 'customer_name',
      width: 150,
    },
    {
      title: 'Customer Phone',
      dataIndex: 'customer_phone',
      key: 'customer_phone',
      width: 150,
    },
    {
      title: 'Total Amount',
      dataIndex: 'total_amount',
      key: 'total_amount',
      width: 150,
    },
    {
      title: 'Invoice Date',
      dataIndex: 'date',
      key: 'date',
      width: 150,
      render: (text) => moment(text).format('DD-MM-YYYY (HH:mm)'),
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button size="middle" onClick={() => setIsEditUsers({ isOpen: true, userId: record?.id })}>
            Edit
          </Button>
          <Button
            type="primary"
            size="middle"
            style={{ marginLeft: 8 }}
            onClick={() => {
              download(record?.id)
                .then((res) => {
                  // console.log('res', res);
                  message.success('Invoice Deleted Successfully');
                  getAllUsers();
                })
                .catch((err) => console.log('err', err));
            }}
            icon={<DownloadOutlined />}
          >
            Download
          </Button>
        </Space>
      ),
      width: 150,
    },
  ];

  const onSearch = (value) => {
    setSearchValue(value);
  };
  const handleStatusChange = (value) => {
    setStatusChange(value);
  };

  return (
    <>
      <PageHeader
        title="Bills"
        routes={PageRoutes}
        className="flex items-center justify-between px-8 xl:px-[15px] pt-2 pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
      />
      <GlobalUtilityStyle className="p-3  ">
        <Row gutter={16}>
          <Col sm={24} xs={24} lg={24} className="">
            <Cards
              title={
                <div className="flex items-center gap-4">
                  <div>
                    <Select
                      style={{
                        width: 120,
                      }}
                      size="middle"
                      placeholder="Stores"
                      onChange={handleStatusChange}
                      options={allRoles}
                    />
                  </div>
                  <div>
                    <Search
                      placeholder="search name or phone"
                      allowClear
                      enterButton="Search"
                      size="middle"
                      onSearch={onSearch}
                    />
                  </div>
                </div>
              }
              moreBtn={
                <Space>
                  <Button type="primary" onClick={() => setCalculatorVisible(true)}>
                    Calculator
                  </Button>
                  <Button type="primary" onClick={() => setIsAddUsers(true)}>
                    Add
                  </Button>
                </Space>
              }
              // title="Userss"
              // bUsers={false}
              // size="default"
            >
              <Table size="small" scroll={{ x: '100%', y: 'auto' }} columns={columns} dataSource={allUsers} />
            </Cards>
          </Col>
        </Row>
      </GlobalUtilityStyle>
      <Modal
        title={isAddUsers ? 'Add Bill' : 'Edit Bill'}
        destroyOnClose
        open={isAddUsers || isEditUsers.isOpen}
        width={1024}
        // onOk={handleAddCmss}
        footer={false}
        onCancel={() => {
          setIsAddUsers(false);
          setIsEditUsers({ isOpen: false, userId: null });
        }}
      >
        <AddUsers
          setIsAddUsers={setIsAddUsers}
          getAllUsers={getAllUsers}
          isEditUsers={isEditUsers}
          setIsEditUsers={setIsEditUsers}
          store_id={statusChange}
        />
      </Modal>

      <Calculator calculatorVisible={calculatorVisible} setCalculatorVisible={setCalculatorVisible} />
    </>
  );
};

export default Users;
