import { Card, Col, Row } from 'antd';
import React from 'react';
import ChartArea from './Area';
import './Chart.scss';
import ChartPie from './Pie';

const Chart = () => {
  return (
    <div className="ad-chart">
      <Row style={{ justifyContent: 'space-around' }}>
        <Col span={16}>
          <Card>
            <ChartArea />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <ChartPie />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Chart;
