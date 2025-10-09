import React from 'react';

import '../tower.css';

export function MermonkeyMain() {
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
                    <td>2</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>2 (trident), 3 (splash)</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.2s</td>
                </tr>
                <tr>
                    <th>Range (land)</th>
                    <td>Very Small (28 units)</td>
                </tr>
                <tr>
                    <th>Range (water)</th>
                    <td>Small (35 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Slightly Large</td>
                </tr>
                <tr>
                    <th>Can pop</th>
                    <td>Purple, White, Black, Frozen</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Camo, Lead</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>Amphibious, small splash attack</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Echosense Precision"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Echosense Network"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Trident Efficiency"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Trident Efficiency</th>
                        <th className="top_row">Trident Swiftness</th>
                        <th className="top_row">Abyss Dweller</th>
                        <th className="top_row">Abyssal Warrior</th>
                        <th className="top_row">Lord of the Abyss</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$150</td>
                        <td>$250</td>
                        <td>$1,600</td>
                        <td>$4,200</td>
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

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Middle Upgrade Path</th>
                        <th className="top_row">Sharper Prongs</th>
                        <th className="top_row">Tidal Chill</th>
                        <th className="top_row">Riptide Champion</th>
                        <th className="top_row">Arctic Knight</th>
                        <th className="top_row">Popseidon</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$300</td>
                        <td>$2,300</td>
                        <td>$8,000</td>
                        <td>$52,000</td>
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
                        <th className="top_row">Echosense Precision</th>
                        <th className="top_row">Echosense Network</th>
                        <th className="top_row">Alluring Melody</th>
                        <th className="top_row">Symphonic Resonance</th>
                        <th className="top_row">The Final Harmonic</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$300</td>
                        <td>$380</td>
                        <td>$2,000</td>
                        <td>$7,600</td>
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