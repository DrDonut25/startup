import React from 'react';

import '../tower.css';

export function SuperMain() {
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
                    <td>$2,500</td>
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
                    <td>0.045s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Large (50 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Large</td>
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
                    <td>None</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Laser Blasts"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Plasma Blasts"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Knockback"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Laser Blasts</th>
                        <th className="top_row">Plasma Blasts</th>
                        <th className="top_row">Sun Avatar</th>
                        <th className="top_row">Sun Temple</th>
                        <th className="top_row">True Sun God</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$2,000</td>
                        <td>$2,500</td>
                        <td>$20,000</td>
                        <td>$100,000</td>
                        <td>$500,000</td>
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
                        <th className="top_row">Super Range</th>
                        <th className="top_row">Epic Range</th>
                        <th className="top_row">Robo Monkey</th>
                        <th className="top_row">Tech Terror</th>
                        <th className="top_row">The Anti-Bloon</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$1,500</td>
                        <td>$1,900</td>
                        <td>$7,500</td>
                        <td>$25,000</td>
                        <td>$70,000</td>
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
                        <th className="top_row">Knockback</th>
                        <th className="top_row">Ultravision</th>
                        <th className="top_row">Dark Knight</th>
                        <th className="top_row">Dark Champion</th>
                        <th className="top_row">Legend of the Night</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$3,000</td>
                        <td>$1,200</td>
                        <td>$5,600</td>
                        <td>$55,555</td>
                        <td>$165,650</td>
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