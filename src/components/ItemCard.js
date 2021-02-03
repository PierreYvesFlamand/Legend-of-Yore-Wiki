import React from 'react';
import { Link } from 'react-router-dom';

import Sprite from './Sprite';

export default function ItemCard(items, type) {
    if (type === 'gear') {
        return items
            .sort((a, b) => ~~a.level - ~~b.level)
            .map((item) => {
                return (
                    <div key={item.id} className='item-card gear' id={item.name.split(' ').join('_')}>
                        <div className='item-card-name' id={item.name.split(' ').join('_')} key={item.id}>
                            <Sprite tile={item.tile} spriteSheet='tiles' className='item-img' title={item.name} alt={item.name} />
                            <p>
                                <Link to={`/items#${item.name.split(' ').join('_')}`}>{item.name}</Link>
                            </p>
                        </div>
                        <div className='cell'>
                            {' '}
                            <p>{item.level}</p>
                        </div>
                        <div className='cell'>
                            {' '}
                            {item.classes ? item.classes.split(',').map((classe) => <p key={classe}>{classe}</p>) : <p>All</p>}
                        </div>
                        <div className='cell'>
                            {' '}
                            <p>{item.attackMod ? item.attackMod : '0'}</p>
                        </div>
                        <div className='cell'>
                            {' '}
                            <p>{item.defenceMod ? item.defenceMod : '0'}</p>
                        </div>
                        <div className='cell'>
                            <ItemModifier modifiers={item.modifier} />
                        </div>
                        <div className='cell'>
                            <p>{~~(item.cost * 0.05) + 1}</p>
                        </div>

                        <div className='cell maxScroll'>
                            {item.dropedBy.length ? (
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
                            ) : (
                                <p>/</p>
                            )}
                        </div>
                        <div className='cell maxScroll'>
                            {item.foundIn.length ? (
                                <ul>
                                    {item.foundIn.map((foundIn) => {
                                        return (
                                            <li key={foundIn.name}>
                                                <Link to={`/dungeons#${foundIn.name.split(' ').join('_').replace("'", '_')}`}>{foundIn.name}</Link>{' '}
                                                {`${foundIn.chance === '100/100' ? '' : ``} ${(
                                                    (~~foundIn.chance.split('/')[0] / ~~foundIn.chance.split('/')[1]) *
                                                    100
                                                )
                                                    .toFixed(2)
                                                    .replace(/\.0+$/, '')}%`}
                                            </li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                <p>/</p>
                            )}
                        </div>
                    </div>
                );
            });
    } else {
        return items.map((item) => {
            return (
                <div key={item.id} className='item-card gear' id={item.name.split(' ').join('_')}>
                    <div className='item-card-name'>
                        <Sprite tile={item.tile} spriteSheet='tiles' className='item-img' title={item.name} alt={item.name} />
                        <p>
                            <Link to={`/items#${item.name.split(' ').join('_')}`}>{item.name}</Link>
                        </p>
                    </div>
                    <div className='cell'>
                        {' '}
                        <p>{item.level}</p>
                    </div>
                    <div className='cell'> {item.classes ? item.classes.split(',').map((classe) => <p key={classe}>{classe}</p>) : <p>All</p>}</div>
                    <div className='cell'></div>
                    <div className='cell'></div>
                    <div className='cell'></div>
                    <div className='cell'>
                        <p>{~~(item.cost * 0.05)}</p>
                    </div>

                    <div className='cell maxScroll'>
                        {item.dropedBy.length ? (
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
                        ) : (
                            <p>/</p>
                        )}
                    </div>
                    <div className='cell maxScroll'>
                        {item.foundIn.length ? (
                            <ul>
                                {item.foundIn.map((foundIn) => {
                                    return (
                                        <li key={foundIn.name}>
                                            <Link to={`/dungeons#${foundIn.name.split(' ').join('_').replace("'", '_')}`}>{foundIn.name}</Link>{' '}
                                            {`${foundIn.chance === '100/100' ? '' : ``} ${(
                                                (~~foundIn.chance.split('/')[0] / ~~foundIn.chance.split('/')[1]) *
                                                100
                                            )
                                                .toFixed(2)
                                                .replace(/\.0+$/, '')}%`}
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            <p>/</p>
                        )}
                    </div>
                </div>
            );
        });
    }
}

function ItemModifier({ modifiers }) {
    if (!modifiers) {
        return <p>/</p>;
    }

    if (!Array.isArray(modifiers)) {
        modifiers = [modifiers];
    }

    modifiers = modifiers.map((modif, id) => {
        switch (modif.type) {
            case 'tick':
                return (
                    <p key={id} className='gear-info'>
                        {modif.value.substring(0, 1) === '-' ? `- ${modif.value.substring(1)}` : `+ ${modif.value}`} {modif.attribute} /{' '}
                        {modif.attribute === 'hp' ? 'attack' : 'turn'}
                    </p>
                );

            case 'magic':
            case 'resist':
                return (
                    <p key={id} className='gear-info'>
                        + {modif.value} {modif.type}
                    </p>
                );

            case 'set':
                return (
                    <p key={id} className='gear-info'>
                        {modif.type} N°{modif.value}
                    </p>
                );

            default:
                return (
                    <p key={id} className='gear-info'>
                        {modif.value.substring(0, 1) === '-' ? `- ${modif.value.substring(1)}` : `+ ${modif.value}`} {modif.attribute} vs {modif.type}
                    </p>
                );
        }
    });

    return <div>{modifiers}</div>;
}
