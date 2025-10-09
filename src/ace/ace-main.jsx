import React from 'react';

import '../tower.css';

export function AceMain() {
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
                    <td>$800</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>5</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.68s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Infinite</td>
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
                    <td>Ignores map obstacles</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Rapid Fire"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Lots More Darts"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Sharper Darts"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>
        
        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Rapid Fire</th>
                        <th className="top_row">Lots More Darts</th>
                        <th className="top_row">Fighter Plane</th>
                        <th className="top_row">Operation: Dart Storm</th>
                        <th className="top_row">Sky Shredder</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$450</td>
                        <td>$550</td>
                        <td>$1,000</td>
                        <td>$3,300</td>
                        <td>$42,500</td>
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
                        <th className="top_row">Exploding Pineapple</th>
                        <th className="top_row">Spy Plane</th>
                        <th className="top_row">Bomber Ace</th>
                        <th className="top_row">Ground Zero</th>
                        <th className="top_row">Tsar Bomba</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$350</td>
                        <td>$900</td>
                        <td>$18,000</td>
                        <td>$26,000</td>
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
                        <th className="top_row">Sharper Darts</th>
                        <th className="top_row">Centered Path</th>
                        <th className="top_row">Neva-Miss Targeting</th>
                        <th className="top_row">Spectre</th>
                        <th className="top_row">Flying Fortress</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$500</td>
                        <td>$550</td>
                        <td>$2,550</td>
                        <td>$23,400</td>
                        <td>$85,000</td>
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