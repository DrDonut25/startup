import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import { HomeHeader } from './home/home-header';
import { HomeMain } from './home/home-main';
import { HomeFooter } from './home/home-footer';
import { AuthState } from './home/authState';

import { AboutHeader } from './about/about-header';
import { AboutMain } from './about/about-main';
import { AboutFooter } from './about/about-footer';

import { AceHeader } from './ace/ace-header';
import { AceMain } from './ace/ace-main';
import { AceFooter } from './ace/ace-footer';

import { AlchemistHeader } from './alchemist/alchemist-header';
import { AlchemistMain } from './alchemist/alchemist-main';
import { AlchemistFooter } from './alchemist/alchemist-footer';

import { BananaHeader } from './banana/banana-header';
import { BananaMain } from './banana/banana-main';
import { BananaFooter } from './banana/banana-footer';

import { BeastHandlerHeader } from './beasthandler/beasthandler-header';
import { BeastHandlerMain } from './beasthandler/beasthandler-main';
import { BeastHandlerFooter } from './beasthandler/beasthandler-footer';

import { BombHeader } from './bomb/bomb-header';
import { BombMain } from './bomb/bomb-main';
import { BombFooter } from './bomb/bomb-footer';

import { BoomerangHeader } from './boomerang/boomerang-header';
import { BoomerangMain } from './boomerang/boomerang-main';
import { BoomerangFooter } from './boomerang/boomerang-footer';

import { BuccaneerHeader } from './buccaneer/buccaneer-header';
import { BuccaneerMain } from './buccaneer/buccaneer-main';
import { BuccaneerFooter } from './buccaneer/buccaneer-footer';

import { DartHeader } from './dart/dart-header';
import { DartMain } from './dart/dart-main';
import { DartFooter } from './dart/dart-footer';

import { DartlingHeader } from './dartling/dartling-header';
import { DartlingMain } from './dartling/dartling-main';
import { DartlingFooter } from './dartling/dartling-footer';

import { DesperadoHeader } from './desperado/desperado-header';
import { DesperadoMain } from './desperado/desperado-main';
import { DesperadoFooter } from './desperado/desperado-footer';

import { DruidHeader } from './druid/druid-header';
import { DruidMain } from './druid/druid-main';
import { DruidFooter } from './druid/druid-footer';

import { EngineerHeader } from './engineer/engineer-header';
import { EngineerMain } from './engineer/engineer-main';
import { EngineerFooter } from './engineer/engineer-footer';

import { GlueHeader } from './glue/glue-header';
import { GlueMain } from './glue/glue-main';
import { GlueFooter } from './glue/glue-footer';

import { HeliHeader } from './heli/heli-header';
import { HeliMain } from './heli/heli-main';
import { HeliFooter } from './heli/heli-footer';

import { IceHeader } from './ice/ice-header';
import { IceMain } from './ice/ice-main';
import { IceFooter } from './ice/ice-footer';

import { MermonkeyHeader } from './mermonkey/mermonkey-header';
import { MermonkeyMain } from './mermonkey/mermonkey-main';
import { MermonkeyFooter } from './mermonkey/mermonkey-footer';

import { MortarHeader } from './mortar/mortar-header';
import { MortarMain } from './mortar/mortar-main';
import { MortarFooter } from './mortar/mortar-footer';

import { NinjaHeader } from './ninja/ninja-header';
import { NinjaMain } from './ninja/ninja-main';
import { NinjaFooter } from './ninja/ninja-footer';

import { SniperHeader } from './sniper/sniper-header';
import { SniperMain } from './sniper/sniper-main';
import { SniperFooter } from './sniper/sniper-footer';

import { SpikeFactoryHeader } from './spikefactory/spikefactory-header';
import { SpikeFactoryMain } from './spikefactory/spikefactory-main';
import { SpikeFactoryFooter } from './spikefactory/spikefactory-footer';

import { SubHeader } from './sub/sub-header';
import { SubMain } from './sub/sub-main';
import { SubFooter } from './sub/sub-footer';

import { SuperHeader } from './super/super-header';
import { SuperMain } from './super/super-main';
import { SuperFooter } from './super/super-footer';

import { TackHeader } from './tack/tack-header';
import { TackMain } from './tack/tack-main';
import { TackFooter } from './tack/tack-footer';

import { VillageHeader } from './village/village-header';
import { VillageMain } from './village/village-main';
import { VillageFooter } from './village/village-footer';

import { WizardHeader } from './wizard/wizard-header';
import { WizardMain } from './wizard/wizard-main';
import { WizardFooter } from './wizard/wizard-footer';

import { Event, Notifier } from './notifier.js';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  //WebSocket
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
      Notifier.addHandler(handleEvent);

      return () => {
          Notifier.deleteHandler(handleEvent);
      }
  });

  function handleEvent(event) {
      setEvents([...events, event]);
  }
  
  return (
    <BrowserRouter>
      <div className="body">
        <Routes>
          <Route path='/' element={<HomeHeader />} exact />
          <Route path='/about' element={<AboutHeader />} />
          <Route path='/ace' element={<AceHeader />} />
          <Route path='/alchemist' element={<AlchemistHeader />} />
          <Route path='/banana' element={<BananaHeader />} />
          <Route path='/beasthandler' element={<BeastHandlerHeader />} />
          <Route path='/bomb' element={<BombHeader />} />
          <Route path='/boomerang' element={<BoomerangHeader />} />
          <Route path='/buccaneer' element={<BuccaneerHeader />} />
          <Route path='/dart' element={<DartHeader />} />
          <Route path='/dartling' element={<DartlingHeader />} />
          <Route path='/desperado' element={<DesperadoHeader />} />
          <Route path='/druid' element={<DruidHeader />} />
          <Route path='/engineer' element={<EngineerHeader />} />
          <Route path='/glue' element={<GlueHeader />} />
          <Route path='/heli' element={<HeliHeader />} />
          <Route path='/ice' element={<IceHeader />} />
          <Route path='/mermonkey' element={<MermonkeyHeader />} />
          <Route path='/mortar' element={<MortarHeader />} />
          <Route path='/ninja' element={<NinjaHeader />} />
          <Route path='/sniper' element={<SniperHeader />} />
          <Route path='/spikefactory' element={<SpikeFactoryHeader />} />
          <Route path='/sub' element={<SubHeader />} />
          <Route path='/super' element={<SuperHeader />} />
          <Route path='/tack' element={<TackHeader />} />
          <Route path='/village' element={<VillageHeader />} />
          <Route path='/wizard' element={<WizardHeader />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Routes>
          <Route path='/' element={
            <HomeMain
              userName={userName}
              authState={authState}
              onAuthChange={(userName, authState) => {
                setAuthState(authState);
                setUserName(userName);
              }}
              notifier = {Notifier}
              events = {events}
            />
          } exact 
          />
          <Route path='/about' element={<AboutMain />} />
          <Route path='/ace' element={<AceMain username={userName} events={events}/>}/>
          <Route path='/alchemist' element={<AlchemistMain />} />
          <Route path='/banana' element={<BananaMain />} />
          <Route path='/beasthandler' element={<BeastHandlerMain />} />
          <Route path='/bomb' element={<BombMain />} />
          <Route path='/boomerang' element={<BoomerangMain />} />
          <Route path='/buccaneer' element={<BuccaneerMain />} />
          <Route path='/dart' element={<DartMain />} />
          <Route path='/dartling' element={<DartlingMain />} />
          <Route path='/desperado' element={<DesperadoMain />} />
          <Route path='/druid' element={<DruidMain />} />
          <Route path='/engineer' element={<EngineerMain />} />
          <Route path='/glue' element={<GlueMain />} />
          <Route path='/heli' element={<HeliMain />} />
          <Route path='/ice' element={<IceMain />} />
          <Route path='/mermonkey' element={<MermonkeyMain />} />
          <Route path='/mortar' element={<MortarMain />} />
          <Route path='/ninja' element={<NinjaMain />} />
          <Route path='/sniper' element={<SniperMain />} />
          <Route path='/spikefactory' element={<SpikeFactoryMain />} />
          <Route path='/sub' element={<SubMain />} />
          <Route path='/super' element={<SuperMain />} />
          <Route path='/tack' element={<TackMain />} />
          <Route path='/village' element={<VillageMain />} />
          <Route path='/wizard' element={<WizardMain />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Routes>
          <Route path='/' element={<HomeFooter />} exact />
          <Route path='/about' element={<AboutFooter />} />
          <Route path='/ace' element={<AceFooter />} />
          <Route path='/alchemist' element={<AlchemistFooter />} />
          <Route path='/banana' element={<BananaFooter />} />
          <Route path='/beasthandler' element={<BeastHandlerFooter />} />
          <Route path='/bomb' element={<BombFooter />} />
          <Route path='/boomerang' element={<BoomerangFooter />} />
          <Route path='/buccaneer' element={<BuccaneerFooter />} />
          <Route path='/dart' element={<DartFooter />} />
          <Route path='/dartling' element={<DartlingFooter />} />
          <Route path='/desperado' element={<DesperadoFooter />} />
          <Route path='/druid' element={<DruidFooter />} />
          <Route path='/engineer' element={<EngineerFooter />} />
          <Route path='/glue' element={<GlueFooter />} />
          <Route path='/heli' element={<HeliFooter />} />
          <Route path='/ice' element={<IceFooter />} />
          <Route path='/mermonkey' element={<MermonkeyFooter />} />
          <Route path='/mortar' element={<MortarFooter />} />
          <Route path='/ninja' element={<NinjaFooter />} />
          <Route path='/sniper' element={<SniperFooter />} />
          <Route path='/spikefactory' element={<SpikeFactoryFooter />} />
          <Route path='/sub' element={<SubFooter />} />
          <Route path='/super' element={<SuperFooter />} />
          <Route path='/tack' element={<TackFooter />} />
          <Route path='/village' element={<VillageFooter />} />
          <Route path='/wizard' element={<WizardFooter />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}