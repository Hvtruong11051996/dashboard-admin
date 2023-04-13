import * as React from 'react';
// import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Main from './layouts/Main';
import './styles/main.scss';

export function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/dashboard-admin" element={<Dashboard />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}
