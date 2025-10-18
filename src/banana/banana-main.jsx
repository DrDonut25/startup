import React from 'react';

import '../tower.css';

export function BananaMain() {
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
                    <td>$1,250</td>
                </tr>
                <tr>
                    <th>Banana value</th>
                    <td>$20</td>
                </tr>
                <tr>
                    <th>Banana count/round</th>
                    <td>4</td>
                </tr>
                <tr>
                    <th>Banana lifetime</th>
                    <td>15s</td>
                </tr>
                <tr>
                    <th>Income/round</th>
                    <td>$80</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Extremely Large (30x30 units)</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Increased Production"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Greater Production"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Long Life Bananas"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>
        
        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Top Upgrade Path</th>
                        <th className="top_row upgrade_button">Increased Production</th>
                        <th className="top_row upgrade_button">Greater Production</th>
                        <th className="top_row upgrade_button">Banana Plantation</th>
                        <th className="top_row upgrade_button">Banana Research Facility</th>
                        <th className="top_row upgrade_button">Banana Central</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$500</td>
                        <td>$600</td>
                        <td>$3,000</td>
                        <td>$19,000</td>
                        <td>$115,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Banana count/round 4 -&gt; 6</li>
                                <li>Income/round $80 -&gt; 120</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Banana count/round 6 -&gt; 8</li>
                                <li>Income/round $120 -&gt; $160</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Banana count/round 8 -&gt; 16</li>
                                <li>Income/round $160 -&gt; $320</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>Produces 5 banana crates/round instead of bananas</i></li>
                                <li>Banana crate value: $300</li>
                                <li>Income/round $320 -&gt; $1,500</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Banana crate value $300 -&gt; $1,200</li>
                                <li><i>Banana Central buff: all other Banana Research Facilities receive +25% income</i></li>
                                <li>Income/round $1,500 -&gt; $6,000</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Middle Upgrade Path</th>
                        <th className="top_row upgrade_button">Long Life Bananas</th>
                        <th className="top_row upgrade_button">Valuable Bananas</th>
                        <th className="top_row upgrade_button">Monkey Bank</th>
                        <th className="top_row upgrade_button">IMF Loan</th>
                        <th className="top_row upgrade_button">Monkey-Nomics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$300</td>
                        <td>$800</td>
                        <td>$3,650</td>
                        <td>$7,200</td>
                        <td>$100,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Banana lifespan 15s -&gt; 30s</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>+25% banana value</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Cash now generated in bank instead of through bananas</li>
                                <li>Income/round: $225, though +15% interest is added to this number at end of each round</li>
                                <li>Interest rate resets after withdrawing money</li>
                                <li>Max bank balance: $7,000</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Bank capacity $7,000 -&gt; $10,000</li>
                                <li><span class="ability">Ability: immediately generate $9,000, though $9,000 will also be applied
                                     in debt—50% of all user income will go toward debt counter until it's paid off</span></li>
                                <li><span class="ability">Ability cooldown: 85s (though you can't use this ability again until
                                     this Banana Farm's debt is paid off)</span></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><span class="ability">Ability no longer gives debt</span></li>
                                <li><span class="ability">Ability cooldown 85s -&gt; 60s (max 2 uses/round)</span></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row path_label">Bottom Upgrade Path</th>
                        <th className="top_row upgrade_button">EZ Collect</th>
                        <th className="top_row upgrade_button">Banana Salvage</th>
                        <th className="top_row upgrade_button">Marketplace</th>
                        <th className="top_row upgrade_button">Central Market</th>
                        <th className="top_row upgrade_button">Monkey Wall Street</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$400</td>
                        <td>$2,700</td>
                        <td>$15,000</td>
                        <td>$70,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>Player can collect bananas from 50% further away</i></li>
                                <li><i>Spoiled bananas auto-collect for half their original value</i></li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>Spoiled bananas auto collect for 85% of their original value</i></li>
                                <li>Sellback rate of this Banana Farm increased by 10%</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li><i>No longer spawns bananas, instead adding income automatically to user total</i></li>
                                <li>Generates 16 bunches of $20 per round</li>
                                <li>Income/round $80 -&gt; $320</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>Bunch value $20 -&gt; $70</li>
                                <li><i>Merchantman buff: all xx3 Buccaneers and higher receive +10% income</i></li>
                                <li><i>Merchantman buff stacks up to 10 times</i></li>
                                <li>Income/round $320 -&gt; $1,120</li>
                            </ul>
                        </td>
                        <td class="change_cell">
                            <ul class="change_list">
                                <li>+Generates $4,000 at end of each round (in addition to bunch generation from previous upgrades)</li>
                                <li>+Generates 15 lives/round</li>
                                <li>+35 range</li>
                                <li><i>Auto-collect mechanic: Monkey Wall street auto-collects in-range bananas, full Bloon traps,
                                     and Supply Drop crates</i></li>
                                <li>Income/round $1,120 -&gt; $5,120</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}