import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Nav.css';
import Phone from '../Footer/Phone';

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
        console.log(this.props)
        return (
            <div className='nav'>
                <div className='links'>
                    <Link exact to='/resume' activeClassName="link-active" className="link"  >
                        Resume
                        </Link>

                    <Link exact to='/projects' activeClassName="link-active" className="link" >
                        Projects
                        </Link>

                    <Link exact to='/#about' activeClassName="link-active" className="link">
                        About
                    </Link>
                </div>
                <div className='icons'>
                    <section className='footer-icons'>
                        <a href='mailto:amirokasia@gmail.com' activeClassName="link-active" className="link mail-link"><i className="fas fa-envelope fa-1x icon" ></i></a>
                        <button activeClassName="link-active" className='link phone-icon' onClick={this.togglePopup.bind(this)}><i className="fas fa-phone fa-1x icon phone-icon-fa"></i></button>
                        <a href='https://github.com/KasiaMirowska' activeClassName="link-active" className='link github-link' target="_blank" rel='noopener noreferrer'><i className="fab fa-github fa-1x icon"></i></a>
                        <a href='https://www.linkedin.com/in/KasiaMirowska/' activeClassName="link-active" className='link linkedin-link' target="_blank" rel='noopener noreferrer'><i className="fab fa-linkedin-in fa-1x icon"></i></a>
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