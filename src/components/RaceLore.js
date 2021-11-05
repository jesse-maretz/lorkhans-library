import React from 'react';
import ViewRace from './ViewRace';
import dunmerImg from '/Users/jessemaretz/Desktop/projects/scrolls-site/lorkhans-library/src/images/dunmerImg.png';
import nordImg from '/Users/jessemaretz/Desktop/projects/scrolls-site/lorkhans-library/src/images/nordImg.png';
import altmerImg from '/Users/jessemaretz/Desktop/projects/scrolls-site/lorkhans-library/src/images/altmerImg.png';

const RaceBios = () => {
    let raceArr = [
        {race: 'Dunmer', img: dunmerImg, homeProv: 'Morrowind', religion: 'The Reclamations: Boethiah, Mephala, and Azura', background: '', index: 0},
        {race: 'Nord', img: nordImg, homeProv: 'Skyrim', religion: 'The 9 Divines (Talos worship)', background: '', index: 1},
        {race: 'Altmer', img: altmerImg, homeProv: 'Summerset Isles', religion: 'Altmeri Pantheon', background: '', index: 2}
    ]

    return(
        <div>
            <ViewRace raceArr={raceArr} />
        </div>
    )
}

export default RaceBios