import React from 'react';

import '../tower.css';

export function BoomerangMain() {
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
                    <td>$315</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>4</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.2s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Medium (43 units)</td>
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
                    <td>Circling Boomerang Attacks</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Long Range Rangs"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Red Hot Rangs"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Improved Rangs"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Improved Rangs</th>
                        <th className="top_row">Glaives</th>
                        <th className="top_row">Glaive Ricochet</th>
                        <th className="top_row">MOAR Glaives</th>
                        <th className="top_row">Glaive Lord</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$280</td>
                        <td>$600</td>
                        <td>$2,000</td>
                        <td>$32,500</td>
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
                        <th className="top_row">Faster Throwing</th>
                        <th className="top_row">Faster Rangs</th>
                        <th className="top_row">Bionic Boomerang</th>
                        <th className="top_row">Turbo Charge</th>
                        <th className="top_row">Perma Charge</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$175</td>
                        <td>$250</td>
                        <td>$1,250</td>
                        <td>$4,200</td>
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

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Bottom Upgrade Path</th>
                        <th className="top_row">Long Range Rangs</th>
                        <th className="top_row">Red Hot Rangs</th>
                        <th className="top_row">Kylie Boomerang</th>
                        <th className="top_row">MOAB Press</th>
                        <th className="top_row">MOAB Domination</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$100</td>
                        <td>$300</td>
                        <td>$1,300</td>
                        <td>$2,400</td>
                        <td>$50,000</td>
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