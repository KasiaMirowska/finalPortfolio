import React from 'react';
import { Link } from 'react-router-dom';


export default class Nav extends React.Component {
    render(){
        return (
            <div>
                <Link to='/resume' ß>
                    Resume
                </Link>
                <Link to='/projects'>
                    Projects     
                </Link>
                <Link to='/contact'>
                    Contact
                </Link>
               
                
            </div>
        )
    }
}