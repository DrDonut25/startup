import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function SuperMain() {
    const [topHeaders, setTopHeaders] = React.useState(Array(5).fill(false));
    const [middleHeaders, setMiddleHeaders] = React.useState(Array(5).fill(false));
    const [bottomHeaders, setBottomHeaders] = React.useState(Array(5).fill(false));

    /*maxTier variables track maximum legal upgrade tiers for when other path tables have selected upgrades. -1 means no upgrades can be
    selected from this path*/
    const [maxTopTier, setMaxTopTier] = React.useState(4);
    const [maxMidTier, setMaxMidTier] = React.useState(4);
    const [maxBottomTier, setMaxBottomTier] = React.useState(4);

    let myFunctions = {};

  return (
    <main>
        <Upgrade topHeaders={topHeaders} setTopHeaders={setTopHeaders} middleHeaders={middleHeaders} setMiddleHeaders={setMiddleHeaders}
         bottomHeaders={bottomHeaders} setBottomHeaders={setBottomHeaders} maxTopTier={maxTopTier} setMaxTopTier={setMaxTopTier}
          maxMidTier={maxMidTier} setMaxMidTier={setMaxMidTier} maxBottomTier={maxBottomTier} setMaxBottomTier={setMaxBottomTier} 
          myFunctions={myFunctions}></Upgrade>
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
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Laser Blasts</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Plasma Blasts</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Sun Avatar</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Sun Temple</th>
                        <th id="top4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>True Sun God</th>
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
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>Pierce 1 -&gt; 2</li>
                                <li>+Can pop Frozen, but not Purple</li>
                                <li>Slightly increased projectile size</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>Attack cooldown 0.045s -&gt; 0.03s</li>
                                <li>Slightly increased projectile size</li>
                                <li>+Can pop Lead</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li>Now fires 3 sun projectiles/attack in 30° cone</li>
                                <li>Pierce 2 -&gt; 6</li>
                                <li>Doubled projectile speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li><i>DEV NOTE: I ran out of time before I could implement functionality for the sacrifice mechanic
                                     for this upgrade. It is a very complex gameplay mechanic, one that I could not simulate in time
                                     for this class assignment.</i></li>
                                <li><i>Sacrifices all in-range towers (will count up to $50,001 spent on each tower category to
                                     determine sacrifice buffs)</i></li>
                                <li><i> Note: only 3 tower category sacrifices will count. When 4 tower categories are in range, Sun
                                     Temple will select 3 categories that are worth most total money</i></li>
                                <li>Base stats (no sacrifices): 5 damage, 20 pierce, 0.06s attack cooldown (1 projectile/attack)</li>
                                <li>+15 range, now ignores map obstacles</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li>Accepts another set of sacrifices, giving same sacrifice benefits in addition to Sun Temple
                                     sacrifices</li>
                                <li><i>True Sun God will also accept sacrifices from all 4 tower categories instead of 3</i></li>
                                <li>Base stats (no sacrifices): 15 damage, 20 pierce, 0.06s attack cooldown</li>
                                <li>If Level-20 Adora is in range, she will transform into a more powerful True Adora</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Super Range</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>Epic Range</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>Robo Monkey</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>Tech Terror</th>
                        <th id="middle4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>The Anti-Bloon</th>
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
                        <td className="change_cell">
                            <ul id="middle_change_0" className="change_list">
                                <li>+10 range</li>
                                <li>Pierce 1 -&gt; 2</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li>+12 range</li>
                                <li>Pierce 2 -&gt; 4</li>
                                <li>+75% projectile speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li><i>Now fires independently from two arms/guns at once (can change targeting for either one)</i></li>
                                <li><i>Deals a critical hit after every 15-20 shots—critical hits deal +9 damage</i></li>
                                <li>Pierce 4 -&gt; 5</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li><span className="ability">Ability: deal 2,600 damage to up to 2,000 Bloons within 70-unit radius
                                     (can pop all Bloon types including Camo)</span></li>
                                <li><span className="ability">Every 3rd ability use deals 3,900 damage</span></li>
                                <li><span className="ability">Ability cooldown: 45s</span></li>
                                <li>Pierce 5 -&gt; 7</li>
                                <li>+Can pop Lead, but not Purple</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
                                <li><span className="ability">Ability damage 2,600 -&gt; 10,400</span></li>
                                <li><span className="ability">Ability radius 70 units -&gt; 120 units</span></li>
                                <li><span className="ability">Every 3rd ability use now deals 15,600 damage</span></li>
                                <li><span className="ability">Ability cooldown 45s -&gt; 30s</span></li>
                                <li>Damage 1 -&gt; 5</li>
                                <li>Crit damage 10 -&gt; 50</li>
                                <li>Pierce 7 -&gt; 12</li>
                                <li>+10 range</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th className="top_row upgrade_button">Knockback</th>
                        <th className="top_row upgrade_button">Ultravision</th>
                        <th className="top_row upgrade_button">Dark Knight</th>
                        <th className="top_row upgrade_button">Dark Champion</th>
                        <th className="top_row upgrade_button last_upgrade_button">Legend of the Night</th>
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
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>+Projectiles apply knockback effect for 0.5s</i></li>
                                <li><i>While under knockback effect, MOABs move at 70% speed and Ceramics/Leads move at 40% speed</i></li>
                                <li><i>All other Bloons move backwards at 25% speed while under knockback effect</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+Camo detection</li>
                                <li>+3 range</li>
                                <li>+1 Camo damage</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+2 MOAB damage</li>
                                <li>Pierce 1 -&gt; 4</li>
                                <li>Doubled projectile size</li>
                                <li><i>Ceramic/Lead slow 40% speed -&gt; 10% speed</i></li>
                                <li><span className="ability">Darkshift Ability: move Dark Knight to any valid position within range</span></li>
                                <li><span className="ability">Ability cooldown: 20s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 0.045s -&gt; 0.0225s (alternates fire between both hands)</li>
                                <li>Damage 1 -&gt; 2</li>
                                <li>MOAB bonus damage 2 -&gt; 3</li>
                                <li>Camo bonus damage 1 -&gt; 2</li>
                                <li>+2 Ceramic damage</li>
                                <li>Pierce 4 -&gt; 8</li>
                                <li>+4 range</li>
                                <li><i>+Blades can now bounce Glaive Ricochet-style to up to 6 targets (8 if projectile
                                     lifespan buffed)</i></li>
                                <li>Knockback now stops Lead/Ceramic movement completely</li>
                                <li><span className="ability">Darkshift ability can now move Dark Champion to anywhere on the map</span></li>
                                <li>+Can pop ALL Bloon types</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Damage 2 -&gt; 10</li>
                                <li>MOAB bonus damage 3 -&gt; 25</li>
                                <li>Camo bonus damage 2 -&gt; 4</li>
                                <li>Ceramic bonus damage 2 -&gt; 4</li>
                                <li>Pierce 8 -&gt; 16</li>
                                <li>Blade bounce count 6 -&gt; 21</li>
                                <li><i>+Black Hole passive ability: when Bloon leaks, prevent all loss of additional lives for 8s (does
                                     not stop life loss from leaked BADs)</i></li>
                                <li><i>Black Hole ability cooldown: 180s (can only activate twice per round)</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}