import React from 'react';

import { NavLink } from 'react-router-dom';

export function HomeFooter() {
  return (
    <footer className="container-fluid">
        <NavLink className="a" to="about">About BTD6</NavLink>
        <div>
            <a href="https://github.com/DrDonut25/startup">Startup GitHub Link (created by Parker Remund)</a>
        </div>
    </footer>
  );
}