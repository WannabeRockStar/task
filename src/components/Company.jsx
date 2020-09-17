import React from 'react'
import { Link } from "react-router-dom"

const Company = () => {
    return (
        <section className="company-section wrapper">
            <div className="company-image">
                <img src={require('./../assets/img/img.png')} alt="sea"/>
            </div>
            <div className="company-info">
                <div className="company-subtitle">
                    OUR CAMP
                </div>

                <div className="address">
                CA 91932, USA<br/>
                Imperial Beach<br/>
                560 Silver Strand Blvd

                </div>
                
                <Link to="/" className="link link-blue">GET IN TOUCH</Link>
            </div>
        </section>
    )
}
 
export default Company;