import React from 'react';

import { NavLink } from 'react-router-dom';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';
import { Event } from '../notifier.js';

export function HomeMain({ userName, authState, onAuthChange, notifier }) {
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

        {authState === AuthState.Unauthenticated && (
            <div id="tower_selection"></div>
        )}

        {authState === AuthState.Authenticated && (
            <div id="tower_selection">
                <h2 id="tower_heading">Select a Tower:</h2>
                <nav>
                    <div className="primary tower_container">
                        <h3 className="tower_heading">Primary Monkeys</h3>
                        <menu>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Dart Monkey'})} to="dart">Dart Monkey</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Boomerang Monkey'})} to="boomerang">Boomerang Monkey</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Bomb Shooter'})} to="bomb">Bomb Shooter</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Tack Shooter'})} to="tack">Tack Shooter</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Ice Monkey'})} to="ice">Ice Monkey</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Glue Gunner'})} to="glue">Glue Gunner</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Desperado'})} to="desperado">Desperado</NavLink></li>
                        </menu>
                    </div>
                    <div className="military tower_container">
                        <h3 className="tower_heading">Military Monkeys</h3>
                        <menu>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Sniper Monkey'})} to="sniper">Sniper Monkey</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Monkey Sub'})} to="sub">Monkey Sub</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Monkey Buccaneer'})} to="buccaneer">Monkey Buccaneer</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Monkey Ace'})} to="ace">Monkey Ace</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Heli Pilot'})} to="heli">Heli Pilot</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Mortar Monkey'})} to="mortar">Mortar Monkey</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Dartling Gunner'})} to="dartling">Dartling Gunner</NavLink></li>
                        </menu>
                    </div>
                    <div className="magic tower_container">
                        <h3 className="tower_heading">Magic Monkeys</h3>
                        <menu>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Wizard Monkey'})} to="wizard">Wizard Monkey</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Super Monkey'})} to="super">Super Monkey</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Ninja Monkey'})} to="ninja">Ninja Monkey</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Alchemist'})} to="alchemist">Alchemist</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Druid'})} to="druid">Druid</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Mermonkey'})} to="mermonkey">Mermonkey</NavLink></li>
                        </menu>
                    </div>
                    <div className="support tower_container">
                        <h3 className="tower_heading">Support Monkeys</h3>
                        <menu>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Banana Farm'})} to="banana">Banana Farm</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Spike Factory'})} to="spikefactory">Spike Factory</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Monkey Village'})} to="village">Monkey Village</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Engineer Monkey'})} to="engineer">Engineer Monkey</NavLink></li>
                            <li><NavLink className="a" onClick={() => notifier.broadcastEvent(userName, Event.Tower, {tower: 'Beast Handler'})} to="beasthandler">Beast Handler</NavLink></li>
                        </menu>
                    </div>
                </nav>
            </div>
        )}
    </main>
  );
}