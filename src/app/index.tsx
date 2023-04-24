import * as React from 'react';
// import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Main from './layouts/Main';
import './styles/main.scss';
import ProductList from './pages/Ecommerce/Products/ProductList';
import ProductAction from './pages/Ecommerce/Products/components/ProductAction';

export function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/add-new-product.html" element={<ProductAction />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}
