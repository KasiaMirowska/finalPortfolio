import React from 'react';
import Phone from './Phone.js';
import { animateScroll as scroll } from 'react-scroll'
import './Footer.css';

export default class Footer extends React.Component {
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
  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <footer className="footer" id='contact'>
        <div className='scroll-to-top'>
          <a className='arrow' className='w3-animate-fading' onClick={this.scrollToTop}>
              <i className="fas fa-chevron-circle-up arrow fa-3x"></i>
          </a>
        </div>
        <div className='footer-text'>
        <h4>Thank you for taking the time to visit! 
          <br />
          Find me at: </h4>
        </div>
       
        <div className='footer-icons'>
          <a href='mailto:amirokasia@gmail.com' className='mail-link' target="_blank" ><i className="fas fa-envelope fa-4x icon"></i></a>
          <button className='phone-icon' onClick={this.togglePopup.bind(this)}><i className="fas fa-phone fa-4x icon phone-icon-fa"></i></button>
          <a href='https://github.com/KasiaMirowska' className='github-link'  target="_blank" rel='noopener noreferrer'><i className="fab fa-github fa-4x icon"></i></a>
          <a href='https://www.linkedin.com/in/KasiaMirowska/' className='linkedin-link'  target="_blank" rel='noopener noreferrer'><i className="fab fa-linkedin-in fa-4x icon"></i></a>
        </div>
        {this.state.showPopup ? 
          <Phone
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }

       
      </footer>
    );
  }
}

