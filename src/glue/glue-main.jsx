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
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Glue Soak</th>
                        <th className="top_row">Corrosive Glue</th>
                        <th className="top_row">Bloon Dissolver</th>
                        <th className="top_row">Bloon Liquefier</th>
                        <th className="top_row">Bloon Solver</th>
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
                        <th className="top_row">Bigger Globs</th>
                        <th className="top_row">Glue Splatter</th>
                        <th className="top_row">Glue Hose</th>
                        <th className="top_row">Glue Strike</th>
                        <th className="top_row">Glue Storm</th>
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
                        <th className="top_row">Stickier Glue</th>
                        <th className="top_row">Stronger Glue</th>
                        <th className="top_row">MOAB Glue</th>
                        <th className="top_row">Relentless Glue</th>
                        <th className="top_row">Super Glue</th>
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