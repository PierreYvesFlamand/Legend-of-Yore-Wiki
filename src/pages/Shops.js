import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import H2 from '../components/H2';
import H3 from '../components/H3';
import PageHeader from '../components/PageHeader';

import GearsShops from '../components/GearsShops';
import MagicShops from '../components/MagicShops';
import InnShops from '../components/InnShops';

export default function Activities() {
    const hash = useLocation().hash;

    useEffect(() => {
        if (hash && document.querySelector(hash)) {
            document.querySelector(hash).scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }
    });

    return (
        <main className='content'>
            <H2>Shops</H2>
            <PageHeader
                tablaOfContent={['gears shops', 'magic shops', 'inn shops'].reduce((acc, item) => {
                    return [...acc, <a href={`#${item.split(' ').join('_')}`}>{item.substring(0, 1).toUpperCase() + item.substring(1)}</a>];
                }, [])}
            ></PageHeader>
            <section id='gears_shops' className='anchor-Zone'>
                <H3>Gears Shops</H3>
                <div>
                    <GearsShops />
                </div>
            </section>
            <section id='magic_shops' className='anchor-Zone'>
                <H3>Magic Shops</H3>
                <div>
                    <MagicShops />
                </div>
            </section>
            <section id='inn_shops' className='anchor-Zone'>
                <H3>Inn Shops</H3>
                <div>
                    <InnShops />
                </div>
            </section>
        </main>
    );
}
