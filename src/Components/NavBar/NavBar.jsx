import React from 'react';
import './NavBar.css';

import {AiOutlineHome} from '../../../node_modules/react-icons/ai/index';
import {AiOutlineUser} from '../../../node_modules/react-icons/ai/index';
import {AiOutlineExperiment} from '../../../node_modules/react-icons/ai/index';
import {BiCollection} from '../../../node_modules/react-icons/bi/index';
import {BiMessageSquareDetail} from '../../../node_modules/react-icons/bi/index';

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <a href="#"> <AiOutlineHome /> {/* Home */} </a>
                <a href="#About"> <AiOutlineUser /> {/* About me */} </a>
                <a href="#"> <BiCollection /> {/* Contact me */}</a>
                <a href="#"> <AiOutlineExperiment /> {/* projects */}</a>
                <a href="#"> <BiMessageSquareDetail /> {/* Contact me */}</a>
            </nav>
        )
    }
}

export default NavBar;