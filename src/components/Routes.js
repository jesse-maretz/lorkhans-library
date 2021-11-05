import React from 'react';
import Home from './Home'
import RaceLore from './RaceLore'

const Routes = {
    '/': () => <Home />,
    '/lore/races': () => <RaceLore />
}

export default Routes