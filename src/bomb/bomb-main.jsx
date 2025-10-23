import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function BombMain() {
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
                    <td>1</td>
                </tr>
                <tr>
                    <th>Bomb pierce</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Explosion pierce</th>
                    <td>22</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.5s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Medium (40 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Medium</td>
                </tr>
                <tr>
                    <th>Can pop</th>
                    <td>Purple, White, Lead</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Camo, Black</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>Explosive attacks</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Faster Reload"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Missile Launcher"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Extra Range"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th className="top_row upgrade_button">Bigger Bombs</th>
                        <th className="top_row upgrade_button">Heavy Bombs</th>
                        <th className="top_row upgrade_button">Really Big Bombs</th>
                        <th className="top_row upgrade_button">Bloon Impact</th>
                        <th className="top_row upgrade_button last_upgrade_button">Bloon Crush</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$650</td>
                        <td>$1,100</td>
                        <td>$2,800</td>
                        <td>$55,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+20% projectile size</li>
                                <li>+50% explosion size</li>
                                <li>Explosion pierce 22 -&gt; 28</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Damage 1 -&gt; 2</li>
                                <li>Explosion pierce 28 -&gt; 38</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Damage 2 -&gt; 4</li>
                                <li>Explosion pierce 38 -&gt; 80</li>
                                <li><i>Knockback mechanic: explosions push back non-MOABs by 20 units</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>Stun mechanic (in addition to knockback): explosions stun non-MOABs for 1.4s </i></li>
                                <li>+3 range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Damage 3 -&gt; 24</li>
                                <li><i>Stun duration 1.4s -&gt; 2s</i></li>
                                <li><i>Can now stun MOABs for 2s and push back MOABs by 5 units</i></li>
                                <li>+Can pop Black bloons</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th className="top_row upgrade_button">Faster Reload</th>
                        <th className="top_row upgrade_button">Missile Launcher</th>
                        <th className="top_row upgrade_button">MOAB Mauler</th>
                        <th className="top_row upgrade_button">MOAB Assassin</th>
                        <th className="top_row upgrade_button last_upgrade_button">MOAB Eliminator</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$400</td>
                        <td>$1,000</td>
                        <td>$3,450</td>
                        <td>$28,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 1.5s -&gt; 1.125s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 1.125s -&gt; 0.825s</li>
                                <li>+4 range</li>
                                <li>+50% projectile speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+15 MOAB damage</li>
                                <li>+5 range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+4 Ceramic damage</li>
                                <li>MOAB bonus damage 15 -&gt; 30</li>
                                <li>+5 range</li>
                                <li><span className="ability">Ability: Deal 750 damage to 1 MOAB on screen (if MOAB destroyed, deal
                                     remaining damage to child Bloons. Follows tower's First/Strong/Last/Close targeting)</span></li>
                                <li><span className="ability">Ability deals 3 splash damage to &lt;= 100 nearby Bloons</span></li>
                                <li><span className="ability">Ability cooldown: 30s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>MOAB bonus damage 30 -&gt; 99</li>
                                <li><span className="ability">Ability target damage 750 -&gt; 4500</span></li>
                                <li><span className="ability">Ability cooldown 30s -&gt; 10s</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th className="top_row upgrade_button">Extra Range</th>
                        <th className="top_row upgrade_button">Frag Bombs</th>
                        <th className="top_row upgrade_button">Cluster Bombs</th>
                        <th className="top_row upgrade_button">Recursive Cluster</th>
                        <th className="top_row upgrade_button last_upgrade_button">Bomb Blitz</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$300</td>
                        <td>$700</td>
                        <td>$2,700</td>
                        <td>$23,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+12 range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+2 range</li>
                                <li><i>+Explosions emit 8 bomb fragments in 360° range (1 damage/pierce each)</i></li>
                                <li><i>Bomb fragments cannot damage original bomb target</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>Bomb fragments replaced with cluster bombs (1 damage, 8 explosion pierce each)</i></li>
                                <li><i>Cluster (secondary) bombs can hit primary bomb target</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Bomb & cluster bomb damage 1 -&gt; 2</li>
                                <li>Primary bomb pierce 22 -&gt; 18</li>
                                <li><i>Recursive cluster mechanic: every other attack, cluster bombs split off into 8 additional
                                     cluster bombs each</i></li>
                                <li><i>Sub-cluster (tertiary) bombs have 2 damage, 24 explosion pierce</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>All bomb damage 2 -&gt; 5</li>
                                <li>Attack cooldown 1.5s -&gt; 0.9s</li>
                                <li><i>Recursive cluster bombs appear every attack rather than every other attack</i></li>
                                <li><span className="ability"><i>Bomb Storm passive ability: when Bloon leaks deal 2,000 damage to it and
                                     all Bloons on screen, then destroy all non-MOABs and blue MOABs on screen (including Camo)</i></span></li>
                                <li><span className="ability"><i>Bomb Storm ability cooldown: 60s</i></span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}