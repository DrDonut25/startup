import React from 'react';

import '../tower.css';

export function BombMain() {
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
                    <td>$375</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Bomb pierce</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Explosion pierce</th>
                    <td>22</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.5s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Medium (40 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Medium</td>
                </tr>
                <tr>
                    <th>Can pop</th>
                    <td>Purple, White, Lead</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Camo, Black</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>Explosive attacks</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Faster Reload"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Missile Launcher"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Extra Range"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Bigger Bombs</th>
                        <th className="top_row">Heavy Bombs</th>
                        <th className="top_row">Really Big Bombs</th>
                        <th className="top_row">Bloon Impact</th>
                        <th className="top_row">Bloon Crush</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$650</td>
                        <td>$1,100</td>
                        <td>$2,800</td>
                        <td>$55,000</td>
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
                        <th className="top_row">Faster Reload</th>
                        <th className="top_row">Missile Launcher</th>
                        <th className="top_row">MOAB Mauler</th>
                        <th className="top_row">MOAB Assassin</th>
                        <th className="top_row">MOAB Eliminator</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$400</td>
                        <td>$1,000</td>
                        <td>$3,450</td>
                        <td>$28,000</td>
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
                        <th className="top_row">Extra Range</th>
                        <th className="top_row">Frag Bombs</th>
                        <th className="top_row">Cluster Bombs</th>
                        <th className="top_row">Recursive Cluster</th>
                        <th className="top_row">Bomb Blitz</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$300</td>
                        <td>$700</td>
                        <td>$2,700</td>
                        <td>$23,000</td>
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