import React, { useContext, useEffect } from 'react';

import { DataContext } from '../context/dataContext';
import { useLocation } from 'react-router-dom';

import MonsterCard from '../components/MonsterCard';

export default function Monsters() {
    const monsters = useContext(DataContext).monsters;
    const hash = useLocation().hash;

    useEffect(() => {
        if (hash && document.querySelector(hash)) {
            document.querySelector(hash).scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }
    });

    return (
        <div className='content'>
            <h2>MONSTERS</h2>
            <div className='monsters'>
                <div className='cell'>
                    <p>Name</p>
                </div>
                <div className='cell'>
                    {' '}
                    <p>Exp</p>
                </div>
                <div className='cell'>
                    {' '}
                    <p>Kingdom</p>
                </div>
                <div className='cell'>
                    {' '}
                    <p>Hp</p>
                </div>
                <div className='cell'>
                    {' '}
                    <p>Atk</p>
                </div>
                <div className='cell'>
                    {' '}
                    <p>Def</p>
                </div>
                <div className='cell'>
                    {' '}
                    <p>Charge / Zen / Rage</p>
                </div>
                <div className='cell'>
                    {' '}
                    <p>Drops</p>
                </div>
                <div className='cell'>
                    {' '}
                    <p>Found in</p>
                </div>
                {/* <div className='bgGap'></div> */}
                {monsters
                    ? monsters.map((monster, id) => {
                          return <MonsterCard key={id} monster={monster} />;
                      })
                    : null}
            </div>
        </div>
    );
}
