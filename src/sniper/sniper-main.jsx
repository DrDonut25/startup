import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function SniperMain(props) {
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
                    <td>$350</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.59s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Infinite</td>
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
                    <td>None</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Full Metal Jacket"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Large Calibre"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Night Vision Goggles"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Full Metal Jacket</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Large Calibre</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Deadly Precision</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Main MOAB</th>
                        <th id="top4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Cripple MOAB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$350</td>
                        <td>$1,300</td>
                        <td>$2,500</td>
                        <td>$6,000</td>
                        <td>$32,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>Damage 2 -&gt; 4</li>
                                <li>+Can pop Lead</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>Damage 4 -&gt; 7</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li>Damage 7 -&gt; 20</li>
                                <li>+15 Ceramic damage</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li>Damage 20 -&gt; 30</li>
                                <li><i>+Shots now briefly stun MOABs (stun duration varies for each MOAB type)</i></li>
                                <li><i>MOAB/BFB/ZOMG/DDT stun duration is 3s/1.5s/0.75s/0.75s (respectively)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li>Damage 30 -&gt; 140</li>
                                <li><i>+Bullets now explode (28 damage to up to 10 Bloons per bullet)</i></li>
                                <li><i>MOAB/BFB/ZOMG/DDT stun duration increased from 3s/1.5s/0.75s/0.75s to 7s/6s/3s/4s (respectively)</i></li>
                                <li><i>+Hit MOABs now take +5 damage from all sources</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Night Vision Goggles</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>Shrapnel Shot</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>Bouncing Bullet</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>Supply Drop</th>
                        <th id="middle4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>Elite Sniper</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$450</td>
                        <td>$2,100</td>
                        <td>$7,600</td>
                        <td>$12,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="middle_change_0" className="change_list">
                                <li>+Camo detection</li>
                                <li>+2 Camo damage</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li><i>+Bullets now release 5 pieces of shrapnel in 45° cone behind hit target</i></li>
                                <li><i>Shrapnel stats: 1 damage, +2 Camo damage, 2 pierce</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li>Pierce 1 -&gt; 3</li>
                                <li><i>+Bullets now bounce Glaive Ricochet-style to up to 2 additional Bloons</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li><span className="ability">Ability: Summon $1,100 cash crate (also activates all other Supply Drop
                                     abilities)</span></li>
                                <li><span className="ability">Ability cooldown: 90s (max 3 uses per round)</span></li>
                                <li>+Bullets (but not shrapnel) can now pop Lead</li>
                                <li>Bullet bounce count 2 -&gt; 4 (Pierce 3 -&gt; 5)</li>
                                <li>Shrapnel pierce 2 -&gt; 5</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
                                <li>Attack cooldown 1.59s -&gt; 0.636s</li>
                                <li><i>+Grants +33% attack speed buff to all other Sniper Monkeys</i></li>
                                <li><i>+Grants Elite Targeting option to all Sniper Monkeys</i></li>
                                <li><i>Elite targeting prioritizes strongest non-MOAB Bloons that spawn multiple children (e.g. Ceramics,
                                     Rainbows), but switches to First Targeting if a Bloon gets &gt;75% of the way through the track.
                                      In all other cases (e.g. after round 81 when non-MOABs stop spawning multiple children),
                                       Elite targeting prioritizes Strong</i></li>
                                <li><span className="ability">Ability cash crate value $1,100 -&gt; $3,000</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th id="bottom0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 0)}>Fast Firing</th>
                        <th id="bottom1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 1)}>Even Faster Firing</th>
                        <th id="bottom2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 2)}>Semi-Automatic</th>
                        <th id="bottom3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 3)}>Full Auto Rifle</th>
                        <th id="bottom4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 4)}>Elite Defender</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$450</td>
                        <td>$450</td>
                        <td>$2,700</td>
                        <td>$4,100</td>
                        <td>$14,900</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="bottom_change_0" className="change_list">
                                <li>Attack cooldown 1.59s -&gt; 1.113s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_1" className="change_list">
                                <li>Attack cooldown 1.113s -&gt; 0.7791s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_2" className="change_list">
                                <li>Attack cooldown 0.7791s -&gt; 0.2597s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_3" className="change_list">
                                <li>Attack cooldown 0.2597s -&gt; 0.1298s</li>
                                <li>+2 MOAB damage</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_4" className="change_list">
                                <li>Attack cooldown 0.1298s -&gt; 0.0649s</li>
                                <li>Bullet MOAB bonus damage 2 -&gt; 4</li>
                                <li>Attacks faster the further along Bloon is along track</li>
                                <li><span className="ability"><i> Passive ability: Gains 4x attack speed for 7s when lives are lost
                                     (10s ability cooldown)</i></span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}