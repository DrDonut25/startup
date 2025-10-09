import React from 'react';

import '../tower.css';

export function TackMain() {
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
                    <td>$260</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.12s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Very Small (23 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Small</td>
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
                    <td>Fires 8 tacks at once over 360-degree area</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Faster Shooting"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Even Faster Shooting"</li>
                <li style={{color: '#f8f9fa'}}>You selected "More Tacks"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Faster Shooting</th>
                        <th className="top_row">Even Faster Shooting</th>
                        <th className="top_row">Hot Shots</th>
                        <th className="top_row">Ring of Fire</th>
                        <th className="top_row">Inferno Ring</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$150</td>
                        <td>$300</td>
                        <td>$650</td>
                        <td>$3,500</td>
                        <td>$45,500</td>
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
                        <th className="top_row">Long Range Tacks</th>
                        <th className="top_row">Super Range Tacks</th>
                        <th className="top_row">Blade Shooter</th>
                        <th className="top_row">Blade Maelstrom</th>
                        <th className="top_row">Super Maelstrom</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$100</td>
                        <td>$225</td>
                        <td>$550</td>
                        <td>$2,700</td>
                        <td>$15,000</td>
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
                        <th className="top_row">More Tacks</th>
                        <th className="top_row">Even More Tacks</th>
                        <th className="top_row">Tack Sprayer</th>
                        <th className="top_row">Overdrive</th>
                        <th className="top_row">The Tack Zone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$110</td>
                        <td>$110</td>
                        <td>$450</td>
                        <td>$3,200</td>
                        <td>$20,000</td>
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