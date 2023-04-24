import { Card, Col, Row, Table } from 'antd';
import React from 'react';

const TopSelling = () => {
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      width: '15%',
      align: 'center',
      render: img => {
        return (
          <>
            <img style={{ width: 40 }} src={img} alt="product" />
          </>
        );
      },
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Sold',
      dataIndex: 'sold',
      key: 'sold',
      width: '15%',
      align: 'center',
    },
  ];

  const trafficColumns = [
    {
      title: 'Source',
      dataIndex: 'Source',
      key: 'Source',
    },
    {
      title: 'Path',
      dataIndex: 'Path',
      key: 'Path',
    },
    {
      title: 'Visits',
      dataIndex: 'Visits',
      key: 'Visits',
    },
    {
      title: 'Trends',
      dataIndex: 'Trends',
      key: 'Trends',
    },
  ];

  const data = [
    {
      id: '1',
      image: './images/products/product-1.jpg',
      product: 'John Brown',
      sold: 32,
    },
    {
      id: '2',
      image: './images/products/product-3.jpg',
      product: 'John Brown',
      sold: 32,
    },
    {
      id: '3',
      image: './images/products/product-4.jpg',
      product: 'John Brown',
      sold: 32,
    },
    {
      id: '4',
      image: './images/products/product-5.jpg',
      product: 'John Brown',
      sold: 32,
    },
    {
      id: '5',
      image: './images/products/product-7.jpg',
      product: 'John Brown',
      sold: 32,
    },
  ];

  const trafficData = [
    {
      id: '1',
      Source: 'Google',
      Path: 'John Brown',
      Visits: 32,
      Trends: '',
    },
    {
      id: '2',
      Source: 'Facebook',
      Path: 'John Brown',
      Visits: 32,
      Trends: '',
    },
    {
      id: '3',
      Source: 'Twitter',
      Path: 'John Brown',
      Visits: 32,
      Trends: '',
    },
    {
      id: '4',
      Source: 'Linkedin',
      Path: 'John Brown',
      Visits: 32,
      Trends: '',
    },
    {
      id: '5',
      Source: 'Youtobe',
      Path: 'John Brown',
      Visits: 32,
      Trends: '',
    },
  ];

  return (
    <Row style={{ justifyContent: 'space-around' }}>
      <Col span={11}>
        <Card title="TopSelling">
          <Table columns={columns as any} dataSource={data} pagination={false} />
        </Card>
      </Col>
      <Col span={11}>
        <Card title="Traffic Resources" style={{ height: '95%' }}>
          <Table columns={trafficColumns as any} dataSource={trafficData} pagination={false} />
        </Card>
      </Col>
    </Row>
  );
};

export default TopSelling;
