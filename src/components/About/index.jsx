import React from 'react'
import { AboutStyled } from "./Styled"

const About = ({ toggle }) => {
    return (
        <AboutStyled id="about" className={ toggle === 2 ? 'content active-content' : 'content'}>
            About
        </AboutStyled>
    )
}

export default About
