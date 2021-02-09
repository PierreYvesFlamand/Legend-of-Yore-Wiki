import React, { useContext, useEffect } from 'react';

import { DataContext } from '../context/dataContext';
import { Link, useLocation } from 'react-router-dom';

import H2 from '../components/H2';
import H3 from '../components/H3';
import PageHeader from '../components/PageHeader';
import Table from '../components/Table';
import QuestRow from '../components/Table/QuestRow';

import ncpLocation from '../utils/npcLocation';

export default function Monsters() {
    const { quests } = useContext(DataContext);
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
            {quests ? (
                <>
                    <H2>Quests</H2>
                    <PageHeader
                        tablaOfContent={quests.map(({ town }, id) => (
                            <a key={id} href={`#${town.split(' ').join('_').replace("'", '_')}`}>
                                {town}
                            </a>
                        ))}
                    >
                        <p>List of quests</p>
                    </PageHeader>
                    {quests.map((quest, id) => {
                        return (
                            <section key={id} id={quest.town.split(' ').join('_').replace("'", '_')} className='anchor-Zone'>
                                <H3>{quest.town}</H3>
                                <div>
                                    <h4>
                                        Quest giver :{' '}
                                        <Link
                                            to={`/world_map#i=${ncpLocation[quest.npc].map}&x=${ncpLocation[quest.npc].x}&y=${
                                                ncpLocation[quest.npc].y
                                            }`}
                                        >
                                            {quest.npc}
                                        </Link>
                                    </h4>
                                    <Table
                                        header={['Level', 'Name', 'Summary', 'Quest item', 'Description', 'Reward']}
                                        rows={QuestRow(quest.quests)}
                                    />
                                </div>
                            </section>
                        );
                    })}
                </>
            ) : null}
        </main>
    );
}
