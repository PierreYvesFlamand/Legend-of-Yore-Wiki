import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ItemCard from '../components/ItemCard';

import { DataContext } from '../context/dataContext';
import ItemsFilters from '../utils/ItemsFilters';

export default function Items() {
    const items = useContext(DataContext).items;
    const hash = useLocation().hash;

    useEffect(() => {
        if (hash && document.querySelector(hash)) {
            document.querySelector(hash).scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }
    });

    function expandCollapse(e) {
        const [target, state] = e.target.parentNode.textContent.split(' ');
        if (state === '[collapse]') {
            document.querySelector('#' + target.toLowerCase() + ' .items').style.display = 'none';
            e.target.textContent = '[expand]';
        } else {
            document.querySelector('#' + target.toLowerCase() + ' .items').style.display = 'grid';
            e.target.textContent = '[collapse]';
        }
    }

    return (
        <main className='content'>
            <h2>ITEMS</h2>
            <div className='items-nav'>
                {ItemsFilters.map((filter) => (
                    <a key={filter.name} href={`#${filter.name}`}>
                        {filter.name}
                    </a>
                ))}
            </div>
            {items ? (
                <>
                    {ItemsFilters.map((filter, id) => {
                        let itemsList;
                        switch (filter.type) {
                            case 'gear':
                                itemsList = ItemCard(items[filter.name], 'gear');
                                break;

                            default:
                                itemsList = ItemCard(items[filter.name], 'default');
                                break;
                        }

                        return (
                            <section className='items-section' key={id} id={filter.name}>
                                <h3>
                                    {filter.name.toUpperCase()} <button onClick={expandCollapse}>[collapse]</button>
                                </h3>
                                <div className='items'>
                                    <div className='cell'>
                                        <p>Name</p>
                                    </div>
                                    <div className='cell'>
                                        {' '}
                                        <p>Level</p>
                                    </div>
                                    <div className='cell'>
                                        {' '}
                                        <p>Classe</p>
                                    </div>
                                    <div className='cell'>
                                        {' '}
                                        <p>Atk</p>
                                    </div>
                                    <div className='cell'>
                                        {' '}
                                        <p>Def</p>
                                    </div>
                                    <div className='cell'>
                                        {' '}
                                        <p>Modifier</p>
                                    </div>
                                    <div className='cell'>
                                        {' '}
                                        <p>Value</p>
                                    </div>
                                    <div className='cell'>
                                        {' '}
                                        <p>Droped by</p>
                                    </div>
                                    <div className='cell'>
                                        {' '}
                                        <p>Other</p>
                                    </div>
                                    {itemsList}
                                </div>
                            </section>
                        );
                    })}
                </>
            ) : null}
        </main>
    );
}
