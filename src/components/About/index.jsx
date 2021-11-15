import React from 'react'
import { AboutStyled } from "./Styled"

const About = ({ toggle }) => {
    return (
        <AboutStyled id="about" className={ toggle === 2 ? 'content active-content' : 'content'}>
            <p>I'm an ambitious person, I enjoy working in a fast-paced and challenging environment. As a quick learner, I am capable of performing tasks at hand with little or no supervision. Additionally, as a highly motivated individual, I feel confident that my skills set and dedication will enable me to become a valuable asset to your project or organization.</p>
        </AboutStyled>
    )
}

export default About
