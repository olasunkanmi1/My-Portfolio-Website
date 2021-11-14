import React from 'react';
import { HomeStyled } from "./Styled"

const Home = ({ toggle }) => {
    return (
        <HomeStyled id="home" className={ toggle === 1 ? 'content active-content' : 'content'}>
            <h1>Olasunkanmi Abdulsalam</h1>
        </HomeStyled>
    )
}

export default Home
