import React from 'react';

import '../tower.css';

export function EngineerMain() {
  return (
    <main>
        <table className="base_stats">
            <thead>
                <tr>
                   <th colSpan="2" className="base_head">Base Stats</th> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Cost</th>
                    <td>$350</td>
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
                    <td>0.7s</td>
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
                <li style={{color: '#f8f9fa'}}>You selected "Oversize Nails"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Larger Service Area"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Pin"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th className="top_row upgrade_button">Sentry Gun</th>
                        <th className="top_row upgrade_button">Faster Engineering</th>
                        <th className="top_row upgrade_button">Sprockets</th>
                        <th className="top_row upgrade_button">Sentry Expert</th>
                        <th className="top_row upgrade_button last_upgrade_button">Sentry Champion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$500</td>
                        <td>$400</td>
                        <td>$575</td>
                        <td>$2,500</td>
                        <td>$32,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>+Now deploys sentry turrets every 10s—turrets last 25s before expiring</i></li>
                                <li><i>Sentry stats: 1 damage, 2 pierce, 0.95s attack cooldown, 45-unit range</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>Now deploys sentry turrets every 5s instead of 10s</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Attack cooldown 0.7s -&gt; 0.35s</li>
                                <li><i>Sentry attack cooldown 0.95s -&gt; 0.475s</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>Depending on what Bloon types are on screen, Engineer now deploys 1 of 4 types of new sentry guns
                                     (replaces standard green sentries from previous upgrades)</i></li>
                                <li><i>+Red Crushing Sentry (deployed when Purple/Ceramic present): fires spike balls that bounce off
                                     map obstacles, but do not rehit Bloons after bouncing—2 damage, +4 Ceramic damage, 22 pierce,
                                      1.2s attack cooldown</i></li>
                                <li><i>+Black Boom Sentry (deployed when Lead present): fires bombs—4 damage, 30 pierce, 1s attack
                                     cooldown</i></li>
                                <li><i>+White Cold Sentry (deployed when Pink present): fires ice bombs that freeze Bloons and inflict
                                     Permafrost—1 damage, 24 pierce, 1.5s attack cooldown, 1.5s freeze duration, 2 layer
                                      freeze/Permafrost soak</i></li>
                                <li><i>+Yellow Energy Sentry (deployed when Zebra/Rainbow/MOAB present): fires fast-moving energy
                                     bolts—2 damage, +2 MOAB damage, 8 pierce, 0.57s attack cooldown</i></li>
                                <li><i>Sentry range 45 units -&gt; 50 units</i></li>
                                <li><i>Sentries can pop following Bloon types: Frozen (Crushing/Boom/Energy), Lead (Boom)</i></li>
                                <li><i>Sentries cannot pop following Bloon types: Lead (Crushing/Cold/Energy), Frozen (Cold) Black
                                     (Boom), White (Cold), Purple (Energy), MOAB (Cold)</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>No longer deploys any sentries from previous upgrades, instead deploying champion sentry guns</i></li>
                                <li><i>Champion sentries shoot plasma balls and explode after they expire</i></li>
                                <li><i>Champion sentry attack stats: 3 damage, 5 pierce, 0.06s attack cooldown, 50-unit range</i></li>
                                <li><i>Champion sentry explosion stats: 100 damage, 50 pierce, 50-unit explosion radius</i></li>
                                <li><i>Champion sentries can pop all Bloon types except Camo/Purple</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th className="top_row upgrade_button">Larger Service Area</th>
                        <th className="top_row upgrade_button">Deconstruction</th>
                        <th className="top_row upgrade_button">Cleansing Foam</th>
                        <th className="top_row upgrade_button">Overclock</th>
                        <th className="top_row upgrade_button last_upgrade_button">Ultraboost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$350</td>
                        <td>$900</td>
                        <td>$13,500</td>
                        <td>$72,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>+50% range</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>+1 MOAB/Fortified damage</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>+Foam attack: deploys foam pools on user-selected point on Track—Bloons that pass through it lose
                                     Regrow/Camo properties, and outer layer of Leads are popped</i></li>
                                <li><i>Foam stats: 10 pierce, 2s attack cooldown, 8.5s lifespan</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><span class="ability">Overclock ability: give user-selected tower +66.67% attack speed</span></li>
                                <li><span class="ability">Overclock duration dependent on tower's upgrades: Tier 5/Tier 4/Tier 3 or lower
                                     towers receive overclock buff for 30s/45s/60s</span></li>
                                <li><span class="ability">If Banana Farm overclocked, it generates +66.67% more income</span></li>
                                <li><span class="ability">Ability cooldown: 45s</span></li>
                                <li>Pierce 3 -&gt; 15</li>
                                <li><i>Cleansing foam pierce 10 -&gt; 14</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><span class="ability">+Overclock ability now gives permanent -4% attack cooldown mini-boost to
                                     affected towers: permanent mini-boosts stack up to 10 times</span></li>
                                <li><span class="ability">Overclock duration is now 60s for all towers (regardless of upgrade tier)</span></li>
                                <li><span class="ability">Mini-boosts also boost income generation of Banana Farms</span></li>
                                <li><span class="ability">Ability cooldown 45s -&gt; 35s</span></li>
                                <li>Pierce 15 -&gt; 30</li>
                                <li><i>Cleansing foam pierce 14 -&gt; 24</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th className="top_row upgrade_button">Oversize Nails</th>
                        <th className="top_row upgrade_button">Pin</th>
                        <th className="top_row upgrade_button">Double Gun</th>
                        <th className="top_row upgrade_button">Bloon Trap</th>
                        <th className="top_row upgrade_button last_upgrade_button">XXXL Trap</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$450</td>
                        <td>$220</td>
                        <td>$450</td>
                        <td>$3,600</td>
                        <td>$45,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Pierce 3 -&gt; 8</li>
                                <li>+Can pop Frozen (sentries included)</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>+Nails now stun non-Lead/Ceramic/MOAB Bloons for 1s</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Attack cooldown 0.7s -&gt; 0.35s</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>+Bloon trap attack: places mechanical trap on track that instantly pops up to 500 *RBE-worth of
                                     Bloons (but cannot trap MOABs/Camo)</i></li>
                                <li><i>Bloons popped/trapped by Bloon Trap produce +100% more cash—cash generated when trap fills
                                     completely</i></li>
                                <li><i>+Traps can pop/trap Lead</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>Trap capacity 500 RBE -&gt; 10,000 RBE</i></li>
                                <li><i>+Trap can now trap/insta-pop MOAB-class Bloons</i></li>
                                <li><i>Trap cash bonus +100% -&gt; +200%</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}