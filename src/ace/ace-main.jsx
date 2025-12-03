import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';
import { Event } from '../notifier.js';

export function AceMain(props) {
    const username = props.username;
    
    const [topHeaders, setTopHeaders] = React.useState(Array(5).fill(false));
    const [middleHeaders, setMiddleHeaders] = React.useState(Array(5).fill(false));
    const [bottomHeaders, setBottomHeaders] = React.useState(Array(5).fill(false));

    /*maxTier variables track maximum legal upgrade tiers for when other path tables have selected upgrades. -1 means no upgrades can be
    selected from this path*/
    const [maxTopTier, setMaxTopTier] = React.useState(4);
    const [maxMidTier, setMaxMidTier] = React.useState(4);
    const [maxBottomTier, setMaxBottomTier] = React.useState(4);

    let myFunctions = {};

    function createMessageList() {
        const messageList = [];
        for (let i = 0; i < props.events.length; i++) {
            let message = 'N/A';
            if (props.events[i].type === 'tower') {
                message = `${props.events[i].from} is upgrading Monkey Ace`;
            } else if (props.events[i].type === 'system') {
                message = props.events[i].message.msg;
            }

            messageList.push(
                <li key={i}>{message}</li>
            );
        }

        return messageList;
    }

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
            <ul>{createMessageList()}</ul>
        </div>
        
        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Rapid Fire</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Lots More Darts</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Fighter Plane</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Operation: Dart Storm</th>
                        <th id="top4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Sky Shredder</th>
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
                            <ul id="top_change_0" className="change_list">
                                <li>Attack cooldown 1.68s -&gt; 1.26s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>Darts/volley 8 -&gt; 12</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li>+20% flight speed</li>
                                <li><i>MOAB missile secondary attack: Fires 2 missiles/attack that home in on
                                     MOABs—18 damage, 4 pierce, attack cooldown 3s (cannot pop Black)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li>Dart volley attack cooldown 1.26s -&gt; 0.63s</li>
                                <li>Darts/volley 12 -&gt; 16</li>
                                <li><i>MOAB missile attack cooldown 3s -&gt; 1.5s</i></li>
                                <li><i>MOAB missile damage 18 -&gt; 24</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
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
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Exploding Pineapple</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>Spy Plane</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>Bomber Ace</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>Ground Zero</th>
                        <th id="middle4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>Tsar Bomba</th>
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
                            <ul id="middle_change_0" className="change_list">
                                <li><i>+Exploding pineapple attack: drops 1 pineapple at Monkey Ace's location every 1.6s,
                                     exploding after 2s—1 damage, 20 pierce</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li>+Camo detection</li>
                                <li>+2x Camo damage (all attacks except Fighter Plane missiles)</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li>Exploding pineapples replaced w/ bombing run attack:
                                     drop 4 bombs in rapid succession whenever Monkey Ace is over track—3 damage,
                                      20 pierce, 1.6s min attack cooldown, 2s bomb fuse duration (cannot pop Black)</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li>Bomb damage 3 -&gt; 15</li>
                                <li>Bomb pierce 20 -&gt; 40</li>
                                <li><span className="ability">Ability: deal 700 damage to up to 2,000 Bloons closest to the landing pad</span></li>
                                <li><span className="ability">Ability cooldown: 35s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
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
                        <th id="bottom0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 0)}>Sharper Darts</th>
                        <th id="bottom1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 1)}>Centered Path</th>
                        <th id="bottom2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 2)}>Neva-Miss Targeting</th>
                        <th id="bottom3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 3)}>Spectre</th>
                        <th id="bottom4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 4)}>Flying Fortress</th>
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
                            <ul id="bottom_change_0" className="change_list">
                                <li>Pierce 5 -&gt; 8</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_1" className="change_list">
                                <li><i>+Centered Path targeting option: Monkey Ace flies in circle around user-selected point
                                     (defaults to center of screen)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_2" className="change_list">
                                <li><i>+Darts move faster and now home in on targets</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_3" className="change_list">
                                <li><i>+Secondary attack: alternates firing homing darts/bombs directly at Bloons w/ First
                                     Targeting—0.06s attack cooldown</i></li>
                                <li><i>Spectre dart attacks (not radial Neva-Miss darts): 8 damage, 4 pierce (cannot pop Lead)</i></li>
                                <li><i>Spectre bomb attacks: 3 damage, +5 Ceramic damage, 20 pierce (cannot pop Black)</i></li>
                                <li>Radial Neva-Miss dart damage 1 -&gt; 3</li>
                                <li>+Significantly improved seeking for radial Neva-Miss dart attacks</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_4" className="change_list">
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