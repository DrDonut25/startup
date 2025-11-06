# BTD6 Cheat Sheet

[My Notes](notes.md)

This project is an interactable cheat sheet for the popular tower defense game BTD6. Will allow the player to select one of 25 towers (each of which has 15 possible upgrades) and fetch up to date stats about each of the towers' upgrades, including upgrade crosspath functionality and listings of Bloon type weaknesses/strengths.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

My startup project will be an interactable cheat sheet for a video game that I and my family like to play: BTD6. BTD6 is a tower defense video game that involves strategic placement/upgrading of monkey "towers" that will pop waves of Bloons that spawn on a track before they reach the exit. While the game does a good job describing at a surface level what each tower and its upgrades do, it still hides a lot of specific stats for said towers that would only be accessible outside the game itself and on the web. What good is buying the final upgrade for a Banana Farm if its in-game description is "You want Banana? We have Banana!" That doesn't tell you much, does it? The goal of this project is to create an interactable diagram for all of a given tower's upgrades that'll tell the player exactly what they may want to know about the tower. With this resource available, it'll become much easier to come up with a viable strategy for popping those pesky Bloons before they reach the exit and end your game!

### Design

![IMG_5922](https://github.com/user-attachments/assets/32210b56-127f-462d-949a-dbf22cf6b000)


The diagram above shows an upgrade tree for any given monkey tower in BTD6. It lists all 3 possible upgrade paths, the upgrade names, and their upgrade costs. Detailed stats will become available once the player "upgrades" the tower by selecting one of the upgrade boxes depicted in the sketch. There are limitations on how many upgrades can be selected at once—upgrades can only be selected from two rows. One row can be upgraded in sequence all the way to tier 5 (abbreviated as T5 in the sketch), while an additional row can be upgraded to Tier 2. Upgrades cannot be bought from all three rows at once.

```mermaid
sequenceDiagram
    actor You
    actor Website
    You->>Website: Select tower/upgrade
    Website->>You: Selection success/failure
    You->>Website: Retrieve key vocab definition
    Website->>You: Display key vocab definition
```

### Key features

- The chosen tower will be shown on the left side alongside some basic info that can be referred to in a pinch (e.g. what Bloon types the tower can/cannot pop, the selected game difficulty, etc.)
- User can select any valid combination of upgrades from the three-branched tree
- Once selected, the user can open/view detailed stats of each upgrade (e.g. range, pierce, attack speed, abilities)
- May also include pop-up definitions for BTD6 vocabulary (e.g. pierce, de-camo, crosspath, ability)

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Basic layout of upgrade tree (likely in the form of a table); 
- **CSS** - Text/table styling, drop down menus to avoid overwhelming the user with too much info at once
- **React** - Pop-up definitions for BTD6 vocabulary; programming valid upgrade/crosspath combination rules
- **Service** - Retrieving up-to-date information on each tower's stats (since content updates often change tower stats for balancing purposes)
- **DB/Login** - User login, storing of stats/other info for all 25 towers
- **WebSocket** - Notification handling (upgrade selection, invalid upgrade attempt, etc.)

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://btd6cheatsheet.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages**
- [x] **Proper HTML element usage**
- [x] **Links**
- [x] **Text**
- [x] **3rd party API placeholder**
- [x] **Images**
- [x] **Login placeholder**
- [x] **DB data placeholder**
- [x] **WebSocket placeholder**

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body**
- [x] **Navigation elements**
- [x] **Responsive to window resizing**
- [x] **Application elements**
- [x] **Application text content**
- [x] **Application images**

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite**
- [x] **Components**
- [x] **Router**

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out**
- [x] **Hooks**

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Node.js/Express HTTP service**
- [x] **Static middleware for frontend**
- [x] **Calls to third party endpoints** (Note: I couldn't find a working API in the 3rd party API list provided in the startup, so I had to settle for the same API that simon uses out of respect for time)
- [x] **Backend service endpoints**
- [x] **Frontend calls service endpoints**
- [x] **Supports registration, login, logout, and restricted endpoint** (Note: my startup doesn't store anything that requires restricted endpoints, so I went without this step)


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
