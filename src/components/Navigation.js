import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import NavigationLinks from '../utils/WikiNavigations';

export default function Navigation() {
    const path = useLocation().pathname.substring(1);

    window.addEventListener('scroll', () => {
        document.querySelector('.navigation').style.top = 64 + window.scrollY + 'px';
    });

    return (
        <nav className='navigation'>
            <ul>
                <li>
                    <Link to='/' className={!path ? 'active' : ''}>
                        Home
                    </Link>
                </li>
                {NavigationLinks.map((link) => {
                    return (
                        <li key={link}>
                            <Link to={`/${link}`} className={path === link ? 'active' : ''}>
                                {link.substring(0, 1).toUpperCase() + link.substring(1)}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
