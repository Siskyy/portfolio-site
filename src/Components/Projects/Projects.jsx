import React from 'react';
import './Projects.css';

import img1 from '../../Assets/playmixerpreview1.png';

const projects = [
    {
        id: 1,
        image: img1,
        title: 'Playmixer - Spotify playlist maker',
        description: 'Spotify API to make playlists from this react app',
        stack: '',
        github: '',
        demo: ''
    },
    {
        id: 2,
        image: '',
        title: 'Portfolio webiste',
        description: 'My personal portolfio wesbite',
        stack: '',
        github: '',
        demo: ''
    }
];


class Projects extends React.Component {
    render() {
        return (
            <section id="Projects" className="container">
                <h2>My Projects</h2>
                <div className="projects-container">
                    {
                        projects.map(({id, image, title, description, stack, github, demo}) => {
                            return (
                                <article key={id} className="project-tile">
                                    <div className="project-image">
                                        <img src={image} alt="Placeholder" />
                                    </div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                    <div className="tech-stack">
                                        <p></p>
                                    </div>
                                    <div classname="links">
                                        <a></a>
                                        <a></a>
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