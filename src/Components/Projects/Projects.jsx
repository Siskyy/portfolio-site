import React from 'react';
import './Projects.css';

import img1 from '../../Assets/playmixerpreview1.png';
import img2 from '../../Assets/playmixerpreview2.png'; 
import img3 from '../../Assets/playmixerpreview3.png'; 


const projects = [
    {
        id: 1,
        image: img3,
        title: 'Playmixer - Spotify playlist maker',
        description: 'A React app using the Spotify API to allow the user to search for songs or artists, and then add them to a playlist. Which can then be added to their Spotify account directly from the site',
        stack: '',
        github: '',
        demo: ''
    },
    {
        id: 2,
        image: img2,
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