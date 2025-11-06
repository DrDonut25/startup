import React from 'react';

export function Upgrade({topHeaders, setTopHeaders, middleHeaders, setMiddleHeaders, bottomHeaders, setBottomHeaders, maxTopTier, setMaxTopTier, maxMidTier, setMaxMidTier, maxBottomTier, setMaxBottomTier, myFunctions}) {
    myFunctions.toggleUpgrade = toggleUpgrade;
    myFunctions.changeLocks = changeLocks;
    myFunctions.hasSelectedUpgrade = hasSelectedUpgrade;
    
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
                    if (middleHeaders[2]) {
                        setMaxBottomTier(1);
                    } else if (bottomHeaders[2]) {
                        setMaxMidTier(1);
                    } else {
                        setMaxMidTier(4);
                        setMaxBottomTier(4);
                    }
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
                    if (topHeaders[2]) {
                        setMaxBottomTier(1);
                    } else if (bottomHeaders[2]) {
                        setMaxTopTier(1);
                    } else {
                        setMaxTopTier(4);
                        setMaxBottomTier(4);
                    }
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
                    if (middleHeaders[2]) {
                        setMaxTopTier(1);
                    } else if (topHeaders[2]) {
                        setMaxMidTier(1);
                    } else {
                        setMaxTopTier(4);
                        setMaxMidTier(4);
                    }
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

    return <></>;
}