import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function BombMain() {
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
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Bigger Bombs</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Heavy Bombs</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Really Big Bombs</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Bloon Impact</th>
                        <th id="top4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Bloon Crush</th>
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
                            <ul id="top_change_0" className="change_list">
                                <li>+20% projectile size</li>
                                <li>+50% explosion size</li>
                                <li>Explosion pierce 22 -&gt; 28</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>Damage 1 -&gt; 2</li>
                                <li>Explosion pierce 28 -&gt; 38</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li>Damage 2 -&gt; 4</li>
                                <li>Explosion pierce 38 -&gt; 80</li>
                                <li><i>Knockback mechanic: explosions push back non-MOABs by 20 units</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li><i>Stun mechanic (in addition to knockback): explosions stun non-MOABs for 1.4s </i></li>
                                <li>+3 range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
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
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Faster Reload</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>Missile Launcher</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>MOAB Mauler</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>MOAB Assassin</th>
                        <th id="middle4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>MOAB Eliminator</th>
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
                            <ul id="middle_change_0" className="change_list">
                                <li>Attack cooldown 1.5s -&gt; 1.125s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li>Attack cooldown 1.125s -&gt; 0.825s</li>
                                <li>+4 range</li>
                                <li>+50% projectile speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li>+15 MOAB damage</li>
                                <li>+5 range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
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
                            <ul id="middle_change_4" className="change_list">
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
                        <th id="bottom0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 0)}>Extra Range</th>
                        <th id="bottom1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 1)}>Frag Bombs</th>
                        <th id="bottom2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 2)}>Cluster Bombs</th>
                        <th id="bottom3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 3)}>Recursive Cluster</th>
                        <th id="bottom4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 4)}>Bomb Blitz</th>
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
                            <ul id="bottom_change_0" className="change_list">
                                <li>+12 range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_1" className="change_list">
                                <li>+2 range</li>
                                <li><i>+Explosions emit 8 bomb fragments in 360° range (1 damage/pierce each)</i></li>
                                <li><i>Bomb fragments cannot damage original bomb target</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_2" className="change_list">
                                <li><i>Bomb fragments replaced with cluster bombs (1 damage, 8 explosion pierce each)</i></li>
                                <li><i>Cluster (secondary) bombs can hit primary bomb target</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_3" className="change_list">
                                <li>Bomb & cluster bomb damage 1 -&gt; 2</li>
                                <li>Primary bomb pierce 22 -&gt; 18</li>
                                <li><i>Recursive cluster mechanic: every other attack, cluster bombs split off into 8 additional
                                     cluster bombs each</i></li>
                                <li><i>Sub-cluster (tertiary) bombs have 2 damage, 24 explosion pierce</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_4" className="change_list">
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