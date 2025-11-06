# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 44.205.58.248

I had no issues assigning this IP address a domain name, nor was it too difficult to assign it an elastic IP address.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md). I just had to figure out how to edit documents with the "vi" command, which was tricky at first.

## HTML

This was a little difficult. I had some roadblocks with trying to get Git to work, but once I did, coding the HTML part of my website wasn't too tricky. The tough part was figuring out which parts of my website would implement the interactive buttons that would likely be used in JavaScript. For now, I've opted for the "Changes" part of all my Tower upgrade tables to be a button that pulls up a small popup element that details the Tower upgrade changes. I also plan on making the upgrade headers buttons so that users can "select" upgrades as if they were upgrading a tower in game. Upgrade selection has some important rules that I will only be able to implement in JavaScript.

## CSS

Figuring out how to get Flexbox was tricky for me. But thankfully, I learned a lot as I worked on and experimented with the code. I eventually found some flex proportions I liked and applied them to all of my html files. However, adding all the relevant class attributes to all 27 of my html files proved to be rather tedious. I wonder if there's a certain refactor shortcut that I could have used to save 2 hours of copy/paste work.

I also tried using Bootstrap as an easy way to create some simple formatting, but it ended up causing serious issues with my table styling (namely, that my preferred styling on my tables were getting overridden by hidden Bootstrap styling that I didn't know was in effect). As a result, I ended up pulling all Bootstrap styling out of all of my html files except for my index file.

## React Part 1: Routing

This was a tough one for me. Unlike Simon, my startup had differing headers/footers across all of my different page files, so I had to figure out how to accomodate that in my startup. I figured that making multiple "Routes" tags did the trick. It just made creating/editing 3 files each for 27 page files super tedious.

## React Part 2: Reactivity

This was the HARDEST part of this project by far. After spending tens of hours perusing through all the wikis I could find on BTD6 and recording what I could find on a Google Spreadsheet, then spending even more time copying all that stuff from said spreadsheet over to ALL 25 of my components was a pain to do. I had to do some heavy overhauling of my CSS styling to accomodate the contents of my upgrade change cells, not to mention that I had to restyle my table headers so that they could act as upgrade selection buttons.

And the functionality itself... ouch, this gave me such a headache. Figuring out the best use of hooks was extremely difficult, and programming legal upgrade/crosspath rules took forever to get right. I had to draw a bunch of diagrams on sticky notes to help me visualize how to do it.

Once the functionality was done... well, I had to copy all my functionality code to ALL TWENTY FIVE of my tower components. So, I had to separate all my upgrade functionality into a separate upgrade.jsx file. That required some creative use of closure to minimize the sheer number of copy/pasting I had to do, although even then I still had to do quite a lot.

Unfortunately, with how much time this phase took me, I will have to leave the functionality of this project at just the upgrade functionality. There was further functionality I wanted to add such as pop-up definitions of BTD6 jargon (which is everywhere in this project), more detailed crosspath change definitions (as Tier 1/2 upgrades can actually sometimes provide unique perks to Tier 3+ upgrades from other paths), and a more detailed interactive cheat sheet for the Super Monkey's Sun Temple upgrade, as that upgrade's stats vary heavily upon what towers are in range of the Super Monkey before the Sun Temple upgrade is purchased. I suppose I'll try and work on those things some more on my own time after this class is over.

## Service

This was difficult to understand at first, but after going through the GitHub instruction more thoroughly, I was eventually able to figure it out. Unfortunately, due to the nature of my startup project, my startup is more frontend-heavy and thus doesn't have a lot of room for backend functionality. I didn't think it wise to store all of my tower stats in a database, so I decided to forego using the verifyAuth method as a way to restrict endpoints for retrieving tower info, as the tower info is the same for all users.

I also struggled to find a 3rd party API that both 1. was simple enough to use and 2. was still working. Nearly every API I checked out on the GitHub API list provided by the startup instructions were taken down a long time ago, and the rest were too difficult to access due to the large amount of data they returned (e.g. weather data). I had to settle for using the same quote service that simon uses. TAs, if this is not good enough for you, and I need to better show my understanding of web APIs, I'll try again to find a 3rd party web API that actually works.
