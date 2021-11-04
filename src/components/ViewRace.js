import React, { useState  } from 'react';

const ViewRace = (props) => {
    console.log(props.raceObj.raceArr[1].index)
    const [raceIndex, cycleRace] = useState(props.raceObj.raceArr[1].index)

    function cycleLeft() {
        cycleRace(raceIndex - 1)
        console.log(raceIndex)
    }

    function cycleRight() {
        cycleRace(raceIndex + 1)
        console.log(raceIndex)
    }

    return(
         <div>
             <button onClick={cycleLeft}>Left</button>
             <h4>{}</h4>
             <button onClick={cycleRight}>Right</button>
         </div>
     )
}

export default ViewRace