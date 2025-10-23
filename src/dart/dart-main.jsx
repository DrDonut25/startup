import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function DartMain() {
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
                    <td>$200</td>
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
                    <td>0.95s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Small (32 units)</td>
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
                <li style={{color: '#f8f9fa'}}>You selected "Quick Shots"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Very Quick Shots"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Long Range Darts"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Sharp Shots</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Razor Sharp Shots</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Spike-o-pult</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Juggernaut</th>
                        <th id="top4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Ultra-Juggernaut</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$140</td>
                        <td>$200</td>
                        <td>$320</td>
                        <td>$1,800</td>
                        <td>$15,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>Pierce 2 -&gt; 3</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>Pierce 3 -&gt; 5</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li>+4.8 range</li>
                                <li>-17.4% attack speed</li>
                                <li>Damage 1 -&gt; 2</li>
                                <li>Pierce 5 -&gt; 18</li>
                                <li>+Projectiles bounce off map obstacles</li>
                                <li>+Can pop Frozen</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li>+15% attack speed</li>
                                <li>Doubled projectile speed</li>
                                <li>Pierce 18 -&gt; 60</li>
                                <li>+3 Ceramic damage</li>
                                <li>+2 Fortified damage</li>
                                <li>+Can pop Lead</li>
                                <li>+Bloon knockback</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li>Damage 2 -&gt; 5</li>
                                <li>Fortified bonus damage 2 -&gt; 5</li>
                                <li>Ceramic bonus damage 3 -&gt; 8</li>
                                <li>+20 Lead damage</li>
                                <li>Pierce 60 -&gt; 210</li>
                                <li><i>+Splits into 6 juggernaut projectiles after main projectile expiration</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Quick Shots</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>Very Quick Shots</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>Triple Shot</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>Super Monkey Fan Club</th>
                        <th id="middle4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>Plasma Monkey Fan Club</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$100</td>
                        <td>$190</td>
                        <td>$450</td>
                        <td>$7,200</td>
                        <td>$45,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="middle_change_0" className="change_list">
                                <li>+15% attack speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li>+18% attack speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li>+25% attack speed</li>
                                <li>Now throws 3 darts/attack in 30° cone</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li>+100% attack speed</li>
                                <li><span className="ability">Ability: transform 10 nearby Dart Monkeys (including this one) into Super
                                     Monkeys for 15s</span></li>
                                <li><span className="ability">Transformed Dart Monkey stats: 2 pierce, 0.06 attack cooldown,
                                     40 base range</span></li>
                                <li><span className="ability">Transformed Dart Monkeys inherit crosspath stats
                                     (not crosspath stats from this tower)</span></li>
                                <li><span className="ability">Ability cooldown: 50s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
                                <li><span className="ability">Ability: transform 20 nearby Dart Monkeys into Plasma Monkeys for 15s</span></li>
                                <li><span className="ability">Transformed Dart Monkey Stats: 5 pierce, 0.03 attack cooldown, 2 damage</span></li>
                                <li><span className="ability">Transformed Dart Monkeys inherit crosspath stats
                                     (not crosspath stats from this tower)</span></li>
                                <li><span className="ability">Ability cooldown: 50s</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th className="top_row upgrade_button">Long Range Darts</th>
                        <th className="top_row upgrade_button">Enhanced Eyesight</th>
                        <th className="top_row upgrade_button">Crossbow</th>
                        <th className="top_row upgrade_button">Sharpshooter</th>
                        <th className="top_row upgrade_button last_upgrade_button">Crossbow Master</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$90</td>
                        <td>$200</td>
                        <td>$575</td>
                        <td>$2,050</td>
                        <td>$21,500</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+8 range</li>
                                <li>Enhanced projectile lifespan</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+8 range</li>
                                <li>Further enhanced projectile lifespan</li>
                                <li>+Faster projectile speed</li>
                                <li>+Camo detection</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+12 range</li>
                                <li>Damage 1 -&gt; 3</li>
                                <li>Pierce 2 -&gt; 4</li>
                                <li>+Faster projectile speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Damage 3 -&gt; 6</li>
                                <li>+100% attack speed</li>
                                <li>+Faster projectile speed</li>
                                <li><i>Critical Hit mechanic: every 10th attack deals 50 damage instead of 6</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Damage 6 -&gt; 8</li>
                                <li>+100% attack speed</li>
                                <li>Pierce 4 -&gt; 8</li>
                                <li><i>Critical hit damage 50 -&gt; 80; crits every 5 hits</i></li>
                                <li>+Can pop Lead</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}