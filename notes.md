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

Figuring oout how to get Flexbox was tricky for me. But thankfully, I learned a lot as I worked on and experimented with the code. I eventually found some flex proportions I liked and applied them to all of my html files. However, adding all the relevant class attributes to all 27 of my html files proved to be rather tedious. I wonder if there's a certain refactor shortcut that I could have used to save 2 hours of copy/paste work.

I also tried using Bootstrap as an easy way to create some simple formatting, but it ended up causing serious issues with my table styling (namely, that my preferred styling on my tables were getting overridden by hidden Bootstrap styling that I didn't know was in effect). As a result, I ended up pulling all Bootstrap styling out of all of my html files except for my index file.

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
