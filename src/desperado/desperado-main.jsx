import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function DesperadoMain() {
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
                    <td>$300</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>2x1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.2s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Large (60 units)</td>
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
                    <td>2-shot burst attacks</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Eagle Eye"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Wanderer"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Bullseye"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Quickdraw</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Standoff</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Big Iron</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Twin Sixes</th>
                        <th id="top4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>The Blazing Sun</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$200</td>
                        <td>$1,200</td>
                        <td>$4,800</td>
                        <td>$17,500</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>+1% attack speed per unit distance a Bloon is from Desperado (up to +50% attack speed)</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>+60% attack speed if only 1 Bloon in range; -15% attack speed/Bloon in range
                                     (0% reduction minimum)</li>
                                <li>In other words, Desperado attacks faster if fewer than 5 Bloons in range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li>Shots fired/attack 2 -&gt; 6</li>
                                <li>Damage 1 -&gt; 2</li>
                                <li>Standoff bonus attack speed +60% (max) -&gt; 120% (max)</li>
                                <li>Standoff bonus still applies only when fewer than 5 Bloons in range
                                     (-30% attack speed reduction per Bloon in range)</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li>Shots fired/attack 6 -&gt; 12</li>
                                <li>Damage/shot 2 -&gt; 6</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li>Attack cooldown (between bursts) 1.2s -&gt; 0.3s</li>
                                <li>Damage/shot 6 -&gt; 20</li>
                                <li>+40 Ceramic damage/shot</li>
                                <li><i>+Overheat mechanic: when Desperado fires 55 shots (without stopping for longer than 0.88s),
                                     bullets set nearby Bloons on fire (8 pierce/shot in 12-unit radius), dealing 50 damage/s for
                                      12.05s</i></li>
                                <li><i>Desperado attack cooldown reduces up to 0.88s during overheat (eventually leading to hard reset
                                     on overheat timer), but destroying Bloons slows overheating</i></li>
                                <li><i>+Shots can pop Lead, though burn effect can't pop Purple</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th className="top_row upgrade_button">Eagle Eye</th>
                        <th className="top_row upgrade_button">Bullseye</th>
                        <th className="top_row upgrade_button">Deadeye</th>
                        <th className="top_row upgrade_button">Bounty Hunter</th>
                        <th className="top_row upgrade_button last_upgrade_button">Golden Justice</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$150</td>
                        <td>$350</td>
                        <td>$3,000</td>
                        <td>$6,500</td>
                        <td>$42,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+Camo detection</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>+Crit mechanic: chance for attacks to deal 4x damage</i></li>
                                <li><i>Crit chance: 2.5% (min); 17.5% (max)</i></li>
                                <li><i>Crit change increased by 0.25% for every unit further the Bloon is from Desperado</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Pistol damage 1 -&gt; 6</li>
                                <li>Pistol range 60 units -&gt; 28 units</li>
                                <li>+Rifle secondary attack: 80 range, 4 pierce, 12 damage, +12 Fortified damage, 1.59s attack cooldown</li>
                                <li><span className="ability">Take Aim Ability: give selected tower (and its subtowers, e.g. Engineer
                                     sentries) Camo detection, +25% range, 50% reduced projectile spread for 15s </span></li>
                                <li><span className="ability">Take Aim Ability cooldown: 30s</span></li>
                                <li>+Can pop Lead</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Pistol damage 6 -&gt; 16</li>
                                <li>+16 Ceramic damage (pistol)</li>
                                <li>Rifle damage 12 -&gt; 24</li>
                                <li>Rifle Fortified bonus damage 12 -&gt; 24</li>
                                <li><i>+Marking attack: marks 1 Bloon every 9s (can mark MOABs)</i></li>
                                <li><i>Marked Bloons take double damage and give double cash, but marking only lasts for one layer</i></li>
                                <li><span className="ability">Take Aim ability now grants +50% range, 80% reduced projectile spread,
                                     and ability to pop Camo, Black, White, and Purple Bloons to selected tower</span></li>
                                <li><span className="ability">Marked to Pop Ability: marks up to 30 Bloons over 2s, then Desperado rapidly
                                     attacks marked Bloons for 1s</span></li>
                                <li><span className="ability">Marked to Pop attacks deal 30 damage/shot (60 damage when including 2x marked
                                     Bloon damage) and have infinite range (unless blocked by map obstacle)</span></li>
                                <li><span className="ability">Marked to Pop Ability cooldown: 45s</span></li>
                                <li><i>+All Desperados can now prioritize targeting of marked Bloons</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Pistol damage 16 -&gt; 24</li>
                                <li>Pistol Ceramic bonus damage 16 -&gt;24</li>
                                <li><i>+Pistol shots now mark Bloons</i></li>
                                <li>+Pistol shots now explode, w/ 24 explosion damage & 8 explosion pierce. Explosions can hit original
                                     pistol target</li>
                                <li>Rifle damage 24 -&gt; 280</li>
                                <li>Rifle Fortified bonus damage 24 -&gt; 280</li>
                                <li>Rifle attack cooldown 1.59s -&gt; 3.18s</li>
                                <li>Rifle pierce 4 -&gt; INFINITE</li>
                                <li><i>Pistol & rifle attack Crit damage 4x -&gt; 8x</i></li>
                                <li><i>Bloon marking cooldown 9s -&gt; 3s</i></li>
                                <li><span className="ability">Marked to Pop attack damage 30 -&gt; 300 (not including 2x marked Bloon bonus)</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th className="top_row upgrade_button">Wanderer</th>
                        <th className="top_row upgrade_button">Nomad</th>
                        <th className="top_row upgrade_button">Enforcer</th>
                        <th className="top_row upgrade_button">Avenger</th>
                        <th className="top_row upgrade_button last_upgrade_button">The Desert Phantom</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$220</td>
                        <td>$280</td>
                        <td>$2,100</td>
                        <td>$9,500</td>
                        <td>$31,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+45% attack speed (but -15% attack speed for every tower in radius. Also applies separately to
                                     secondary weapon ranges)</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+2% attack speed/Bloon in range (+50% max. Also applies separately to secondary weapons)</li>
                                <li><i>When lives are lost, +16 range & +40% attack speed for 15s</i></li>
                                <li><i>If lives lost caused by leaked Bloon, generate 2x leaked Bloon's total cash value</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Pistol damage 1 -&gt; 6</li>
                                <li>+Shotgun secondary attack: 28 range, 3 pierce, 3 damage/projectile (3 projectiles/shot), fires
                                     twice per "attack" (like pistol), 1.97s attack cooldown</li>
                                <li>Shotgun pellets knock back non-MOAB/Lead/Ceramic Bloons</li>
                                <li>+Shotgun can hit Frozen Bloons</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Pistol damage 6 -&gt; 18</li>
                                <li>+18 Ceramic damage (pistol)</li>
                                <li>+Shotgun now knocks back Lead/Ceramic Bloons; can also knockback MOABs (albeit at reduced intensity)</li>
                                <li>+Shotgun pellets now split into 3 shrapnel projectiles/pelletin 360° area (1 shrapnel damage,
                                     6 shrapnel pierce)</li>
                                <li><i>+Lost lives additionally cause Rainbow & weaker Bloons to take only 1 life each for 15s</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Pistol damage 18 -&gt; 50</li>
                                <li>Pistol Ceramic bonus damage 18 -&gt; 50</li>
                                <li>Pistol attack cooldown 1.2s -&gt; 0.6s</li>
                                <li>Shotgun pellet damage 3 -&gt; 10</li>
                                <li>+20 MOAB damage (shotgun)</li>
                                <li>Shrapnel damage 1 -&gt; 3</li>
                                <li>Shrapnel pierce 6 -&gt; 10</li>
                                <li><i>+Shrapnel now sets Bloons on fire: 10 damage every 1.5s for 9.05s</i></li>
                                <li><i>Fire deals +10 damage to Ceramics every 1.5s</i></li>
                                <li><i>If Bloons hit by Shrapnel pops within 4.55s, it explodes (5 fire-type damage, +15 Ceramic
                                     damage, 3 pierce)</i></li>
                                <li>Shotgun pellets knock MOABs/Bloons much further back</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}