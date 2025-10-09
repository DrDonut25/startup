import React from 'react';

import '../tower.css';

export function HeliMain() {
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
                    <td>$1,500</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>2x1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>3</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>0.57s</td>
                </tr>
                <tr>
                    <th>Flight Range</th>
                    <td>Infinite</td>
                </tr>
                <tr>
                    <th>Heli Range</th>
                    <td>Medium (42 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Very Large</td>
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
                    <td>Ignores map obstacles; dual dart attack</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Quad Darts"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Pursuit"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Bigger Jets"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>
        
        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Quad Darts</th>
                        <th className="top_row">Pursuit</th>
                        <th className="top_row">Razor Rotors</th>
                        <th className="top_row">Apache Dartship</th>
                        <th className="top_row">Apache Prime</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$800</td>
                        <td>$500</td>
                        <td>$1,850</td>
                        <td>$19,600</td>
                        <td>$45,000</td>
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
                        <th className="top_row">Bigger Jets</th>
                        <th className="top_row">IFR</th>
                        <th className="top_row">Downdraft</th>
                        <th className="top_row">Support Chinook</th>
                        <th className="top_row">Special Poperations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$300</td>
                        <td>$600</td>
                        <td>$3,500</td>
                        <td>$9,500</td>
                        <td>$30,000</td>
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
                        <th className="top_row">Faster Darts</th>
                        <th className="top_row">Faster Firing</th>
                        <th className="top_row">MOAB Shove</th>
                        <th className="top_row">Comanche Defense</th>
                        <th className="top_row">Comanche Commander</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$350</td>
                        <td>$3,400</td>
                        <td>$8,500</td>
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
        </div>
    </main>
  );
}