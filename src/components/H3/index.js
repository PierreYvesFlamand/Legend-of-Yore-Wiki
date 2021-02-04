import React, { useState } from 'react';

import './styles.css';

export default function H3({ children, ...restProps }) {
    const [isExpanded, setIsExpanded] = useState(true);

    function expandCollapse({ target }) {
        const content = target.parentNode.nextSibling;
        if (isExpanded) {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
        setIsExpanded(!isExpanded);
    }

    return (
        <h3 className='header-3' {...restProps}>
            {children}{' '}
            <button className='expandCollapse' onClick={expandCollapse}>
                {isExpanded ? '[collapse]' : '[expand]'}
            </button>
        </h3>
    );
}
