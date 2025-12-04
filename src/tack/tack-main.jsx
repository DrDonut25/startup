import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function TackMain(props) {
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
                    <td>$260</td>
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
                    <td>1.12s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Very Small (23 units)</td>
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
                    <td>Fires 8 tacks at once over 360-degree area</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Faster Shooting"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Even Faster Shooting"</li>
                <li style={{color: '#f8f9fa'}}>You selected "More Tacks"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Faster Shooting</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Even Faster Shooting</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Hot Shots</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Ring of Fire</th>
                        <th id="top4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Inferno Ring</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$150</td>
                        <td>$300</td>
                        <td>$650</td>
                        <td>$3,500</td>
                        <td>$45,500</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>Attack cooldown 1.12s -&gt; 0.84s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>Attack cooldown 0.84s -&gt; 0.63s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li>Damage 1 -&gt; 2</li>
                                <li>+Can pop Lead</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li>Attack cooldown 0.63s -&gt; 0.315s</li>
                                <li>Damage 2 -&gt; 5</li>
                                <li>Pierce 1 -&gt; 30</li>
                                <li><i>Tacks replaced with single-projectile area-of-effect damage
                                     (similar to Sub's Bloontonium Reactor)</i></li>
                                <li>-Can no longer hit Purple</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li>Attack cooldown 0.315s -&gt; 0.1s</li>
                                <li>Damage 5 -&gt; 8</li>
                                <li>+4 MOAB damage</li>
                                <li>Pierce 30 -&gt; 45</li>
                                <li>+11.5 range</li>
                                <li><i>+Meteor attack: infinite range, deals 1&rpar; 700 damage to single target every 4s that 2&rpar;
                                     creates explosion (50 damage, 10 pierce) that 3&rpar; ignites Bloons (50 damage/s for 4.1s)</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Long Range Tacks</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>Super Range Tacks</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>Blade Shooter</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>Blade Maelstrom</th>
                        <th id="middle4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>Super Maelstrom</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$100</td>
                        <td>$225</td>
                        <td>$550</td>
                        <td>$2,700</td>
                        <td>$15,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="middle_change_0" className="change_list">
                                <li>+4 range</li>
                                <li>+Higher projectile lifespan/speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li>+4 range</li>
                                <li>+Longer projectile lifespan</li>
                                <li>Pierce 1 -&gt; 4</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li>+15 range</li>
                                <li>Pierce 4 -&gt; 8</li>
                                <li>+Can pop Frozen</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li>Damage 1 -&gt; 2</li>
                                <li><span className="ability">Ability: repeatedly/rapidly fire 2 blades in opposite directions for 3s,
                                     spinning clockwise (2 damage, 100 pierce per blade)</span></li>
                                <li><span className="ability">Ability cooldown: 20s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
                                <li>Damage 2 -&gt; 5</li>
                                <li>+Blades (not ones from ability) can pop Lead</li>
                                <li>+5 Ceramic damage</li>
                                <li><span className="ability">Ability now fires 4 blades at a time and for 9s
                                     (pierce increased to 300)</span></li>
                                <li><span className="ability">+8 Ceramic damage (ability)</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th id="bottom0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 0)}>More Tacks</th>
                        <th id="bottom1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 1)}>Even More Tacks</th>
                        <th id="bottom2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 2)}>Tack Sprayer</th>
                        <th id="bottom3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 3)}>Overdrive</th>
                        <th id="bottom4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 4)}>The Tack Zone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$110</td>
                        <td>$110</td>
                        <td>$450</td>
                        <td>$3,200</td>
                        <td>$20,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="bottom_change_0" className="change_list">
                                <li>Number of tacks 8 -&gt; 10</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_1" className="change_list">
                                <li>Number of tacks 10 -&gt; 12</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_2" className="change_list">
                                <li>Number of tacks 12 -&gt; 16</li>
                                <li>Pierce 1 -&gt; 2</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_3" className="change_list">
                                <li>Attack cooldown 1.12s -&gt; 0.3733s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_4" className="change_list">
                                <li>Number of tacks 16 -&gt; 32</li>
                                <li>Attack cooldown 0.3733s -&gt; 0.224s</li>
                                <li>+7 range</li>
                                <li>+1 MOAB damage</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}