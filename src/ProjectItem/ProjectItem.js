import React from 'react';
import './ProjectItem.css';


export default function ProjectItem(props) {
    const images = props.images.map(img => {
        return (
            <img src={`${img}`} alt='screen shot of the app' width='700' />
        )
    })
    const techList = props.techList.map(el => {
        return (
                <p>{el}</p>   
        )
    })
   
    return (
        <li>
            <h2>{props.name}</h2>
            <div className='img'>
               {images[0]}
            </div>
            <p>{props.description}</p>
            <a href={`${props.projectLink}`} >Visit {props.name}</a>
            {(props.githubLinkServer !== '')?  <p>To see :<a href={`${props.githubLinkClient}`}>client-side code</a></p> : <p>To see : <a href={`${props.githubLinkClient}`}>Github code</a></p>}
            {(props.githubLinkServer !== '')?  <p>To see :<a href={`${props.githubLinkServer}`}>server-side code</a></p> : null}
           
            <h3>Tech used:</h3>
                {techList}
        </li>
    )
}