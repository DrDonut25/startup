import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function IceMain() {
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
                    <td>40</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>2.4s</td>
                </tr>
                <tr>
                    <th>Freeze duration</th>
                    <td>1.5s</td>
                </tr>
                <tr>
                    <th>Bloon layers freezed/attack</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Very Small (20 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Small</td>
                </tr>
                <tr>
                    <th>Can pop</th>
                    <td>Purple, Black</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Camo, Lead, White, MOAB</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>Freeze attacks, amphibious, -50% Ceramic Bloon freeze duration</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Permafrost"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Cold Snap"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Larger Radius"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Permafrost</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Cold Snap</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Ice Shards</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Embrittlement</th>
                        <th id="top4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Super Brittle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$150</td>
                        <td>$350</td>
                        <td>$1,500</td>
                        <td>$2,300</td>
                        <td>$28,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li><i>Bloons popped by Ice Monkey move at 50% speed (until they lose 2 more layers)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>+Can pop Camo/Lead</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li><i>When frozen Bloons pop, 3 ice shards fly out in 360° area (2 damage, 3 pierce per shard)</i></li>
                                <li>+5 range</li>
                                <li><i>Attacks remove Camo/Regrow</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li><i>Hit Bloons become brittle: hit Bloons temporariliy lose Lead/Frozen properties and take +1
                                     additional damage for 2s</i></li>
                                <li><i>Ice shards now remove Camo/Regrow</i></li>
                                <li>Layers frozen 2 -&gt; 3</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li><i>Brittle Bloons now take +4 additional damage</i></li>
                                <li><i>Bloons become brittle for 3s instead of 2s</i></li>
                                <li><i>Frozen Bloons now emit 6 ice shards, each dealing 10 damage instead of 2</i></li>
                                <li>+Can now apply permafrost to MOABs (-25% speed reduction)</li>
                                <li>Damage 1 -&gt; 5</li>
                                <li>+5 Ceramic damage</li>
                                <li>Attack cooldown 2.4s -&gt; 1.2s</li>
                                <li>+Can pop ALL Bloon types</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Enhanced Freeze</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>Deep Freeze</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>Arctic Wind</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>Snowstorm</th>
                        <th id="middle4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>Absolute Zero</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$300</td>
                        <td>$2,750</td>
                        <td>$4,000</td>
                        <td>$16,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="middle_change_0" className="change_list">
                                <li>Freeze duration 1.5s -&gt; 1.75s</li>
                                <li>Attack cooldown 2.4s -&gt; 1.8s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li>Freeze duration 1.75s -&gt; 2.2s</li>
                                <li>Layers frozen 2 -&gt; 3</li>
                                <li>Pierce 40 -&gt; 45</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li>Ceramic freeze duration penalty removed</li>
                                <li><i>Cold Aura: land-based Monkeys in Ice Monkey's radius can be placed on water, and in-range Bloons
                                     slowed by 40% </i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li>+10 range</li>
                                <li><span className="ability">Ability: deal 1 damage to & freeze all Bloons on Screen (except Lead)</span></li>
                                <li><span className="ability">Ability freeze duration: 6s (3s for White/Zebra/Camo)</span></li>
                                <li><span className="ability">Ability cooldown: 30s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
                                <li>+10 range</li>
                                <li>Layers frozen 3 -&gt; 8</li>
                                <li>Pierce 45 -&gt; 300</li>
                                <li><i>+Global freeze attack (triggers after every main attack): damages/freezes all non-MOAB Bloons on
                                     screen for 0.6s—1 damage, +3 Ceramic damage, 999 pierce</i></li>
                                <li>Main attack now damages MOABs</li>
                                <li><i>Arctic Wind now slows Bloons by 60% and slows MOABs by 30%</i></li>
                                <li><span className="ability">Ability now freezes/pops Lead</span></li>
                                <li><span className="ability">Ability cooldown 30s -&gt; 25s</span></li>
                                <li><span className="ability">Ability freeze duration 6s -&gt; 10s</span></li>
                                <li><span className="ability">+4 Frozen damage (ability)</span></li>
                                <li><span className="ability">Ability now boosts attack speed of all Ice Monkeys by 50% for 10s</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th id="bottom0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 0)}>Larger Radius</th>
                        <th id="bottom1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 1)}>Re-Freeze</th>
                        <th id="bottom2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 2)}>Cryo Cannon</th>
                        <th id="bottom3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 3)}>Icicles</th>
                        <th id="bottom4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 4)}>Icicle Impale</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$150</td>
                        <td>$200</td>
                        <td>$1,900</td>
                        <td>$2,750</td>
                        <td>$30,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="bottom_change_0" className="change_list">
                                <li>+7 range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_1" className="change_list">
                                <li>+Can now pop/refreeze Frozen Bloons</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_2" className="change_list">
                                <li>+19 range</li>
                                <li>Removed Ceramic freeze duration penalty</li>
                                <li>Radial attack replaced wtih cannon attack: 1.2s attack cooldown & 20-unit blast radius</li>
                                <li>Gain First/Last/Strong/Close targeting options</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_3" className="change_list">
                                <li>Attack cooldown 1.2s -&gt; 0.75s</li>
                                <li>Damage 1 -&gt; 2</li>
                                <li>+Can damage MOABs (but not freeze them)</li>
                                <li>+8 MOAB damage</li>
                                <li><i>Hit Bloons grow icicles, dealing 3 damage to up to 3 Bloons while frozen</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_4" className="change_list">
                                <li>+Can now freeze MOABs</li>
                                <li>MOAB bonus damage 8 -&gt; 48</li>
                                <li>+Can pop White</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}