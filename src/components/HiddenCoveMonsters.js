import React from 'react';
import { Link } from 'react-router-dom';

import Table from './Table';
import Sprite from './Sprite';

const datas = [
    [
        {
            name: 'Feegle',
            tile: '260',
            chance: '21.74',
        },
        {
            name: 'Feegle Archer',
            tile: '261',
            chance: '6.52',
        },
        {
            name: 'Squal',
            tile: '269',
            chance: '21.74',
        },
        {
            name: 'Skeletal Mage',
            tile: '272',
            chance: '6.52',
        },
        {
            name: 'Imp',
            tile: '6',
            chance: '21.74',
        },
        {
            name: 'Imp Mage',
            tile: '267',
            chance: '21.74',
        },
    ],
    [
        {
            name: 'Feegle',
            tile: '260',
            chance: '16.66',
        },
        {
            name: 'Feegle Archer',
            tile: '261',
            chance: '16.66',
        },
        {
            name: 'Squal',
            tile: '269',
            chance: '16.66',
        },
        {
            name: 'Skeletal Mage',
            tile: '272',
            chance: '16.66',
        },
        {
            name: 'Imp',
            tile: '6',
            chance: '16.66',
        },
        {
            name: 'Imp Mage',
            tile: '267',
            chance: '16.66',
        },
    ],
    [
        {
            name: 'Feegle',
            tile: '260',
            chance: '25',
        },
        {
            name: 'Feegle Archer',
            tile: '261',
            chance: '25',
        },
        {
            name: 'Undead Dwarf',
            tile: '275',
            chance: '25',
        },
        {
            name: 'Dwarf Zombie',
            tile: '274',
            chance: '25',
        },
    ],
    [
        {
            name: 'Feegle',
            tile: '260',
            chance: '71',
        },
        {
            name: 'Feegle Archer',
            tile: '261',
            chance: '29',
        },
    ],
    [
        {
            name: 'Feegle',
            tile: '260',
            chance: '25.91',
        },
        {
            name: 'Feegle Archer',
            tile: '261',
            chance: '25.91',
        },
        {
            name: 'Taffyne',
            tile: '277',
            chance: '48.18',
        },
    ],
    [
        {
            name: 'Centaur',
            tile: '74',
            chance: '25.91',
        },
        {
            name: 'Taffyne',
            tile: '277',
            chance: '48.18',
        },
        {
            name: 'Imp Mage',
            tile: '267',
            chance: '25.91',
        },
    ],
    [
        {
            name: 'Minotaur',
            tile: '37',
            chance: '32.4',
        },
        {
            name: 'Bogie Giant',
            tile: '276',
            chance: '67.6',
        },
    ],
    [
        {
            name: 'Imp',
            tile: '6',
            chance: '33.3',
        },
        {
            name: 'White Imp',
            tile: '268',
            chance: '33.3',
        },
        {
            name: 'Frost Skull',
            tile: '258',
            chance: '33.3',
        },
    ],
    [
        {
            name: 'Skeleton King',
            tile: '84',
            chance: '33',
        },
        {
            name: 'Undead Dwarf',
            tile: '275',
            chance: '33',
        },
        {
            name: 'Dwarf Zombie',
            tile: '274',
            chance: '33',
        },
    ],
    [
        {
            name: 'Skeletal Mage',
            tile: '272',
            chance: '21.86',
        },
        {
            name: 'Goblin Mage',
            tile: '271',
            chance: '21.86',
        },
        {
            name: 'White Imp',
            tile: '268',
            chance: '56.28',
        },
    ],
];

export default function HiddenCoveMonsters() {
    return datas.map((data, id) => <Card key={id} data={data} />);
}

function Card({ data }) {
    return (
        <Table
            header={['Icon', 'Name', 'Chance']}
            rows={data.map((data) => {
                return {
                    id: '',
                    data: [
                        <Sprite tile={data.tile} spriteSheet='chars' className='sprite' title={data.name} alt={data.name} />,
                        <Link to={`/monsters${data.name.split(' ').join('_')}`}>{data.name}</Link>,
                        data.chance + '%',
                    ],
                };
            })}
        />
    );
}
