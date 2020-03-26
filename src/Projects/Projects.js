import React from 'react';
import './Projects.css';
import projects from '../projectsData';
import ProjectItem from '../ProjectItem/ProjectItem';


export default function Projects(props) {
    const projectsList = projects.map((project, key) => {
        return (
            <li key={key} className={project.className}>
                <ProjectItem
                    key={key}
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    images={project.images}
                    projectLink= {project.projectLink}
                    githubLinkClient={project.githubLinkClient}
                    githubLinkServer={project.githubLinkServer}
                    techList={project.techList}
                />
            </li>
        )
    })
    return (
        <div className='projects' >
            <h1 className='projects-header'>
                P r o j e c t s
                </h1>
                <ul className='projects-list'>
                    {projectsList}
                </ul>
        </div>
    )
}