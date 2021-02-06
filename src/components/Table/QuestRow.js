import React from 'react';

import { Link } from 'react-router-dom';

export default function QuestRow(quests) {
    return quests.reduce((acc, quest) => {
        let target;

        if (quest.title === 'Medicine Man') {
            target = (
                <>
                    Kill{' '}
                    {quest.target[0].monster.map((monster, id) => (
                        <span key={id}>
                            <Link to={`/monsters#${monster.split(' ').join('_').replace("'", '_')}`}>{monster}</Link>{' '}
                        </span>
                    ))}
                    in <Link to={`/world_map#${quest.target[0].name.split(' ').join('_').replace("'", '_')}`}>{quest.target[0].name}</Link>{' '}
                </>
            );
        } else {
            switch (quest.target[0].type) {
                case 'Dungeon':
                    target = (
                        <>
                            Kill{' '}
                            <Link to={`/monsters#${quest.target[0].monster.split(' ').join('_').replace("'", '_')}`}>{quest.target[0].monster}</Link>{' '}
                            in <Link to={`/dungeons#${quest.target[0].name.split(' ').join('_').replace("'", '_')}`}>{quest.target[0].name}</Link>{' '}
                            {quest.target[0].rdm ? `(${quest.target[0].rdm}% drop rate)` : null}
                        </>
                    );
                    break;

                case 'Npc':
                    target = (
                        <>
                            Talk to {quest.target[0].npc} at {quest.target[0].name}
                        </>
                    );
                    break;

                case 'Map':
                    target = (
                        <>
                            Kill{' '}
                            <Link to={`/monsters#${quest.target[0].monster.split(' ').join('_').replace("'", '_')}`}>{quest.target[0].monster}</Link>{' '}
                            in <Link to={`/world_map#${quest.target[0].name.split(' ').join('_').replace("'", '_')}`}>{quest.target[0].name}</Link>{' '}
                            {quest.target[0].rdm ? `(${quest.target[0].rdm}% drop rate)` : null}
                        </>
                    );
                    break;

                default:
                    break;
            }
        }
        return [
            ...acc,
            {
                id: quest.title.split(' ').join('_').replace("'", '_'),
                data: [
                    quest.level,
                    quest.title,
                    quest.summary,
                    Array.isArray(quest.questItem) ? (
                        quest.questItem.map((item, id) => (
                            <span key={id}>
                                <Link to={`/items#${item.split(' ').join('_').replace("'", '_')}`}>{item}</Link>
                                <br />
                            </span>
                        ))
                    ) : quest.questItem ? (
                        <Link to={`/items#${quest.questItem.split(' ').join('_').replace("'", '_')}`}>{quest.questItem}</Link>
                    ) : (
                        '–'
                    ),
                    target,
                    quest.title === 'The Treaty' ? (
                        <>
                            <p>8700 exp</p>
                            <p>5000 gold</p>
                            <p>
                                <Link to={`/items#${'Crusader Shield'.split(' ').join('_').replace("'", '_')}`}>Crusader Shield</Link> if Warrior
                            </p>
                            <p>
                                <Link to={`/items#${'Elven Boots'.split(' ').join('_').replace("'", '_')}`}>Elven Boots</Link> if Archer
                            </p>
                            <p>
                                <Link to={`/items#${'Band of Odin'.split(' ').join('_').replace("'", '_')}`}>Band of Odin</Link> if Wizard
                            </p>
                        </>
                    ) : (
                        quest.rewards.map((item, id) => {
                            if (item.value !== '') {
                                return (
                                    <p key={id}>
                                        {item.name === 'item' ? (
                                            <Link to={`/items#${item.value.split(' ').join('_').replace("'", '_')}`}>{item.value}</Link>
                                        ) : (
                                            `${item.value} ${item.name}`
                                        )}
                                    </p>
                                );
                            } else {
                                return null;
                            }
                        })
                    ),
                ],
            },
        ];
    }, []);
}
