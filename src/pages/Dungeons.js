import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { DataContext } from '../context/dataContext';
import DungeonsFilters from '../utils/DungeonsFilters';

export default function Items() {
    const { levels, customData } = useContext(DataContext);
    const hash = useLocation().hash;

    useEffect(() => {
        if (hash && document.querySelector(hash)) {
            document.querySelector(hash).scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }
    });

    return (
        <div className='content'>
            <h2>Dungeons</h2>

            <div className='dungeons-nav'>
                {DungeonsFilters.map((filter) => (
                    <a key={filter.name} href={`#${filter.name.split(' ').join('_').replace("'", '_')}`}>
                        {filter.name}
                    </a>
                ))}
            </div>
            {levels
                ? DungeonsFilters.map((filter, id) => {
                      const dungeons = levels[filter.name];
                      return (
                          <div key={id} id={filter.name.split(' ').join('_').replace("'", '_')}>
                              <h3>{filter.name}</h3>
                              <div className='dungeon'>
                                  <div className='cell'>
                                      <p>Floor</p>
                                  </div>
                                  <div className='cell'>
                                      <p>Monster / room</p>
                                  </div>
                                  <div className='cell'>
                                      <p>Monsters</p>
                                  </div>
                                  <div className='cell'>
                                      <p>Max Chest / floor</p>
                                  </div>
                                  <div className='cell'>
                                      <p>Chest drops</p>
                                  </div>
                                  <div className='cell'>
                                      <p>Legend</p>
                                  </div>
                                  {dungeons.map((floor, id) => {
                                      if (floor.chest && !Array.isArray(floor.chest.itemChance)) {
                                          floor.chest.itemChance = [floor.chest.itemChance];
                                      }
                                      const totalChestChance = floor.chest ? floor.chest.itemChance.reduce((acc, cur) => acc + ~~cur.chance, 0) : 0;

                                      if (floor.ref && customData) {
                                          for (const key in customData.dungeon[floor.id]) {
                                              floor[key] = customData.dungeon[floor.id][key];
                                          }
                                      }

                                      const totalMonsterChance = floor.monsterChance
                                          ? floor.monsterChance.reduce((acc, cur) => acc + ~~cur.chance, 0)
                                          : 0;

                                      return (
                                          <div
                                              key={floor.id}
                                              id={`${filter.name.split(' ').join('_').replace("'", '_')}_F${id + 1}`}
                                              className='dungeon-card'
                                          >
                                              <div className='cell'>
                                                  {' '}
                                                  <p>{`F${id + 1}`}</p>
                                              </div>

                                              <div className='cell'>
                                                  <p>
                                                      {floor.minMonsters} / {floor.maxMonsters}
                                                  </p>
                                              </div>

                                              <div className='cell maxScroll'>
                                                  {' '}
                                                  <ul>
                                                      {floor.monsterChance
                                                          ? floor.monsterChance.map((monster) => {
                                                                if (monster.type && monster.type !== 'none') {
                                                                    return (
                                                                        <li key={monster.type}>
                                                                            <Link
                                                                                key={monster.type}
                                                                                to={`/monsters#${monster.type.split(' ').join('_')}`}
                                                                            >
                                                                                {monster.type}
                                                                            </Link>{' '}
                                                                            {`${((monster.chance / totalMonsterChance) * 100)
                                                                                .toFixed(2)
                                                                                .replace(/\.0+$/, '')}%`}
                                                                        </li>
                                                                    );
                                                                } else {
                                                                    return null;
                                                                }
                                                            })
                                                          : null}
                                                  </ul>
                                              </div>
                                              <div className='cell'>
                                                  <p>{floor.chest ? floor.chests : '/'}</p>
                                              </div>
                                              <div className='cell maxScroll'>
                                                  <ul>
                                                      {floor.chest && floor.chest.itemChance ? (
                                                          floor.chest.itemChance.map((item) => {
                                                              if (item.name && item.name !== 'none') {
                                                                  return (
                                                                      <li key={item.name}>
                                                                          <Link key={item.name} to={`/items#${item.name.split(' ').join('_')}`}>
                                                                              {item.name}
                                                                          </Link>{' '}
                                                                          {`${((item.chance / totalChestChance) * 100)
                                                                              .toFixed(2)
                                                                              .replace(/\.0+$/, '')}%`}
                                                                      </li>
                                                                  );
                                                              } else {
                                                                  return null;
                                                              }
                                                          })
                                                      ) : (
                                                          <p>/</p>
                                                      )}
                                                  </ul>
                                              </div>
                                              <div className='cell'>
                                                  {floor.legend ? (
                                                      <p>
                                                          <Link to={`/monsters#${floor.legend.split(' ').join('_')}`}>{floor.legend}</Link>
                                                      </p>
                                                  ) : (
                                                      <p>/</p>
                                                  )}
                                              </div>
                                          </div>
                                      );
                                  })}
                              </div>
                          </div>
                      );
                  })
                : null}
        </div>
    );
}
