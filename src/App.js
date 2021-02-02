import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navigation from './components/Navigation';

import Home from './Home';
import Items from './pages/Items';
import Monsters from './pages/Monsters';
import Dungeons from './pages/Dungeons';

function App() {
    return (
        <div className='body'>
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
                <Route exact path='*'>
                    <Redirect to={{ pathname: '/' }} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
