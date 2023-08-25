import React from "react";
import { FaEnvelope } from "react-icons/fa"

export default function Main(){
    return (
    <div className="main-content">
        <header className="top-content">
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <h4>laurasmith.website</h4>
            <a href="http"><span><FaEnvelope className="icon" /></span>Email</a>
        </header>
        <section className="middle-content">
            <h3>About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn</p>
            <h3>Interests</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>

        </section>
    </div>
    )
}