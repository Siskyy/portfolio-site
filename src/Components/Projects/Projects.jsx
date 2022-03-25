import React from 'react';
import './Projects.css';

const projects = [];


class Projects extends React.Component {
    render() {
        return (
            <section id="Projects" className="container">
                <h2>My Projects</h2>
                <div className="projects-container">
                    {
                        projects.map(({id, image, title, github, demo}) => {
                            return (
                                <div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Projects;