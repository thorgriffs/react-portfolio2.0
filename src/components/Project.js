import React from 'react'

const Project = ({ project }) => {
    return (
        <div className=" col-md-4">
            <div className="card m-3 p-2 text-center border border-dark">
                <a href={project.url} target="_blank" className="card-link">
                    <img className="card-img-top mx-auto" src={project.img} alt="Card image cap" />
                </a>          
                <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>            
                    <a href={project.repo} target="_blank" className="card-link" >GitHub</a>
                </div>
            </div>
        </div>      
    )
}

export default Project