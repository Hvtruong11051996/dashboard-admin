import { Col, Layout, Menu, MenuProps } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Layout.scss';

const { Header, Content, Footer, Sider } = Layout;

const menuLink = (key, label?: string, link?: string, icon?: string) => (
  <>
    <NavLink to={link as string} style={{ display: 'flex', alignItems: 'center' }} id={`menu-item__${key}`}>
      {icon ? (
        <Col className="d-flex" style={{ display: 'flex', marginRight: 15 }}>
          <img src={icon} style={{ width: 20 }} className="menu-icon" alt="label" />
        </Col>
      ) : (
        ''
      )}
      <Col span={20} className="sidenav-label">
        {label}
      </Col>
    </NavLink>
  </>
);

export const items: MenuProps['items'] = [
  {
    label: menuLink('dashboard', 'Dashboard', '/dashboard', './images/dashboard.png'),
    key: 'dashboard',
  },
  {
    label: menuLink('ecommerce', 'Ecommerce'),
    key: 'ecommerce',
    children: [
      {
        label: menuLink('products', 'Products', '/products', './images/product.png'),
        key: 'products',
      },
      {
        label: menuLink('orders', 'Orders', '/orders', './images/shopping-bag.png'),
        key: 'orders',
      },
    ],
  },
  {
    label: menuLink('Authentication', 'Authentication'),
    key: 'authentication',
    children: [
      {
        label: menuLink('resetPassword', 'Reset Password', '/reset-password', './images/synchronize.png'),
        key: 'reset-password',
      },
      {
        label: menuLink('change-password', 'Change Password', '/change-Password', './images/refresh.png'),
        key: 'change-password',
      },
    ],
  },
  {
    label: menuLink('user-profile', 'User Profile', '/user-profile', './images/user.png'),
    key: 'user-profile',
  },
  {
    label: menuLink('system-settings', 'System Settings', '/system-settings', './images/account.png'),
    key: 'system-settings',
  },
  {
    label: menuLink('manage-account', 'Manage Account', '/manage-account', './images/management.png'),
    key: 'manage-account',
  },
  {
    label: menuLink('manage-users', 'Manage Users', '/manage-users', './images/management.png'),
    key: 'manage-users',
  },
  {
    label: menuLink('post-management', 'Post Management', '/post-management', './images/chat.png'),
    key: 'post-management',
  },
  {
    label: menuLink('feedback', 'Feedback', '/feedback', './images/chat.png'),
    key: 'feedback',
  },
  {
    label: menuLink('notes', 'Notes', '/notes', './images/sticky-notes.png'),
    key: 'notes',
  },
];

const Sidenav = () => {
  return (
    <div>
      <Sider className="admin-layout-sider">
        <div className="admin-logo">
          <img className="admin-logo__img" src="./images/logo-admin.jpg" alt="logo" />
        </div>
        <Menu theme="dark" mode="inline" items={items} id="sidebar__menu" />
      </Sider>
    </div>
  );
};

export default Sidenav;
