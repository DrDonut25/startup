import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function MortarMain() {
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
                    <td>$600</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>25</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>2s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Infinite</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Large</td>
                </tr>
                <tr>
                    <th>Can pop</th>
                    <td>Purple, White, Lead</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Camo, Black</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>Can target selected point without regard to map obstacles</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Faster Reload"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Rapid Reload"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Increased Accuracy"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Bigger Blast</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Bloon Buster</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Shell Shock</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>The Big One</th>
                        <th id="top4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>The Biggest One</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$500</td>
                        <td>$500</td>
                        <td>$825</td>
                        <td>$7,200</td>
                        <td>$36,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>Blast radius 20 units -&gt; 28 units</li>
                                <li>Pierce 25 -&gt; 45</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>Damage 2 -&gt; 3</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li>Blast radius 28 units -&gt; 38 units</li>
                                <li><i>+Shockwave blasts: deal 1 damage to up to 45 Bloons within 57-unit radius</i></li>
                                <li>+Stunning blasts: stun up to 45 Bloons within 19-unit radius for 0.5s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li>Blast radius 38 units -&gt; 58 units</li>
                                <li>Damage 3 -&gt; 10</li>
                                <li><i>Shockwave radius 57 units -&gt; 87 units</i></li>
                                <li><i>Shockwave damage 1 -&gt; 2</i></li>
                                <li><i>+2 Ceramic damage (shockwave)</i></li>
                                <li><i>+Shockwaves can now pop Black (other 2 blast types can't though)</i></li>
                                <li><i>Stun radius 19 units -&gt; 29 units</i></li>
                                <li><i>Stun duration 0.5s -&gt; 0.75s</i></li>
                                <li>Pierce 45 -&gt; 85 (all blasts)</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li>Blast radius 58 units -&gt; 74 units</li>
                                <li>Damage 10 -&gt; 25</li>
                                <li>+30 Ceramic/MOAB damage (main blast)</li>
                                <li><i>Shockwave radius 87 units -&gt; 111 units</i></li>
                                <li><i>Ceramic bonus damage 2 -&gt; 20 (shockwave)</i></li>
                                <li><i>Stun radius 29 units -&gt; 37 units</i></li>
                                <li><i>+Can now stun blue MOABs/BFBs/DDTs/ZOMGs for 0.5s/0.3s/0.3s/0.1s (respectively)</i></li>
                                <li>Pierce 85 -&gt; 200 (all blasts)</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th className="top_row upgrade_button">Faster Reload</th>
                        <th className="top_row upgrade_button">Rapid Reload</th>
                        <th className="top_row upgrade_button">Heavy Shells</th>
                        <th className="top_row upgrade_button">Artillery Battery</th>
                        <th className="top_row upgrade_button last_upgrade_button">Pop and Awe</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$300</td>
                        <td>$500</td>
                        <td>$900</td>
                        <td>$6,500</td>
                        <td>$38,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 2s -&gt; 1.5s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 1.5s -&gt; 1.08s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 1.08s -&gt; 0.81s</li>
                                <li>+1 Lead/DDT/MOAB-class/Fortified damage</li>
                                <li>+2 damage to stunned Bloons</li>
                                <li>+3 Ceramic damage</li>
                                <li>+Can now pop all Bloon types</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 0.81s -&gt; 0.27s</li>
                                <li><span className="ability">Ability: gain 4x attack speed and 15% blast radius for 8s</span></li>
                                <li><span className="ability">Ability cooldown: 60s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 0.27s -&gt; 0.0675s</li>
                                <li>Blast radius 20 -&gt; 23</li>
                                <li>Stunned Bloon bonus damage 2 -&gt; 8</li>
                                <li>Other Artillery Batteries gain '+1 damage to BADs/Boss Bloons</li>
                                <li><span className="ability">Ability: repeatedly deal 20 damage to & stun all Bloons on screen every
                                     second for 8s</span></li>
                                <li><span className="ability">Ability cooldown: 60s</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th className="top_row upgrade_button">Increased Accuracy</th>
                        <th className="top_row upgrade_button">Burny Stuff</th>
                        <th className="top_row upgrade_button">Signal Flare</th>
                        <th className="top_row upgrade_button">Shattering Shells</th>
                        <th className="top_row upgrade_button last_upgrade_button">Blooncineration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$500</td>
                        <td>$1,000</td>
                        <td>$9,500</td>
                        <td>$40,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Explosions have ~50% reduced spread</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>+Attacks set Bloons on fire: 1 every 1.25s for 3.85s (cannot pop Purple)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+Camo detection</li>
                                <li><i>+Secondary explosions remove Camo from up to 50 Bloons within 52-unit radius (including DDTs)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+Main blasts now remove Regrow/Fortified property from all Bloons up to BFBs</li>
                                <li><i>Burny stuff now deals 5 damage every 1.25s for 3.85s</i></li>
                                <li><i>+20 Burny Stuff damage/1.25s to MOABs</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+Main blasts now remove Fortified property from DDTs</li>
                                <li><i>Burny Stuff now deals 5 damage every 0.75s for 3.85s</i></li>
                                <li><i>Burny Stuff MOAB bonus damage over time 20/1.25s -&gt; 95/0.75s</i></li>
                                <li><i>Blasts now leave behind a wall of fire: 1 damage, 20 pierce, rehits every 0.1s, lasts 4.5s</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}