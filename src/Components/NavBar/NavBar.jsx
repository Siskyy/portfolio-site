import React from 'react';
import './NavBar.css';

import {AiOutlineHome} from '../../../node_modules/react-icons/ai/index';
import {AiOutlineUser} from '../../../node_modules/react-icons/ai/index';

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <a href="#"> <AiOutlineHome /> {/* Home */} </a>
                <a href="#"> <AiOutlineUser /> {/* About me */} </a>
                <a href="#">3 {/* projects */}</a>
                <a href="#">4 {/* Contact me */}</a>
            </nav>
        )
    }
}

export default NavBar;