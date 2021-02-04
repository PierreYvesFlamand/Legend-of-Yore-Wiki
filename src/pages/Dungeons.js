import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import H2 from '../components/H2';
import H3 from '../components/H3';
import PageHeader from '../components/PageHeader';
import Table from '../components/Table';
import DungeonRows from '../components/Table/DungeonRow';

import { DataContext } from '../context/dataContext';
import DungeonsFilters from '../utils/DungeonsFilters';

export default function Dungeons() {
    const levels = useContext(DataContext).levels;
    const customData = useContext(DataContext).customData;
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
            <H2>Dungeons</H2>
            <PageHeader
                tablaOfContent={DungeonsFilters.map((filter, id) => (
                    <a key={id} href={`#${filter.name.split(' ').join('_').replace("'", '_')}`}>
                        {filter.name}
                    </a>
                ))}
            >
                <p>Here is the list of all the dungeons of the game</p>
            </PageHeader>
            {levels
                ? DungeonsFilters.map((filter, id) => {
                      return (
                          <section key={id} id={filter.name.split(' ').join('_').replace("'", '_')} className='anchor-Zone'>
                              <H3>{filter.name.substring(0, 1).toUpperCase() + filter.name.substring(1)}</H3>
                              <div>
                                  <Table
                                      header={['Floor', 'Monster / Room', 'Monsters', 'Max Chest / F', 'Chest', 'Legend']}
                                      rows={DungeonRows(levels[filter.name], customData, filter.name)}
                                  />
                              </div>
                          </section>
                      );
                  })
                : null}
        </main>
    );
}
