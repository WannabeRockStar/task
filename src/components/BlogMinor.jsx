import React from 'react'
import { Link } from "react-router-dom"

const BlogMinor = () => {
    return (
        <section className="blog-min-section wrapper-sm">
             <div className="blog-min-image">
                <img src={require('./../assets/img/beach.png')} alt="sea"/>
            </div>
            <div className="blog-min-info">
                <span className="blog-num">02</span>
                <h2 className="blog-min-title title">Point Break</h2>
                <div className="blue-min-line-y"></div>
                <div className="blog-min-text">
                By better understanding the various aspects of By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.
                </div>
                <Link to="/" className="link">READ MORE</Link>
            </div>
        </section>
    )
}
 
export default BlogMinor;