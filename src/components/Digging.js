import React from 'react';
import { Link } from 'react-router-dom';

import Table from './Table';
import Sprite from './Sprite';

const digFind = [
    {
        name: 'Diamond',
        type: 'item',
        chance: '1.59%',
        tile: '28',
    },
    {
        name: 'Cabbage',
        type: 'item',
        chance: '1.59%',
        tile: '264',
    },
    {
        name: 'Statue',
        type: 'item',
        chance: '0.9%',
        tile: '142',
    },
    {
        name: 'Totem',
        type: 'item',
        chance: '0.58%',
        tile: '141',
    },
    {
        name: 'Viking Helm',
        type: 'gear',
        chance: '0.32%',
        tile: '41',
    },
    {
        name: 'Bandit Shiv',
        type: 'gear',
        chance: '0.32%',
        tile: '44',
    },
    {
        name: 'Gold Crown',
        type: 'gear',
        chance: '0.16%',
        tile: '30',
    },
    {
        name: 'Club',
        type: 'gear',
        chance: '0.16%',
        tile: '380',
    },
    {
        name: 'Rusty Sword',
        type: 'gear',
        chance: '0.1%',
        tile: '387',
    },
    {
        name: 'Dirty Staff',
        type: 'gear',
        chance: '0.1%',
        tile: '389',
    },
    {
        name: 'Grimey Bow',
        type: 'gear',
        chance: '0.1%',
        tile: '388',
    },
    {
        name: 'Gilt Shield',
        type: 'gear',
        chance: '0.07%',
        tile: '55',
    },
    {
        name: 'Mystic Orb',
        type: 'item',
        chance: '0.01%',
        tile: '182',
    },
];

export default function Digging() {
    return (
        <>
            <p>
                You need a <Link to='/items#Spade'>Spade</Link> to dig.
            </p>
            <p>List of items from digging :</p>
            <Table
                header={['Icon', 'Name', 'Chance']}
                rows={[
                    { id: '', data: ['–', 'Nothing', '61%'] },
                    {
                        id: '',
                        data: [
                            <Sprite tile='82' spriteSheet='tiles' className='sprite' title='Gold' alt='Gold' />,
                            <>
                                5 - 14 <Link to='/items#Gold'>Gold</Link>
                            </>,
                            '28%',
                        ],
                    },
                    { id: '', data: ['–', 'Spade break', '4%'] },
                    ...digFind.reduce((acc, item) => {
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
