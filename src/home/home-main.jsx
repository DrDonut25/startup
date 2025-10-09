import React from 'react';

export function HomeMain() {
  return (
    <main>
        <div id="login" class="container-fluid text-light">
            <h2>Welcome to the BTD6 Cheat Sheet!</h2>
            <form>
                <div>
                    <span>Email</span>
                    <input type ="text" placeholder="name@emailname.com"/>
                </div>
                <div>
                    <span>Password</span>
                    <input type="password" placeholder="password"/>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary">Login</button>
                    <button id="signup" type="submit" class="btn">Sign Up</button>
                </div>
            </form>
        </div>

        <div id="tower_selection">
            <h2 id="tower_heading">Select a Tower:</h2>
            <nav>
                <div class="primary tower_container">
                    <h3 class="tower_heading">Primary Monkeys</h3>
                    <menu>
                        <li><a href="dart.html">Dart Monkey</a></li>
                        <li><a href="boomerang.html">Boomerang Monkey</a></li>
                        <li><a href="bomb.html">Bomb Shooter</a></li>
                        <li><a href="tack.html">Tack Shooter</a></li>
                        <li><a href="ice.html">Ice Monkey</a></li>
                        <li><a href="glue.html">Glue Gunner</a></li>
                        <li><a href="desperado.html">Desperado</a></li>
                    </menu>
                </div>
                <div class="military tower_container">
                    <h3 class="tower_heading">Military Monkeys</h3>
                    <menu>
                        <li><a href="sniper.html">Sniper Monkey</a></li>
                        <li><a href="sub.html">Monkey Sub</a></li>
                        <li><a href="buccaneer.html">Monkey Buccaneer</a></li>
                        <li><a href="ace.html">Monkey Ace</a></li>
                        <li><a href="heli.html">Heli Pilot</a></li>
                        <li><a href="mortar.html">Mortar Monkey</a></li>
                        <li><a href="dartling.html">Dartling Gunner</a></li>
                    </menu>
                </div>
                <div class="magic tower_container">
                    <h3 class="tower_heading">Magic Monkeys</h3>
                    <menu>
                        <li><a href="wizard.html">Wizard Monkey</a></li>
                        <li><a href="super.html">Super Monkey</a></li>
                        <li><a href="ninja.html">Ninja Monkey</a></li>
                        <li><a href="alchemist.html">Alchemist</a></li>
                        <li><a href="druid.html">Druid</a></li>
                        <li><a href="mermonkey.html">Mermonkey</a></li>
                    </menu>
                </div>
                <div class="support tower_container">
                    <h3 class="tower_heading">Support Monkeys</h3>
                    <menu>
                        <li><a href="banana.html">Banana Farm</a></li>
                        <li><a href="spikefactory.html">Spike Factory</a></li>
                        <li><a href="village.html">Monkey Village</a></li>
                        <li><a href="engineer.html">Engineer Monkey</a></li>
                        <li><a href="beasthandler.html">Beast Handler</a></li>
                    </menu>
                </div>
            </nav>
        </div>
    </main>
  );
}