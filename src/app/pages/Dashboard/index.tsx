import { Card, Col, Row } from 'antd';
import React from 'react';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <div>
        <Row style={{ justifyContent: 'space-around' }}>
          <Col span={5}>
            <Card size="default">
              <Row>
                <Col span={20}>
                  <div className="label-text">Total Orders</div>
                  <div className="mb text-analytics">4805</div>
                  <div className="font-14">+2.5% from last week</div>
                </Col>
                <Col span={4}>icons</Col>
              </Row>
            </Card>
          </Col>

          <Col span={5}>
            <Card size="default">
              <Row>
                <Col span={20}>
                  <div className="label-text">Total Orders</div>
                  <div className="mb text-analytics">4805</div>
                  <div className="font-14">+2.5% from last week</div>
                </Col>
                <Col span={4}>icons</Col>
              </Row>
            </Card>
          </Col>

          <Col span={5}>
            <Card size="default">
              <Row>
                <Col span={20}>
                  <div className="label-text">Total Orders</div>
                  <div className="mb text-analytics">4805</div>
                  <div className="font-14">+2.5% from last week</div>
                </Col>
                <Col span={4}>icons</Col>
              </Row>
            </Card>
          </Col>

          <Col span={5}>
            <Card size="default">
              <Row>
                <Col span={20}>
                  <div className="label-text">Total Orders</div>
                  <div className="mb text-analytics">4805</div>
                  <div className="font-14">+2.5% from last week</div>
                </Col>
                <Col span={4}>icons</Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
