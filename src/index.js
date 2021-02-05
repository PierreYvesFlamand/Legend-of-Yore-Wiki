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

// const baseWarHp = 103;
// const baseWarRage = 18;

// const baseArchHp = 81;
// const baseArchZen = 18;

// const baseWizHp = 60;
// const baseWizChar = 81;

// const baseSubRage = 5;
// const baseSubZen = 10;
// const baseSubChar = 7;
// let level = 200;

// function getStat(level, base) {
//     let stat = base;

//     for (let i = 10; i <= level; i++) {
//         stat += Math.floor(i / 3);
//     }

//     return stat;
// }

// function getSubStat(level, base) {
//     let stat = base;

//     for (let i = 51; i <= level; i++) {
//         stat += Math.floor((Math.floor(i / 3) * 3 - 40) / 5);
//     }

//     return stat;
// }

// console.log(`Level : ${level}\n`);
// if (level <= 50) {
//     console.log(`Warrior\n\nHP : ${getStat(level, baseWarHp)}\nRage : ${getStat(level, baseWarRage)}`);
//     console.log(`Archer\n\nHP : ${getStat(level, baseArchHp)}\nZen : ${getStat(level, baseArchZen)}`);
//     console.log(`Wizard\n\nHP : ${getStat(level, baseWizHp)}\nCharge : ${getStat(level, baseWizChar)}`);
// } else {
//     console.log(`Barbarian\n\nHP : ${getStat(level, baseWarHp)}\nRage : ${getStat(level, baseWarRage)}\nZen : ${getSubStat(level, baseSubZen)}`);
//     console.log(`Paladin\n\nHP : ${getStat(level, baseWarHp)}\nRage : ${getStat(level, baseWarRage)}\nCharge : ${getSubStat(level, baseSubChar)}`);

//     console.log(`Rogue\n\nHP : ${getStat(level, baseArchHp)}\nZen : ${getStat(level, baseArchZen)}\nRage : ${getSubStat(level, baseSubRage)}`);
//     console.log(`Monk\n\nHP : ${getStat(level, baseArchHp)}\nZen : ${getStat(level, baseArchZen)}\nCharge : ${getSubStat(level, baseSubChar)}`);

//     console.log(`Warlock\n\nHP : ${getStat(level, baseWizHp)}\nCharge : ${getStat(level, baseWizChar)}\nRage : ${getSubStat(level, baseSubRage)}`);
//     console.log(`Archmage\n\nHP : ${getStat(level, baseWizHp)}\nCharge : ${getStat(level, baseWizChar)}\nZen : ${getSubStat(level, baseSubZen)}`);
// }
