import React from 'react'
import { Link } from "react-router-dom"

const Video = () => {
    return (
        <section className="video-section wrapper">
            <div className="video-quote">
                <h2 className="video-title">
                    Surfing is the most blissful experience you can have on this planet, a taste of heaven.
                </h2>
                <div className="video-author">
                    JOHN MCCARTHY
                </div>
            </div>

            <div className="blue-stick"></div>

            <div className="video-blog-container">
                <article className="video-blog">
                    <div className="video-blog-image">
                        <img src={require("./../assets/img/baze.png")} alt="surfer"/>
                    </div>
                    <div className="video-blog-text">
                        <div className="txt">
                            By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.
                        </div>
                        <Link to="/" className="blog-link">READ MORE</Link>
                    </div>
                    
                </article>

                <div className="video-file">
                    <img src={require("./../assets/img/wave.png")} alt="surf-video" />
                    <div className="play-button">
                        <img src={require('./../assets/img/play-button.png')} alt=""/>
                    </div>
                </div>
            </div>
            

        </section>
    )
}
 
export default Video;