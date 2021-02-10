import React from 'react';

import './styles.css';

export default function Table({ header, rows, ...restProps }) {
    return (
        <table {...restProps} className='table'>
            <thead>
                <tr>
                    {header.map((head, id) => (
                        <th key={id}>{typeof head === 'string' ? head.toUpperCase() : head}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, id) => (
                    <tr key={id} id={row.id} className='anchor-Zone'>
                        {row.data.map((data, id) => (
                            <td key={id}>{data}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
