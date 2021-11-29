import React from 'react';
import ViewRace from './ViewRace';
import dunmerChar from '../../images/race-lore-imgs/dunmerChar.png';
import nordChar from '../../images/race-lore-imgs/nordChar.png';
import altmerChar from '../../images/race-lore-imgs/altmerChar.png';

const RaceBios = () => {
    let raceArr = [
        {race: 'Dunmer', img: dunmerChar, homeProv: 'Morrowind', religion: 'The Reclamations: Boethiah, Mephala, and Azura', background: '', index: 0},
        {race: 'Nord', img: nordChar, homeProv: 'Skyrim', religion: 'The 9 Divines (Talos worship)', background: '', index: 1},
        {race: 'Altmer', img: altmerChar, homeProv: 'Summerset Isles', religion: 'Altmeri Pantheon', background: '', index: 2}
    ]

    return(
        <div>
            <ViewRace raceArr={raceArr} />
        </div>
    )
}

export default RaceBios