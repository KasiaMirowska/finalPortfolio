import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Nav.css';
import Phone from '../Footer/Phone';
import resumePdf from './KasiaMirowskaResume.pdf';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }



    render() {
        return (
            <div className='nav'>
                <div className='links'>
                    <Link to='/resume' className="link-active" className="link"  >
                        Resume
                        </Link>
                    <Link to='/projects' className="link-active" className="link" >
                        Projects
                        </Link>

                    <Link to='/#about' className="link-active" className="link">
                        About
                    </Link>
                </div>
                <div className='icons'>
                    <section className='nav-icons'>
                        <a href={resumePdf} download="KasiaMirowskaResume">ResumePDF</a> 
                        <a href='mailto:amirokasia@gmail.com' className="link-active" className="link" target="_blank" rel='noopener noreferrer' >Email</a>
                        <button id='button2' className="link-active" className='link phone-icon' onClick={this.togglePopup.bind(this)}>Phone</button>
                        <a href='https://github.com/KasiaMirowska' className="link-active" className='link' target="_blank" rel='noopener noreferrer'>Github</a>
                        <a href='https://www.linkedin.com/in/KasiaMirowska/' className="link-active" className='link' target="_blank" rel='noopener noreferrer'>In</a>
                    </section>
                    {this.state.showPopup ?
                        <Phone
                            text='Close Me'
                            closePopup={this.togglePopup.bind(this)}
                        />
                        : null
                    }
                </div>
            </div>
        )
    }
}