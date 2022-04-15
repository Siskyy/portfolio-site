import React from 'react';

// React-icons imports


// imports

import ReactStack from './StackList/ReactStack';
import SpotifyStack from './StackList/SpotifyStack';



const TechStack1 = (props) => {
    
    const Techstack = props.Techstack;

    if (Techstack === 1) {
        return <SpotifyStack />
    } else if (Techstack === 2){
        return <ReactStack />
    } else {
        return <ReactStack />
    }

};

export default TechStack1;