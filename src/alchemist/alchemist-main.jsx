import React from 'react';

import '../tower.css';

export function AlchemistMain() {
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
                    <td>$550</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>15</td>
                </tr>
                <tr>
                    <th>Damage over time</th>
                    <td>1 damage / 2s</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>2s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Medium (45 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Small</td>
                </tr>
                <tr>
                    <th>Can pop</th>
                    <td>Purple, White, Black, Lead</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Camo</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>Ignores map obstacles, splash attacks</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Larger Potions"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Acidic Mixture Dip"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Faster Throwing"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Larger Potions</th>
                        <th className="top_row">Acidic Mixture Dip</th>
                        <th className="top_row">Berserker Brew</th>
                        <th className="top_row">Stronger Stimulant</th>
                        <th className="top_row">Permanent Brew</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$350</td>
                        <td>$1,400</td>
                        <td>$2,850</td>
                        <td>$48,000</td>
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
                        <th className="top_row">Stronger Acid</th>
                        <th className="top_row">Perishing Potions</th>
                        <th className="top_row">Unstable Concoction</th>
                        <th className="top_row">Transforming Tonic</th>
                        <th className="top_row">Total Transformation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$475</td>
                        <td>$2,800</td>
                        <td>$4,200</td>
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
                        <th className="top_row">Bottom Upgrade Path</th>
                        <th className="top_row">Faster Throwing</th>
                        <th className="top_row">Acid Pool</th>
                        <th className="top_row">Lead to Gold</th>
                        <th className="top_row">Rubber to Gold</th>
                        <th className="top_row">Bloon Master Alchemist</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$650</td>
                        <td>$450</td>
                        <td>$1,000</td>
                        <td>$2,750</td>
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