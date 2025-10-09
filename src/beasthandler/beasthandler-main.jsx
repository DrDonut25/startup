import React from 'react';

import '../tower.css';

export function BeastHandlerMain() {
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
                    <td>$250</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>1 (staff), 4 (splash)</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.4s</td>
                </tr>
                <tr>
                    <th>Range (staff)</th>
                    <td>Very Small (20 units)</td>
                </tr>
                <tr>
                    <th>Range (beast placement)</th>
                    <td>Large (60 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Medium</td>
                </tr>
                <tr>
                    <th>Can pop</th>
                    <td>White, Black, Frozen</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Camo, Lead, Purple</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>Small splash attack (staff)</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Piranha"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Barracuda"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Microraptor"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Piranha</th>
                        <th className="top_row">Barracuda</th>
                        <th className="top_row">Great White Shark</th>
                        <th className="top_row">Orca</th>
                        <th className="top_row">Megalodon</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$160</td>
                        <td>$810</td>
                        <td>$2,010</td>
                        <td>$12,500</td>
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
                        <th className="top_row">Microraptor</th>
                        <th className="top_row">Adasaurus</th>
                        <th className="top_row">Velociraptor</th>
                        <th className="top_row">Tyrannosaurus Rex</th>
                        <th className="top_row">Giganotosaurus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$175</td>
                        <td>$830</td>
                        <td>$2,065</td>
                        <td>$9,500</td>
                        <td>$60,000</td>
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
                        <th className="top_row">Gyrfalcon</th>
                        <th className="top_row">Horned Owl</th>
                        <th className="top_row">Golden Eagle</th>
                        <th className="top_row">Giant Condor</th>
                        <th className="top_row">Pouákai</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$190</td>
                        <td>$860</td>
                        <td>$2,120</td>
                        <td>$9,000</td>
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