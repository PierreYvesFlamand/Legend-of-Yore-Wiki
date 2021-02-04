import React from 'react';

import './styles.css';

export default function H2({ children, ...restProps }) {
    return (
        <h2 className='header-2' {...restProps}>
            {children}
        </h2>
    );
}
