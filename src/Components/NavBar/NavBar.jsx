import React from 'react';
import './NavBar.css';
import {useState} from 'react';

import {AiOutlineHome} from '../../../node_modules/react-icons/ai/index';
import {AiOutlineUser} from '../../../node_modules/react-icons/ai/index';
import {AiOutlineExperiment} from '../../../node_modules/react-icons/ai/index';
import {BiCollection} from '../../../node_modules/react-icons/bi/index';
import {BiMessageSquareDetail} from '../../../node_modules/react-icons/bi/index';

const NavBar = () => {
    
    const [activeNav, setActiveNav] = useState('')
    
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} > <AiOutlineHome /> {/* Home */} </a>
            <a href="#About" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} > <AiOutlineUser /> {/* About me */} </a>
            <a href="#" onClick={() => setActiveNav('#stack')} className={activeNav === '#stack' ? 'active' : ''}> <BiCollection /> {/* Contact me */}</a>
            <a href="#Projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}> <AiOutlineExperiment /> {/* projects */}</a>
            <a href="#" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail /> {/* Contact me */}</a>
        </nav>
    )
}

export default NavBar;