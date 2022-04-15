import React from 'react';
import './TechStack.css';

// imports

import ReactStack from './StackList/ReactStack';
import SpotifyStack from './StackList/SpotifyStack';
import YelpStack from './StackList/YelpStack';


const TechStack = (props) => {
    
    const Techstack = props.Techstack;

    if (Techstack === 1) {
        return <SpotifyStack />
    } else if (Techstack === 2){
        return <YelpStack />
    } else {
        return <ReactStack />
    }

};

export default TechStack;