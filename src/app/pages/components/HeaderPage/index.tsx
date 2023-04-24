import { Button, Col, Row } from 'antd';
import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const HeaderPage = ({ title }) => {
  const navigate = useNavigate();

  return (
    <>
      <Row style={{ marginBottom: 30, alignItems: 'center', borderBottom: '1px solid #dee2e6', height: 100 }}>
        <Button type="primary" style={{ marginRight: 20 }} onClick={() => navigate(-1)}>
          <LeftOutlined />
          Back
        </Button>
        <Col className="label-header">{title}</Col>
      </Row>
    </>
  );
};

export default HeaderPage;
