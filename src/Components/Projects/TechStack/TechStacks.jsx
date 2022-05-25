import React from 'react';
import './TechStack.css';

// imports

import ReactStack from './StackList/ReactStack';
import SpotifyStack from './StackList/SpotifyStack';
import YelpStack from './StackList/YelpStack';
import RedditStack from './StackList/RedditStack';

const TechStack = (props) => {
    
    const Techstack = props.Techstack;
    const Smaller = props.Smaller;

    if (Techstack === 1) {
        return <RedditStack className="smaller"/>
    } else if (Techstack === 2){
        return <SpotifyStack className="default"/>
    } else if (Techstack === 3) {
        return <YelpStack className="default"/>
    } else {
        return <ReactStack />
    }

};

export default TechStack;