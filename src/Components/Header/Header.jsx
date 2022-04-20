import React from 'react';
import './Header.css';

import Clock from './Clock/Clock';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="greeting">
                    <h4>Hello I'm</h4>
                    <h1>Marc Bertelli</h1>
                    <h5>Front-End Engineer</h5>
                    <p> <Clock /></p>
                </div>
            </header>
        )
    }
}

export default Header;