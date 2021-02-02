/*  */

import React, { useEffect, useState } from 'react';

export default function Map() {
    const [mapHeight, setMapHeight] = useState(window.innerHeight * 0.8);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setMapHeight(window.innerHeight * 0.8);
        });
    }, []);

    return (
        <div className='content'>
            <h2>WORLD MAP</h2>
            <h3>Work in progress</h3>
            <p>❗ Island-2 isn't finish yet</p>
            <br />
            <p>⏩ Monsters still not added</p>
            <br />
            <p>🟡 If you have any feedback or want to contribute to add markers, contact me on discord</p>
            <br />
            <div>
                <object
                    type='text/html'
                    data={process.env.PUBLIC_URL + '/map'}
                    width='100%'
                    height={`${mapHeight}px`}
                    style={{ overflow: 'auto', border: '2px solid gray' }}
                    aria-label='If you see this message contact me on Dicord : Polfy#6924'
                    inner-text='If you see this message contact me on Dicord : Polfy#6924'
                    aria-labelledby='If you see this message contact me on Dicord : Polfy#6924'
                ></object>
            </div>
        </div>
    );
}
