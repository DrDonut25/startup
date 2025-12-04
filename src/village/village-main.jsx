import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function VillageMain(props) {
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
                    <td>$1,200</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Medium (40 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Large</td>
                </tr>
                <tr>
                    <th>Provided Buffs</th>
                    <td>+10% attack range to nearby monkeys</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Bigger Radius"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Regrow Blocker"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Radar Scanner"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Bigger Radius</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Jungle Drums</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Primary Mentoring</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Primary Academy</th>
                        <th id="top4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Primary Expertise</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$400</td>
                        <td>$1,500</td>
                        <td>$800</td>
                        <td>$2,500</td>
                        <td>$25,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>+8 range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li><i>+Jungle Drums buff: in-range towers receive -15% attack cooldown</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li><i>+Primary Training buff: in-range Primary Monkeys receive +10% range, +1 pierce, and +25%
                                     projectile speed </i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li><i>+Primary Mentoring buff: in-range Primary Monkeys receive +5 range, -15% ability cooldowns, and
                                     receive all Tier 1 upgrades for free</i></li>
                                <li>+7 range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li><i>Primary Monkey pierce buff +1 -&gt; +3</i></li>
                                <li><i>Primary Monkey ability cooldown buff -15% -&gt; 25%</i></li>
                                <li><i>+In-range Primary Monkeys now also receive all Tier 2 upgrades for free</i></li>
                                <li>+Mega Ballista attack: fires infinite-range ballista projectiles that bounce Glaive Ricochet-style
                                     between Bloons</li>
                                <li>Mega Ballista stats: 10 damage, +270 Ceramic/MOAB damage, 100 pierce (though MOABs take up 10 pierce
                                     each), 3s attack cooldown, can pop ALL Bloon types (including Camo)</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Regrow Blocker</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>Radar Scanner</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>Monkey Intelligence Bureau</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>Call to Arms</th>
                        <th id="middle4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>Homeland Defense</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$2,000</td>
                        <td>$7,500</td>
                        <td>$20,000</td>
                        <td>$40,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="middle_change_0" className="change_list">
                                <li><i>+Regrow Bloons cannot regrow any layers while in range</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li><i>+Radar Scanner buff: in-range towers receive Camo detection</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li><i>+MIB buff: in-range towers can now pop all Bloon types</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li><span className="ability">Ability: all towers on screen receive +50% attack speed and +50% pierce
                                     for 15s</span></li>
                                <li><span className="ability">Ability cooldown: 45s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
                                <li><span className="ability">Ability now grants +100% attack speed/pierce for 20s</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th id="bottom0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 0)}>Monkey Business</th>
                        <th id="bottom1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 1)}>Monkey Commerce</th>
                        <th id="bottom2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 2)}>Monkey Town</th>
                        <th id="bottom3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 3)}>Monkey City</th>
                        <th id="bottom4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 4)}>Monkeyopolis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$500</td>
                        <td>$500</td>
                        <td>$10,000</td>
                        <td>$3,000</td>
                        <td>$5,000/Banana Farm in radius</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="bottom_change_0" className="change_list">
                                <li><i>+Monkey Business buff: in-range towers receive 10% discount on all Tier-3-or-lower upgrades</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_1" className="change_list">
                                <li><i>+Monkey Commerce buff: in-range towers receive 5% discount on all Tier-3-or-lower upgrades</i></li>
                                <li><i>This buff stacks up to 3 times (and once with Monkey Business buff)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_2" className="change_list">
                                <li><i>+Monkey Town buff: in-range towers receive +50% cash per pop</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_3" className="change_list">
                                <li><i>+Monkey City buff: in-range towers that generate income (e.g. Banana Farms, Jungle's Bounty)
                                     generate 20% more income </i></li>
                                <li><i>+Player receives 1 free Dart Monkey each round</i></li>
                                <li>+10 range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_4" className="change_list">
                                <li>Absorbs all in-range Tier-4-or-lower Banana Farms, then begins producing 10 banana crates each
                                     round—crate value dependent on total cost of absorbed Banana Farms</li>
                                <li>Minimum cash generated/round (e.g. if 1 unupgraded Banana Farm is absorbed): $1,200</li>
                                <li>Monkeyopolis crates worth $200 more for every $2,000 spent on absorbed Banana Farms</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}