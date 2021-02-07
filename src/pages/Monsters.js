import React, { useContext, useEffect } from 'react';

import { DataContext } from '../context/dataContext';
import { useLocation } from 'react-router-dom';

import H2 from '../components/H2';
import H3 from '../components/H3';
import PageHeader from '../components/PageHeader';
import Table from '../components/Table';
import MonsterRow from '../components/Table/MonsterRow';

export default function Monsters() {
    const { monsters } = useContext(DataContext);
    const hash = useLocation().hash;

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
                tablaOfContent={Object.keys(monsters).reduce((acc, key) => {
                    return [...acc, <a href={`#${key}`}>{key.substring(0, 1).toUpperCase() + key.substring(1)}</a>];
                }, [])}
            >
                <p>Here is the list of all the monsters of the game</p>
            </PageHeader>

            {Object.keys(monsters).map((type, id) => {
                return (
                    <section id={type} className='anchor-Zone' key={id}>
                        <H3>{type.substring(0, 1).toUpperCase() + type.substring(1)}</H3>
                        <div>
                            <Table
                                header={['Icon', 'Name', 'Exp', 'Kingdom', 'Hp', 'Atk', 'Def', 'Cha / Ze / Ra', 'Drop', 'Location']}
                                rows={MonsterRow(monsters[type], type === 'rares' ? true : false)}
                            />
                        </div>
                    </section>
                );
            })}
        </main>
    );
}
