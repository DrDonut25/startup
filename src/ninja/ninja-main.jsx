import React from 'react';

import '../tower.css';

export function NinjaMain() {
  return (
    <main>
        <table className="base_stats">
            <thead>
                <tr>
                   <th colSpan="2" className="base_head">Base Stats</th> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Cost</th>
                    <td>$400</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>0.62s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Medium (40 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Small</td>
                </tr>
                <tr>
                    <th>Can pop</th>
                    <td>Purple, White, Black, Camo</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Lead</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>None</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Ninja Discipline"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Sharp Shurikens"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Seeking Shuriken"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Ninja Discipline</th>
                        <th className="top_row">Sharp Shurikens</th>
                        <th className="top_row">Double Shot</th>
                        <th className="top_row">Bloonjitsu</th>
                        <th className="top_row">Grandmaster Ninja</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$350</td>
                        <td>$350</td>
                        <td>$900</td>
                        <td>$2,750</td>
                        <td>$35,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Middle Upgrade Path</th>
                        <th className="top_row">Distraction</th>
                        <th className="top_row">Counter-Espionage</th>
                        <th className="top_row">Shinobi Tactics</th>
                        <th className="top_row">Bloon Sabotage</th>
                        <th className="top_row">Grand Saboteur</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$400</td>
                        <td>$1,200</td>
                        <td>$5,200</td>
                        <td>$22,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Bottom Upgrade Path</th>
                        <th className="top_row">Seeking Shuriken</th>
                        <th className="top_row">Caltrops</th>
                        <th className="top_row">Flash Bomb</th>
                        <th className="top_row">Sticky Bomb</th>
                        <th className="top_row">Master Bomber</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$300</td>
                        <td>$450</td>
                        <td>$2,250</td>
                        <td>$5,000</td>
                        <td>$40,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}