import React from 'react';
import { Link } from 'react-router-dom';

import Sprite from '../Sprite';

export default function NonGearRow(items, type) {
    return items
        .sort((a, b) => ~~a.level - ~~b.level)
        .reduce((acc, item) => {
            return [
                ...acc,
                {
                    id: item.name.split(' ').join('_'),
                    data:
                        type === 'quest-item'
                            ? [
                                  <Sprite tile={item.tile} spriteSheet='tiles' className='sprite' title={item.name} alt={item.name} />,
                                  <Link to={`/items#${item.name.split(' ').join('_')}`}>{item.name}</Link>,
                              ]
                            : type === 'consumable'
                            ? [
                                  <Sprite tile={item.tile} spriteSheet='tiles' className='sprite' title={item.name} alt={item.name} />,
                                  <Link to={`/items#${item.name.split(' ').join('_')}`}>{item.name}</Link>,
                                  item.action ? (
                                      Array.isArray(item.action) ? (
                                          <div className='maxScroll'>
                                              <ul>
                                                  {item.action.map((action, id) => (
                                                      <li key={id}>
                                                          +{action.delta} {action.attribute}
                                                      </li>
                                                  ))}
                                              </ul>
                                          </div>
                                      ) : (
                                          `+${item.action.delta} ${item.action.attribute}`
                                      )
                                  ) : (
                                      item.desc
                                  ),
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
                                              {item.foundIn.map((foundIn, id) => {
                                                  if (foundIn === 'Shops') {
                                                      return (
                                                          <li key={id}>
                                                              <Link to={`/shops#${item.name.split(' ').join('_').replace("'", '_')}`}>Shops</Link>
                                                          </li>
                                                      );
                                                  } else if (foundIn === 'Treasure Map') {
                                                      return (
                                                          <li key={id}>
                                                              <Link to={`/activities#treasure_maps`}>Treasure Map</Link>
                                                          </li>
                                                      );
                                                  } else if (foundIn === 'Crafting') {
                                                      return (
                                                          <li key={id}>
                                                              <Link to={`/activities#crafting`}>Crafting</Link>
                                                          </li>
                                                      );
                                                  } else if (foundIn === 'Finding') {
                                                      return (
                                                          <li key={id}>
                                                              <Link to={`/activities#finding`}>Finding</Link>
                                                          </li>
                                                      );
                                                  } else if (foundIn === 'Fishing') {
                                                      return (
                                                          <li key={id}>
                                                              <Link to={`/activities#fishing`}>Fishing</Link>
                                                          </li>
                                                      );
                                                  } else if (foundIn === 'Digging') {
                                                      return (
                                                          <li key={id}>
                                                              <Link to={`/activities#digging`}>Digging</Link>
                                                          </li>
                                                      );
                                                  } else if (foundIn.name) {
                                                      return (
                                                          <li key={id}>
                                                              <Link
                                                                  to={`/dungeons#${foundIn.name.split(' ').slice(0, -1).join('_').replace("'", '_')}`}
                                                              >
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
                                                          <li key={id}>
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
                              ]
                            : [
                                  <Sprite tile={item.tile} spriteSheet='tiles' className='sprite' title={item.name} alt={item.name} />,
                                  <Link to={`/items#${item.name.split(' ').join('_')}`}>{item.name}</Link>,
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
                                              {item.foundIn.map((foundIn, id) => {
                                                  if (foundIn === 'Shops') {
                                                      return (
                                                          <li key={id}>
                                                              <Link to={`/shops#${item.name.split(' ').join('_').replace("'", '_')}`}>Shops</Link>
                                                          </li>
                                                      );
                                                  } else if (foundIn === 'Treasure Map') {
                                                      return (
                                                          <li key={id}>
                                                              <Link to={`/activities#treasure_maps`}>Treasure Map</Link>
                                                          </li>
                                                      );
                                                  } else if (foundIn === 'Crafting') {
                                                      return (
                                                          <li key={id}>
                                                              <Link to={`/activities#crafting`}>Crafting</Link>
                                                          </li>
                                                      );
                                                  } else if (foundIn === 'Finding') {
                                                      return (
                                                          <li key={id}>
                                                              <Link to={`/activities#finding`}>Finding</Link>
                                                          </li>
                                                      );
                                                  } else if (foundIn === 'Fishing') {
                                                      return (
                                                          <li key={id}>
                                                              <Link to={`/activities#fishing`}>Fishing</Link>
                                                          </li>
                                                      );
                                                  } else if (foundIn === 'Digging') {
                                                      return (
                                                          <li key={id}>
                                                              <Link to={`/activities#digging`}>Digging</Link>
                                                          </li>
                                                      );
                                                  } else if (foundIn.name) {
                                                      return (
                                                          <li key={id}>
                                                              <Link
                                                                  to={`/dungeons#${foundIn.name.split(' ').slice(0, -1).join('_').replace("'", '_')}`}
                                                              >
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
                                                          <li key={id}>
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
