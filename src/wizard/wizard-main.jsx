import React from 'react';

import '../tower.css';

export function WizardMain() {
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
                    <td>$250</td>
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
                    <td>1.1s</td>
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
                    <td>White, Black, Frozen</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Camo, Lead, Purple</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>None</td>
                </tr>
            </tbody>
        </table>

        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Fireball"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Intense Magic"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Monkey Sense"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Guided Magic</th>
                        <th className="top_row">Arcane Blast</th>
                        <th className="top_row">Arcane Mastery</th>
                        <th className="top_row">Arcane Spikes</th>
                        <th className="top_row">Archmage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$175</td>
                        <td>$450</td>
                        <td>$1,450</td>
                        <td>$10,000</td>
                        <td>$32,000</td>
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
                        <th className="top_row">Fireball</th>
                        <th className="top_row">Wall of Fire</th>
                        <th className="top_row">Dragon's Breath</th>
                        <th className="top_row">Summon Phoenix</th>
                        <th className="top_row">Wizard Lord Phoenix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$300</td>
                        <td>$800</td>
                        <td>$3,300</td>
                        <td>$6,000</td>
                        <td>$50,000</td>
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
                        <th className="top_row">Intense Magic</th>
                        <th className="top_row">Monkey Sense</th>
                        <th className="top_row">Shimmer</th>
                        <th className="top_row">Necromancer: Unpopped Army</th>
                        <th className="top_row">Prince of Darkness</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$300</td>
                        <td>$300</td>
                        <td>$1,500</td>
                        <td>$2,800</td>
                        <td>$26,500</td>
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