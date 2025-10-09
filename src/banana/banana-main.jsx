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
                        <th className="top_row">Top Upgrade Path</th>
                        <th className="top_row">Increased Production</th>
                        <th className="top_row">Greater Production</th>
                        <th className="top_row">Banana Plantation</th>
                        <th className="top_row">Banana Research Facility</th>
                        <th className="top_row">Banana Central</th>
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
                        <th className="top_row">Long Life Bananas</th>
                        <th className="top_row">Valuable Bananas</th>
                        <th className="top_row">Monkey Bank</th>
                        <th className="top_row">IMF Loan</th>
                        <th className="top_row">Monkey-Nomics</th>
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
                        <th className="top_row">EZ Collect</th>
                        <th className="top_row">Banana Salvage</th>
                        <th className="top_row">Marketplace</th>
                        <th className="top_row">Central Market</th>
                        <th className="top_row">Monkey Wall Street</th>
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