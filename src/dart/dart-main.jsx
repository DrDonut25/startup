import React from 'react';

import '../tower.css';

export function DartMain() {
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
                    <td>$200</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>0.95s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Small (32 units)</td>
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
                    <td>None</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Quick Shots"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Very Quick Shots"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Long Range Darts"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Sharp Shots</th>
                        <th className="top_row">Razor Sharp Shots</th>
                        <th className="top_row">Spike-o-pult</th>
                        <th className="top_row">Juggernaut</th>
                        <th className="top_row">Ultra-Juggernaut</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$140</td>
                        <td>$200</td>
                        <td>$320</td>
                        <td>$1,800</td>
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
                        <th className="top_row">Middle Upgrade Path</th>
                        <th className="top_row">Quick Shots</th>
                        <th className="top_row">Very Quick Shots</th>
                        <th className="top_row">Triple Shot</th>
                        <th className="top_row">Super Monkey Fan Club</th>
                        <th className="top_row">Plasma Monkey Fan Club</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$100</td>
                        <td>$190</td>
                        <td>$450</td>
                        <td>$7,200</td>
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
                        <th className="top_row">Long Range Darts</th>
                        <th className="top_row">Enhanced Eyesight</th>
                        <th className="top_row">Crossbow</th>
                        <th className="top_row">Sharpshooter</th>
                        <th className="top_row">Crossbow Master</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$90</td>
                        <td>$200</td>
                        <td>$575</td>
                        <td>$2,050</td>
                        <td>$21,500</td>
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