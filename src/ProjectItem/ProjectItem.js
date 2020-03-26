import React from 'react';
import './ProjectItem.css';
import RightArrow from './slidesUtilities/RightArrow';
import LeftArrow from './slidesUtilities/LeftArrow';
import Slide from './slidesUtilities/Slide';


export default class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images,
            currentIndex: 0,
            translateValue: 0,
        }
    }

    goToPrevImg = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue +(this.slideWidth())
        }));
    }

    goToNextImg = () => {
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }


    render() {
        const images = this.state.images.map((img, i) => {
            return (
                <Slide key={i} img={img} />
            )
        })
        const techList = this.props.techList.map((el, key) => {
            return (
                <li className='li' key={key}>{el}</li>
            )
        })

        return (
            <div className='project-li'>
                <h2 className='project-header'>{this.props.name}</h2>
                <div className='text'><p>{this.props.description}</p></div>

                <div className='slider'>
                    <div className='slider-wrapper' style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>
                        {images}
                    </div>
                        <RightArrow forward={this.goToNextImg} />
                        {this.state.currentIndex===0 ? null : <LeftArrow back={this.goToPrevImg} />}
                </div>

                <div className='project-info'>
                    <div className='text'>
                        <h3>Tech used:</h3>
                        <ul className='tech-list'>
                            {techList}
                        </ul>
                    </div>
                    <div className='buttons'>
                        <a className='project-buttons' href={`${this.props.projectLink}`} target="_blank" rel="noopener noreferrer" activeClassName="link-active" className="link2" >DEMO</a>
                        {(this.props.githubLinkServer !== '') ? <a className='project-buttons' href={`${this.props.githubLinkClient}`} target="_blank" rel="noopener noreferrer" activeClassName="link-active" className="link2" >client side code</a> : <a  className='project-buttons' href={`${this.props.githubLinkClient}`}target="_blank" rel="noopener noreferrer" activeClassName="link-active" className="link2"  >Github code</a>}
                        {(this.props.githubLinkServer !== '') ? <a className='project-buttons' href={`${this.props.githubLinkServer}`} target="_blank" rel="noopener noreferrer" activeClassName="link-active" className="link2">server-side code</a> : null}
                    </div>
                </div>
            </div>
        )
    }

}