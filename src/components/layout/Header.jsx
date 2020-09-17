import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="wrapper">
            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="44" viewBox="0 0 16 44">
                    <path id="logo" d="M116,38c-2.321,0-8,7.212-8,20.581a51.21,51.21,0,0,0,5.178,23.046l.206.373h5.232l.206-.373A51.21,51.21,0,0,0,124,58.581C124,45.211,118.321,38,116,38Zm1.733,42.581h-1.006V75.613h-1.455V80.58h-1.006a48.991,48.991,0,0,1-4-12.837,16.026,16.026,0,0,0,5.367,4.932,7.177,7.177,0,0,1,3.644,4.286A37.834,37.834,0,0,1,117.733,80.58Zm2.241-5.655a9.63,9.63,0,0,0-3.6-3.471c-5.744-3.337-6.651-8.18-6.778-9.156-.06-.838-.1-1.7-.117-2.579a15.24,15.24,0,0,0,6.161,5.864c4.673,2.606,5.459,5.185,5.473,5.23C120.755,72.333,120.364,73.712,119.974,74.925Zm-3.613-10.586c-6.857-3.823-6.773-9.307-6.767-9.307h0c.715-9.226,4.025-13.705,5.68-15.148V62.129h1.455V39.884c1.862,1.622,5.818,7.52,5.818,18.7a53.319,53.319,0,0,1-.975,10.1A15.615,15.615,0,0,0,116.361,64.339Z" transform="translate(-108 -38)" fill="#5da8ef"/>
                </svg>
            </div>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            STORIES
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            EVENTS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            PLACES
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            BOARDS
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
 
export default Header;