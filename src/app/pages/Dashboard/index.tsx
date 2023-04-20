import { Card, Col, Row } from 'antd';
import React from 'react';
import './Dashboard.scss';
import Analytics from './Analytics';
import Chart from './Chart';
import Orderdetail from './OrderDetail';
import TopSelling from './TopSelling';

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <Analytics />
      <Chart />
      <Orderdetail />
      <TopSelling />
    </div>
  );
};

export default Dashboard;
