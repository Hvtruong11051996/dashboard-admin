import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import './Layout.scss';
import Sidenav from './Sidenav';
import HeaderNav from './Header';

const { Header, Content, Footer, Sider } = Layout;

const Main = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <>
        <Sidenav />
      </>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <HeaderNav />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Main;
