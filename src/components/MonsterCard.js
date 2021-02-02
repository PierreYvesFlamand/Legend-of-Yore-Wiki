import React from 'react';
import { Link } from 'react-router-dom';

import Sprite from './Sprite';

export default function MonsterCard({ monster }) {
    return (
        <div className='monster-card' id={monster.name.split(' ').join('_')}>
            <div className='item-card-name'>
                <Sprite tile={monster.tile} spriteSheet='chars' className='monster-img' title={monster.name} alt={monster.name} />
                <p>
                    <Link to={`/monsters#${monster.name.split(' ').join('_')}`}>{monster.name}</Link>
                </p>
            </div>
            <div className='cell'>
                <p>{monster.exp}</p>
            </div>
            <div className='cell'>
                <p>{monster.kingdom}</p>
            </div>
            <MonsterStats stats={monster.statistics} />
            <div className='cell maxScroll'>
                <ul>
                    {monster.item ? <ItemsDrop items={monster.item} /> : null}
                    {monster.itemChance && ~~monster.maxItems ? <ItemChance itemChance={monster.itemChance} monster={monster} /> : null}
                </ul>
            </div>
            <div className='cell maxScroll'>
                {monster.foundIn.length ? (
                    <ul>
                        {monster.foundIn.map((foundIn) => {
                            return (
                                <li key={foundIn}>
                                    <Link to={`/dungeons#${foundIn.split(' ').join('_').replace("'", '_')}`}>{foundIn}</Link>
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
}

function MonsterStats({ stats }) {
    return (
        <>
            <div className='cell'>{stats.health}</div>
            <div className='cell'>{stats.attack}</div>
            <div className='cell'>{stats.defence}</div>
            <div className='cell'>
                {stats.charge ? stats.charge : 0} / {stats.zen ? stats.zen : 0} / {stats.rage ? stats.rage : 0}
            </div>
        </>
    );
}

function ItemsDrop({ items }) {
    if (!Array.isArray(items)) {
        items = [items];
    }

    return (
        <>
            {items.map((item, id) => {
                return (
                    <li key={id}>
                        <Link to={`/items#${item.name.split(' ').join('_')}`}>{item.name}</Link>{' '}
                        {item.onein ? `${((1 / ~~item.onein) * 100).toFixed(2).replace(/\.0+$/, '')}%` : '100%'}
                    </li>
                );
            })}
        </>
    );
}

function ItemChance({ itemChance }) {
    if (!Array.isArray(itemChance)) {
        itemChance = [itemChance];
    }
    const maxChance = itemChance.reduce((acc, cur) => acc + ~~cur.chance, 0);

    return (
        <>
            {itemChance.map((item, id) => {
                return item.chance && item.name && item.name !== 'null' ? (
                    <li key={id}>
                        <Link to={`/items#${item.name.split(' ').join('_')}`}>{item.name}</Link>{' '}
                        {`${((item.chance / maxChance) * 100).toFixed(2).replace(/\.0+$/, '')}%`}
                    </li>
                ) : null;
            })}
        </>
    );
}
