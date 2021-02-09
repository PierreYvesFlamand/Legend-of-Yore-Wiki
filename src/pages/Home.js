import React from 'react';
import H2 from '../components/H2';

export default function Home() {
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
                    <ul className='no-list-style'>
                        {[
                            'Added Shops',
                            'Added activities (Repairing, Crafting, TMaps, Digging, Fishing, Finding)',
                            'All quests added + Add quest reward on items',
                            'World map Dungeons / Monsters finish',
                            'Monsters / Dungeons finish',
                            'Hidden Cove in-depth info',
                            'New theme',
                            'Imported all raw Dungeons / Monsters / Items',
                        ].map((txt, id) => (
                            <li key={id}>✅ {txt}</li>
                        ))}
                    </ul>
                    <p className='bold underline'>Planned :</p>
                    <ul className='no-list-style'>
                        {['Pet', 'guide section', 'classes section', 'New top navigation + mobile friendly', 'More Mobile friendly'].map(
                            (txt, id) => (
                                <li key={id}>⏩ {txt}</li>
                            )
                        )}
                    </ul>
                    <p className='bold underline'>Known issues :</p>
                    <ul className='no-list-style'>
                        {['Firefox table scroll'].map((txt, id) => (
                            <li key={id}>❗ {txt}</li>
                        ))}
                    </ul>
                    <br />
                    <br />
                </div>
            </section>

            <H2>Contributing - Reporting issues</H2>
            <section>
                <div>
                    <p>This wiki is edited only by it's owner (Polfy#6924)</p>
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
