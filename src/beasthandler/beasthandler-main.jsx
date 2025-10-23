import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function BeastHandlerMain() {
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
                    <td>1 (staff), 4 (splash)</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.4s</td>
                </tr>
                <tr>
                    <th>Range (staff)</th>
                    <td>Very Small (20 units)</td>
                </tr>
                <tr>
                    <th>Range (beast placement)</th>
                    <td>Large (60 units)</td>
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
                    <td>Small splash attack (staff), can merge beasts with others of same upgrade path</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Piranha"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Barracuda"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Microraptor"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Piranha</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Barracuda</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Great White Shark</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Orca</th>
                        <th id="top4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Megalodon</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$160</td>
                        <td>$810</td>
                        <td>$2,010</td>
                        <td>$12,500</td>
                        <td>$45,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li><i>Note: this upgrade/path can only be purchased when water is in range of Beast Handler</i></li>
                                <li>Summons Piranha: 1 damage, 1 pierce, 0.6s attack cooldown, 25-unit range</li>
                                <li>+Piranha can pop Frozen (but not Camo/Lead)</li>
                                <li><i>Piranha can be redeployed to anywhere in range of Beast Handler</i></li>
                                <li><u>Beast Power capacity: 1</u></li>
                                <li><u>Beast Power per Piranha: 1</u></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>Summons Barracuda: has splash attack and can knock back Bloons—range increased by 5</li>
                                <li>Barracuda min stats (3 BP): 2 damage, 4 splash pierce, 0.6s attack cooldown</li>
                                <li>Barracuda max BP stats: 4 damage, 12 splash pierce, 0.3937s attack cooldown</li>
                                <li><i>Knockback stats: Bloons move backward at 50% speed for 0.2s (75% speed for Lead/Ceramic)</i></li>
                                <li><u>Beast Power capacity: 6</u></li>
                                <li><u>Beast Power per Barracuda: 3</u></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li>Summons Great White Shark: +10 range, latches onto a target Bloon, <u>thrashes</u> around with it
                                 in its jaws—thrashes deal repeated damage to target Bloon while also creating <u>damaging splashes
                                 that knock back</u> surrounding Bloons</li>
                                <li><i>Shark can also <u>insta-pop non-MOAB Bloons</u> by dragging them into the water (though it
                                 <u> can</u> do this with <u>blue MOABs at max BP</u>)</i></li>
                                <li><i>Thrash attack/splash frequency doubled when Shark is dragging/insta-popping a Bloon</i></li>
                                <li>Shark min stats (8 BP): 12 thrash damage, 1.1s jump cooldown, 0.55s between thrashes,
                                     10 splash pierce</li>
                                <li>Shark max BP stats: 36 thrash damage, 1.1s jump cooldown, 0.36s between thrashes,
                                     30 splash pierce</li>
                                <li>+Shark can pop Lead</li>
                                <li><u>Beast Power capacity: 24</u></li>
                                <li><u>Beast Power per Great White Shark: 8</u></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li>Summons Orca: thrashes create larger splashes, increased knockback duration, +10 range,
                                     and can drag/insta-pop blue MOABs/BFBs</li>
                                <li><u>At max BP, Orca can drag ZOMGs (and DDTs, if visible)</u></li>
                                <li>Orca min stats (16 BP): 30 thrash damage, 1.1s jump cooldown, 0.55s thrash cooldown,
                                     20 splash pierce</li>
                                <li>Orca max BP stats: 90 thrash damage, 1.1s jump cooldown, 0.36s thrash cooldown, 60 splash pierce</li>
                                <li><i>Knockback duration/intensity also increases as BP increases (including against MOABs)</i></li>
                                <li><u>Beast Power capacity: 64</u></li>
                                <li><u>Beast Power per Orca: 16</u></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li><i><u>Note: you must have 3 other Orcas merged to this Beast Handler before you can purchase
                                     this upgrade</u></i></li>
                                <li>Summons Megalodon: +10 range, thrash splash radius doubled, improved knockback against MOAB-class
                                     Bloons, and <u>can drag/insta-pop BADs</u></li>
                                <li>Megalodon min stats (84 BP): 1200 thrash damage, 1.1s jump cooldown, 0.455s thrash cooldown,
                                     70 splash pierce</li>
                                <li>Megalodon max BP stats: 1,800 thrash damage, 1.1s jump cooldown, 0.36s thrash cooldown,
                                     90 splash pierce</li>
                                <li><u>Beast Power capacity: 132</u></li>
                                <li><u>Starting Megalodon Power (including 3 Orca Handlers required for upgrade): 84</u></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th className="top_row upgrade_button">Microraptor</th>
                        <th className="top_row upgrade_button">Adasaurus</th>
                        <th className="top_row upgrade_button">Velociraptor</th>
                        <th className="top_row upgrade_button">Tyrannosaurus Rex</th>
                        <th className="top_row upgrade_button last_upgrade_button">Giganotosaurus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$175</td>
                        <td>$830</td>
                        <td>$2,065</td>
                        <td>$9,500</td>
                        <td>$60,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Summons Microraptor: 1 damage, 5 splash pierce, 1s attack cooldown, 20-unit range</li>
                                <li>Microraptor cannot pop Camo/Lead</li>
                                <li><i>Microraptor can be redeployed to anywhere in range of Beast Handler</i></li>
                                <li><u>Beast Power capacity: 1</u></li>
                                <li><u>Beast Power per Microtaptor: 1</u></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Summons Adasaurus: can pop Lead and damage/pierce improved</li>
                                <li>Adasaurus min stats (3 BP): 3 damage, 8 splash pierce, 1s attack cooldown</li>
                                <li>Adasaurus max BP stats: 6 damage, 20 splash pierce, 0.6561s attack cooldown</li>
                                <li>+Can pop Lead</li>
                                <li><u>Beast Power capacity: 6</u></li>
                                <li><u>Beast Power per Adasaurus: 3</u></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Summons Velociraptor: +4 range, and bonus damage to Stunned Bloons</li>
                                <li>Velociraptor min stats (8 BP): 8 damage, +3 Stunned damage, 14 splash damage, 1s attack cooldown</li>
                                <li>Velociraptor max BP stats: 24 damage, +8 Stunned damage, 35 splash pierce, 0.6561s attack cooldown</li>
                                <li><u>Beast Power capacity: 24</u></li>
                                <li><u>Beast Power per Velociraptor: 8</u></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Summons T-Rex: +6 range, <b>gains Stomp Ability—deal damage to & stun up to 400 Bloons in 100-unit
                                     radius for 6s (3s for MOABs/BFBs & 2s for ZOMGs/DDTs)</b></li>
                                <li><span className="ability">Stomp Ability min stats (16 BP): 40s cooldown, 150 damage, 400 pierce</span></li>
                                <li><span className="ability">Stomp Ability max BP stats: 19.03s cooldown, 202 damage, 433 pierce</span></li>
                                <li><span className="ability"> At max BP, Stomp Ability damage can soak through MOAB layers and damage
                                     child Ceramics</span></li>
                                <li>T-Rex min stats (16 BP): 26 damage, +8 Stunned damage, 22 splash pierce, 1s attack cooldown</li>
                                <li>T-Rex max BP stats: 78 damage, +25 Stunned damage, 55 splash pierce, 0.6561s attack cooldown</li>
                                <li><u>Beast Power capacity: 64</u></li>
                                <li><u>Beast Power per T-Rex: 16</u></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i><u>Note: you must have 3 other T-Rexes merged to this Beast Handler before you can purchase
                                     this upgrade</u></i></li>
                                <li>Summons Giganotosaurus: +10 range, can see over all map obstacles—<b>Stomp damages Bloons
                                     anywhere on screen and stuns them for 12s (6s for MOABs/BFBs & 4s for ZOMGs/DDTs)</b></li>
                                <li><span className="ability">Stomp Ability min stats (84 BP): 21.01s cooldown, 700 damage, 645 pierce</span></li>
                                <li><span className="ability">Stomp Ability max BP stats: 15.51s, 1100 damage, 690 pierce</span></li>
                                <li>Giganotosaurus min stats (84 BP): 1150 damage, +383 Stunned damage, 105 splash pierce,
                                     1.078s attack cooldown</li>
                                <li>Giganotosaurus max BP stats: 1550 damage, +516 Stunned damage, 150 splash pierce,
                                     0.9061s attack cooldown</li>
                                <li><u>Beast Power capacity: 132</u></li>
                                <li><u>Starting Giganotosaurus Power (including 3 T-Rex Handlers required for upgrade): 84</u></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th className="top_row upgrade_button">Gyrfalcon</th>
                        <th className="top_row upgrade_button">Horned Owl</th>
                        <th className="top_row upgrade_button">Golden Eagle</th>
                        <th className="top_row upgrade_button">Giant Condor</th>
                        <th className="top_row upgrade_button last_upgrade_button">Pouākai</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$190</td>
                        <td>$860</td>
                        <td>$2,120</td>
                        <td>$9,000</td>
                        <td>$30,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>Note: this upgrade path can only be purchased when track is in range of Beast Handler</i></li>
                                <li>Summons Gyrfalcon: <u>attacks Bloons anywhere in range of Beast Handler: damaging Bloons if
                                     uptrack</u> of user-selected location. If Bloons move downtrack of said location,
                                      <u>Gyrfalcon also grabs Bloons and moves them back</u> to user-selected location</li>
                                <li>Gyrfalcon stats: 1 damage, +1 Regrow damage, 3 pierce, 1s attack cooldown</li>
                                <li>Gyrfalcon cannot pop Ceramic/Camo/Lead Bloons</li>
                                <li><u>Beast Power capacity: 1</u></li>
                                <li><u>Beast Power per Gyrfalcon: 1</u></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Summons Horned Owl: gains Camo detection and can grab/damage Ceramics</li>
                                <li>Horned Owl min stats (3 BP): 1 damage, 6 grab pierce, 1s attack cooldown</li>
                                <li>Horned Owl max BP stats: +50% flight speed, 2 damage, 18 grab pierce, 0.6s attack cooldown</li>
                                <li><i>Note: Ceramics take up 4 grab pierce each rather than 1</i></li>
                                <li>+Can pop Camo/Ceramic</li>
                                <li><u>Beast Power capacity: 6</u></li>
                                <li><u>Beast Power per Horned Owl: 3</u></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Summons Golden Eagle: enhanced damage, pierce, grab radius</li>
                                <li><i>At max beast power, Golden Eagle can grab blue MOABs</i></li>
                                <li>Golden Eagle min stats (8 BP): 1 damage, 30 grab pierce, 1s attack cooldown</li>
                                <li>Golden Eagle max BP stats: +50% flight speed, 3 damage, 90 grab pierce, 0.48s attack cooldown</li>
                                <li><u>Beast Power capacity: 24</u></li>
                                <li><u>Beast Power per Golden Eagle: 8</u></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Summons Giant Condor: can grab multiple MOABs and can grab BFBs, also dealing +10 MOAB damage</li>
                                <li><i>At max beast power, Giant Condor can damage (but not grab) BADs/Boss Bloons</i></li>
                                <li>Giant Condor min stats (16 BP): 2 damage, +10 MOAB damage, 30 grab pierce, 1s attack cooldown</li>
                                <li>Giant Condor max BP stats: +50% flight speed, 6 damage, +10 MOAB damage, 90 grab pierce,
                                     0.48s attack cooldown</li>
                                <li>Grab pierce penalties for Ceramics/MOABs/BFBs are +1/+14/+29 (respectively)</li>
                                <li><u>Beast Power capacity: 64</u></li>
                                <li><u>Beast Power per Giant Condor: 16</u></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i><u>Note: you must have 3 other Condors merged to this Beast Handler before you can purchase
                                     this upgrade</u></i></li>
                                <li>Summons Pouākai: can pop all Bloon types, +80 MOAB damage, can damage (but not grab)
                                     BADs/Boss Bloons, Ceramic pierce penalty removed</li>
                                <li>Pouākai min stats (84 BP): 50 damage, +80 MOAB damage, 300 grab pierce, 0.54s attack cooldown</li>
                                <li>Pouākai max BP stats: +50% flight speed, 90 damage, +80 MOAB damage, 450 grab pierce, 0.28s
                                     attack cooldown</li>
                                <li>Grab pierce penalties for MOABs/BFBs/DDTs/ZOMGs are +14/+29/+29/+59 (respectively)</li>
                                <li>+Can pop ALL Bloon types</li>
                                <li><u>Beast Power capacity: 132</u></li>
                                <li><u>Starting Pouākai Power (including 3 Condor Handlers required for upgrade): 84</u></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}