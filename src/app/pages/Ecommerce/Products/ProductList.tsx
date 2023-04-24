import { Button, Col, Input, Row, Space, Table } from 'antd';
import { FilterOutlined, DownloadOutlined, PlusCircleOutlined } from '@ant-design/icons';
import React from 'react';
import './Product.scss';
import useModal from 'app/hooks/useModal';
import ProductAction from './components/ProductAction';
import { Link } from 'react-router-dom';
const { Search } = Input;

const ProductList = () => {
  const { stateModal, toggleModal, offModal } = useModal();
  const columns: any = [
    {
      title: 'Images',
      dataIndex: 'iamge',
      key: 'image',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Category',
      dataIndex: 'Category',
      width: '30%',
      key: 'Category',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Quantity',
      dataIndex: 'Quantity',
      key: 'Quantity',
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
    },
    {
      title: 'Price',
      dataIndex: 'Price',
      key: 'Price',
    },
    {
      title: 'View Details',
      dataIndex: 'View Details',
      key: 'View Details',
    },
    {
      title: 'Action',
      key: 'action',
      width: '5%',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: any[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  const onSearch = (value: string) => console.log(value);

  return (
    <>
      <div className="ad-products">
        <Row className="ad-products__header">
          <Col className="label-header">Products</Col>
          <Col>
            <Row>
              <Col className="ml">
                <Input placeholder="Search ......" />
              </Col>
              <Col className="ml">
                <Button>
                  <FilterOutlined />
                  Filter
                </Button>
              </Col>
              <Col className="ml">
                <Button>
                  <DownloadOutlined /> Export
                </Button>
              </Col>
              <Col className="ml">
                <Link to="/products/add-new-product.html">
                  <Button type="primary">
                    <PlusCircleOutlined />
                    Add Product
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  );
};

export default ProductList;
