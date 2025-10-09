import React from 'react';

import '../tower.css';

import { NavLink } from 'react-router-dom';

export function BombFooter() {
  return (
    <footer className="primary tower_heading">
        <div>
            <NavLink className="a" to="/">Back to Home</NavLink>
        </div>
    </footer>
  );
}