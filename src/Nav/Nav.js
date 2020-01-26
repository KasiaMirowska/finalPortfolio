import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends React.Component {
    render(){
        return (
            <div className='nav'>
                <Link to='/resume' >
                    Resume
                </Link>
                <Link to='/projects'>
                    Projects     
                </Link>
                <Link to='/'>
                   About me
                </Link>
               
                
            </div>
        )
    }
}