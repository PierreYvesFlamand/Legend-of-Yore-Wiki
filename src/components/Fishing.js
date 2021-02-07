import React from 'react';
import { Link } from 'react-router-dom';

import Table from './Table';
import Sprite from './Sprite';

const waterFind = [
    {
        name: 'Boots',
        type: 'gear',
        chance: '1%',
        tile: '202',
    },
    {
        name: 'Gold Fish',
        type: 'item',
        chance: '0.8%',
        tile: '240',
    },
    {
        name: 'Merlins Cap',
        type: 'gear',
        chance: '0.8%',
        tile: '38',
    },
    {
        name: 'Fish Bone',
        type: 'item',
        chance: '0.8%',
        tile: '287',
    },
    {
        name: 'Trimmed Cloak',
        type: 'gear',
        chance: '0.59%',
        tile: '368',
    },
    {
        name: 'Gold Crown',
        type: 'gear',
        chance: '0.4%',
        tile: '30',
    },
    {
        name: 'Ring of Health',
        type: 'gear',
        chance: '0.4%',
        tile: '159',
    },
    {
        name: 'Goif Bow',
        type: 'gear',
        chance: '0.4%',
        tile: '48',
    },
    {
        name: 'Rusty Sword',
        type: 'gear',
        chance: '0.26%',
        tile: '387',
    },
    {
        name: 'Dirty Staff',
        type: 'gear',
        chance: '0.26%',
        tile: '389',
    },
    {
        name: 'Grimey Bow',
        type: 'gear',
        chance: '0.26%',
        tile: '388',
    },
];

export default function Fishing() {
    return (
        <>
            <p>
                You need a <Link to='/items#Fishing_Pole'>Fishing Pole</Link> to fish in water and a <Link to='/items#Lave_Rod'>Lava Rod</Link> to
                fish in lava.
            </p>
            <p>List of items from fishing in water :</p>
            <Table
                header={['Icon', 'Name', 'Chance']}
                rows={[
                    { id: '', data: ['–', 'Nothing', '60%'] },
                    {
                        id: '',
                        data: [
                            <Sprite tile='236' spriteSheet='tiles' className='sprite' title='Fish' alt='Fish' />,
                            <Link to='/items#Fish'>Fish</Link>,
                            '28%',
                        ],
                    },
                    { id: '', data: ['–', 'Fishing Pole break', '4%'] },
                    {
                        id: '',
                        data: [
                            <Sprite tile='103' spriteSheet='chars' className='sprite' title='Water Elemental' alt='Water Elemental' />,
                            <Link to='/monsters#Water_Elemental'>Water Elemental</Link>,
                            '2%',
                        ],
                    },
                    ...waterFind.reduce((acc, item) => {
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
            <p>List of items from fishing in lava :</p>
            <Table
                header={['Icon', 'Name', 'Chance']}
                rows={[
                    { id: '', data: ['–', 'Nothing', '66%'] },
                    {
                        id: '',
                        data: [
                            <Sprite tile='384' spriteSheet='tiles' className='sprite' title='Lava Fish' alt='Lava Fish' />,
                            <Link to='/items#Lava_Fish'>Lava Fish</Link>,
                            '15%',
                        ],
                    },
                    {
                        id: '',
                        data: [
                            <Sprite tile='385' spriteSheet='tiles' className='sprite' title='Fire Fish' alt='Fire Fish' />,
                            <Link to='/items#Fire_Fish'>Fire Fish</Link>,
                            '15%',
                        ],
                    },
                    {
                        id: '',
                        data: [
                            <Sprite tile='102' spriteSheet='chars' className='sprite' title='Fire Elemental' alt='Fire Elemental' />,
                            <Link to='/monsters#Fire_Elemental'>Fire Elemental</Link>,
                            '4%',
                        ],
                    },
                ]}
            />
        </>
    );
}
