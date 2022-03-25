import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <a href="#">1 {/* About me */} </a>
                <a href="#">2 {/* projects */}</a>
                <a href="#">3 {/* Contact me */}</a>
            </nav>
        )
    }
}

export default NavBar;