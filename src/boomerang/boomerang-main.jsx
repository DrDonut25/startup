import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function BoomerangMain() {
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
                    <td>$315</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>4</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.2s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Medium (43 units)</td>
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
                    <td>Circling Boomerang Attacks</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Long Range Rangs"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Red Hot Rangs"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Improved Rangs"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Improved Rangs</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Glaives</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Glaive Ricochet</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>MOAR Glaives</th>
                        <th id="top4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Glaive Lord</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$280</td>
                        <td>$600</td>
                        <td>$2,000</td>
                        <td>$32,500</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>Pierce 4 -&gt; 8</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>Pierce 8 -&gt; 13</li>
                                <li>Larger projectiles</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li>Pierce 13 -&gt; 30</li>
                                <li><i>Ricochet mechanic: glaives jump from Bloon to Bloon, even past map obstacles</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li>Pierce 30 -&gt; 60</li>
                                <li>Attack speed tripled</li>
                                <li>+1 Ceramic damage</li>
                                <li><i>Ricochet jump distance tripled</i></li>
                                <li>Faster projectile speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li>Damage 1 -&gt; 6</li>
                                <li>Ceramic bonus damage 1 -&gt; 10</li>
                                <li><i>Infinite ricochet jump distance</i></li>
                                <li>Can re-hit Bloons with same glaive after 0.6s</li>
                                <li>Deals 100 damage/second to MOABs for 10s</li>
                                <li><i>Orbiting Glaives attack: 200 pierce, 4 damage (with 4 bonus damage to Ceramics),
                                     0.05s attack cooldown, can hit Camo</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Faster Throwing</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>Faster Rangs</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>Bionic Boomerang</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>Turbo Charge</th>
                        <th id="middle4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>Perma Charge</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$175</td>
                        <td>$250</td>
                        <td>$1,250</td>
                        <td>$4,200</td>
                        <td>$35,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="middle_change_0" className="change_list">
                                <li>Attack cooldown 1.2s -&gt; 0.9s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li>Attack cooldown 0.9s -&gt; 0.6s</li>
                                <li>Increased boomerang speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li>Attack cooldown 0.6s -&gt; 0.238s</li>
                                <li>+2 MOAB damage</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li><span className="ability">Ability: gain 7x attack speed and +1 damage for 10s</span></li>
                                <li><span className="ability">Ability cooldown: 45s</span></li>
                                <li><span className="ability">Ability grants Camo detection (with Monkey Knowledge)</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
                                <li>7x greater attack speed</li>
                                <li>Damage 1 -&gt; 4</li>
                                <li><span className="ability">Ability: gain +8 damage for 10s</span></li>
                                <li><span className="ability">Ability cooldown: 45s</span></li>
                                <li><span className="ability">Ability grants Camo detection (with Monkey Knowledge)</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th id="bottom0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 0)}>Long Range Rangs</th>
                        <th id="bottom1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 1)}>Red Hot Rangs</th>
                        <th id="bottom2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 2)}>Kylie Boomerang</th>
                        <th id="bottom3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 3)}>MOAB Press</th>
                        <th id="bottom4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 4)}>MOAB Domination</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$100</td>
                        <td>$300</td>
                        <td>$1,300</td>
                        <td>$2,400</td>
                        <td>$50,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="bottom_change_0" className="change_list">
                                <li>+33% range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_1" className="change_list">
                                <li>Damage 1 -&gt; 2</li>
                                <li>+Can pop Lead</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_2" className="change_list">
                                <li>Pierce 4 -&gt; 18</li>
                                <li><i>Boomerangs now fly in straight path rather than curved</i></li>
                                <li>Can rehit Bloons w/ same boomerang ever 0.3s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_3" className="change_list">
                                <li><i>+Heavy Kylie boomerangs that target MOABs only (thrown separately from Kylie boomerangs)</i></li>
                                <li><i>Heavy Kylie damage: 5</i></li>
                                <li><i>Heavy Kylie pierce: 200</i></li>
                                <li><i>Heavy Kylie attack cooldown: 10s</i></li>
                                <li><i>Heavy Kylie rehit frequency: 0.1s</i></li>
                                <li><i>Heavy Kylie pushes back MOABs/BFBs/ZOMGs/DDTs 2/1/0.5/0.5 units (respectively)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_4" className="change_list">
                                <li>Kylie damage 2 -&gt; 12</li>
                                <li>Kylie pierce 18 -&gt; 54</li>
                                <li>Kylie attack speed doubled</li>
                                <li><i>Heavy Kylie damage 5 -&gt; 25</i></li>
                                <li><i>Heavy Kylie pierce 200 -&gt; 300</i></li>
                                <li><i>Heavy Kylie attack speed doubled</i></li>
                                <li><i><u>Heavy Kylies explode</u> rather than returning: 100 explosion damage w/ 50-unit blast radius
                                 and 40 pierce. Explosion sets Bloons on fire for 50 damage/s for 4s</i></li>
                                <li><i>Heavy Kylies ignore map obstacles</i></li>
                                <li><i>Heavy Kylies can hit BADs and Boss Bloons</i></li>
                                <li><i>Heavy Kylies now also <u>stun</u> MOABs for 0.25s</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}