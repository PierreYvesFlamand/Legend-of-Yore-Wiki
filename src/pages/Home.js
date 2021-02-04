import React, { useContext } from 'react';
import H2 from '../components/H2';

import { DataContext } from '../context/dataContext';

export default function Home() {
    const homeData = useContext(DataContext).home;
    window.scrollTo(0, 0);

    return (
        <div className='content'>
            <h1 style={{ visibility: 'hidden', position: 'absolute' }}>Legend of Yore - Wiki</h1>
            <H2>Legend of Yore - Wiki</H2>
            <section>
                <div>
                    <p>
                        This is a work in progress in-depth wiki about the{' '}
                        <a target='_blank' rel='noreferrer' href='https://www.legendsofyore.com/' title='Legends of Yore website'>
                            Legends of Yore
                        </a>
                        .
                    </p>
                    <p>
                        <a target='_blank' rel='noreferrer' href='https://discord.gg/YKXpRrrunp' title='Legends of Yore Discord'>
                            Legends of Yore Discord
                        </a>
                    </p>
                    <p className='bold underline'>Already Done :</p>
                    <ul className='no-list-style'>{homeData ? homeData.done.map((txt, id) => <li key={id}>✅ {txt}</li>) : null}</ul>
                    <p className='bold underline'>Planned :</p>
                    <ul className='no-list-style'>{homeData ? homeData.planned.map((txt, id) => <li key={id}>⏩ {txt}</li>) : null}</ul>
                    <p className='bold underline'>Known issues :</p>
                    <ul className='no-list-style'>{homeData ? homeData.issues.map((txt, id) => <li key={id}>❗ {txt}</li>) : null}</ul>
                    <br />
                    <br />
                </div>
            </section>

            <H2>Contributing - Reporting issues</H2>
            <section>
                <div>
                    <p>This wiki is manualy edited.</p>
                    <p>If you want to contribute or report any issues, feel free to contact me on Discord at Polfy#6924.</p>
                    <p>
                        <a target='_blank' rel='noreferrer' href='https://discord.gg/YKXpRrrunp' title='Legends of Yore Discord'>
                            Legends of Yore Discord
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
}
