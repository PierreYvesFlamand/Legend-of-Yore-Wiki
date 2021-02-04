import React from 'react';

import './styles.css';

export default function PageHeader({ children, tablaOfContent = false, ...restProps }) {
    return (
        <header className='pageHeader' {...restProps}>
            <div className='headerContent'>{children}</div>
            {tablaOfContent ? (
                <div className='quickLinks'>
                    <p>Content</p>

                    {tablaOfContent.length > 17 ? (
                        <>
                            <ol>
                                {tablaOfContent.splice(0, 17).map((link, id) => (
                                    <li key={id}>
                                        <span className='number'>{id + 1}.</span> {link}
                                    </li>
                                ))}
                            </ol>
                            <ol>
                                {tablaOfContent.splice(0).map((link, id) => (
                                    <li key={id}>
                                        <span className='number'>{id + 19}.</span> {link}
                                    </li>
                                ))}
                            </ol>
                        </>
                    ) : (
                        <ol>
                            {tablaOfContent.map((link, id) => (
                                <li key={id}>
                                    <span className='number'>{id + 1}.</span> {link}
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
            ) : null}
        </header>
    );
}
