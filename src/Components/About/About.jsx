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
                    <p>
                        Hi! My name is Marc and I have been teaching myself to code for <span className="highlight">3 months</span>.
                        I am currently studying <span className="highlight">Bsc Accounting and Finance</span> in my <span className="highlight">first year, </span> 
                         aspiring to become proficient in <span className="highlight">software development.</span>
                    </p>
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