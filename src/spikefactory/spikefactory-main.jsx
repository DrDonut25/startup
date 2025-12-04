import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function SpikeFactoryMain(props) {
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
                    <td>$1,000</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Pierce (aka spikes/stack)</th>
                    <td>5</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.75s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Small (34 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Slightly Large</td>
                </tr>
                <tr>
                    <th>Can pop</th>
                    <td>Purple, White, Black, Camo</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Lead</td>
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
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Bigger Stacks</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>White Hot Spikes</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Spiked Balls</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Spiked Mines</th>
                        <th id="top4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Super Mines</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$800</td>
                        <td>$600</td>
                        <td>$2,300</td>
                        <td>$9,500</td>
                        <td>$125,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>Pierce 5 -&gt; 10</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>+Can pop Lead</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li>Damage 1 -&gt; 2</li>
                                <li>+3 Ceramic damage</li>
                                <li>+1 Fortified damage</li>
                                <li>Pierce 10 -&gt; 11</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li><i>Spike balls replaced with spike mines: when mines lose all their spikes, they explode, setting
                                     Bloons on fire</i></li>
                                <li><i>Explosion stats: 10 damage, +2 Ceramic damage, +3 Fortified damage, 30 pierce
                                     (cannot pop Black)</i></li>
                                <li><i>Burn stats: 5 damage/s for 6s (cannot burn Purple)</i></li>
                                <li>Spike Ceramic bonus damage 3 -&gt; 6</li>
                                <li>Spike Fortified bonus damage 1 -&gt; 3</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li>Attack cooldown 1.75s -&gt; 3.5s</li>
                                <li><i>+Every time a spike is depleted, non-burning mini explosion is created</i></li>
                                <li><i>Mini-explosion stats: 20 damage, +15 Ceramic damage, +5 Fortified damage, 30 pierce</i></li>
                                <li><i>Mine explosion damage 10 -&gt; 1,000</i></li>
                                <li><i>Mine explosion Ceramic bonus damage 2 -&gt; 500</i></li>
                                <li><i>Mine explosion Fortified bonus damage 3 -&gt; 250</i></li>
                                <li><i>Mine explosion pierce 30 -&gt; 60</i></li>
                                <li><i>Mine explosion radius more than tripled</i></li>
                                <li><i>Mine explosion burn damage over time 5 damage/s -&gt; 1,250 damage/s</i></li>
                                <li>Spike damage 2 -&gt; 50</li>
                                <li>Spike Ceramic bonus damage 6 -&gt; 30</li>
                                <li>Spike Fortified bonus damage 3 -&gt; 15</li>
                                <li>+Explosions/mini-explosions can pop all Bloon types</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Faster Production</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>Even Faster Production</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>MOAB SHREDR</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>Spike Storm</th>
                        <th id="middle4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>Carpet of Spikes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$600</td>
                        <td>$800</td>
                        <td>$2,500</td>
                        <td>$7,000</td>
                        <td>$41,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="middle_change_0" className="change_list">
                                <li>Attack cooldown 1.75s -&gt; 1.4s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li>Attack cooldown 1.4s -&gt; 1.05s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li>+7 MOAB damage/spike (not per spike pile)</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li><span className="ability">Ability: produce/send 1 spike pile torandom position on all available lanes
                                     every 0.04s for 2s—ability spikes last only 9s-11s</span></li>
                                <li><span className="ability">Ability cooldown: 50s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
                                <li><span className="ability">+In addition to activated ability, passive Spike Storm ability activates
                                     every 15s</span></li>
                                <li><span className="ability">Ability spike duration 9s-11s -&gt; 18s-22s</span></li>
                                <li>Spike damage 1 -&gt; 3</li>
                                <li>Pierce 5 -&gt; 10</li>
                                <li>Attack cooldown 1.05s -&gt; 0.49s</li>
                                <li>+16 range</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th id="bottom0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 0)}>Long Reach</th>
                        <th id="bottom1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 1)}>Smart Spikes</th>
                        <th id="bottom2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 2)}>Long Life Spikes</th>
                        <th id="bottom3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 3)}>Deadly Spikes</th>
                        <th id="bottom4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 4)}>Perma-spike</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$150</td>
                        <td>$400</td>
                        <td>$1,300</td>
                        <td>$3,600</td>
                        <td>$30,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="bottom_change_0" className="change_list">
                                <li>+8 range</li>
                                <li>Spike pile lifespan doubled</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_1" className="change_list">
                                <li>+Attack speed quadrupled for first 3s of each round</li>
                                <li><i>+4 new targeting options (see below):</i></li>
                                <li><i>+Close Targeting (dispense spikes onto in-range track spot closest to Spike Factory)</i></li>
                                <li><i>+Smart Targeting (dispense spikes onto in-range track spots closest to exit. If there are multiple
                                     paths, prioritize placing spikes on track w/ Bloons closest to exit)</i></li>
                                <li><i>+Set Target Targeting (user specifies where to dispense all spike piles)</i></li>
                                <li><i>+Automatic Targeting (dispense spikes onto track point furthest from track exit. If Bloons are in
                                     range, dispense spikes directly on top of them)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_2" className="change_list">
                                <li><i>Spike piles can carry over one round</i></li>
                                <li>+40% spike pile lifespan</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_3" className="change_list">
                                <li>Damage 1 -&gt; 3</li>
                                <li><i>Spike piles can carry over two rounds</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_4" className="change_list">
                                <li>Attack cooldown 1.75s -&gt; 6.0625s</li>
                                <li>Damage 3 -&gt; 10</li>
                                <li>Pierce 5 -&gt; 50</li>
                                <li>Spike piles now last up to 5 minutes</li>
                                <li><i>Spike piles can carry over 3 rounds</i></li>
                                <li>Attack speed now quadruples for 10s instead of 3s at start of each round</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}