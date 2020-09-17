import React from 'react'
import { Link } from "react-router-dom"

const Blog = () => {
    return (
        <section className="blog-section wrapper">
            <div className="blog-info">
                <span className="blog-num">01</span>
                <h2 className="blog-title">Surf Training</h2>
                <div className="blue-line-y"></div>
                <div className="blog-text">
                By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.
                </div>
                <Link to="/" className="link">READ MORE</Link>
            </div>
            <div className="blog-image">
                <img src={require('./../assets/img/blog.png')} alt="sea"/>
            </div>
            <div className="vertical-blog-text vertical-text">
                SURF CAMPS
            </div>
        </section>
    )
}
 
export default Blog;