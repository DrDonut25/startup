import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function DartlingMain() {
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
                    <td>$850</td>
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
                    <td>0.2s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Infinite</td>
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
                    <td>Follows user's cursor or fixes fire on selected point</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Focused Firing"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Laser Shock"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Advanced Targeting"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th className="top_row upgrade_button">Focused Firing</th>
                        <th className="top_row upgrade_button">Laser Shock</th>
                        <th className="top_row upgrade_button">Laser Cannon</th>
                        <th className="top_row upgrade_button">Plasma Accelerator</th>
                        <th className="top_row upgrade_button last_upgrade_button">Ray of Doom</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$300</td>
                        <td>$900</td>
                        <td>$3,000</td>
                        <td>$11,750</td>
                        <td>$75,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Projectile spread 23° -&gt; 9.2°</li>
                                <li>Increased projectile lifespan</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>+Hit Bloons become shocked for 1s: takes +1 from all other 2xx Dartling Gunners—shocked Bloons
                                     take 1 damage/s for 1s</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Damage 1 -&gt; 2</li>
                                <li>Pierce 1 -&gt; 6</li>
                                <li>+~43% projectile speed</li>
                                <li>+2 MOAB damage</li>
                                <li><i>Shock duration 1s -&gt; 2s</i></li>
                                <li>Shots can pop Frozen, but not Lead/Purple</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Lasers replaced w/ continuous plasma beam that extends to selected target point: beam deals
                                     frequent damage, but tip of beam even more powerful </li>
                                <li>Beam stats: 1 damage, 50 pierce, 0.2s attack cooldown</li>
                                <li>Beam Tip stats: 2 damage, +10 MOAB damage, 50 pierce, 0.2s attack cooldown</li>
                                <li>+Can pop Lead</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Laser beam is larger and extends infinitely rather than to selected target point</li>
                                <li>Damage 1 -&gt; 30</li>
                                <li>Pierce 50 -&gt; 999</li>
                                <li>Shocked Bloon bonus damage 1 -&gt; 20</li>
                                <li>Shock now deals 20 damage/s rather than 1 damage/s</li>
                                <li>First hit from laser deals +110 damage</li>
                                <li>+Can pop Purple (now pops all Bloon types except Camo)</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th className="top_row upgrade_button">Advanced Targeting</th>
                        <th className="top_row upgrade_button">Faster Barrel Spin</th>
                        <th className="top_row upgrade_button">Hydra Rocket Pods</th>
                        <th className="top_row upgrade_button">Rocket Storm</th>
                        <th className="top_row upgrade_button last_upgrade_button">M.A.D.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$950</td>
                        <td>$4,500</td>
                        <td>$5,850</td>
                        <td>$65,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+Camo detection</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 0.2s -&gt; 0.132s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Now fires missiles that explode up to 3 times: 2 explosion damage, 6 pierce, 8-unit blast radius</li>
                                <li>(Explosion count can be increased by external pierce buffs)</li>
                                <li>+Can pop ALL Bloon types</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Explosion count 3 -&gt; 4</li>
                                <li>Explosion pierce 6 -&gt; 8</li>
                                <li><span className="ability">Ability: repeatedly fire waves of 10 missiles in 90° cone every 0.5s for 7.5s:
                                     5 damage, +1 Ceramic damage, 8 explosion pierce, 4 explosions per missile</span></li>
                                <li><span className="ability">Ability cooldown: 40s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Main attacks now fire mega missiles that fire 3x more slowly, but deal much more damage to MOABs
                                     (see below)</li>
                                <li>Explosion count 4 -&gt; 10</li>
                                <li>Explosion damage 2 -&gt; 3</li>
                                <li>MOABs hit directly by mega missiles (not their explosions) take +450 damage</li>
                                <li><span className="ability">Ability missile explosion count 4 -&gt; 9</span></li>
                                <li><span className="ability">Ability missile bonus Ceramic damage 1 -&gt; 5</span></li>
                                <li><span className="ability">+250 MOAB damage (ability missiles)</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th className="top_row upgrade_button">Faster Swivel</th>
                        <th className="top_row upgrade_button">Powerful Darts</th>
                        <th className="top_row upgrade_button">Buckshot</th>
                        <th className="top_row upgrade_button">Bloon Area Denial System</th>
                        <th className="top_row upgrade_button last_upgrade_button">Bloon Exclusion Zone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$150</td>
                        <td>$1,200</td>
                        <td>$3,400</td>
                        <td>$12,000</td>
                        <td>$58,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Swivel speed 180°/s -&gt; 440°/s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Pierce 1 -&gt; 3</li>
                                <li>+~34% dart speed</li>
                                <li>+Can pop Frozen</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Now fires 6 buckshots/attack—buckshots are faster and knock back non-MOAB Bloons</li>
                                <li>Buckshot stats: 4 damage, 4 pierce, 46° spread, 1.5s attack cooldown</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 1.5s -&gt; 0.375s</li>
                                <li><i>+Target Independent targeting option: when selected, 4 barrels will target First/Last/Close/Strong
                                     Bloons all at once (1 target priority per barrel)</i></li>
                                <li><i>Target Independent range: 130 units</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 0.375s -&gt; 0.25s</li>
                                <li>Pierce 4 -&gt; 6</li>
                                <li>Damage 4 -&gt; 8</li>
                                <li>Buckshot count per shot 6 -&gt; 12</li>
                                <li><i>Target Independent now has 6 barrels: 2 will target First, 2 will target Strong, 1 will target
                                     Last, 1 will target Close</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}