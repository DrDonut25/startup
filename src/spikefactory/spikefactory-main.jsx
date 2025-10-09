import React from 'react';

import '../tower.css';

export function SpikeFactoryMain() {
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
                    <td>$1,000</td>
                </tr>
                <tr>
                    <th>Damage</th>
                    <td>1</td>
                </tr>
                <tr>
                    <th>Pierce (aka spikes/stack)</th>
                    <td>5</td>
                </tr>
                <tr>
                    <th>Attack cooldown</th>
                    <td>1.75s</td>
                </tr>
                <tr>
                    <th>Range</th>
                    <td>Small (34 units)</td>
                </tr>
                <tr>
                    <th>Footprint</th>
                    <td>Slightly Large</td>
                </tr>
                <tr>
                    <th>Can pop</th>
                    <td>Purple, White, Black, Camo</td>
                </tr>
                <tr>
                    <th>Cannot pop</th>
                    <td>Lead</td>
                </tr>
                <tr>
                    <th>Other perks</th>
                    <td>Ignores map obstacles</td>
                </tr>
            </tbody>
        </table>
        
        <div className="websocket">
            <ul>
                <li style={{color: '#f8f9fa'}}>You selected "Bigger Stacks"</li>
                <li style={{color: '#f8f9fa'}}>You selected "White Hot Spikes"</li>
                <li style={{color: '#f8f9fa'}}>You selected "Faster Production"</li>
                <li style={{color: 'lightcoral'}}>Error: you cannot select upgrades from more than two paths at once</li>
            </ul>
        </div>

        <div className="upgrade_table_container">
            <table className="upgrade_table">
                <thead>
                    <tr>
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Bigger Stacks</th>
                        <th className="top_row">White Hot Spikes</th>
                        <th className="top_row">Spiked Balls</th>
                        <th className="top_row">Spiked Mines</th>
                        <th className="top_row">Super Mines</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$800</td>
                        <td>$600</td>
                        <td>$2,300</td>
                        <td>$9,500</td>
                        <td>$125,000</td>
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
                        <th className="top_row">Faster Production</th>
                        <th className="top_row">Even Faster Production</th>
                        <th className="top_row">MOAB SHREDR</th>
                        <th className="top_row">Spike Storm</th>
                        <th className="top_row">Carpet of Spikes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$600</td>
                        <td>$800</td>
                        <td>$2,500</td>
                        <td>$7,000</td>
                        <td>$41,000</td>
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
                        <th className="top_row">Long Reach</th>
                        <th className="top_row">Smart Spikes</th>
                        <th className="top_row">Long Life Spikes</th>
                        <th className="top_row">Deadly Spikes</th>
                        <th className="top_row">Perma-spike</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cost</th>
                        <td>$150</td>
                        <td>$400</td>
                        <td>$1,300</td>
                        <td>$3,600</td>
                        <td>$30,000</td>
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