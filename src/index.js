import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './normalize.css';
import './styles.css';
import './wikiStyles.css';

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

// const result = [];
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         for (let k = 1; k <= 5; k++) {
//             for (let l = 1; l <= 5; l++) {
//                 for (let m = 3; m <= 8; m++) {
//                     // for (let n = 1; n <= 1; n++) {
//                     result.push((i / (i + j + k + l + m)) * 100);
//                     // }
//                 }
//             }
//         }
//     }
// }
// console.log(result.reduce((a, b) => a + b, 0) / result.length);
