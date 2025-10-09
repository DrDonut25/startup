import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { HomeHeader } from './home/home-header';
import { HomeMain } from './home/home-main';
import { HomeFooter } from './home/home-footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Routes>
          <Route path='/' element={<HomeHeader />} exact />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Routes>
          <Route path='' element={<HomeMain />} exact />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Routes>
          <Route path='' element={<HomeFooter />} exact />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}