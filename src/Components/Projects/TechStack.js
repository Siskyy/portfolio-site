import React from 'react';
import './TechStack.css';

import {FaReact} from '../../../node_modules/react-icons/fa';
import {SiJavascript} from '../../../node_modules/react-icons/si';
import {DiHtml5} from '../../../node_modules/react-icons/di';
import {DiCss3} from '../../../node_modules/react-icons/di'; 

const TechStack = () => {
    
    return (
        <div className="languages">
            <a className="react"><FaReact /></a>
            <a className="javascript"><SiJavascript /></a>
            <a className="html"><DiHtml5 /></a>
            <a className="css"><DiCss3 /></a>
        </div>
    )

}

export default TechStack;