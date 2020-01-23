import React from 'react';
import './MainPage.css';

export default function MainPage(props) {
    return (
        <div>
            <div className='hello'>
                <h1>Hello, You've just found
                <br />
                    Kasia Mirowska's
                <br />
                    Portfolio
                </h1>
            </div>
            <div className='about'>
            <h1>Full Stack Developer and Artist
                <br />
                Dreams about building for humanity... apps that matter
            </h1>
            <h3>
                After 15 years of working as a full time artist and running my own bussiness I've decided I'm ready for the next challenge. Enrolled into Engineering Immersion program at Thinkful and begun on a new path of software engineering.
            </h3>
            </div>
            <div className='love'>
            <h2> I love React and ...
                <br />
                finding errors,
                <br />
                structured, readible code,
                <br />
                clean lines,
                <br />
                simple design,
                <br />
                aerial yoga.
                <br />
                I am also enchanted with Node and SQL, database schemas and endpoints
            </h2>
            </div>

        </div>
    )
}