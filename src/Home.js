import React, { useContext } from 'react';

import { DataContext } from './context/dataContext';

function Home() {
    const homeData = useContext(DataContext).home;

    return (
        <div className='content'>
            <h1>Legend of Yore - Wiki</h1>
            <p>
                This is a work in progress in-depth wiki about the{' '}
                <a target='_blank' rel='noreferrer' href='https://www.legendsofyore.com/'>
                    Legends of Yore
                </a>
                .
            </p>
            <p>If you want to report any issues, contributing or giving feedback, you can contact me on Discord : Polfy#6924</p>
            <p>
                <a target='_blank' rel='noreferrer' href='https://discord.gg/YKXpRrrunp'>
                    Legends of Yore Discord
                </a>
            </p>
            <p>Already Done :</p>
            <ul>{homeData ? homeData.done.map((txt, id) => <li key={id}>✅ {txt}</li>) : null}</ul>
            <p>Planned :</p>
            <ul>{homeData ? homeData.planned.map((txt, id) => <li key={id}>⏩ {txt}</li>) : null}</ul>
            <p>Known issues :</p>
            <ul>{homeData ? homeData.issues.map((txt, id) => <li key={id}>❗ {txt}</li>) : null}</ul>
        </div>
    );
}

export default Home;
