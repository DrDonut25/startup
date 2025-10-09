import React from 'react';

import '../tower.css';

export function VillageMain() {
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
                    <td>$1,200</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Medium (40 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Large</td>
                </tr>
                <tr>
                    <th>Provided Buffs</th>
                    <td>+10% attack range to nearby monkeys</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Bigger Radius"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Regrow Blocker"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Radar Scanner"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Bigger Radius</th>
                        <th className="top_row">Jungle Drums</th>
                        <th className="top_row">Primary Mentoring</th>
                        <th className="top_row">Primary Academy</th>
                        <th className="top_row">Primary Expertise</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$400</td>
                        <td>$1,500</td>
                        <td>$800</td>
                        <td>$2,500</td>
                        <td>$25,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Middle Upgrade Path</th>
                        <th className="top_row">Regrow Blocker</th>
                        <th className="top_row">Radar Scanner</th>
                        <th className="top_row">Monkey Intelligence Bureau</th>
                        <th className="top_row">Call to Arms</th>
                        <th className="top_row">Homeland Defense</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$250</td>
                        <td>$2,000</td>
                        <td>$7,500</td>
                        <td>$20,000</td>
                        <td>$40,000</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                    </tr>
                </tbody>
            </table>

            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Bottom Upgrade Path</th>
                        <th className="top_row">Monkey Business</th>
                        <th className="top_row">Monkey Commerce</th>
                        <th className="top_row">Monkey Town</th>
                        <th className="top_row">Monkey City</th>
                        <th className="top_row">Monkeyopolis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$500</td>
                        <td>$500</td>
                        <td>$10,000</td>
                        <td>$3,000</td>
                        <td>$5,000/Banana Farm in radius</td>
                    </tr>
                    <tr>
                        <th>Changes</th>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                        <td>To be added</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  );
}