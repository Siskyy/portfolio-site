import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="greeting">
                    <h4>Hi I'm</h4>
                    <h1>Marc Bertelli</h1>
                    <h4>Aspiring ...</h4>
                </div>
            </header>
        )
    }
}

export default Header;