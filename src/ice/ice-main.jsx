import React from 'react';

import '../tower.css';

export function IceMain() {
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
                    <td>$400</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>40</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>2.4s</td>
                </tr>
                <tr>
                    <th>Freeze duration</th>
                    <td>1.5s</td>
                </tr>
                <tr>
                    <th>Bloon layers freezed/attack</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Very Small (20 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Small</td>
                </tr>
                <tr>
                    <th>Can pop</th>
                    <td>Purple, Black</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Camo, Lead, White, MOAB</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>Freeze attacks, amphibious, -50% Ceramic Bloon freeze duration</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Permafrost"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Cold Snap"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Larger Radius"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Permafrost</th>
                        <th className="top_row">Cold Snap</th>
                        <th className="top_row">Ice Shards</th>
                        <th className="top_row">Embrittlement</th>
                        <th className="top_row">Super Brittle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$150</td>
                        <td>$350</td>
                        <td>$1,500</td>
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
                        <th className="top_row">Enhanced Freeze</th>
                        <th className="top_row">Deep Freeze</th>
                        <th className="top_row">Arctic Wind</th>
                        <th className="top_row">Snowstorm</th>
                        <th className="top_row">Absolute Zero</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$300</td>
                        <td>$2,750</td>
                        <td>$4,000</td>
                        <td>$16,000</td>
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
                        <th className="top_row">Larger Radius</th>
                        <th className="top_row">Re-Freeze</th>
                        <th className="top_row">Cryo Cannon</th>
                        <th className="top_row">Icicles</th>
                        <th className="top_row">Icicle Impale</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$150</td>
                        <td>$200</td>
                        <td>$1,900</td>
                        <td>$2,750</td>
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
        </div>
    </main>
  );
}