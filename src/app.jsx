import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import { HomeHeader } from './home/home-header';
import { HomeMain } from './home/home-main';
import { HomeFooter } from './home/home-footer';

import { AboutHeader } from './about/about-header';
import { AboutMain } from './about/about-main';
import { AboutFooter } from './about/about-footer';

import { AceHeader } from './ace/ace-header';
import { AceMain } from './ace/ace-main';
import { AceFooter } from './ace/ace-footer';

import { AlchemistHeader } from './alchemist/alchemist-header';
import { AlchemistMain } from './alchemist/alchemist-main';
import { AlchemistFooter } from './alchemist/alchemist-footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Routes>
          <Route path='/' element={<HomeHeader />} exact />
          <Route path='/about' element={<AboutHeader />} />
          <Route path='/ace' element={<AceHeader />} />
          <Route path='/alchemist' element={<AlchemistHeader />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Routes>
          <Route path='/' element={<HomeMain />} exact />
          <Route path='/about' element={<AboutMain />} />
          <Route path='/ace' element={<AceMain />} />
          <Route path='/alchemist' element={<AlchemistMain />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Routes>
          <Route path='/' element={<HomeFooter />} exact />
          <Route path='/about' element={<AboutFooter />} />
          <Route path='/ace' element={<AceFooter />} />
          <Route path='/alchemist' element={<AlchemistFooter />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}