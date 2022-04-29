import React from 'react';
import './Projects.css';

import TechStack from './TechStack/TechStacks';

import img3 from '../../Assets/playmixerpreview3.png';
import img4 from '../../Assets/PersonalPortfoliosite1.png';
import img5 from '../../Assets/Peckishpreview.png';
import img1 from '../../Assets/RedditFlex5.png';

const projects = [
    {
        id: 1,
        image: img1,
        title: 'RedditFlex - A minimal Reddit app',
        description: '',
        stack: '',
        github: 'https://github.com/Siskyy/redditflex',
        demo: 'https://redditflex.netlify.app/'
    },
    {
        id: 2,
        image: img3,
        title: 'Playmixer - Spotify playlist maker',
        description: 'A React app built with Spotify API to search songs and create playlists.',
        stack: '',
        github: 'https://github.com/Siskyy/spotify-playlist',
        demo: 'https://playmixer.surge.sh/'
    },
    {
        id: 3,
        image: img5,
        title: 'Peckish - Find food in your area',
        description: 'A React app built with Yelp API to search for food and restaurants. For functionality: Please make a demo server in one click using https://cors-anywhere.herokuapp.com as I have not built the back-end',
        stack: '',
        github: 'https://github.com/Siskyy/peckish',
        demo: 'https://peckishfood.netlify.app/'
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
                                    <div className="tech-stack">
                                        <TechStack Techstack={id}/>
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