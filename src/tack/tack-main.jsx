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
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th className="top_row upgrade_button">Faster Shooting</th>
                        <th className="top_row upgrade_button">Even Faster Shooting</th>
                        <th className="top_row upgrade_button">Hot Shots</th>
                        <th className="top_row upgrade_button">Ring of Fire</th>
                        <th className="top_row upgrade_button last_upgrade_button">Inferno Ring</th>
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
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 1.12s -&gt; 0.84s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 0.84s -&gt; 0.63s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Damage 1 -&gt; 2</li>
                                <li>+Can pop Lead</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 0.63s -&gt; 0.315s</li>
                                <li>Damage 2 -&gt; 5</li>
                                <li>Pierce 1 -&gt; 30</li>
                                <li><i>Tacks replaced with single-projectile area-of-effect damage
                                     (similar to Sub's Bloontonium Reactor)</i></li>
                                <li>-Can no longer hit Purple</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 0.315s -&gt; 0.1s</li>
                                <li>Damage 5 -&gt; 8</li>
                                <li>+4 MOAB damage</li>
                                <li>Pierce 30 -&gt; 45</li>
                                <li>+11.5 range</li>
                                <li><i>+Meteor attack: infinite range, deals 1&rpar; 700 damage to single target every 4s that 2&rpar;
                                     creates explosion (50 damage, 10 pierce) that 3&rpar; ignites Bloons (50 damage/s for 4.1s)</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th className="top_row upgrade_button">Long Range Tacks</th>
                        <th className="top_row upgrade_button">Super Range Tacks</th>
                        <th className="top_row upgrade_button">Blade Shooter</th>
                        <th className="top_row upgrade_button">Blade Maelstrom</th>
                        <th className="top_row upgrade_button last_upgrade_button">Super Maelstrom</th>
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
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+4 range</li>
                                <li>+Higher projectile lifespan/speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+4 range</li>
                                <li>+Longer projectile lifespan</li>
                                <li>Pierce 1 -&gt; 4</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+15 range</li>
                                <li>Pierce 4 -&gt; 8</li>
                                <li>+Can pop Frozen</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Damage 1 -&gt; 2</li>
                                <li><span className="ability">Ability: repeatedly/rapidly fire 2 blades in opposite directions for 3s,
                                     spinning clockwise (2 damage, 100 pierce per blade)</span></li>
                                <li><span className="ability">Ability cooldown: 20s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Damage 2 -&gt; 5</li>
                                <li>+Blades (not ones from ability) can pop Lead</li>
                                <li>+5 Ceramic damage</li>
                                <li><span className="ability">Ability now fires 4 blades at a time and for 9s
                                     (pierce increased to 300)</span></li>
                                <li><span className="ability">+8 Ceramic damage (ability)</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th className="top_row upgrade_button">More Tacks</th>
                        <th className="top_row upgrade_button">Even More Tacks</th>
                        <th className="top_row upgrade_button">Tack Sprayer</th>
                        <th className="top_row upgrade_button">Overdrive</th>
                        <th className="top_row upgrade_button last_upgrade_button">The Tack Zone</th>
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
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Number of tacks 8 -&gt; 10</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Number of tacks 10 -&gt; 12</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Number of tacks 12 -&gt; 16</li>
                                <li>Pierce 1 -&gt; 2</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 1.12s -&gt; 0.3733s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Number of tacks 16 -&gt; 32</li>
                                <li>Attack cooldown 0.3733s -&gt; 0.224s</li>
                                <li>+7 range</li>
                                <li>+1 MOAB damage</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}