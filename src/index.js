import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './normalize.css';
import './styles.css';

import { DataContextProvider } from './context/dataContext';
import App from './App';

ReactDOM.render(
    <DataContextProvider>
        <Router basename='/Legends_of_Yore/wiki'>
            <App />
        </Router>
    </DataContextProvider>,
    document.getElementById('root')
);
