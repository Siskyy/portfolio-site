import React from 'react';
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
                        <p className="card-desc">
                            View content & comments for posts and switch between subreddits,  
                            Filter posts within a subreddit.
                            Simple UI/UX.
                        </p>
                        <div className="card-links">
                            <a href="https://github.com/Siskyy/redditflex" className="btn" target='_blank'>Github</a>
                            <a href="https://redditflex.netlify.app/" className="btn btn-filled" target='_blank'>Live Demo</a>
                        </div>
                    </div>      
                    </article>
                    <article className="card spotify">
                    <div className="card-banner">
                        <h3 className="card-title">PlayMixer</h3>
                        <span className="stack"><TechStack Techstack={2}/></span>
                        <p className="card-desc">
                            Search for songs from the Spotify database. 
                            Add the songs to a local playlist.
                            Connect to spotify to add the playlist to their account.
                        </p>
                        <div className="card-links">
                            <a href="https://github.com/Siskyy/spotify-playlist" className="btn" target='_blank'>Github</a>
                            <a href="https://playmixer.surge.sh/" className="btn btn-filled" target='_blank'>Live Demo</a>
                        </div>
                    </div>      
                    </article>
                    <article className="card yelp">
                    <div className="card-banner">
                        <h3 className="card-title">Peckish</h3>
                        <span className="stack"><TechStack Techstack={3}/></span>
                        <p className="card-desc">
                            Search for Food & Restaurants from the Yelp. 
                            With 'Sort by' feature (best match, higest rated, most reviewed).
                            <span className="bold"> Note: requires temporary demo server</span>
                        </p>
                        <div className="card-links">
                            <a href="https://github.com/Siskyy/peckish" className="btn" target='_blank'>Github</a>
                            <a href="https://peckishfood.netlify.app/" className="btn btn-filled" target='_blank'>Live Demo</a>
                        </div>
                    </div>      
                </article>
            </div>
        </section>
    )
}

export default ProjectsNew;