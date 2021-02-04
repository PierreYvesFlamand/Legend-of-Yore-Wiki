import React, { useContext, useEffect } from 'react';

import { DataContext } from '../context/dataContext';
import { useLocation } from 'react-router-dom';

import H2 from '../components/H2';
import H3 from '../components/H3';
import PageHeader from '../components/PageHeader';
import Table from '../components/Table';
import MonsterRow from '../components/Table/MonsterRow';

import LegendsFilter from '../utils/LegendsFilters';
import RaresFilter from '../utils/RaresFilter';
import MonstersNotFound from '../utils/MonstersNotFound';

export default function Monsters() {
    const { monsters, customData } = useContext(DataContext);
    const hash = useLocation().hash;

    const filtredMonsters = { legends: [], commons: [], rares: [], notFound: [] };
    if ((monsters, customData)) {
        monsters.forEach((monster) => {
            if (Object.keys(customData.monster).includes(monster.name)) {
                const addedFoundIn = customData.monster[monster.name].foundIn;
                if (Array.isArray(addedFoundIn)) {
                    monster.foundIn.push(...customData.monster[monster.name].foundIn);
                } else {
                    monster.foundIn.push(customData.monster[monster.name].foundIn);
                }
            }

            if (LegendsFilter.includes(monster.name)) {
                filtredMonsters.legends.push(monster);
            } else if (RaresFilter.includes(monster.name)) {
                filtredMonsters.rares.push(monster);
            } else if (MonstersNotFound.includes(monster.name)) {
                filtredMonsters.notFound.push(monster);
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
            <PageHeader
                tablaOfContent={[
                    <a href={`#commons`}>Commons</a>,
                    <a href={`#legends`}>Legends</a>,
                    <a href={`#rares`}>Rares</a>,
                    <a href={`#no_location`}>No location</a>,
                ]}
            >
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
                    <section id='legends' className='anchor-Zone'>
                        <H3>{'Legends'}</H3>
                        <div>
                            <Table
                                header={['Icon', 'Name', 'Exp', 'Kingdom', 'Hp', 'Atk', 'Def', 'Cha / Ze / Ra', 'Drop', 'Location']}
                                rows={MonsterRow(filtredMonsters.legends)}
                            />
                        </div>
                    </section>
                    <section id='rares' className='anchor-Zone'>
                        <H3>{'Rares'}</H3>
                        <div>
                            <Table
                                header={['Icon', 'Name', 'Exp', 'Kingdom', 'Hp', 'Atk', 'Def', 'Cha / Ze / Ra', 'Drop', 'Chance']}
                                rows={MonsterRow(filtredMonsters.rares, true)}
                            />
                        </div>
                    </section>
                    <section id='no_location' className='anchor-Zone'>
                        <H3>{'No location'}</H3>
                        <div>
                            <p>
                                These monsters are in the game code base but you can't find and fight them. Some of them are the pet we can have. (Pet
                                page to be done)
                            </p>
                            <Table
                                header={['Icon', 'Name', 'Exp', 'Kingdom', 'Hp', 'Atk', 'Def', 'Cha / Ze / Ra', 'Drop', 'Location']}
                                rows={MonsterRow(filtredMonsters.notFound)}
                            />
                        </div>
                    </section>
                </>
            ) : null}
        </main>
    );
}
