import React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <section id="About" className="container">
                <div className="about-me">
                    <h2>About me</h2>
                    <p>
                        Hi I'm just testing and writing random stuff to se if everything workse okay the rest will be sample text: 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </section>
        )
    }
}

export default About;