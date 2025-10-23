import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function BuccaneerMain() {
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
                    <td>4</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Large (60 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Slightly Large</td>
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
                    <td>Can fire simultaneously from cannons on both sides of the ship</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Faster Shooting"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Double Shot"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Grape Shot"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th className="top_row upgrade_button">Faster Shooting</th>
                        <th className="top_row upgrade_button">Double Shot</th>
                        <th className="top_row upgrade_button">Destroyer</th>
                        <th className="top_row upgrade_button">Aircraft Carrier</th>
                        <th className="top_row upgrade_button last_upgrade_button">Carrier Flagship</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$275</td>
                        <td>$425</td>
                        <td>$3,050</td>
                        <td>$8,000</td>
                        <td>$24,500</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 1s -&gt; 0.75s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+1 dart/attack</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Attack cooldown 0.75s -&gt; 0.15s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>+3 mini fighter planes: have infinite range and have 3 different attack types (see below)</i></li>
                                <li><i>Forward dart attack: 2 darts fired in rapid succession as plane approaches target—2 damage,
                                     4 pierce, attack cooldown 0.18s per dart</i></li>
                                <li><i>Radial dart attack: constantly fires 8 darts in all directions—4 damage, 9 pierce, 1.2 attack
                                     cooldown per dart</i></li>
                                <li><i>MOAB missile attack: sends out seeking missiles that target & explode on MOABs—15 damage,
                                     3 pierce, 3s attack cooldown per missile (note: missiles cannot pop Black)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Buccaneer attack pierce 4 -&gt; 7</li>
                                <li><i>+3 Ceramic damage (forward dart & radial dart attacks)</i></li>
                                <li><i>Forward dart attack pierce 4 -&gt; 7</i></li>
                                <li><i>Radial dart attack pierce 9 -&gt; 14</i></li>
                                <li><i>MOAB missile attack damage 15 -&gt; 30</i></li>
                                <li><i>MOAB missile pierce 3 -&gt; 4</i></li>
                                <li><i>MOAB missile attack cooldown 3s -&gt; 1.5s</i></li>
                                <li><i>+2 platforms where medium-footprint towers or smaller can be placed on this Buccaneer</i></li>
                                <li><i>+Carrier Flagship buff: all water-based monkeys & Monkey Aces receive -15% attack cooldown</i></li>
                                <li><i>+MOAB missiles can pop Black</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th className="top_row upgrade_button">Grape Shot</th>
                        <th className="top_row upgrade_button">Hot Shot</th>
                        <th className="top_row upgrade_button">Cannon Ship</th>
                        <th className="top_row upgrade_button">Monkey Pirates</th>
                        <th className="top_row upgrade_button last_upgrade_button">Pirate Lord</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$550</td>
                        <td>$500</td>
                        <td>$900</td>
                        <td>$3,900</td>
                        <td>$27,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>+Grape shot attack: fires 5 grapes in 90° forward cone—1 damage, 1 pierce, attack cooldown
                                     1.3s per grape</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+Grapes set Bloons on fire, dealing 2 damage every 1.5s for 3.1s</li>
                                <li>+Grapes can pop Lead, but not Purple</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li><i>Dart attack replaced w/ cannon attack: fires explosive bombs that release 8 shrapnel fragments
                                     in all directions—2 damage, 28 pierce, 1.3s attack cooldown</i></li>
                                <li><i>Bomb shrapnel stats: 1 damage, 1 pierce per shrapnel fragment</i></li>
                                <li>Grape damage 1 -&gt; 3</li>
                                <li>+Cannon can pop Lead, but not Black</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+2 cannons: fires 3 bombs per attack instead of 1</li>
                                <li>Bomb damage 2 -&gt; 3</li>
                                <li>+5 MOAB damage (bomb)</li>
                                <li>Grape damage 3 -&gt; 5</li>
                                <li>+2 Ceramic damage (grape)</li>
                                <li><span className="ability">MOAB Takedown Ability: destroy 1 MOAB/BFB/DDT (if visible) from anywhere on
                                     screen</span></li>
                                <li><span className="ability">Ability cooldown: 45s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Grapeshot & cannon attack cooldown 1.3s -&gt; 0.65s</li>
                                <li>Bomb frag damage 1 -&gt; 6; +3 MOAB damage (bomb frag)</li>
                                <li>Bomb MOAB bonus damage 5 -&gt; 8</li>
                                <li>Grape damage 5 -&gt; 8</li>
                                <li>Grape Ceramic bonus damage 2 -&gt; 8</li>
                                <li><span className="ability">MOAB Takedown can now hook/destroy 6 MOABs at once (though ZOMGs require 3
                                     hooks each to destroy)</span></li>
                                <li><span className="ability">Ability cooldown 45s -&gt; 30s</span></li>
                                <li><span className="ability">+MOABs popped by ability now generate 2x their normal income</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th className="top_row upgrade_button">Long Range</th>
                        <th className="top_row upgrade_button">Crow's Nest</th>
                        <th className="top_row upgrade_button">Merchantman</th>
                        <th className="top_row upgrade_button">Favored Trades</th>
                        <th className="top_row upgrade_button last_upgrade_button">Trade Empire</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$350</td>
                        <td>$2,400</td>
                        <td>$5,500</td>
                        <td>$23,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+11 range</li>
                                <li>Pierce 4 -&gt; 6</li>
                                <li>+25% projectile speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+Camo detection</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>+Generates $200 at end of each round</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Cash generated/round $200 -&gt; $500</li>
                                <li>Attack cooldown 1s -&gt; 0.5s</li>
                                <li><i>+Increased sellback buff: increases sell value of in-range towers by 4% (stacks 3
                                     times up to 12%)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul className="change_list">
                                <li>Cash generated/round $500 -&gt; $800</li>
                                <li>Damage 1 -&gt; 2</li>
                                <li><i>Up to 20 Merchantmen on screen receive +1 damage, +1 Ceramic damage, +1 MOAB damage to all
                                     attacks</i></li>
                                <li>Up to 20 Merchantmen receive additional cash generation/round: +$10 per Merchantman or $20
                                     per Favored Trades (max 20)</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}