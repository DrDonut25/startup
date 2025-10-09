import React from 'react';

import '../tower.css';

export function BuccaneerMain() {
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
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Faster Shooting</th>
                        <th className="top_row">Double Shot</th>
                        <th className="top_row">Destroyer</th>
                        <th className="top_row">Aircraft Carrier</th>
                        <th className="top_row">Carrier Flagship</th>
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
                        <th className="top_row">Grape Shot</th>
                        <th className="top_row">Hot Shot</th>
                        <th className="top_row">Cannon Ship</th>
                        <th className="top_row">Monkey Pirates</th>
                        <th className="top_row">Pirate Lord</th>
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
                        <th className="top_row">Long Range</th>
                        <th className="top_row">Crow's Nest</th>
                        <th className="top_row">Merchantman</th>
                        <th className="top_row">Favored Trades</th>
                        <th className="top_row">Trade Empire</th>
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