import React from 'react';

import '../tower.css';

import { NavLink } from 'react-router-dom';

export function MermonkeyFooter() {
  return (
    <footer className="magic tower_heading">
        <div>
            <NavLink className="a" to="/">Back to Home</NavLink>
        </div>
    </footer>
  );
}