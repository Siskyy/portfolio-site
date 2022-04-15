import React from 'react';

// react-icons

import {FaReact} from '../../../../../node_modules/react-icons/fa'
import {SiJavascript} from '../../../../../node_modules/react-icons/si';
import {DiHtml5} from '../../../../../node_modules/react-icons/di';
import {DiCss3} from '../../../../../node_modules/react-icons/di'; 
import {BsSpotify} from '../../../../../node_modules/react-icons/bs';


// Techstacks

const ReactStack = () => {
        
    return (
        <div className="languages">
            <a className="javascript"><SiJavascript /></a>
            <a className="html"><DiHtml5 /></a>
            <a className="css"><DiCss3 /></a>
            <a className="react"><FaReact /></a>
        </div>
    )
};

export default ReactStack;