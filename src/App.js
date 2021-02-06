import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navigation from './components/Navigation/';
import Footer from './components/Footer/';

import Home from './pages/Home';
import Items from './pages/Items';
import Monsters from './pages/Monsters';
import Dungeons from './pages/Dungeons';
import Quests from './pages/Quests';
import Map from './pages/Map';

export default function App() {
    document.querySelector('body').style.background = `url('${process.env.PUBLIC_URL}/data/bg-m.jpg') repeat-x fixed left bottom var(--clr-l-blue)`;

    return (
        <>
            <Navigation />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/items'>
                    <Items />
                </Route>
                <Route exact path='/monsters'>
                    <Monsters />
                </Route>
                <Route exact path='/dungeons'>
                    <Dungeons />
                </Route>
                <Route exact path='/quests'>
                    <Quests />
                </Route>
                <Route exact path='/world_map'>
                    <Map />
                </Route>
                <Route exact path='*'>
                    <Redirect to={{ pathname: '/' }} />
                </Route>
            </Switch>
            <Footer />
        </>
    );
}
