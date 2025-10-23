import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function HeliMain() {
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
                    <td>$1,500</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>2x1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>3</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>0.57s</td>
                </tr>
                <tr>
                    <th>Flight Range</th>
                    <td>Infinite</td>
                </tr>
                <tr>
                    <th>Heli Range</th>
                    <td>Medium (42 units)</td>
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
                    <td>Ignores map obstacles; dual dart attack</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Quad Darts"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Pursuit"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Bigger Jets"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>
        
        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Quad Darts</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Pursuit</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Razor Rotors</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Apache Dartship</th>
                        <th id="top4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Apache Prime</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$800</td>
                        <td>$500</td>
                        <td>$1,850</td>
                        <td>$19,600</td>
                        <td>$45,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>Darts/shot 2 -&gt; 4</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li><i>+Pursuit Targeting: Heli Pilot will target/fly toward farthest Bloon along track (equivalent
                                     to First Targeting)</i></li>
                                <li><i>If Heli set to Patrol Points Targeting, Heli will pursue Bloons that pass in between the two
                                     selected points</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li><i>+Razor rotors attack: up to 10 Bloons within 35 units of Heli take 2 damage every 0.45s
                                     (can pop Lead)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li><i>+Machine gun attack: rapidly fires darts: 1 damage, 7 pierce, 0.05s attack cooldown per dart
                                     (cannot pop Lead)</i></li>
                                <li><i>+Missile array attack: fires 4 homing missiles per shot from up to twice Heli's range: 2 damage,
                                     40 pierce, 1s attack cooldown per missile (cannot pop Black)</i></li>
                                <li>Quad darts attack cooldown 0.57s -&gt; 0.4275s</li>
                                <li>Razor rotors damage 2 -&gt; 4; pierce 10 -&gt; 20</li>
                                <li>+25% flight speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li>Machine gun damage 1 -&gt; 5; pierce 7 -&gt; 11; can now pop all Bloon types except Purple</li>
                                <li>+15 MOAB damage (missile array)</li>
                                <li>Quad darts replaced with quad lasers (can pop Frozen but not Lead/Purple);
                                     damage 1 -&gt; 6; 3 -&gt; 23</li>
                                <li>Razor rotors damage 4 -&gt; 8; pierce 20 -&gt; 40</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Bigger Jets</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>IFR</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>Downdraft</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>Support Chinook</th>
                        <th id="middle4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>Special Poperations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$300</td>
                        <td>$600</td>
                        <td>$3,500</td>
                        <td>$9,500</td>
                        <td>$30,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="middle_change_0" className="change_list">
                                <li>+75% movement speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li>+Camo detection</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li><i>+Downdraft attack: blows back up to 2 Bloons (or 1 Ceramic) every 0.2s</i></li>
                                <li><i>Blown back Bloons lose glued/frozen properties</i></li>
                                <li>Downdraft blowback distance: 32-150 units</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li>Damage 1 -&gt; 2</li>
                                <li>2x dart size</li>
                                <li><i>Downdraft attack cooldown 0.2s -&gt; 0.15s</i></li>
                                <li><i>Downdraft pierce 2 -&gt; 4</i></li>
                                <li><i>Downdraft minimum blowback distance 32 units -&gt; 64 units</i></li>
                                <li>+~14% flight speed</li>
                                <li><span className="ability">Reposition Ability: move a non-heavy tower to a new position
                                     (cannot move e.g. banana farms, villages, sun temples)</span></li>
                                <li><span className="ability">Reposition ability cooldown: 45s</span></li>
                                <li><span className="ability">Supply Crate Ability: drop 2 crates: one gives +10 lives and the other
                                     gives $1,550</span></li>
                                <li><span className="ability">Supply Crate ability cooldown: 90s (cannot be used more than twice per round)</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
                                <li><i>Downdraft attack cooldown 0.15s -&gt; 0.075s</i></li>
                                <li>+25% flight speed</li>
                                <li><span className="ability">Monkey Marine Ability: deploy a marine monkey that attacks Bloons for 30s:
                                     6 damage, 20 pierce, 0.05s attack cooldown, 50 range. Marine can pop all Bloon types.</span></li>
                                <li><span className="ability">Monkey Marine ability cooldown: 25s</span></li>
                                <li><span className="ability">Door Gunner ability (Monkey Knowledge required): Heli can pick up Tier 4 towers
                                     or lower. Picked up tower can continue attacking from the helicopter even as it flies around</span></li>
                                <li><span className="ability">Door Gunner ability cooldown: 15s</span></li>
                                <li><span className="ability">Reposition ability cooldown 45s -&gt; 15s</span></li>
                                <li><span className="ability">Supply Crate ability drops +10 lives/+$1,550 -&gt; +25 lives/+$4,500</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th id="bottom0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 0)}>Faster Darts</th>
                        <th id="bottom1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 1)}>Faster Firing</th>
                        <th id="bottom2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 2)}>MOAB Shove</th>
                        <th id="bottom3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 3)}>Comanche Defense</th>
                        <th id="bottom4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 4)}>Comanche Commander</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$350</td>
                        <td>$3,400</td>
                        <td>$8,500</td>
                        <td>$35,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="bottom_change_0" className="change_list">
                                <li>+60% dart speed</li>
                                <li>+30% Heli range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_1" className="change_list">
                                <li>Attack cooldown 0.57s -&gt; 0.456s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_2" className="change_list">
                                <li><i>+MOAB Shove attack: pushes back or slows 1 MOAB at a time: blue MOABs pushed back,
                                     BFBs/DDTs/ZOMGs slowed</i></li>
                                <li><i>+Missile attack: fires homing missiles with infinite range: 2 damage, +2 Ceramic/MOAB damage,
                                     10 pierce, 3s attack cooldown (cannot pop Black)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_3" className="change_list">
                                <li><i>Summons 1/2/3 mini Comanches for 15s when furthest Bloons gets 25%/50%/75% of the way through
                                     the track, respectively</i></li>
                                <li><i>Mini Comanche dart attack stats: 3 darts/shot—1 damage, 4 pierce, 0.228s attack cooldown per dart
                                     (cannot pop Lead)</i></li>
                                <li><i>Mini Comanche missile attack stats: 4 damage, +2 Ceramic damage, 60 pierce, 3s attack cooldown
                                     (cannot pop Black)</i></li>
                                <li>Main Heli damage 1 -&gt; 2</li>
                                <li>Main Heli missile damage 1 -&gt; 3, pierce 10 -&gt; 30, attack cooldown 3s -&gt; 1s</li>
                                <li>MOAB Shove pushes back MOABs & slows BFBs/DDTs/ZOMGs slightly more</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_4" className="change_list">
                                <li><i>Mini Comanches are summoned permanently</i></li>
                                <li><i>Mini Comanche dart damage 1 -&gt; 3</i></li>
                                <li><i>Mini Comanche missile damage 2 -&gt; 15, Ceramic bonus damage 2 -&gt; 10</i></li>
                                <li>Main Heli dart damage 2 -&gt; 4</li>
                                <li>Main Heli missile damage 3 -&gt; 15, MOAB bonus damage 2 -&gt; 8</li>
                                <li>Main Heli & Comanches fly slightly faster</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}