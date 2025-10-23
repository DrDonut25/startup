import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function WizardMain() {
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
                    <td>$250</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>3</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.1s</td>
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
                    <td>White, Black, Frozen</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Camo, Lead, Purple</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>None</td>
                </tr>
            </tbody>
        </table>

        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Fireball"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Intense Magic"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Monkey Sense"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Guided Magic</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Arcane Blast</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Arcane Mastery</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Arcane Spikes</th>
                        <th id="top4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Archmage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$175</td>
                        <td>$450</td>
                        <td>$1,450</td>
                        <td>$10,000</td>
                        <td>$32,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>+Projectiles now home in on Bloons</li>
                                <li>+Wizard now ignores map obstacles</li>
                                <li>Doubled projectile lifespan</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>Damage 1 -&gt; 2</li>
                                <li>+50% projectile size</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li>+20 range</li>
                                <li>Attack cooldown 1.1s -&gt; 0.55s</li>
                                <li>Pierce 3 -&gt; 7</li>
                                <li>Damage 2 -&gt; 3</li>
                                <li>+75% projectile lifespan</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li>Attack cooldown 0.55s -&gt; 0.275s</li>
                                <li>Damage 3 -&gt; 6</li>
                                <li>+10 MOAB damage</li>
                                <li>+Can pop Lead</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li>Attack cooldown 0.275s -&gt; 0.1375s</li>
                                <li>Damage 6 -&gt; 8</li>
                                <li>MOAB bonus damage 10 -&gt; 19</li>
                                <li>Pierce 7 -&gt; 11</li>
                                <li><i>+Dragon's Breath attack: 2 damage, +8 MOAB damage, 3 pierce, 0.0675s attack cooldown</i></li>
                                <li><i>Flames set Bloons on fire, dealing 1 damage every 1.5s for 3s</i></li>
                                <li><i>+Shimmer attack: Archmage removes camo from up to 500 Bloons in 75-unit radius every second</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Fireball</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>Wall of Fire</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>Dragon's Breath</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>Summon Phoenix</th>
                        <th id="middle4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>Wizard Lord Phoenix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$300</td>
                        <td>$800</td>
                        <td>$3,300</td>
                        <td>$6,000</td>
                        <td>$50,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="middle_change_0" className="change_list">
                                <li>+Fireball attack: fireball deals 1 damage to 1 Bloon, and explosion deals additional 1 damage to up
                                     to 15 Bloons</li>
                                <li>Fireball attack cooldown: 2.2s</li>
                                <li>+Fireballs pop Lead</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li>+Firewall attack: places wall of fire on track every 6.5s—wall of fire lasts 4.5s</li>
                                <li>Wall of fire stats: 1 damage every 0.15s, 10 pierce</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li>+Dragon's Breath attack: 2 damage, 3 pierce, 0.135s attack cooldown</li>
                                <li>Dragon's Breath attacks set Bloons on fire, dealing 1 damage every 1.5s for 3s</li>
                                <li>Now fires 3 fireballs/attack in 60° cone</li>
                                <li>Fireball explosion damage 1 -&gt; 3</li>
                                <li>Wall of fire attack cooldown 6.5s -&gt; 4.5s</li>
                                <li>Wall of fire damage cooldown 0.15s -&gt; 0.1s</li>
                                <li>Wall of fire pierce 10 -&gt; 20</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li><span className="ability">Ability: summon Phoenix that attacks Bloons anywhere on the map without
                                     regard to map obstacles for 20s</span></li>
                                <li><span className="ability">Phoenix stats: 5 damage, 8 pierce, 0.1s attack cooldown</span></li>
                                <li><span className="ability">Ability cooldown: 45s</span></li>
                                <li>Now fires 2 Dragon's Breath flame projectiles/attack in 10° cone</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
                                <li><i>+Phoenix subtower becomes permanent</i></li>
                                <li><span className="ability">Lava Phoenix Ability: transform Wizard Monkey into lava phoenix that
                                     attacks Bloons with both flame and meteor attacks for 20s</span></li>
                                <li><span className="ability">Lava phoenix flame attack stats: 20 damage, 50 pierce, 0.1s attack
                                     cooldown</span></li>
                                <li><span className="ability">Lava phoenix meteor attacks (fires 8 meteors in all directions):
                                     50 damage, 300 pierce, 1s attack cooldown</span></li>
                                <li><span className="ability">+Lava phoenix meteors can pop all Bloon types</span></li>
                                <li><span className="ability">Ability cooldown: 45s</span></li>
                                <li>Fireball explosion damage 3 -&gt; 9</li>
                                <li>Wall of fire damage 1 -&gt; 5</li>
                                <li>Now fires 3 Dragon's Breath flame projectiles/attack</li>
                                <li>Dragon's Breath attack pierce 3 -&gt; 15</li>
                                <li>Dragon's Breath damage over time increased to 20 damage/s</li>
                                <li>Dragon's Breath damage over time duration 3s -&gt; 15s</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th className="top_row upgrade_button">Intense Magic</th>
                        <th className="top_row upgrade_button">Monkey Sense</th>
                        <th className="top_row upgrade_button">Shimmer</th>
                        <th className="top_row upgrade_button">Necromancer: Unpopped Army</th>
                        <th className="top_row upgrade_button last_upgrade_button">Prince of Darkness</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$300</td>
                        <td>$300</td>
                        <td>$1,500</td>
                        <td>$2,800</td>
                        <td>$26,500</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Pierce 3 -&gt; 8</li>
                                <li>Doubled projectile speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+10 range</li>
                                <li>+Camo detection</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>+Shimmer attack: removes Camo from up to 500 Bloons in 75-unit radius every 2s</i></li>
                                <li>+10 range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>+Graveyard mechanic: for every 1 Bloon layer popped within 70 units of Wizard (a little farther
                                     than its display range), add 1 point to the Graveyard counter (7-10 points/layer after Round 80).
                                      Graveyard maxed at 500 points</i></li>
                                <li>All Wizard monkey attacks gain +1 damage for every 200 Graveyard points</li>
                                <li><i>+Undead Bloons attack: summon group of 1-4 undead Bloons every 1.5s (at cost of 1-10 Graveyard
                                     points)—undead Bloons travel backwards on track at speed of Red Bloons</i></li>
                                <li><i>Undead Bloons summon +10% faster for every 100 Graveyard points in store</i></li>
                                <li><i>Undead Bloons automatically spawn at locations closest to exit, though player can choose a
                                     different position on targeting menu</i></li>
                                <li><i>Undead Bloon stats: 2 damage, 2-11 pierce (depending on Graveyard points spent to summon this
                                     Undead Bloon), 7s lifespan</i></li>
                                <li>+Undead Bloons can pop ALL Bloon types</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>Graveyard capacity 500 points -&gt; 3,000 points</i></li>
                                <li>Wizard monkey attacks instead gain +1 damage for every 300 stored Graveyard points instead of 200</li>
                                <li><i>+Can now summon undead MOABs and BFBs: can summon MOABs when Graveyard point counter is between
                                     20-2099 and BFBs when Graveyard point counter is 2100 or higher</i></li>
                                <li><i>Undead MOAB stats: 43 damage, 20 pierce, 3s summon cooldown, 20 Graveyard point cost,
                                     15s lifespan</i></li>
                                <li><i>Undead BFB stats: 103 damage, 50 pierce, 3s summon cooldown, 50 Graveyard point cost,
                                     10s lifespan</i></li>
                                <li><i>+Necromancy buff: Prince of Darkness and all Necromancers deal +3 extra damage from
                                     Undead Bloons</i></li>
                                <li>Magic bolt (base attack) cooldown 1.1s -&gt; 0.275s</li>
                                <li><i>Shimmer attack cooldown 2s -&gt; 1s</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}