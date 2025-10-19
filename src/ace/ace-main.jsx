import React from 'react';

import '../tower.css';

export function AceMain() {
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
                    <td>$800</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>5</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.68s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Infinite</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Very Large</td>
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
                    <td>Ignores map obstacles</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Rapid Fire"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Lots More Darts"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Sharper Darts"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>
        
        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th className="top_row upgrade_button">Rapid Fire</th>
                        <th className="top_row upgrade_button">Lots More Darts</th>
                        <th className="top_row upgrade_button">Fighter Plane</th>
                        <th className="top_row upgrade_button">Operation: Dart Storm</th>
                        <th className="top_row upgrade_button last_upgrade_button">Sky Shredder</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$450</td>
                        <td>$550</td>
                        <td>$1,000</td>
                        <td>$3,300</td>
                        <td>$42,500</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 1.68s -&gt; 1.26s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Darts/volley 8 -&gt; 12</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+20% flight speed</li>
                                <li><i>MOAB missile secondary attack: Fires 2 missiles/attack that home in on
                                     MOABs—18 damage, 4 pierce, attack cooldown 3s (cannot pop Black)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Dart volley attack cooldown 1.26s -&gt; 0.63s</li>
                                <li>Darts/volley 12 -&gt; 16</li>
                                <li><i>MOAB missile attack cooldown 3s -&gt; 1.5s</i></li>
                                <li><i>MOAB missile damage 18 -&gt; 24</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Dart volley attack cooldown 0.63s -&gt; 0.315s</li>
                                <li>Dart damage 1 -&gt; 3</li>
                                <li>+2 Ceramic damage (dart)</li>
                                <li>Dart pierce 5 -&gt; 8</li>
                                <li>Darts/volley 16 -&gt; 32</li>
                                <li><i>MOAB missile damage 24 -&gt; 150</i></li>
                                <li><i>+2 MOAB Missile Ceramic damage (though since missiles can target only MOABs,
                                     this only affects Dreadbloon's Ceramic armor shell)</i></li>
                                <li><i>MOAB missile pierce 4 -&gt; 5</i></li>
                                <li>+Darts can pop Lead</li>
                                <li><i>+MOAB missiles can pop Black</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th className="top_row upgrade_button">Exploding Pineapple</th>
                        <th className="top_row upgrade_button">Spy Plane</th>
                        <th className="top_row upgrade_button">Bomber Ace</th>
                        <th className="top_row upgrade_button">Ground Zero</th>
                        <th className="top_row upgrade_button last_upgrade_button">Tsar Bomba</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$350</td>
                        <td>$900</td>
                        <td>$18,000</td>
                        <td>$26,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>+Exploding pineapple attack: drops 1 pineapple at Monkey Ace's location every 1.6s,
                                     exploding after 2s—1 damage, 20 pierce</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+Camo detection</li>
                                <li>+2x Camo damage (all attacks except Fighter Plane missiles)</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Exploding pineapples replaced w/ bombing run attack:
                                     drop 4 bombs in rapid succession whenever Monkey Ace is over track—3 damage,
                                      20 pierce, 1.6s min attack cooldown, 2s bomb fuse duration (cannot pop Black)</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Bomb damage 3 -&gt; 15</li>
                                <li>Bomb pierce 20 -&gt; 40</li>
                                <li><span className="ability">Ability: deal 700 damage to up to 2,000 Bloons closest to the landing pad</span></li>
                                <li><span className="ability">Ability cooldown: 35s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Bomb damage 15 -&gt; 20</li>
                                <li>+10 Ceramic damage (bombing run)</li>
                                <li><span className="ability">Ability damage 700 -&gt; 3,000</span></li>
                                <li><span className="ability">Ability pierce 2,000 -&gt; 5,000</span></li>
                                <li><span className="ability">+Bloons damaged but not popped by ability are stunned for 8s</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th className="top_row upgrade_button">Sharper Darts</th>
                        <th className="top_row upgrade_button">Centered Path</th>
                        <th className="top_row upgrade_button">Neva-Miss Targeting</th>
                        <th className="top_row upgrade_button">Spectre</th>
                        <th className="top_row last_upgrade_button">Flying Fortress</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$500</td>
                        <td>$550</td>
                        <td>$2,550</td>
                        <td>$23,400</td>
                        <td>$85,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Pierce 5 -&gt; 8</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>+Centered Path targeting option: Monkey Ace flies in circle around user-selected point
                                     (defaults to center of screen)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>+Darts move faster and now home in on targets</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>+Secondary attack: alternates firing homing darts/bombs directly at Bloons w/ First
                                     Targeting—0.06s attack cooldown</i></li>
                                <li><i>Spectre dart attacks (not radial Neva-Miss darts): 8 damage, 4 pierce (cannot pop Lead)</i></li>
                                <li><i>Spectre bomb attacks: 3 damage, +5 Ceramic damage, 20 pierce (cannot pop Black)</i></li>
                                <li>Radial Neva-Miss dart damage 1 -&gt; 3</li>
                                <li>+Significantly improved seeking for radial Neva-Miss dart attacks</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>Spectre attack cooldown 0.06s -&gt; 0.04s</i></li>
                                <li><i>+Spectre attack now fires 3 projectiles/attack instead of 1:
                                     1 projectile has First Targeting, 1 has Last Targeting, 1 has Close Targeting
                                      (relative to Ace, not landing pad)</i></li>
                                <li><i>+14 MOAB damage (Spectre dart attack)</i></li>
                                <li><i>Spectre dart pierce 10 -&gt; 15</i></li>
                                <li><i>Spectre bomb damage 3 -&gt; 5</i></li>
                                <li><i>Spectre bomb Ceramic bonus damage 3 -&gt; 4</i></li>
                                <li><i>Spectre bomb pierce 20 -&gt; 30</i></li>
                                <li>Radial Neva-Miss dart damage 3 -&gt; 6</li>
                                <li>+Can pop all Bloon types (except Camo)</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}