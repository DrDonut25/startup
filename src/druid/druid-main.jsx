import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function DruidMain() {
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
                    <td>5x1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.1s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Small (35 units)</td>
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
                    <td>Throws 5 projectiles/attack in 25-degree cone</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Hard Thorns"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Thorn Swarm"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Heart of Oak"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Hard Thorns</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Heart of Thunder</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Druid of the Storm</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Ball Lightning</th>
                        <th id="top4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Monarch of Storms</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$350</td>
                        <td>$850</td>
                        <td>$1,700</td>
                        <td>$4,500</td>
                        <td>$60,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>Pierce 1 -&gt; 2</li>
                                <li>+Can pop all Bloon types except Camo</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li><i>+Heart of Thunder attack: fires lightning, splitting recursively into 2 forks of lightning that
                                     can hit even more Bloons—2 damage, 31 total pierce across all forks, 2.3s attack cooldown</i></li>
                                <li><i>Lightning jumps instantaneously from Bloon to Bloon, even behind map obstacles</i></li>
                                <li><i>Lightning cannot pop Purple</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li><i>+Tornado attack: fires seeking mini-tornadoes at Bloons, dealing 0 damage but blowing them
                                     100-200 units backwards</i></li>
                                <li><i>Tornado stats: 0 damage, 24 pierce (though Ceramics eat up 2 pierce instead of 1), 2.5s
                                     attack cooldown</i></li>
                                <li><i>Tornadoes cannot blow back White, Purple, or MOAB-class Bloons</i></li>
                                <li><i>Blown black Bloons lose Glued/Frozen property</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li><i>+Lightning ball attack: fires slow-moving balls of lightning every 6s that create frequent arcs
                                     of lightning, while ball itself freezes non-White/Lead Bloons on contact for 4.5s (soaks through
                                      4 layers)</i></li>
                                <li><i>Lightning ball arc stats: 3 damage, 31 total pierce, 5 max fork count, 0.35s
                                     attack cooldown</i></li>
                                <li><i>Heart of Thunder attack damage 2 -&gt; 3</i></li>
                                <li><i>Tornadoes blow back Bloons by additional 50 units (150-250 units total)</i></li>
                                <li><i>Tornado pierce 24 -&gt; 60</i></li>
                                <li><i>Tornado Ceramic pierce penalty removed (Ceramics consume 1 pierce each instead of 2)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li><i>+Superstorm attack: fires slow-moving electric tornado every 4s that deals 120 damage and blows
                                     back MOAB-class Bloons by minimum of 100 units (50 if ZOMG); superstorm projectile also fires ball
                                      lightning every second in random direction</i></li>
                                <li><i>Superstorm projectile ignores map obstacles and bounces off map borders</i></li>
                                <li><i>Superstorm has 200 pierce, but MOABs/BFBs/DDTs/ZOMGs take up 4/14/7/44 pierce each
                                     (respectively)</i></li>
                                <li><i>Ball lightning (both from Superstorm and from previous upgrade) damage 3 -&gt; 10</i></li>
                                <li><i>Heart of Thunder damage 3 -&gt; 30</i></li>
                                <li>+Camo detection</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Thorn Swarm</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>Heart of Oak</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>Druid of the Jungle</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>Jungle's Bounty</th>
                        <th id="middle4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>Spirit of the Forest</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$350</td>
                        <td>$1,050</td>
                        <td>$4,900</td>
                        <td>$35,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="middle_change_0" className="change_list">
                                <li>Thorns per shot 5 -&gt; 8</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li><i>+All attacks remove Regrow property from Bloons</i></li>
                                <li><i>+All attacks gain +1% pierce (up to +100%) for every life gained after this upgrade is purchased
                                     (does not apply to Ball Lightning)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li><i>+Vine grab attack: vine destroys a single non-MOAB Bloon anywhere on screen—destruction time
                                     depends on how many layers Bloon has—destroyed Bloons leave behind temporary thorn pile that pop
                                      Bloons passing over it</i></li>
                                <li><i>Vine grab attack cooldown is 2.6s unless Bloon takes longer than 1.2s to be fully destroyed,
                                     then attack cooldown is Bloon destruction time + 1.4s</i></li>
                                <li><i>Vine thorn pile stats: 0.3s rehit/pierce refreh cooldown, 20 pierce, 1 damage,
                                     4.5s lifespan</i></li>
                                <li><i>Vines & thorn piles cannot pop Lead/Camo</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li><span className="ability">Ability: generate $320 + ($130 * number of in-range Banana Farms) and 1 life</span></li>
                                <li><span className="ability">Ability cooldown: 60s (max 3 uses per round)</span></li>
                                <li>+10 range</li>
                                <li><i>Thorn pile rehit cooldown 0.3s -&gt; 0.2s</i></li>
                                <li><i>Thorn pile pierce 20 -&gt; 30</i></li>
                                <li><i>Thorn pile damage 1 -&gt; 2</i></li>
                                <li><i>Thorn pile lifespan 4.5s -&gt; 9s</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
                                <li><span className="ability">Ability base cash generation $320 -&gt; $1,280 (Banana Farm bonus unchanged);
                                     life generation 1 -&gt; 25</span></li>
                                <li><i>+Now generates $1,000 at end of each round</i></li>
                                <li><i>+Vine zone attack: Grows thorny vines on entire track that constantly damage Bloons every
                                     0.5s—damage depends on proximity to Druid (shown visually with vine color)</i></li>
                                <li><i>Inner Vine Zone (shown by light blue-colored thorns and green stems) deals 4 damage &
                                     +26 Ceramic/MOAB damage</i></li>
                                <li><i>Middle Vine Zone (shown by light green thorns and brownish-green stems) deals 3 damage &
                                     +12 Ceramic/MOAB damage</i></li>
                                <li><i>Outer Vine Zone (shown by dark green thorns and brown stems) deals 2 damage &
                                     +8 Ceramic/MOAB damage</i></li>
                                <li><i>Thorn pile damage 2 -&gt; 5</i></li>
                                <li>Main attack damage 1 -&gt; 6 per thorn</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th id="bottom0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 0)}>Druidic Reach</th>
                        <th id="bottom1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 1)}>Heart of Vengeance</th>
                        <th id="bottom2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 2)}>Druid of Wrath</th>
                        <th id="bottom3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 3)}>Poplust</th>
                        <th id="bottom4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 4)}>Avatar of Wrath</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$100</td>
                        <td>$300</td>
                        <td>$600</td>
                        <td>$2,350</td>
                        <td>$45,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="bottom_change_0" className="change_list">
                                <li>+10 range</li>
                                <li>+33% lifespan of all attacks</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_1" className="change_list">
                                <li>+10% attack speed</li>
                                <li>+1% attack speed for every life lost after this upgrade is purchased (maxes at +50%)</li>
                                <li>(Lives gained after upgrade is purchased do not reduce attack speed, but regaining lives that were
                                     lost after upgrade is purchased will remove the respective attack speed bonus)</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_2" className="change_list">
                                <li><i>+Wrath mechanic: so long as Druid is attacking Bloons (resets after Druid is idle for &gt;2s), gain
                                     +5% attack speed for every 10 damage dealt. Maxes out at +100% attack speed</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_3" className="change_list">
                                <li><i>+Poplust buff: all other in-range Druids (not including this one) receive +15%
                                     attack speed/pierce</i></li>
                                <li><i>Poplust buff stacks up to 5 times</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_4" className="change_list">
                                <li><i>For every 3,000 leak-damage-worth of Bloons on screen (aka the number beneath leaked Bloons when
                                     you get a Game Over screen), this Druid gains +1 damage on all attacks (up to +30 damage max)</i></li>
                                <li>+5 range</li>
                                <li>Damage 1 -&gt; 4</li>
                                <li>Attack speed doubled</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}