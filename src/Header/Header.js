import React from 'react';
import './Header.css';


export default function Header(props) {
    return (
        <header className='hello'>
        <div className='hello-text'>
            <h1>Hello!
            <br />
            You've just found
        <div className='myName'>
                Kasia Mirowska<span className='s'>'s</span>
            </div>
            Portfolio</h1>
        </div>
    </header>
    )
}