import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import H2 from '../components/H2';
import H3 from '../components/H3';
import PageHeader from '../components/PageHeader';
import Table from '../components/Table';
import GearRow from '../components/Table/GearRow';
import NonGearRow from '../components/Table/NonGearRow';

import { DataContext } from '../context/dataContext';
import ItemsFilters from '../utils/ItemsFilters';

export default function Items() {
    const items = useContext(DataContext).items;
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
            <H2>Items</H2>
            <PageHeader
                tablaOfContent={ItemsFilters.map((filter, id) => (
                    <a key={id} href={`#${filter.name}`}>
                        {filter.name.substring(0, 1).toUpperCase() + filter.name.substring(1)}
                    </a>
                ))}
            >
                <p className='bold underline'>Work in progress</p>
                <ul className='no-list-style'>
                    <li>⏩ Missing others way to get items (shop, quest, craft, treasure map, ...)</li>
                    <li>⏩ Missing information about non-equipment items</li>
                </ul>
                <p>Here is the list of all the "items" of the game. The value is the sell value</p>
            </PageHeader>
            {items
                ? ItemsFilters.map((filter, id) => {
                      let table = null;
                      switch (filter.type) {
                          case 'gear':
                              table = (
                                  <Table
                                      header={['Icon', 'Name', 'Level', 'Class', 'Atk', 'Def', 'Modifier', 'Value', 'Drop by', 'Other']}
                                      rows={GearRow(items[filter.name])}
                                  />
                              );
                              break;

                          default:
                              table = (
                                  <Table
                                      header={['Icon', 'Name', 'Level', 'Class', 'Value', 'Drop by', 'Other']}
                                      rows={NonGearRow(items[filter.name])}
                                  />
                              );
                              break;
                      }

                      return (
                          <section key={id} id={filter.name} className='anchor-Zone'>
                              <H3>{filter.name.substring(0, 1).toUpperCase() + filter.name.substring(1)}</H3>
                              <div>{table}</div>
                          </section>
                      );
                  })
                : null}
        </main>
    );
}
