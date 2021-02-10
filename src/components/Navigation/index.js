import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles.css';

export default function Navigation() {
    const path = useLocation().pathname.substring(1);

    return (
        <nav className='navigation'>
            <ul>
                <li>
                    <Link to='/' className={!path ? 'active' : ''}>
                        Home
                    </Link>
                </li>
                {['player', 'items', 'monsters', 'dungeons', 'quests', 'activities', 'shops', 'world map'].map((link, id) => {
                    return (
                        <li key={id}>
                            <Link to={`/${link.split(' ').join('_')}`} className={path === link ? 'active' : ''}>
                                {link.substring(0, 1).toUpperCase() + link.substring(1)}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
