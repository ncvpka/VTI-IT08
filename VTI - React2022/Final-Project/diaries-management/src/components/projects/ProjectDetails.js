import React from 'react';
import { useParams } from "react-router-dom";

const ProjectDetails = (props) => {
    const SingleProject = () => {

        const { id } = useParams()
        const project = project.find((p) => p._id === (id))
    
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd August, 3am</div>
                </div>
            </div>
        </div>
    )
}
}

export default ProjectDetails;