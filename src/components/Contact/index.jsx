import React from 'react'

const Contact = ({ toggle }) => {
    return (
        <div id="contact" className={ toggle === 5 ? 'content active-content' : 'content'}>
            Contact
        </div>
    )
}

export default Contact
