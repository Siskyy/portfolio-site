import React from 'react';
import './Projects.css';

const projects = [
    {
        id: 1,
        image: '',
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
                                <div className="project-image">
                                    <img src={image} alt="Placeholder" />
                                </div>
                                <h2>{title}</h2>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Projects;