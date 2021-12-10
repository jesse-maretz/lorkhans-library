import React from 'react';

import ViewRace from './ViewRace'

import altmerChar from '../../images/race-lore-imgs/altmerChar.png'
import argonianChar from '../../images/race-lore-imgs/argonianChar.png'
import bosmerChar from '../../images/race-lore-imgs/bosmerChar.png'
import bretonChar from '../../images/race-lore-imgs/bretonChar.png'
import dunmerChar from '../../images/race-lore-imgs/dunmerChar.png'
import imperialChar from '../../images/race-lore-imgs/imperialChar.png'
import khajiitChar from '../../images/race-lore-imgs/khajiitChar.png'
import nordChar from '../../images/race-lore-imgs/nordChar.png'
import orsimerChar from '../../images/race-lore-imgs/orsimerChar.png'
import redguardChar from '../../images/race-lore-imgs/redguardChar.png'

const RaceBios = () => {
    let raceArr = [
        {race: 'Altmer', img: altmerChar, homeProv: 'Summerset Isles', religion: 'Altmeri Pantheon', background: '', index: 0},
        {race: 'Argonian', img: argonianChar, homeProv: 'Black Marsh', religion: 'The Hist', background: '', index: 1},
        {race: 'Bosmer', img: bosmerChar, homeProv: 'Valenwood', religion: 'Forest Gods, ancestor worship', background: '', index: 2},
        {race: 'Breton', img: bretonChar, homeProv: 'High Rock', religion: 'Mix of the Divines and Elven deities (+ uniquely Sheor)', background: '', index: 3},
        {race: 'Dunmer', img: dunmerChar, homeProv: 'Morrowind', religion: 'The Reclamations (Azura, Mephala, Boethiah); Tribunal (Vivec, Almalexia, Sotha Sil)', background: '', index: 4},
        {race: 'Imperial', img: imperialChar, homeProv: 'Cyrodil', religion: 'The 8 (formerly 9) Divines', background: '', index: 5},
        {race: 'Khajiit', img: khajiitChar, homeProv: 'Elsweyr', religion: 'Deriviation of old Aldmeri pantheon', background: '', index: 6},
        {race: 'Nord', img: nordChar, homeProv: 'Skyrim', religion: 'The 9 Divines (Talos worship)', background: '', index: 7},
        {race: 'Orsimer', img: orsimerChar, homeProv: 'Orsinium', religion: 'Malacath', background: '', index: 8},
        {race: 'Redguard', img: redguardChar, homeProv: 'Hammerfell', religion: 'Yokudan pantheon', background: '', index: 9}
    ]

    return(
        <div>
            <ViewRace raceArr={raceArr} />
        </div>
    )
}

export default RaceBios