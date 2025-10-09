import React from 'react';

import '../tower.css';

export function SubMain() {
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
                    <td>$325</td>
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
                    <td>0.75s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Medium (42 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Medium</td>
                </tr>
                <tr>
                    <th>Can pop</th>
                    <td>Purple, White, Black</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Camo, Lead</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>Homing dart projectiles</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Longer Range"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Advanced Intel"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Twin Guns"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Longer Range</th>
                        <th className="top_row">Advanced Intel</th>
                        <th className="top_row">Submerge and Support</th>
                        <th className="top_row">Bloontonium Reactor</th>
                        <th className="top_row">Energizer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$130</td>
                        <td>$500</td>
                        <td>$700</td>
                        <td>$2,300</td>
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
                        <th className="top_row">Middle Upgrade Path</th>
                        <th className="top_row">Barbed Darts</th>
                        <th className="top_row">Heat-tipped Darts</th>
                        <th className="top_row">Ballistic Missile</th>
                        <th className="top_row">First Strike Capability</th>
                        <th className="top_row">Pre-emptive Strike</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$450</td>
                        <td>$300</td>
                        <td>$1,350</td>
                        <td>$13,000</td>
                        <td>$29,000</td>
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
                        <th className="top_row">Twin Guns</th>
                        <th className="top_row">Airburst Darts</th>
                        <th className="top_row">Triple Guns</th>
                        <th className="top_row">Armor Piercing Darts</th>
                        <th className="top_row">Sub Commander</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$450</td>
                        <td>$1,000</td>
                        <td>$1,100</td>
                        <td>$2,500</td>
                        <td>$25,000</td>
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