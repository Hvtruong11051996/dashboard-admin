import { Card, Col, Row } from 'antd';
import React from 'react';
import './Analytics.scss';

const Analytics = () => {
  return (
    <div className="dashboard-analytics">
      <Row style={{ justifyContent: 'space-around' }}>
        {[1, 2, 3, 4].map(item => {
          return (
            <Col span={5}>
              <Card size="default" className="bd-left">
                <Row className="d-center">
                  <Col span={18}>
                    <div className="label-text">Total Orders</div>
                    <div className="mb text-analytics">4805</div>
                    <div className="font-14">+2.5% from last week</div>
                  </Col>
                  <Col span={6} className="analytics-icon">
                    <img className="admin-img" src="./images/shopping-cart.png" alt="dashboard" />
                  </Col>
                </Row>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Analytics;
