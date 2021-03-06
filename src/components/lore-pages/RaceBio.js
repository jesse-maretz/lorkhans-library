import React, { useState  } from 'react';


import "../../style/ViewRace.css"

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
         <div id="main-viewrace">
            <div id="race-carousel">
                <button className="carousel-btn" onClick={cycleLeft}>Left</button>
                <div id="race-card">
                    <h3>{raceArrRace}</h3>
                    <img id="charImg" src={raceArrImg} alt="" />
                    <h4>Home Province: {props.raceArr[raceIndex].homeProv}</h4>
                    <h4>Religion: {props.raceArr[raceIndex].religion}</h4>
                </div>
                <button className="carousel-btn" onClick={cycleRight}>Right</button>
             </div>
         </div>
     )
}

export default ViewRace