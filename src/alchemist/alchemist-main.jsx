import React from 'react';

import '../tower.css';

export function AlchemistMain() {
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
                    <td>$550</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>15</td>
                </tr>
                <tr>
                    <th>Damage over time</th>
                    <td>1 damage / 2s</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>2s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Medium (45 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Small</td>
                </tr>
                <tr>
                    <th>Can pop</th>
                    <td>Purple, White, Black, Lead</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Camo</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>Ignores map obstacles, splash attacks</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Larger Potions"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Acidic Mixture Dip"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Faster Throwing"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th className="top_row upgrade_button">Larger Potions</th>
                        <th className="top_row upgrade_button">Acidic Mixture Dip</th>
                        <th className="top_row upgrade_button">Berserker Brew</th>
                        <th className="top_row upgrade_button">Stronger Stimulant</th>
                        <th className="top_row upgrade_button last_upgrade_button">Permanent Brew</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$350</td>
                        <td>$1,400</td>
                        <td>$2,850</td>
                        <td>$48,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Potion splash radius 14 units -&gt; 21 units</li>
                                <li>Pierce 15 -&gt; 20</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>+Now gives in-range towers Acidic Mixture Dip buff every 10s: wears off after affected
                                     tower attacks 10 times (though this buff can be stacked up to 3 times)</i></li>
                                <li><i>Acidic Mixture Dip buff benefits: can pop Lead, +1 Ceramic damage, +1 MOAB damage,
                                     +1 Fortified Lead damage</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>+Now gives in-range towers Berserker Brew buff (in addition to Acidic Mixture Dip,
                                     which is applied separately) every 8s—buff wears off after 25 attacks or 5 seconds</i></li>
                                <li><i>Berserker Brew buff benefits: +1 damage, +2 pierce, +10% range, -10% attack cooldown
                                     (faster attack speed)</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>Berserker Brew improvements: Pierce bonus +2 -&gt; +3, range bonus +10% -&gt; +15%,
                                     attack cooldown reduction 10% -&gt; 15%</i></li>
                                <li><i>Berserker Brew duration 25 attacks/5s -&gt; 40 attacks/12s</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>Acidic Mixture Dip and Berserker Brew no longer wear off</i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th className="top_row upgrade_button">Stronger Acid</th>
                        <th className="top_row upgrade_button">Perishing Potions</th>
                        <th className="top_row upgrade_button">Unstable Concoction</th>
                        <th className="top_row upgrade_button">Transforming Tonic</th>
                        <th className="top_row upgrade_button last_upgrade_button">Total Transformation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$475</td>
                        <td>$2,800</td>
                        <td>$4,200</td>
                        <td>$45,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Damage over time 1 damage / 2s -&gt; 1 damage / 1.5s</li>
                                <li>+Acid effect lasts an extra 0.5s</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>+4 MOAB damage</li>
                                <li>+15 Fortified MOAB damage</li>
                                <li>+Potions remove Fortified property from Ceramics and Leads</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>+Concoction attack: throws secondary potion that can coat up to 3 MOABs at once—coated
                                     MOABs explode when popped, damaging up to 50 other nearby Bloons
                                      (not including children of popped/exploding MOAB)</i></li>
                                <li><i>Concoction attack cooldown: 6s</i></li>
                                <li><i>Explosion damage depends on coated MOAB type and whether recipient of explosion
                                     damage is also a MOAB (see below)</i></li>
                                <li><i>When coated MOAB/BFB/DDT/ZOMG/BAD popped, non-MOAB Bloons take 2/3/4/4/4 explosion damage
                                     (double this number if said Bloons are Fortified)</i></li>
                                <li><i>When coated MOAB/BFB/DDT/ZOMG/BAD popped, MOAB-class Bloons take 20/70/40/400/400 explosion
                                     damage (double this number if said Bloons are Fortified)</i></li>
                                <li><i>Though explosion pierce is 50, MOAB-class Bloons eat up more than 1 of the explosion's pierce
                                     each: MOABs/BFBs use 2 pierce, DDTs/ZOMGs use 4 pierce, BADs use 10 pierce</i></li>
                                <li><i>Explosions can pop all Bloon types except Camo</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><span class="ability">Ability: transform Alchemist into monster for 20s, replacing all attacks
                                     with eye-laser attack: 3 damage, 6 pierce, 0.03s attack cooldown, 72-unit range</span></li>
                                <li><span class="ability">Ability cooldown: 60s</span></li>
                                <li><span class="ability">Transformed Alchemist can pop all Bloon types except Purple/Camo</span></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><span class="ability">+Ability now transforms up to 5 nearby monkeys nearby:
                                     these monkeys also gain eye-laser attack</span></li>
                                <li><span class="ability">Transformed monkey stats (not Alchemist's): 2 damage, 10 pierce,
                                     0.03s attack cooldown, 72-unit range</span></li>
                                <li><span class="ability"><u>Note: only monkeys that are Tier 3 or lower can be transformed—and
                                     the following towers cannot be transformed at all: Bomb Shooter, Tack Shooter,
                                      all Military monkeys except Sniper, Monkey Village, Banana Farm, Spike Factory,
                                       Beast Handler</u></span></li>
                                <li><span class="ability">Transformed monkeys retain tower-specific buffs
                                     (e.g. Monkey Sense, Poplust, Shinobi Tactics)</span></li>
                                <li><span class="ability">Ability cooldown 60s -&gt; 40s</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th className="top_row upgrade_button">Faster Throwing</th>
                        <th className="top_row upgrade_button">Acid Pool</th>
                        <th className="top_row upgrade_button">Lead to Gold</th>
                        <th className="top_row upgrade_button">Rubber to Gold</th>
                        <th className="top_row upgrade_button last_upgrade_button">Bloon Master Alchemist</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$650</td>
                        <td>$450</td>
                        <td>$1,000</td>
                        <td>$2,750</td>
                        <td>$40,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>-20% attack cooldown reduction</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>+Acid Pool attack: when Alchemist sees no Bloons in range, drop acid pool onto random spot
                                     on track at same speed as Alchemist's base attack (1.6s)</i></li>
                                <li><i>Acid pool stats: 1 damage, 5 pierce, 7s lifespan, same damage-over-time effect as base attack</i></li>
                                <li>+Every 5th base attack also creates acid pool where potion landed</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>+Base attacks and acid can now destroy Leads and Fortified Leads in one shot (aka +9 Lead damage)</li>
                                <li><i>+Leads popped by this Alchemist generate $50 each in addition to their regular pop income</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>+Rubber to Gold attack: throw gold potion at Bloons—gold potion deals no damage, but gives
                                     hit Bloons gold effect for 14s (see below)</i></li>
                                <li><i>Gold effect makes Bloons give +100% pop income and temporarily lose all Bloon types immunities</i></li>
                                <li><i>Gold potion stats: 15 pierce, 2s attack cooldown, 21-unit splash radius</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>+Shrink potion attack: throws a shrink potion at strongest Bloon on screen, turning it
                                     and nearby Bloons into Red Bloons</i></li>
                                <li><i>Shrink potion stats: infinite range, 200 pierce, 10s attack cooldown</i></li>
                                <li><i>MOAB-class Bloons consume more shrink potion pierce: MOABs consume 20 pierce,
                                     BFBs/DDTs consume 50 pierce, and ZOMGs consume 100 pierce</i></li>
                                <li><i><u>Note: shrink potions do not generate cash—you will lose money from shrink potion attacks
                                     compared to popping Bloons normally</u></i></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}