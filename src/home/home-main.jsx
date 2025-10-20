import React from 'react';

import { NavLink } from 'react-router-dom';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function HomeMain({ userName, authState, onAuthChange }) {
  return (
    <main>
        <div id="login" className="container-fluid text-light">
            {authState !== AuthState.Unknown && <h2>Welcome to the BTD6 Cheat Sheet!</h2>}
            {authState === AuthState.Unauthenticated && (
                <Unauthenticated
                    userName={userName}
                    onLogin={(loginUserName) => {
                        onAuthChange(loginUserName, AuthState.Authenticated);
                    }}
                />
            )}
            {authState === AuthState.Authenticated && (
                <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
            )}
        </div>

        {authState === AuthState.Authenticated && (
            <div id="tower_selection">
                <h2 id="tower_heading">Select a Tower:</h2>
                <nav>
                    <div className="primary tower_container">
                        <h3 className="tower_heading">Primary Monkeys</h3>
                        <menu>
                            <li><NavLink className="a" to="dart">Dart Monkey</NavLink></li>
                            <li><NavLink className="a" to="boomerang">Boomerang Monkey</NavLink></li>
                            <li><NavLink className="a" to="bomb">Bomb Shooter</NavLink></li>
                            <li><NavLink className="a" to="tack">Tack Shooter</NavLink></li>
                            <li><NavLink className="a" to="ice">Ice Monkey</NavLink></li>
                            <li><NavLink className="a" to="glue">Glue Gunner</NavLink></li>
                            <li><NavLink className="a" to="desperado">Desperado</NavLink></li>
                        </menu>
                    </div>
                    <div className="military tower_container">
                        <h3 className="tower_heading">Military Monkeys</h3>
                        <menu>
                            <li><NavLink className="a" to="sniper">Sniper Monkey</NavLink></li>
                            <li><NavLink className="a" to="sub">Monkey Sub</NavLink></li>
                            <li><NavLink className="a" to="buccaneer">Monkey Buccaneer</NavLink></li>
                            <li><NavLink className="a" to="ace">Monkey Ace</NavLink></li>
                            <li><NavLink className="a" to="heli">Heli Pilot</NavLink></li>
                            <li><NavLink className="a" to="mortar">Mortar Monkey</NavLink></li>
                            <li><NavLink className="a" to="dartling">Dartling Gunner</NavLink></li>
                        </menu>
                    </div>
                    <div className="magic tower_container">
                        <h3 className="tower_heading">Magic Monkeys</h3>
                        <menu>
                            <li><NavLink className="a" to="wizard">Wizard Monkey</NavLink></li>
                            <li><NavLink className="a" to="super">Super Monkey</NavLink></li>
                            <li><NavLink className="a" to="ninja">Ninja Monkey</NavLink></li>
                            <li><NavLink className="a" to="alchemist">Alchemist</NavLink></li>
                            <li><NavLink className="a" to="druid">Druid</NavLink></li>
                            <li><NavLink className="a" to="mermonkey">Mermonkey</NavLink></li>
                        </menu>
                    </div>
                    <div className="support tower_container">
                        <h3 className="tower_heading">Support Monkeys</h3>
                        <menu>
                            <li><NavLink className="a" to="banana">Banana Farm</NavLink></li>
                            <li><NavLink className="a" to="spikefactory">Spike Factory</NavLink></li>
                            <li><NavLink className="a" to="village">Monkey Village</NavLink></li>
                            <li><NavLink className="a" to="engineer">Engineer Monkey</NavLink></li>
                            <li><NavLink className="a" to="beasthandler">Beast Handler</NavLink></li>
                        </menu>
                    </div>
                </nav>
            </div>
        )}
    </main>
  );
}