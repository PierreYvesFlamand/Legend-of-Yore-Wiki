import React from 'react';
import { Link } from 'react-router-dom';

import Table from './Table';
import Sprite from './Sprite';

const finds = [
    {
        name: 'Totem',
        type: 'item',
        chance: '60%',
        tile: '141',
    },
    {
        name: 'Gem',
        type: 'item',
        chance: '60%',
        tile: '163',
    },
    {
        name: 'Hatchet',
        type: 'gear',
        chance: '10%',
        tile: '280',
    },
    {
        name: 'Rusty Sword',
        type: 'gear',
        chance: '10%',
        tile: '387',
    },
    {
        name: 'Dirty Staff',
        type: 'gear',
        chance: '10%',
        tile: '389',
    },
    {
        name: 'Grimey Bow',
        type: 'gear',
        chance: '10%',
        tile: '388',
    },
];

export default function Finding() {
    return (
        <>
            <p>By interacting with any furniture (table, statue, bookcase, ...), you have a 3.33% to find an item of this list.</p>
            <Table
                header={['Icon', 'Name', 'Chance']}
                rows={[
                    ...finds.reduce((acc, item) => {
                        return [
                            ...acc,
                            {
                                id: '',
                                data: [
                                    <Sprite tile={item.tile} spriteSheet='tiles' className='sprite' title={item.name} alt={item.name} />,
                                    <Link to={`/${item.type === 'gear' ? 'items' : 'items'}#${item.name.split(' ').join('_')}`}>{item.name}</Link>,
                                    item.chance,
                                ],
                            },
                        ];
                    }, []),
                ]}
            />
        </>
    );
}
