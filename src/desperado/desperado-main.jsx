import React from 'react';

import '../tower.css';

export function DesperadoMain() {
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
                    <td>$300</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>2x1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.2s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Large (60 units)</td>
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
                    <td>2-shot burst attacks</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Eagle Eye"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Wanderer"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Bullseye"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Quickdraw</th>
                        <th className="top_row">Standoff</th>
                        <th className="top_row">Big Iron</th>
                        <th className="top_row">Twin Sixes</th>
                        <th className="top_row">The Blazing Sun</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$200</td>
                        <td>$1,200</td>
                        <td>$4,800</td>
                        <td>$17,500</td>
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
                        <th className="top_row">Eagle Eye</th>
                        <th className="top_row">Bullseye</th>
                        <th className="top_row">Deadeye</th>
                        <th className="top_row">Bounty Hunter</th>
                        <th className="top_row">Golden Justice</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$150</td>
                        <td>$350</td>
                        <td>$3,000</td>
                        <td>$6,500</td>
                        <td>$42,000</td>
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
                        <th className="top_row">Wanderer</th>
                        <th className="top_row">Nomad</th>
                        <th className="top_row">Enforcer</th>
                        <th className="top_row">Avenger</th>
                        <th className="top_row">The Desert Phantom</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$220</td>
                        <td>$280</td>
                        <td>$2,100</td>
                        <td>$9,500</td>
                        <td>$31,000</td>
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