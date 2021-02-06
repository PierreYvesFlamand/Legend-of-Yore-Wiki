import React from 'react';
import { Link } from 'react-router-dom';

import Sprite from '../Sprite';

export default function GearRow(items) {
    return items
        .sort((a, b) => ~~a.level - ~~b.level)
        .reduce((acc, item) => {
            return [
                ...acc,
                {
                    id: item.name.split(' ').join('_'),
                    data: [
                        <Sprite tile={item.tile} spriteSheet='tiles' className='sprite' title={item.name} alt={item.name} />,
                        <Link to={`/items#${item.name.split(' ').join('_')}`}>{item.name}</Link>,
                        item.level ? item.level : 0,
                        item.classes ? item.classes.split(',').map((clas, id) => <p key={id}>{clas}</p>) : 'All',
                        ~~(item.cost * 0.05) + 1,
                        item.dropedBy.length ? (
                            <div className='maxScroll'>
                                <ul>
                                    {item.dropedBy.map((dropedBy) => {
                                        return (
                                            <li key={dropedBy.name}>
                                                <Link to={`/monsters#${dropedBy.name.split(' ').join('_')}`}>{dropedBy.name}</Link>{' '}
                                                {`${dropedBy.chance === '100/100' ? '' : ``} ${(
                                                    (~~dropedBy.chance.split('/')[0] / ~~dropedBy.chance.split('/')[1]) *
                                                    100
                                                )
                                                    .toFixed(2)
                                                    .replace(/\.0+$/, '')}%`}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ) : (
                            '–'
                        ),
                        item.foundIn.length ? (
                            <div className='maxScroll'>
                                <ul>
                                    {item.foundIn.map((foundIn) => {
                                        if (foundIn.name) {
                                            return (
                                                <li key={foundIn.name}>
                                                    <Link to={`/dungeons#${foundIn.name.split(' ').slice(0, -1).join('_').replace("'", '_')}`}>
                                                        {foundIn.name}
                                                    </Link>{' '}
                                                    {`${foundIn.chance === '100/100' ? '' : ``} ${(
                                                        (~~foundIn.chance.split('/')[0] / ~~foundIn.chance.split('/')[1]) *
                                                        100
                                                    )
                                                        .toFixed(2)
                                                        .replace(/\.0+$/, '')}%`}
                                                </li>
                                            );
                                        } else {
                                            return (
                                                <li key={foundIn.quest}>
                                                    Quest{' '}
                                                    <Link to={`/quests#${foundIn.quest.split(' ').join('_').replace("'", '_')}`}>
                                                        {foundIn.quest}
                                                    </Link>
                                                </li>
                                            );
                                        }
                                    })}
                                </ul>
                            </div>
                        ) : (
                            '–'
                        ),
                    ],
                },
            ];
        }, []);
}
