import React, { useState  } from 'react';
import "../style/ViewRace.css"
import racesBackground from "./../images/race-lore-imgs/ESO-Races.jpeg"

const ViewRace = (props) => {
    console.log(props)
    const [raceIndex, cycleRace] = useState(Math.floor(props.raceArr.length / 2))
    console.log(raceIndex)
    let raceArrRace = props.raceArr[raceIndex].race
    let raceArrImg = props.raceArr[raceIndex].img


    function cycleLeft() {
        if (raceIndex > 0) {
            cycleRace(raceIndex - 1)
        }
    }

    function cycleRight() {
        if (raceIndex < (props.raceArr.length - 1)) {
            cycleRace(raceIndex + 1)
        }
    }

    return(
         <div id="main-div">
            <button className="race-carousel-btn" onClick={cycleLeft}>Left</button>
             <div id="race-div">
                <h4>{raceArrRace}</h4>
                <img src={raceArrImg} alt="" />
                <h4>Home Province: {props.raceArr[raceIndex].homeProv}</h4>
                <h4>Religion: {props.raceArr[raceIndex].religion}</h4>
             </div>
             <button className="race-carousel-btn" onClick={cycleRight}>Right</button>
             <img id="races-background" src={racesBackground} alt="" />
         </div>
     )
}

export default ViewRace