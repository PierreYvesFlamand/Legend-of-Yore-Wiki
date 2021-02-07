import React, { useState, useEffect } from 'react';
// import ItemsFilters from '../utils/ItemsFilters';
import levelFilter from '../utils/levelFilter';
const DataContext = React.createContext();

function DataContextProvider({ children }) {
    const [equipments, setEquipments] = useState(null);
    const [items, setItems] = useState(null);
    const [levels, setLevels] = useState(null);
    const [monsters, setMonsters] = useState(null);
    const [quests, setQuests] = useState(null);
    const [skillsSpell, setSkillsSpell] = useState(null);

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/data/gameData/equipments.json')
            .then((res) => res.json())
            .then((data) => {
                setEquipments(data);
            });

        fetch(process.env.PUBLIC_URL + '/data/gameData/items.json')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });

        fetch(process.env.PUBLIC_URL + '/data/gameData/levels.json')
            .then((res) => res.json())
            .then((data) => {
                const sortedLevels = {};
                levelFilter.forEach((filter) => {
                    sortedLevels[filter.name] = data.levels.level.filter((_, id) => filter.floors.includes(id));
                    if (filter.name === 'Tower Courtyard') {
                        sortedLevels[filter.name] = sortedLevels[filter.name].reverse();
                    }
                });
                setLevels(sortedLevels);
            });

        fetch(process.env.PUBLIC_URL + '/data/gameData/monsters.json')
            .then((res) => res.json())
            .then((data) => {
                setMonsters(data);
            });

        fetch(process.env.PUBLIC_URL + '/data/gameData/quests.json')
            .then((res) => res.json())
            .then((data) => {
                setQuests(data);
            });

        fetch(process.env.PUBLIC_URL + '/data/gameData/skillsSpell.json')
            .then((res) => res.json())
            .then((data) => {
                setSkillsSpell(data);
            });
    }, []);

    return (
        <DataContext.Provider value={{ equipments, items, levels, monsters, quests, skillsSpell }}>
            {equipments && items && levels && monsters && quests && skillsSpell ? children : null}
        </DataContext.Provider>
    );
}

export { DataContextProvider, DataContext };

// // PRE SORT PURPOSE
// if (items && monsters && levels) {
//     console.log(editItems(items, monsters, levels));
//     console.log(JSON.stringify(editItems(items, monsters, levels), ' ', 4));
// }

// if (monsters && levels) {
//     console.log(editMonsters(monsters, levels));
//     console.log(JSON.stringify(editMonsters(monsters, levels), ' ', 4));
// }

// function Obj2Arr(item) {
//     return !Array.isArray(item) && item ? [item] : item;
// }

// function editMonsters(monsters, levels) {
//     let tmpMonsters;

//     tmpMonsters = monsters.map((monster) => {
//         const foundIn = [];
//         DungeonsFilters.forEach((filter) => {
//             const tempFoundIn = levels[filter.name].reduce((acc, level, idx) => {
//                 if (level.monsterChance) {
//                     level.monsterChance = Obj2Arr(level.monsterChance);

//                     if (level.legend && level.legend === monster.name) {
//                         acc.push(`${filter.name} F${idx + 1}`);
//                     }

//                     level.monsterChance.forEach((levelMonster) => {
//                         if (levelMonster.type && levelMonster.type === monster.name) {
//                             acc.push(`${filter.name} F${idx + 1}`);
//                         }
//                     });
//                 }
//                 return acc;
//             }, []);

//             if (tempFoundIn.length) {
//                 foundIn.push(...tempFoundIn);
//             }
//         });

//         return { ...monster, foundIn };
//     });

//     return tmpMonsters;
// }

// function editItems(items, monsters, levels) {
//     let tmpItems;
//     //Adding DropedBy
//     tmpItems = items.map((item) => {
//         const itemDropsOn = monsters.reduce((acc, monster) => {
//             monster.item = Obj2Arr(monster.item);
//             monster.itemChance = Obj2Arr(monster.itemChance);

//             if (monster.item) {
//                 monster.item.forEach((monster_item) => {
//                     if (monster_item.name === item.name) {
//                         acc.push({ name: monster.name, chance: monster_item.onein ? '1/' + monster_item.onein : '100/100' });
//                     }
//                 });
//             }

//             if (monster.itemChance) {
//                 const maxChance = monster.itemChance.reduce((acc, cur) => acc + ~~cur.chance, 0);
//                 monster.itemChance.forEach((monster_item) => {
//                     if (monster_item.name === item.name) {
//                         if (item.name === 'Gold') {
//                             acc.push({
//                                 name: monster.name,
//                                 chance: `${monster_item.chance}/${maxChance}`,
//                                 min: monster_item.min,
//                                 max: monster_item.max,
//                             });
//                         } else {
//                             acc.push({ name: monster.name, chance: `${monster_item.chance}/${maxChance}` });
//                         }
//                     }
//                 });
//             }

//             return acc;
//         }, []);

//         return { ...item, dropedBy: itemDropsOn };
//     });

//     //Adding FoundIn
//     tmpItems = tmpItems.map((item) => {
//         const itemFoundIn = [];
//         DungeonsFilters.forEach((filter) => {
//             const foundIn = levels[filter.name].reduce((acc, level, idx) => {
//                 if (level.chest) {
//                     level.chest.itemChance = Obj2Arr(level.chest.itemChance);
//                     const maxChance = level.chest.itemChance.reduce((acc, cur) => acc + ~~cur.chance, 0);

//                     level.chest.itemChance.forEach((chest_item) => {
//                         if (chest_item.name === item.name) {
//                             if (item.name === 'Gold') {
//                                 acc.push({
//                                     name: level.id,
//                                     chance: `${chest_item.chance}/${maxChance}`,
//                                     min: chest_item.min,
//                                     max: chest_item.max,
//                                 });
//                             } else {
//                                 acc.push({ name: `${filter.name} F${idx + 1}`, chance: `${chest_item.chance}/${maxChance}` });
//                             }
//                         }
//                     });
//                 }

//                 return acc;
//             }, []);

//             if (foundIn.length) {
//                 itemFoundIn.push(...foundIn);
//             }
//         });

//         return { ...item, foundIn: itemFoundIn };
//     });

//     //Filter them
//     const sortedItems = {};
//     ItemsFilters.forEach((filter) => {
//         sortedItems[filter.name] = tmpItems.filter((item) => filter.ids.includes(~~item.id));
//     });

//     return sortedItems;
// }
