import React from 'react';
import './MainPage.css';


export default function MainPage(props) {
    return (
        <div>
            <div className='hello'>
                <h1 className='hello-text'>
                    Hello!
                    <br />
                    You've just found
                <div className='myName'>
                        Kasia Mirowska<span className='s'>'s</span>
                    </div>
                    Portfolio
                </h1>
            </div>
           
            <div className='about'>
                <h1>Full Stack Developer and Artist</h1>
                <br />
                <h1>
                    Dreams about building for humanity... apps that matter
                </h1>
                <br />
                <p className='aboutP'>
                    After 15 years of working as a full time artist and running my own bussiness I've decided I'm ready for the next challenge. Enrolled into Engineering Immersion program at Thinkful and begun on a new path of software engineering.
            </p>
            </div>
            <div className='love'>
                <h2> I love React,  </h2>
                <div className='love-text'>
                    <br />
                    learning,
                    <br />
                    structured, readible code,
                    <br />
                    challenges,
                    <br />
                    simple design,
                    <br />
                    aerial yoga.

                    <br />
                    <br />
                    <div className='sql'>
                        I am also enchanted with Node, SQL and database schema design.
                    </div>
                    <div />


                </div>

            </div>
           
        </div>
    )
}