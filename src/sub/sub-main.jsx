import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function SubMain(props) {
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
                message = `${props.events[i].from} is upgrading ${props.events[i].message.tower}`;
            } else if (props.events[i].type === 'system') {
                message = props.events[i].message.msg;
            }

            messageList.push(
                <li key={i} style={{color: '#f8f9fa'}}>{message}</li>
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
                    <td>$325</td>
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
                    <td>0.75s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Medium (42 units)</td>
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
                    <td>Homing dart projectiles</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Longer Range"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Advanced Intel"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Twin Guns"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Longer Range</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Advanced Intel</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Submerge and Support</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Bloontonium Reactor</th>
                        <th id="top4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Energizer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$130</td>
                        <td>$500</td>
                        <td>$700</td>
                        <td>$2,300</td>
                        <td>$28,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>+10 range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li><i>+Can now target Bloons in range of other towers (unless map obstacles block view)</i></li>
                                <li><i>+Camo detection (if tower it "sees" through can see Camo)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li><i>+Submerge targeting option: Sub stops all dart-based attacks and instead removes Camo from up to
                                     100 in-range Bloons every 1.5s</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li>Submerge pulse cooldown 1.5s -&gt; 0.28s</li>
                                <li>Submerge pulses now deal 1 damage each (can pop Frozen but not Lead)</li>
                                <li>Submerge pulse damage pierce 50 (decamo pierce remains 100)</li>
                                <li><i>+Water towers in range have 15% shorter ability cooldowns</i></li>
                                <li>Dart damage 1 -&gt; 2</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li><i>+All towers on screen have 20% shorter ability cooldowns</i></li>
                                <li><i>In-range water tower ability cooldown buff -15% reduction -&gt; -40% reduction</i></li>
                                <li><i>In-range Heroes gain +50% more XP</i></li>
                                <li>Submerge pulse damage/decamo pierce increased to 1,000</li>
                                <li> Submerge damage 1 -&gt; 5</li>
                                <li>+5 Ceramic damage (submerge pulse)</li>
                                <li>Dart damage 2 -&gt; 5</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Barbed Darts</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>Heat-tipped Darts</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>Ballistic Missile</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>First Strike Capability</th>
                        <th id="middle4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>Pre-emptive Strike</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$450</td>
                        <td>$300</td>
                        <td>$1,350</td>
                        <td>$13,000</td>
                        <td>$29,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="middle_change_0" className="change_list">
                                <li>Pierce 2 -&gt; 5</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li>+Can pop Lead</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li>+Ballistic Missile secondary attack: 3 damage, +3 Ceramic damage, +5 MOAB damage, 40 pierce,
                                     1s attack cooldown</li>
                                <li>Missiles ignore map obstacles</li>
                                <li>+8 range</li>
                                <li>Missiles cannot pop Black Bloons</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li><span className="ability">Ability: deal 10,000 damage to strongest Bloon on screen & 350 explosion
                                     damage to up to 80 nearby Bloons</span></li>
                                <li><span className="ability">Ability cooldown: 60s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
                                <li><i>+Tertiary pre-emptive missile attack: deals 750 damage to each new MOAB that spawns</i></li>
                                <li><span className="ability">Ability damage 10,000 -&gt; 20,000</span></li>
                                <li><span className="ability">Ability explosion damage 350 -&gt; 1,000</span></li>
                                <li><span className="ability">Ability cooldown 60s -&gt; 45s</span></li>
                                <li>Ballistic missile damage 3 -&gt; 10</li>
                                <li>Ballistic missile Ceramic bonus damage 3 -&gt; 20</li>
                                <li>Ballistic missile MOAB bonus damage 5 -&gt; 15</li>
                                <li>Ballistic missile attack cooldown 1s -&gt; 0.5s</li>
                                <li>Increased Ballistic missile explosion radius</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th id="bottom0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 0)}>Twin Guns</th>
                        <th id="bottom1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 1)}>Airburst Darts</th>
                        <th id="bottom2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 2)}>Triple Guns</th>
                        <th id="bottom3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 3)}>Armor Piercing Darts</th>
                        <th id="bottom4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 4)}>Sub Commander</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$450</td>
                        <td>$1,000</td>
                        <td>$1,100</td>
                        <td>$2,500</td>
                        <td>$25,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="bottom_change_0" className="change_list">
                                <li>Attack cooldown 0.75s -&gt; 0.375s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_1" className="change_list">
                                <li>Pierce 2 -&gt; 1</li>
                                <li><i>+Darts now split into 3 airburst darts (1 damage, 2 pierce)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_2" className="change_list">
                                <li>Attack cooldown 0.375s -&gt; 0.2512s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_3" className="change_list">
                                <li>Damage 1 -&gt; 2</li>
                                <li>+2 MOAB damage (main dart)</li>
                                <li>+1 MOAB damage (airburst dart)</li>
                                <li>+1 Fortified damage (main/airburst dart)</li>
                                <li>Airburst dart pierce 2 -&gt; 5</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_4" className="change_list">
                                <li>Attack cooldown 0.2512s -&gt; 0.1256s</li>
                                <li>Airburst dart count 3 -&gt; 5</li>
                                <li><i>+Sub Commander buff: all Monkey Subs in range (including itself) get 2x damage, 2x bonus damage
                                     (if any), & +4 pierce</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}