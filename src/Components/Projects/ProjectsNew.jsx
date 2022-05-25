import React from 'react';
import './Projects.css';
import './ProjectsNew.css';
import TechStack from './TechStack/TechStacks';

const ProjectsNew = () => {

    return (
        <section id="Projects" className="cream-section">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid projects-container">
                <article className="card reddit">
                    <div className="card-banner">
                        <h3 className="card-title">RedditFlex</h3>
                        <span className="stack"><TechStack Techstack={1}/></span>
                        <p className="card-desc">This is the description wow. many words are to be wirrten here</p>
                    </div>      
                    </article>
                    <article className="card spotify">
                    <div className="card-banner">
                        <h3 className="card-title">PlayMixer</h3>
                        <span className="stack"><TechStack Techstack={2}/></span>
                        <p className="card-desc">This is the description wow. many words are to be written here</p>
                    </div>      
                    </article>
                    <article className="card yelp">
                    <div className="card-banner">
                        <h3 className="card-title">Title</h3>
                        <span className="stack"><TechStack Techstack={3}/></span>
                        <p className="card-desc">This is the description wow. many words are to be wirrten here</p>
                    </div>      
                </article>
            </div>
        </section>
    )
}

export default ProjectsNew;