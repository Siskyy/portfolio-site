import React from 'react';
import './Projects.css';

import TechStack from './TechStack';

import img1 from '../../Assets/playmixerpreview1.png';
import img2 from '../../Assets/playmixerpreview2.png'; 
import img3 from '../../Assets/playmixerpreview3.png';
import img4 from '../../Assets/PersonalPortfoliosite1.png';
import img5 from '../../Assets/plus-icon-black-2.png';

// import reactIcon from '../../Assets/Icons/React-icon.png';
// import jsIcon from '../../Assets/Icons/javascript-icon.png';

import {RiToolsFill} from '../../../node_modules/react-icons/ri';


const projects = [
    {
        id: 1,
        image: img3,
        title: 'Playmixer - Spotify playlist maker',
        description: 'A React app built with Spotify API to search songs and create playlists.',
        stack: 'React.js | JavaScript | Spotify API | HTML & CSS',
        github: 'https://github.com/Siskyy/spotify-playlist',
        demo: 'https://playmixer.surge.sh/'
    },
    {
        id: 2,
        image: img4,
        title: 'Portfolio webiste',
        description: 'My personal portolfio wesbite built from scratch with React',
        stack: 'React.js | JavaScript | HTML & CSS',
        github: 'https://github.com/Siskyy/portfolio-site',
        demo: ''
    },
    {
        id: 3,
        image: img5,
        title: 'New Project',
        description: 'Working on new projects',
        stack: 'React.js | JavaScript | HTML & CSS',
        github: '',
        demo: ''
    }
];

class Projects extends React.Component {
    render() {
        return (
            <section id="Projects" className="cream-section">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-container">
                    {
                        projects.map(({id, image, title, description, stack, github, demo}) => {
                            return (
                                <article key={id} className="project-tile">
                                    <div className="project-image">
                                        <img src={image} alt="Placeholder" />
                                    </div>
                                    <h3>{title}</h3>
                                    <p className="project-description">{description}</p>
                                    <div className="tech-stack">
                                        <TechStack />
                                    </div>
                                    <div className="links">
                                        <a href={github} className="btn" target='_blank'>Github</a>
                                        <a href={demo} className="btn btn-filled" target='_blank'>Live Demo</a>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Projects;