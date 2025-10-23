import React from 'react';

import '../tower.css';

export function AceMain() {
    const [topHeaders, setTopHeaders] = React.useState(Array(5).fill(false));
    const [middleHeaders, setMiddleHeaders] = React.useState(Array(5).fill(false));
    const [bottomHeaders, setBottomHeaders] = React.useState(Array(5).fill(false));

    /*maxTier variables track maximum legal upgrade tiers for when other path tables have selected upgrades. -1 means no upgrades can be
    selected from this path*/
    const [maxTopTier, setMaxTopTier] = React.useState(4);
    const [maxMidTier, setMaxMidTier] = React.useState(4);
    const [maxBottomTier, setMaxBottomTier] = React.useState(4);
    
    /*toggleUpgrade() selects a tower upgrade, simulating purchase of upgrade in BTD6. Only two of the three paths can have selected
    upgrades at any given time, and only one upgrade path can select tier 3 or higher. Once a tier 3 upgrade is "purchased", block out
    all tier 3+ upgrades on the other two paths. Once one or more upgrades has been selected from two of the path tables, block out the
    third table. Block out=lock to false/off state.*/
    function toggleUpgrade(path, index) {
        if (path === 'top') {
            //Check upgrade locks
            if (index <= maxTopTier) {
                const newTopHeaders = topHeaders.slice();
                newTopHeaders[index] = !newTopHeaders[index];
                
                //If toggled upgrade now true, set all previous headers to true; set all subsequent headers to false when upgrade now false
                if (newTopHeaders[index]) {
                    for (let i = index - 1; i >= 0; i--) {
                        newTopHeaders[i] = true;
                        changeLocks(path, i, true);
                    }
                } else {
                    for (let i = index + 1; i < 5; i++) {
                        newTopHeaders[i] = false;
                        changeLocks(path, i, false);
                    }
                }
                
                setTopHeaders(newTopHeaders);
                changeLocks(path, index, newTopHeaders[index]);
            }
        } else if (path === 'middle') {
            //check upgrade locks
            if (index <= maxMidTier) {
                const newMiddleHeaders = middleHeaders.slice();
                newMiddleHeaders[index] = !newMiddleHeaders[index];
                
                //If toggled upgrade now true, set all previous headers to true; set all subsequent headers to false when upgrade now false
                if (newMiddleHeaders[index]) {
                    for (let i = index - 1; i >= 0; i--) {
                        newMiddleHeaders[i] = true;
                        changeLocks(path, i, true);
                    }
                } else {
                    for (let i = index + 1; i < 5; i++) {
                        newMiddleHeaders[i] = false;
                        changeLocks(path, i, false);
                    }
                }
                
                setMiddleHeaders(newMiddleHeaders);
                changeLocks(path, index, newMiddleHeaders[index]);
            }
        } else if (path === 'bottom') {
            if (index <= maxBottomTier) {
                const newBottomHeaders = bottomHeaders.slice();
                newBottomHeaders[index] = !newBottomHeaders[index];
                
                //If toggled upgrade now true, set all previous headers to true; set all subsequent headers to false when upgrade now false
                if (newBottomHeaders[index]) {
                    for (let i = index - 1; i >= 0; i--) {
                        newBottomHeaders[i] = true;
                        changeLocks(path, i, true);
                    }
                } else {
                    for (let i = index + 1; i < 5; i++) {
                        newBottomHeaders[i] = false;
                        changeLocks(path, i, false);
                    }
                }
                
                setBottomHeaders(newBottomHeaders);
                changeLocks(path, index, newBottomHeaders[index]);
            }
        }
    }

    /*Activate relevant crosspath locks
    If there's a second path that has selected upgrades, lock entirety of third path
    If this upgrade is Tier 3 or higher, lock other paths to Tier 2 as max*/
    function changeLocks(path, index, toggleVal) {
        if (path === 'top') {
            if (toggleVal) {
                if (index > 1) {
                    setMaxMidTier(1);
                    setMaxBottomTier(1);
                }
                if (hasSelectedUpgrade('middle')) {
                    setMaxBottomTier(-1);
                } else if (hasSelectedUpgrade('bottom')) {
                    setMaxMidTier(-1);
                }
            } else {
                if (index == 0) {
                    setMaxMidTier(4);
                    setMaxBottomTier(4);
                } else if (index == 2) {
                    if (hasSelectedUpgrade('middle')) {
                        setMaxMidTier(4);
                    } else if (hasSelectedUpgrade('bottom')) {
                        setMaxBottomTier(4);
                    } else if (!hasSelectedUpgrade('middle') && !hasSelectedUpgrade('bottom')) {
                        setMaxMidTier(4);
                        setMaxBottomTier(4);
                    }
                }
            }
        } else if (path === 'middle') {
            if (toggleVal) {
                if (index > 1) {
                    setMaxTopTier(1);
                    setMaxBottomTier(1);
                }
                if (hasSelectedUpgrade('top')) {
                    setMaxBottomTier(-1);
                } else if (hasSelectedUpgrade('bottom')) {
                    setMaxTopTier(-1);
                }
            } else {
                if (index == 0) {
                    setMaxTopTier(4);
                    setMaxBottomTier(4);
                } else if (index == 2) {
                    if (hasSelectedUpgrade('top')) {
                        setMaxTopTier(4);
                    } else if (hasSelectedUpgrade('bottom')) {
                        setMaxBottomTier(4);
                    } else if (!hasSelectedUpgrade('top') && !hasSelectedUpgrade('bottom')) {
                        setMaxTopTier(4);
                        setMaxBottomTier(4);
                    }
                }
            }
        } else {
            if (toggleVal) {
                if (index > 1) {
                    setMaxTopTier(1);
                    setMaxMidTier(1);
                }
                if (hasSelectedUpgrade('middle')) {
                    setMaxTopTier(-1);
                } else if (hasSelectedUpgrade('top')) {
                    setMaxMidTier(-1);
                }
            } else {
                if (index == 0) {
                    setMaxTopTier(4);
                    setMaxMidTier(4);
                } else if (index == 2) {
                    if (hasSelectedUpgrade('middle')) {
                        setMaxMidTier(4);
                    } else if (hasSelectedUpgrade('top')) {
                        setMaxTopTier(4);
                    } else if (!hasSelectedUpgrade('middle') && !hasSelectedUpgrade('top')) {
                        setMaxTopTier(4);
                        setMaxMidTier(4);
                    }
                }
            }
        }
    }
    //hasSelectedUpgrade determines whether a specified path has any selected upgrades in its array (e.g. if any array values are true)
    function hasSelectedUpgrade(path) {
        if (path === 'top') {
            return topHeaders.includes(true);
        } else if (path === 'middle') {
            return middleHeaders.includes(true);
        } else {
            return bottomHeaders.includes(true);
        }
    }

    React.useEffect(() => {
        topHeaders.forEach((isSelected, index) => {
            const topButton = document.getElementById(`top${index}`);
            const topChangeList = document.getElementById(`top_change_${index}`);
            
            if (isSelected) {
                //Switch out header class to display selection status
                topButton.classList.remove('upgrade_button_off');
                topButton.classList.add('upgrade_button_on');
                
                //Make changes for this upgrade visible
                topChangeList.style.visibility = "visible";
            } else {
                //Switch out header class to display selection status
                topButton.classList.add('upgrade_button_off');
                topButton.classList.remove('upgrade_button_on');
                
                //Hide changes for this upgrade
                topChangeList.style.visibility = "hidden";
            }
            
            //Apply same changes to last upgrade button
            if (index == 4) {
                if (isSelected) {
                    topButton.classList.remove('last_upgrade_button_off');
                    topButton.classList.add('last_upgrade_button_on');
                } else {
                    topButton.classList.add('last_upgrade_button_off');
                    topButton.classList.remove('last_upgrade_button_on');
                }
            }
        });
        middleHeaders.forEach((isSelected, index) => {
            const middleButton = document.getElementById(`middle${index}`);
            const middleChangeList = document.getElementById(`middle_change_${index}`);
            
            if (isSelected) {
                //Switch out header class to display selection status
                middleButton.classList.remove('upgrade_button_off');
                middleButton.classList.add('upgrade_button_on');
                
                //Make changes for this upgrade visible
                middleChangeList.style.visibility = "visible";
            } else {
                //Switch out header class to display selection status
                middleButton.classList.add('upgrade_button_off');
                middleButton.classList.remove('upgrade_button_on');

                //Hide changes for this upgrade
                middleChangeList.style.visibility = "hidden";
            }
            
            //Apply same changes to last upgrade button
            if (index == 4) {
                if (isSelected) {
                    middleButton.classList.remove('last_upgrade_button_off');
                    middleButton.classList.add('last_upgrade_button_on');
                } else {
                    middleButton.classList.add('last_upgrade_button_off');
                    middleButton.classList.remove('last_upgrade_button_on');
                }
            }
        });
        bottomHeaders.forEach((isSelected, index) => {
            const bottomButton = document.getElementById(`bottom${index}`);
            const bottomChangeList = document.getElementById(`bottom_change_${index}`);
            
            if (isSelected) {
                //Switch out header class to display selection status
                bottomButton.classList.remove('upgrade_button_off');
                bottomButton.classList.add('upgrade_button_on');

                //Make changes for this upgrade visible
                bottomChangeList.style.visibility = "visible";
            } else {
                //Switch out header class to display selection status
                bottomButton.classList.add('upgrade_button_off');
                bottomButton.classList.remove('upgrade_button_on');

                //Hide changes for this upgrade
                bottomChangeList.style.visibility = "hidden";
            }
            
            //Apply same changes to last upgrade button
            if (index == 4) {
                if (isSelected) {
                    bottomButton.classList.remove('last_upgrade_button_off');
                    bottomButton.classList.add('last_upgrade_button_on');
                } else {
                    bottomButton.classList.add('last_upgrade_button_off');
                    bottomButton.classList.remove('last_upgrade_button_on');
                }
            }
        });
    },[topHeaders, middleHeaders, bottomHeaders]);

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
                    <td>$800</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Pierce</th>
                    <td>5</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.68s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Infinite</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Very Large</td>
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
                    <td>Ignores map obstacles</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Rapid Fire"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Lots More Darts"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Sharper Darts"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>
        
        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th id="top0" className="top_row upgrade_button_off" onClick={() => toggleUpgrade('top', 0)}>Rapid Fire</th>
                        <th id="top1" className="top_row upgrade_button_off" onClick={() => toggleUpgrade('top', 1)}>Lots More Darts</th>
                        <th id="top2" className="top_row upgrade_button_off" onClick={() => toggleUpgrade('top', 2)}>Fighter Plane</th>
                        <th id="top3" className="top_row upgrade_button_off" onClick={() => toggleUpgrade('top', 3)}>Operation: Dart Storm</th>
                        <th id="top4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => toggleUpgrade('top', 4)}>Sky Shredder</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$450</td>
                        <td>$550</td>
                        <td>$1,000</td>
                        <td>$3,300</td>
                        <td>$42,500</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="top_change_0" className="change_list">
                                <li>Attack cooldown 1.68s -&gt; 1.26s</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_1" className="change_list">
                                <li>Darts/volley 8 -&gt; 12</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_2" className="change_list">
                                <li>+20% flight speed</li>
                                <li><i>MOAB missile secondary attack: Fires 2 missiles/attack that home in on
                                     MOABs—18 damage, 4 pierce, attack cooldown 3s (cannot pop Black)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_3" className="change_list">
                                <li>Dart volley attack cooldown 1.26s -&gt; 0.63s</li>
                                <li>Darts/volley 12 -&gt; 16</li>
                                <li><i>MOAB missile attack cooldown 3s -&gt; 1.5s</i></li>
                                <li><i>MOAB missile damage 18 -&gt; 24</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="top_change_4" className="change_list">
                                <li>Dart volley attack cooldown 0.63s -&gt; 0.315s</li>
                                <li>Dart damage 1 -&gt; 3</li>
                                <li>+2 Ceramic damage (dart)</li>
                                <li>Dart pierce 5 -&gt; 8</li>
                                <li>Darts/volley 16 -&gt; 32</li>
                                <li><i>MOAB missile damage 24 -&gt; 150</i></li>
                                <li><i>+2 MOAB Missile Ceramic damage (though since missiles can target only MOABs,
                                     this only affects Dreadbloon's Ceramic armor shell)</i></li>
                                <li><i>MOAB missile pierce 4 -&gt; 5</i></li>
                                <li>+Darts can pop Lead</li>
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
                        <th id="middle0" className="top_row upgrade_button_off" onClick={() => toggleUpgrade('middle', 0)}>Exploding Pineapple</th>
                        <th id="middle1" className="top_row upgrade_button_off" onClick={() => toggleUpgrade('middle', 1)}>Spy Plane</th>
                        <th id="middle2" className="top_row upgrade_button_off" onClick={() => toggleUpgrade('middle', 2)}>Bomber Ace</th>
                        <th id="middle3" className="top_row upgrade_button_off" onClick={() => toggleUpgrade('middle', 3)}>Ground Zero</th>
                        <th id="middle4" className="top_row upgrade_button_off last_upgrade_button_off" onClick={() => toggleUpgrade('middle', 4)}>Tsar Bomba</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$200</td>
                        <td>$350</td>
                        <td>$900</td>
                        <td>$18,000</td>
                        <td>$26,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="middle_change_0" className="change_list">
                                <li><i>+Exploding pineapple attack: drops 1 pineapple at Monkey Ace's location every 1.6s,
                                     exploding after 2s—1 damage, 20 pierce</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_1" className="change_list">
                                <li>+Camo detection</li>
                                <li>+2x Camo damage (all attacks except Fighter Plane missiles)</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_2" className="change_list">
                                <li>Exploding pineapples replaced w/ bombing run attack:
                                     drop 4 bombs in rapid succession whenever Monkey Ace is over track—3 damage,
                                      20 pierce, 1.6s min attack cooldown, 2s bomb fuse duration (cannot pop Black)</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_3" className="change_list">
                                <li>Bomb damage 3 -&gt; 15</li>
                                <li>Bomb pierce 20 -&gt; 40</li>
                                <li><span className="ability">Ability: deal 700 damage to up to 2,000 Bloons closest to the landing pad</span></li>
                                <li><span className="ability">Ability cooldown: 35s</span></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="middle_change_4" className="change_list">
                                <li>Bomb damage 15 -&gt; 20</li>
                                <li>+10 Ceramic damage (bombing run)</li>
                                <li><span className="ability">Ability damage 700 -&gt; 3,000</span></li>
                                <li><span className="ability">Ability pierce 2,000 -&gt; 5,000</span></li>
                                <li><span className="ability">+Bloons damaged but not popped by ability are stunned for 8s</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th id="bottom0" className="top_row upgrade_button_off" onClick={() => toggleUpgrade('bottom', 0)}>Sharper Darts</th>
                        <th id="bottom1" className="top_row upgrade_button_off" onClick={() => toggleUpgrade('bottom', 1)}>Centered Path</th>
                        <th id="bottom2" className="top_row upgrade_button_off" onClick={() => toggleUpgrade('bottom', 2)}>Neva-Miss Targeting</th>
                        <th id="bottom3" className="top_row upgrade_button_off" onClick={() => toggleUpgrade('bottom', 3)}>Spectre</th>
                        <th id="bottom4" className="top_row last_upgrade_button_off" onClick={() => toggleUpgrade('bottom', 4)}>Flying Fortress</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$500</td>
                        <td>$550</td>
                        <td>$2,550</td>
                        <td>$23,400</td>
                        <td>$85,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td className="change_cell">
                            <ul id="bottom_change_0" className="change_list">
                                <li>Pierce 5 -&gt; 8</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_1" className="change_list">
                                <li><i>+Centered Path targeting option: Monkey Ace flies in circle around user-selected point
                                     (defaults to center of screen)</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_2" className="change_list">
                                <li><i>+Darts move faster and now home in on targets</i></li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_3" className="change_list">
                                <li><i>+Secondary attack: alternates firing homing darts/bombs directly at Bloons w/ First
                                     Targeting—0.06s attack cooldown</i></li>
                                <li><i>Spectre dart attacks (not radial Neva-Miss darts): 8 damage, 4 pierce (cannot pop Lead)</i></li>
                                <li><i>Spectre bomb attacks: 3 damage, +5 Ceramic damage, 20 pierce (cannot pop Black)</i></li>
                                <li>Radial Neva-Miss dart damage 1 -&gt; 3</li>
                                <li>+Significantly improved seeking for radial Neva-Miss dart attacks</li>
                            </ul>
                        </td>
                        <td className="change_cell">
                            <ul id="bottom_change_4" className="change_list">
                                <li><i>Spectre attack cooldown 0.06s -&gt; 0.04s</i></li>
                                <li><i>+Spectre attack now fires 3 projectiles/attack instead of 1:
                                     1 projectile has First Targeting, 1 has Last Targeting, 1 has Close Targeting
                                      (relative to Ace, not landing pad)</i></li>
                                <li><i>+14 MOAB damage (Spectre dart attack)</i></li>
                                <li><i>Spectre dart pierce 10 -&gt; 15</i></li>
                                <li><i>Spectre bomb damage 3 -&gt; 5</i></li>
                                <li><i>Spectre bomb Ceramic bonus damage 3 -&gt; 4</i></li>
                                <li><i>Spectre bomb pierce 20 -&gt; 30</i></li>
                                <li>Radial Neva-Miss dart damage 3 -&gt; 6</li>
                                <li>+Can pop all Bloon types (except Camo)</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}