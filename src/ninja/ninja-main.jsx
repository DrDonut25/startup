import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function NinjaMain() {
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
                    <td>$400</td>
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
                    <td>0.62s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Medium (40 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Small</td>
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
                    <td>None</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Ninja Discipline"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Sharp Shurikens"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Seeking Shuriken"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Ninja Discipline</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Sharp Shurikens</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Double Shot</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Bloonjitsu</th>
                        <th id="top4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Grandmaster Ninja</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$350</td>
                        <td>$350</td>
                        <td>$900</td>
                        <td>$2,750</td>
                        <td>$35,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>Attack cooldown 0.62s -&gt; 0.434s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>Pierce 2 -&gt; 4</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li>Now throws 2 shurikens per attack in 18° cone</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li>Now throws 5 shurikens per attack in 45° cone</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li>Now throws 8 shurikens per attack in 72° cone</li>
                                <li>Damage 1 -&gt; 2</li>
                                <li>Attack cooldown 0.434s -&gt; 0.217s</li>
                                <li>+10 range</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Distraction</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>Counter-Espionage</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>Shinobi Tactics</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>Bloon Sabotage</th>
                        <th id="middle4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>Grand Saboteur</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$400</td>
                        <td>$1,200</td>
                        <td>$5,200</td>
                        <td>$22,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="middle_change_0" className="change_list">
                                <li><i>Shurikens have a 15% chance of sending Bloons backwards by 100-150 units</i></li>
                                <li>Ceramics distracted by half of distance above, MOABs unaffected</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li><i>Bloons popped/damaged by Ninja Monkey lose Camo property</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li><i>Shinobi Buff: all in-range Shinobi Tactics ninjas (including this one) receive -8% attack
                                     cooldown reduction, +8% pierce</i></li>
                                <li><i>Shinobi buff stacks up to 20 times (when buffs maxed out, Shinobi Tactics ninjas receive ~5.3x
                                     attack speed and 2.6x pierce)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li><span className="ability">Ability: cut speed of all Bloons on screen in half for 15s</span></li>
                                <li><span className="ability">Ability does not slow BADs/Boss Bloons</span></li>
                                <li><span className="ability">Ability cooldown: 60s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
                                <li><span className="ability">Sabotage ability duration 15s -&gt; 30s</span></li>
                                <li><span className="ability">Deals damage to every newly spawned MOAB equal to 25% of said MOAB's health,
                                     including BADs (aka all MOABs spawn with 75% health)</span></li>
                                <li><span className="ability">While Sabotage ability active, all Shinobi Tactics ninjas receive +10
                                     range and +2 MOAB damage</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th id="bottom0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 0)}>Seeking Shuriken</th>
                        <th id="bottom1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 1)}>Caltrops</th>
                        <th id="bottom2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 2)}>Flash Bomb</th>
                        <th id="bottom3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 3)}>Sticky Bomb</th>
                        <th id="bottom4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 4)}>Master Bomber</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$300</td>
                        <td>$450</td>
                        <td>$2,250</td>
                        <td>$5,000</td>
                        <td>$40,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="bottom_change_0" className="change_list">
                                <li>Shurikens now home in on targets</li>
                                <li>+7 range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_1" className="change_list">
                                <li><i>+Caltrop attack: places caltrops onto random points on track every 3.9s—1 damage, 6 pierce,
                                     35s lifespan</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_2" className="change_list">
                                <li><i>Every 4th shuriken replaced with Flash Bomb attack: 40-unit-radius explosion, 3 damage,
                                     30 pierce</i></li>
                                <li><i>Flash bombs stun non-MOAB Bloons for 1.3s</i></li>
                                <li><i>Flash bombs can pop all Bloon types</i></li>
                                <li>Shuriken pierce 2 -&gt; 4</li>
                                <li>+4 Stunned Bloon shuriken damage</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_3" className="change_list">
                                <li><i>+Sticky Bomb attack: stick bomb to MOAB-class Bloon, exploding 3s later—450 damage to main target,
                                     100 explosion damage to surrounding Bloons, 10 explosion pierce</i></li>
                                <li><i>Sticky Bomb attack cooldown: 4.5s</i></li>
                                <li><i>Sticky Bombs/explosion can pop all Bloon types</i></li>
                                <li>Shurikens deal +4 damage to MOABs with undetonated Sticky Bombs bound to them</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_4" className="change_list">
                                <li><i>Sticky Bomb attack cooldown 4.5s -&gt; 2.25s</i></li>
                                <li><i>Sticky Bomb attack now has infinite range</i></li>
                                <li><i>Sticky Bomb main target damage 450 -&gt; 3,000</i></li>
                                <li><i>Sticky Bomb explosion damage 100 -&gt; 600</i></li>
                                <li><i>+Sticky Bombs stun targeted MOABs for 1s when first attached</i></li>
                                <li><i>+Flash Bombs can stun MOABs for 0.325s</i></li>
                                <li><i>Flash Bomb damage 3 -&gt; 10</i></li>
                                <li><i>Caltrop damage 1 -&gt; 5</i></li>
                                <li><i>+5 Ceramic damage (caltrops)</i></li>
                                <li>Shuriken Stunned Bloon bonus damage 4 -&gt; 19</li>
                                <li>Shuriken Stickied-MOAB bonus damage 4 -&gt; 19</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}