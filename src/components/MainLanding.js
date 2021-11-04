import React from 'react';
import ViewRace from './ViewRace';

const MainLanding = () => {
    let raceObj = { 
        raceArr: [
            
        ]
    }
    return (
        <div>
            <h1>Main Landing Body</h1>
            <ViewRace raceObj={raceObj} />
        </div>
    )
}

export default MainLanding