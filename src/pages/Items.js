import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import H2 from '../components/H2';
import H3 from '../components/H3';
import PageHeader from '../components/PageHeader';
import Table from '../components/Table';
import GearRow from '../components/Table/GearRow';
import NonGearRow from '../components/Table/NonGearRow';

import { DataContext } from '../context/dataContext';

export default function Items() {
    const { equipments, items } = useContext(DataContext);
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
            <H2>Gears</H2>
            <PageHeader
                tablaOfContent={[
                    ...Object.keys(equipments).reduce((acc, type) => {
                        return [...acc, <a href={`#${type}`}>{type.substring(0, 1).toUpperCase() + type.substring(1)}</a>];
                    }, []),
                    ...Object.keys(items).reduce((acc, type) => {
                        return [...acc, <a href={`#${type.split(' ').join('_')}`}>{type.substring(0, 1).toUpperCase() + type.substring(1)}</a>];
                    }, []),
                ]}
            >
                <p className='bold underline'>Work in progress</p>
                <ul className='no-list-style'>
                    <li>⏩ Missing others way to get items (shop, treasure map)</li>
                </ul>
                <p>Here is the list of all the gears of the game. The value is the sell value</p>
            </PageHeader>
            {Object.keys(equipments).map((type, id) => {
                return (
                    <section key={id} id={type} className='anchor-Zone'>
                        <H3>{type.substring(0, 1).toUpperCase() + type.substring(1)}</H3>
                        <div>
                            <Table
                                header={['Icon', 'Name', 'Level', 'Class', 'Atk', 'Def', 'Modifier', 'Value', 'Drop by', 'Other']}
                                rows={GearRow(equipments[type])}
                            />
                        </div>
                    </section>
                );
            })}
            {Object.keys(items).map((type, id) => {
                return (
                    <section key={id} id={type.split(' ').join('_')} className='anchor-Zone'>
                        <H3>{type.substring(0, 1).toUpperCase() + type.substring(1)}</H3>
                        <div>
                            {type === 'quest item' ? (
                                <Table header={['Icon', 'Name']} rows={NonGearRow(items[type], 'quest-item')} />
                            ) : type === 'consumable' ? (
                                <Table
                                    header={['Icon', 'Name', 'Effect', 'Value', 'Drop by', 'Other']}
                                    rows={NonGearRow(items[type], 'consumable')}
                                />
                            ) : (
                                <Table header={['Icon', 'Name', 'Value', 'Drop by', 'Other']} rows={NonGearRow(items[type])} />
                            )}
                        </div>
                    </section>
                );
            })}
        </main>
    );
}
