import React from 'react';

import '../tower.css';

export function GlueMain() {
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
                    <td>$225</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>0</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1s</td>
                </tr>
                <tr>
                    <th>Bloon layers glued/glob</th>
                    <td>3</td>
                </tr>
                <tr>
                    <th>Glue duration</th>
                    <td>11s</td>
                </tr>
                <tr>
                    <th>Glue slow intensity</th>
                    <td>-50% Bloon speed</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Medium (46 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Small</td>
                </tr>
                <tr>
                    <th>Can Glue</th>
                    <td>Purple, White, Black, Lead</td>
                </tr>
                <tr>
                    <th>Cannot Glue</th>
                    <td>Camo, MOAB</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>Slows Bloons with globs of glue</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Glue Soak"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Corrosive Glue"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Bigger Globs"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th className="top_row upgrade_button">Glue Soak</th>
                        <th className="top_row upgrade_button">Corrosive Glue</th>
                        <th className="top_row upgrade_button">Bloon Dissolver</th>
                        <th className="top_row upgrade_button">Bloon Liquefier</th>
                        <th className="top_row upgrade_button last_upgrade_button">Bloon Solver</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$300</td>
                        <td>$2,000</td>
                        <td>$5,000</td>
                        <td>$22,500</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Layers glued/glob 3 -&gt; Infinite</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>+Damage over time effect: Glued Bloons take 1 damage every 2 seconds</i></li>
                                <li>+Glue can damage MOABs (but cannot slow them)</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Damage over time increased to 2 damage/s</li>
                                <li>+2 Ceramic damage/s</li>
                                <li>Pierce 1 -&gt; 2</li>
                                <li>Attack cooldown 1s -&gt; 0.5s</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Damage over time increased to 10 damage/s</li>
                                <li><i>Acid puddle mechanic: when Bloon glued by this tower pops, it drops puddle of acid that lingers
                                     on track for 7.7s. Each puddle deals 4 damage to up to 3 Bloons</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Ceramic bonus 2 damage/s -&gt; 80 damage/s</li>
                                <li>+40 MOAB damage/s</li>
                                <li>Acid puddle damage 4 -&gt; 15</li>
                                <li>Pierce 2 -&gt; 4</li>
                                <li>Now shoots 2 globs of glue per attack</li>
                                <li>Attack cooldown 0.5s -&gt; 0.25s</li>
                                <li>+Splatter glue can hit 4 additional Bloons per shot</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th className="top_row upgrade_button">Bigger Globs</th>
                        <th className="top_row upgrade_button">Glue Splatter</th>
                        <th className="top_row upgrade_button">Glue Hose</th>
                        <th className="top_row upgrade_button">Glue Strike</th>
                        <th className="top_row upgrade_button last_upgrade_button">Glue Storm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$100</td>
                        <td>$970</td>
                        <td>$1,950</td>
                        <td>$4,000</td>
                        <td>$16,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Pierce 1 -&gt; 2</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>+Splatter glue can hit 4 additional Bloons per shot</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Attack cooldown  1s -&gt; 0.34s</li>
                                <li>+12 range</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><span class="ability">Ability: glue all Bloons (including MOAB/Camo) on screen for 11s</span></li>
                                <li><span class="ability">Ability cooldown: 30s</span></li>
                                <li><span class="ability">+Bloons glued by ability take +2 damage & temporarily lose Lead/Frozen properties</span></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><span class="ability">Ability now glues all Bloons on screen every second for 10s (glue duration
                                     is still 11s)</span></li>
                                <li><span class="ability">Ability cooldown 30s -&gt; 40s</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th className="top_row upgrade_button">Stickier Glue</th>
                        <th className="top_row upgrade_button">Stronger Glue</th>
                        <th className="top_row upgrade_button">MOAB Glue</th>
                        <th className="top_row upgrade_button">Relentless Glue</th>
                        <th className="top_row upgrade_button last_upgrade_button">Super Glue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$280</td>
                        <td>$400</td>
                        <td>$3,600</td>
                        <td>$4,000</td>
                        <td>$24,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Glue duration 11s -&gt; 24s</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Glue slow intensity -50% -&gt; -75% Bloon speed</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>+Can now glue/slow MOABs for 9s</li>
                                <li>MOAB glue slow intensity: -37.5% MOAB speed</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>+Glue Stun mechanic: Glued Bloons release splatter that stun up to 6 nearby Bloons when popped</i></li>
                                <li><i>Stun duration: 1s (non-MOAB-class), 0.25s (Blue MOABs/DDTs) </i></li>
                                <li>Glue on MOAB duration 9s -&gt; 12s</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Glue slow intensity -75% -&gt; -100% Bloon speed (aka Glued Bloons and MOABs are completely immobilized)</li>
                                <li>Glue projectiles now deal 30 damage to MOABs and 1 damage to non-MOABs on contact</li>
                                <li>Glue glob pierce 1 -&gt; 6</li>
                                <li>Stunning splat pierce 6 -&gt; 11</li>
                                <li>Splat now stuns BFBs and ZOMGs, and all MOABs now stunned for 1s</li>
                                <li>Glue on MOAB duration 12s -&gt; 18s</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}