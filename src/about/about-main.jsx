import React from 'react';

import { NavLink } from 'react-router-dom';

export function AboutMain() {
  const [quote, setQuote] = React.useState("Loading quote...");
  const [author, setAuthor] = React.useState("Loading author...");

  React.useEffect(() => {
    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      })
      .catch();
    //setQuote("Words are cheap. Show me the code.");
    //setAuthor("Linus Torvalds");
  }, []);
  
  return (
    <main id="about" className="container-fluid text-center">
        <div id="picture" className="picture-box">
            <img src="BTD6.png" width="400px" alt="BTD6"/>
        </div>

        <p>
            Bloons Tower Defense 6 is a strategy-oriented tower defense game in which you must make use of the 25 Monkey towers to pop waves of Bloons 
            that will follow a set path along a track on screen. Bloons come in various "flavors" that will make them immune to the
            attacks of some towers but vulnerable to others. In addition, each of your towers will have 15 unique upgrades to select
            from to improve your chances of winning. This interactable cheat sheet will help you learn the more detailed stats of 
            each tower and their upgrades, particularly the ones the game hides from you. Good luck!
        </p>

        <div id="quote">{quote} - {author}</div>

        <br/>

        <div>
            <NavLink className="a" to="/">Back to Home</NavLink>
        </div>
    </main>
  );
}