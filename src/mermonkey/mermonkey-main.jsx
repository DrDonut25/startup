import React from 'react';

import '../tower.css';
import { Upgrade } from '../upgrade.jsx';

export function MermonkeyMain() {
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
                    <td>$375</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>2 (trident), 3 (splash)</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.2s</td>
                </tr>
                <tr>
                    <th>Range (land)</th>
                    <td>Very Small (28 units)</td>
                </tr>
                <tr>
                    <th>Range (water)</th>
                    <td>Small (35 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Slightly Large</td>
                </tr>
                <tr>
                    <th>Can pop</th>
                    <td>Purple, White, Black, Frozen</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Camo, Lead</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>Amphibious, small splash attack, +35% attack range when placed in water</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Echosense Precision"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Echosense Network"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Trident Efficiency"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 0)}>Trident Efficiency</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 1)}>Trident Swiftness</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 2)}>Abyss Dweller</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 3)}>Abyssal Warrior</th>
                        <th id="top4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('top', 4)}>Lord of the Abyss</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$150</td>
                        <td>$250</td>
                        <td>$1,600</td>
                        <td>$4,200</td>
                        <td>$23,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>Attack cooldown 1.2s -&gt; 1.02s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>Attack cooldown 1.02s -&gt; 0.804s</li>
                                <li>+50% projectile speed</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li><i>+Tentacle attack: 8 tentacles spawn around Mermonkey, pointed in all directions like
                                     a Tack Shooter, but unlike a Tack Shooter, each tentacle attacks independently</i></li>
                                <li><i>Tentacle stats: 22.5° field of vision, 9 damage, 24 pierce, 3s attack cooldown,
                                     8-unit blast radius</i></li>
                                <li><i>+Abyss Dweller buff: All in-range towers receive +10% pierce</i></li>
                                <li><i>Tentacles can pop Frozen</i></li>
                                <li>Trident damage 2 -&gt; 4</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li><i>Tridents apply slowing effect to BFBs and lower: non-MOABs slowed by 40%,
                                     MOABs/BFBs slowed by 28%</i></li>
                                <li><i>Tentacle damage 9 -&gt; 18</i></li>
                                <li><i>Tentacle pierce 24 -&gt; 32</i></li>
                                <li><i>Tentacle attack cooldown 3s -&gt; 2.5s</i></li>
                                <li><i>Tower pierce buff +10% -&gt; +20%</i></li>
                                <li>Trident damage 4 -&gt; 8</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li><i>+Water towers can now be placed on land (if they're in range of this Mermonkey)</i></li>
                                <li><i>Tentacle damage 18 -&gt; 50</i></li>
                                <li><i>Tentacle pierce 32 -&gt; 80</i></li>
                                <li><i>Tentacle attack cooldown 2.5s -&gt; 1.5s</i></li>
                                <li><i>Doubled tentacle attack radius</i></li>
                                <li><i>Tower pierce buff +20% -&gt; +40%</i></li>
                                <li>Trident damage 8 -&gt; 10</li>
                                <li>Trident pierce 2 -&gt; 9</li>
                                <li>Trident attack cooldown 0.804s -&gt; 0.402s</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 0)}>Sharper Prongs</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 1)}>Tidal Chill</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 2)}>Riptide Champion</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 3)}>Arctic Knight</th>
                        <th id="middle4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('middle', 4)}>Popseidon</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$300</td>
                        <td>$2,300</td>
                        <td>$8,000</td>
                        <td>$52,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="middle_change_0" className="change_list">
                                <li>Trident pierce 2 -&gt; 3</li>
                                <li>Splash pierce 3 -&gt; 6</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li><i>+Trident splashes freeze Bloons for 0.5s (soaks through 4 layers)</i></li>
                                <li>+50% splash radius</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li><i>Tridents no longer splash and instead grow in size/damage the further they travel—once tridents
                                     expire, they split into 2 small wave projectiles</i></li>
                                <li>Tridents' speed cut in half, but they last twice as long</li>
                                <li>Trident damage 2 -&gt; 4</li>
                                <li>Tridents deal +2 Frozen damage</li>
                                <li>Trident pierce 2 -&gt; 25</li>
                                <li><i>Tridents gain +50% damage per second until they expire</i></li>
                                <li><i>Wave stats: 4 damage, +2 Frozen damage, 18 pierce</i></li>
                                <li><i>Waves freeze Bloons for 0.8s</i></li>
                                <li>+Tridents can now pop Lead, but can no longer pop White/Purple</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li><span className="ability">Ice Jet ability: Mermonkey rapidly fires ice balls for 3s at Bloons
                                     anywhere on screen, even behind map obstacles (user can also select specific point for Ice Jet
                                      to aim at)</span></li>
                                <li><span className="ability">Ice ball stats: 20 damage (doesn't soak through layers), 240 pierce,
                                     0.1s attack cooldown, 10s lifespan, can bounce off map obstacles</span></li>
                                <li><span className="ability">Ability cooldown: 45s</span></li>
                                <li>Trident/wave damage 4 -&gt; 8</li>
                                <li>Trident/wave Frozen bonus damage 2 -&gt; 4</li>
                                <li>Tridents/waves deal +8 damage to MOABs</li>
                                <li><i>Trident damage growth speed +50%/second -&gt; 75%/second</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
                                <li><i>+Lateral trident shot (independent from regular trident): fires two tridents in 45° cone with
                                     same stats as main trident (see below)</i></li>
                                <li><span className="ability">+Ice Jet ability now deals 70 damage to & freezes all Bloons on screen for
                                     8s (except White/Purple) before firing ice balls</span></li>
                                <li><span className="ability">Ice ball damage 20 -&gt; 30</span></li>
                                <li><span className="ability">Ice ball lifespan 10s -&gt; 15s</span></li>
                                <li>+18 range</li>
                                <li>Trident/wave damage 8 -&gt; 15</li>
                                <li>Trident/wave Frozen bonus damage 4 -&gt; 7.5</li>
                                <li>Trident/wave bonus MOAB damage 8 -&gt; 15</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th id="bottom0" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 0)}>Echosense Precision</th>
                        <th id="bottom1" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 1)}>Echosense Network</th>
                        <th id="bottom2" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 2)}>Alluring Melody</th>
                        <th id="bottom3" className="top_row upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 3)}>Symphonic Resonance</th>
                        <th id="bottom4" className="top_row last_upgrade_button_off" onClick={() => myFunctions.toggleUpgrade('bottom', 4)}>The Final Harmonic</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$300</td>
                        <td>$380</td>
                        <td>$2,000</td>
                        <td>$7,600</td>
                        <td>$25,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="bottom_change_0" className="change_list">
                                <li>+Tridents now home in on Bloons</li>
                                <li>+Camo detection</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_1" className="change_list">
                                <li><i>+Echosense buff: all Mermonkeys on screen (including this one) receive +6% range</i></li>
                                <li><i>Echosense buff stacks up to 10 times</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_2" className="change_list">
                                <li><i>+Trance attack: Mermonkey pulls nearby non-MOAB Bloons into musical circle around itself, halting
                                     Bloon track-movement progress, detonating all damage-over-time effects, and stripping Camo</i></li>
                                <li><i>Trance stats: 6s lifespan, 12s attack cooldown; pulls in 4 more Bloons every 0.3s</i></li>
                                <li><i>Ceramics consume 2 trance pierce instead of 1</i></li>
                                <li><i>Max damage-over-time detonation damage per Bloon: 50</i></li>
                                <li>Splash pierce 3 -&gt; 9</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_3" className="change_list">
                                <li><i>+Trances can now pull in MOABs and DDTs (3 pierce consumed per MOAB and 4 pierce consumed per DDT)</i></li>
                                <li><i>Trance pierce 4 -&gt; 8 (now pulls in 8 Bloons every 0.3s)</i></li>
                                <li><i>Ceramic trance pierce penalty removed</i></li>
                                <li><i>Max damage-over-time detonation damage 50 -&gt; 125</i></li>
                                <li><i>+User can now move center of musical trance circle to anywhere within this Mermonkey's range</i></li>
                                <li>+4 range</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_4" className="change_list">
                                <li><i>+Trances can now pull in BFBs and ZOMGs (4 pierce consumed for both)</i></li>
                                <li><i>+Trances can now deal damage-over-time detonation to BADs and Boss Bloons (though they cannot
                                     be pulled into the musical trance circle)</i></li>
                                <li><i>Max damage-over-time detonation damage 125 -&gt; 10,000</i></li>
                                <li><i>+User can now move musical trance circle to anywhere on screen</i></li>
                                <li><i>Final Harmonic buff: all Magic Monkeys in range of musical trance circle receive +3 pierce, and
                                     all in-range Heroes receive 15% faster ability cooldowns & +15% range</i></li>
                                <li>+6 range</li>
                                <li>Trident splash pierce 9 -&gt; 18</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}