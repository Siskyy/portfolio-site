import React from 'react';
import './About.css';

import {BsLinkedin} from '../../../node_modules/react-icons/bs';
import {BsGithub} from '../../../node_modules/react-icons/bs';

class About extends React.Component {
    render() {
        return (
            <section id="About" className="container">
                <div className="about-me">
                    <h2>About me</h2>
                    <div className="aboutMe-text">
                        <p>
                            Hi! My name is Marc, I am a <span className="highlight">Self-taught</span> front-end developer.
                            I am currently on a <span className="highlight">gap year</span> to develop professional skills 
                            and become a proficient <span className="highlight">Software Developer.</span>
                        </p>
                    </div>
                </div>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/marcbertelli/" target="_blank"><BsLinkedin /></a>
                    <a href="https://github.com/Siskyy" target="_blank"><BsGithub /></a>
                </div>
            </section>
        )
    }
}

export default About;