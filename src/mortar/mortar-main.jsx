import React from 'react';

import '../tower.css';

export function MortarMain() {
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
                    <td>$600</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>25</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>2s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Infinite</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Large</td>
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
                    <td>Can target selected point without regard to map obstacles</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Faster Reload"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Rapid Reload"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Increased Accuracy"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Bigger Blast</th>
                        <th className="top_row">Bloon Buster</th>
                        <th className="top_row">Shell Shock</th>
                        <th className="top_row">The Big One</th>
                        <th className="top_row">The Biggest One</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$500</td>
                        <td>$500</td>
                        <td>$825</td>
                        <td>$7,200</td>
                        <td>$36,000</td>
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
                        <th className="top_row">Rapid Reload</th>
                        <th className="top_row">Heavy Shells</th>
                        <th className="top_row">Artillery Battery</th>
                        <th className="top_row">Pop and Awe</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$300</td>
                        <td>$500</td>
                        <td>$900</td>
                        <td>$6,500</td>
                        <td>$38,000</td>
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
                        <th className="top_row">Increased Accuracy</th>
                        <th className="top_row">Burny Stuff</th>
                        <th className="top_row">Signal Flare</th>
                        <th className="top_row">Shattering Shells</th>
                        <th className="top_row">Blooncineration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$500</td>
                        <td>$1,000</td>
                        <td>$9,500</td>
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