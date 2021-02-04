import React, { useContext, useEffect } from 'react';

import { DataContext } from '../context/dataContext';
import { useLocation } from 'react-router-dom';

import H2 from '../components/H2';
import H3 from '../components/H3';
import PageHeader from '../components/PageHeader';
import Table from '../components/Table';
import MonsterRow from '../components/Table/MonsterRow';

import LegendsFilter from '../utils/LegendsFilters';

export default function Monsters() {
    const { monsters, customData } = useContext(DataContext);
    const hash = useLocation().hash;

    const filtredMonsters = { legends: [], commons: [] };
    if ((monsters, customData)) {
        monsters.forEach((monster) => {
            if (Object.keys(customData.monster).includes(monster.name)) {
                monster.foundIn.push(customData.monster[monster.name].foundIn);
            }
            if (LegendsFilter.includes(monster.name)) {
                filtredMonsters.legends.push(monster);
            } else {
                filtredMonsters.commons.push(monster);
            }
        });
    }

    useEffect(() => {
        if (hash && document.querySelector(hash)) {
            document.querySelector(hash).scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }
    });

    return (
        <main className='content'>
            <H2>Monsters</H2>
            <PageHeader tablaOfContent={[<a href={`#commons`}>Commons</a>, <a href={`#legends`}>Legends</a>]}>
                <p className='bold underline'>Work in progress</p>
                <ul className='no-list-style'>
                    <li>⏩ Missing spawn zone of overworld monster</li>
                </ul>
                <p>Here is the list of all the monsters and legend of the game</p>
            </PageHeader>
            {filtredMonsters ? (
                <>
                    <section id='commons' className='anchor-Zone'>
                        <H3>{'Commons'}</H3>
                        <div>
                            <Table
                                header={['Icon', 'Name', 'Exp', 'Kingdom', 'Hp', 'Atk', 'Def', 'Cha / Ze / Ra', 'Drop', 'Location']}
                                rows={MonsterRow(filtredMonsters.commons)}
                            />
                        </div>
                    </section>
                    <section>
                        <div id='legends' className='anchor-Zone'>
                            <H3>{'Legends'}</H3>
                            <Table
                                header={['Icon', 'Name', 'Exp', 'Kingdom', 'Hp', 'Atk', 'Def', 'Cha / Ze / Ra', 'Drop', 'Location']}
                                rows={MonsterRow(filtredMonsters.legends)}
                            />
                        </div>
                    </section>
                </>
            ) : null}
        </main>
    );
}
