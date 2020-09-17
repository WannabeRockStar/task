import React from 'react'

const Contact = () => {
    return (
        <section className="contact-section wrapper">
            <div className="blue-stick"></div>
            <h2 className="title contact-title">Join the Club</h2>
            <div className="contact-text text">
                By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="YOUR E-MAIL"/>
                <button className="contact-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="9.993" height="18" viewBox="0 0 9.993 18">
                    <path id="arrow" d="M994.846,4259.641l-8.924-8.491a.552.552,0,0,0-.757,0,.49.49,0,0,0,0,.72l8.543,8.129-8.543,8.129a.49.49,0,0,0,0,.72.553.553,0,0,0,.377.151.537.537,0,0,0,.377-.151l8.923-8.491A.489.489,0,0,0,994.846,4259.641Z" transform="translate(-985.007 -4251)" fill="#fff"/>
                </svg>
                </button>
            </div>
        </section>
    )
}
 
export default Contact;