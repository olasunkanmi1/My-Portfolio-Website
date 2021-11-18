import React from 'react';
import { ContactStyled } from "./Styled";
import {ReactComponent as Mail } from "../../assets/icons/mail.svg";
import {ReactComponent as Phone } from "../../assets/icons/phone.svg";
import {ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import {ReactComponent as Whatsapp } from "../../assets/icons/whatsapp.svg";
import {ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import {ReactComponent as Github } from "../../assets/icons/git.svg";

const Contact = ({ toggle }) => {
    return (
        <ContactStyled id="contact" className={ toggle === 5 ? 'content active-content' : 'content'}>
            <h2>Have a question or want to work together?</h2>

            <p>I'm actively seeking for a junior frontend developer role. Don't hesitate to reach out to me if you have any opportunity. </p>

            <div>
                <a href="mailto:olasunkanmiaq@gmail.com" target="_blank" rel="noreferrer"><Mail /></a>
                <a href="tel:2348100991565" target="_blank" rel="noreferrer"><Phone /></a>
                <a href="https://www.linkedin.com/in/aqo" target="_blank" rel="noreferrer"><Linkedin /></a>
                <a href="https://wa.me/2349098419054" target="_blank" rel="noreferrer"><Whatsapp /></a>
                <a href="https://www.twitter.com/ola_szuko" target="_blank" rel="noreferrer"><Twitter /></a>
                <a href="https://www.github.com/olasunkanmi1" target="_blank" rel="noreferrer"><Github /></a>
            </div>
        </ContactStyled>
    )
}

export default Contact;
