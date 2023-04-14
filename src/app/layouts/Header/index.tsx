import { Col, Row } from 'antd';
import React from 'react';
import './Header.scss';
import { Header } from 'antd/es/layout/layout';

const HeaderNav = () => {
  return (
    <Header className="admin-header">
      <Row style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
        <Col span={1}>
          <img src="./icons/bell.svg" alt="" />
        </Col>
        <Col span={1}>
          <img src="./icons/setting.svg" alt="" />
        </Col>
        <Col>
          <Row style={{ justifyItems: 'center' }}>
            <div>
              <img className="admin-header__avatar" src="./images/thumb-1.jpg" alt="" />
            </div>
            <div style={{ marginTop: 5 }}>
              <div>Admin</div>
              <strong>Hoang Van Truong</strong>
            </div>
          </Row>
        </Col>
      </Row>
    </Header>
    // <Header className="admin-header">Header</Header>
  );
};

export default HeaderNav;
